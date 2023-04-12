import { useEffect, useState } from "react";
import { Container, ScreenTitle, User, FlexCol } from "../utils/Utilities";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import { db } from "../utils/firebase";
import { getDocs, collection } from "@firebase/firestore";

const Users = () => {
    const navigate = useNavigate();
    let [users, setUsers] = useState([]);
    function fetchUsers() {
        let users = [];
        getDocs(collection(db, "users")).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                let a = doc.data();
                a["id"] = doc.id;
                users.push(a);
            });
            console.log(users);
            localStorage.setItem("users", JSON.stringify(users));
            setUsers(users);
        });
    }
    useEffect(() => {
        if (!localStorage.getItem("users")) fetchUsers();
        else setUsers(JSON.parse(localStorage.getItem("users")));
    }, []);
    return (
        <>
            <Container className="!justify-start !gap-10">
                <ScreenTitle title="Users" />
                <SearchBar />
                <FlexCol className="gap-5">
                    {users.map((user) => (
                        <User
                            name={user.display.split("@")[0].replace("_", " ")}
                            onClick={() =>
                                navigate("/manual", { state: { user, users } })
                            }
                            key={user.id}
                        />
                    ))}
                </FlexCol>
            </Container>
        </>
    );
};

export default Users;
