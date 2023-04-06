const fs = require("fs");
const csv = require("fast-csv");
var admin = require("firebase-admin");

var serviceAccount = require("./admin.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://hackerstellar-e45b0-default-rtdb.firebaseio.com",
});

const auth = admin.auth();

function createNormalUser() {
    const data = [];
    fs.createReadStream("./data.csv")
        .pipe(csv.parse({ headers: true }))
        .on("error", (error) => console.error(error))
        .on("data", (row) => data.push(row))
        .on("end", () => {
            for (let i = 0; i < data.length; i++) {
                let email = data[i].email.trim();
                let firstName = data[i].first_name.toLowerCase();
                let lastName = data[i].last_name.toLowerCase();
                let password = data[i].team_name
                    .replace(/ /g, "_")
                    .toLowerCase();
                let teamName = data[i].team_name.trim();
                let displayName = firstName + "_" + lastName + "@" + teamName;
                console.log(password, displayName, email);
                auth.createUser({
                    email: email,
                    emailVerified: true,
                    password: password,
                    displayName: displayName,
                    disabled: false,
                });
            }
        });
}

function createAdmin(){
    auth.createUser({
        email: "csi-kjsce@somaiya.edu",
        emailVerified: true,
        password: "csi@2023",
        displayName: "csi_admin@csi-kjsce",
        disabled: false,
    }).then((userRecord) => {
        console.log("Successfully created new user:", userRecord.uid);
    });
}
createAdmin();