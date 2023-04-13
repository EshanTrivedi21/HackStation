const fs = require("fs");
const csv = require("fast-csv");
var admin = require("firebase-admin");
require("dotenv").config();
var serviceAccount = require("./admin.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://hackerstellar-e45b0-default-rtdb.firebaseio.com",
});

const auth = admin.auth();
const db  = admin.firestore();
function createNormalUser() {
    const data = [];
    fs.createReadStream("./data.csv")
        .pipe(csv.parse({ headers: true }))
        .on("error", (error) => console.error(error))
        .on("data", (row) => data.push(row))
        .on("end", () => {
            for (let i = 0; i < data.length; i++) {
                let email = data[i]["Email"].trim();
                let firstName = data[i]["First Name"].toLowerCase().trim();
                let lastName = data[i]["Last Name"].toLowerCase().trim();
                let password = data[i]["Team Name"]
                    .replace(/ /g, "_")
                    .toLowerCase();
                let teamName = data[i]["Team Name"].trim();
                let displayName = firstName + "_" + lastName + "@" + teamName;
                console.log(password, displayName, email);
                auth.createUser({
                    email: email,
                    emailVerified: true,
                    password: password,
                    displayName: displayName,
                    disabled: false,
                }).then((userRecord) => {
                    console.log("Successfully created new user:", userRecord.uid);
                    db.collection("users").doc(userRecord.uid).set({
                        "display": displayName,
                        "check-in": false,
                        "lunch1": false,
                        "lunch2": false,
                        "snacks1": false,
                        "snacks2": false,
                        "dinner": false,
                        "midnight-snacks": false,
                        "breakfast": false,
                    }).then(() => {
                        console.log("Document successfully written!");
                    }).catch((error) => {
                        console.error("Error writing document: ", error);
                    });
                });
            }
        });
}

function createAdmin() {
    auth.createUser({
        email: process.env.ADMIN_EMAIL,
        emailVerified: true,
        password: process.env.ADMIN_PASSWORD,
        displayName: "csi_admin@csi-kjsce",
        disabled: false,
    }).then((userRecord) => {
        console.log("Successfully created new user:", userRecord.uid);
    });
}
function updateAdminPassword() {
    auth.getUserByEmail(process.env.ADMIN_EMAIL).then((userRecord) => {
        auth.updateUser(userRecord.uid, {
            password: process.env.ADMIN_PASSWORD,
        }).then(() => {
            console.log("Successfully updated user");
        }).catch((error) => {
            console.log("Error updating user:", error);
        });
    });
}
createNormalUser();
