import { useEffect, useState } from "react";
import { Container, ScreenTitle, User, FlexCol } from "../utils/Utilities";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import { db } from "../utils/firebase";
import { collection, query, limit, getDocs } from "@firebase/firestore";

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
    const findUser = (name) => {
        let users = JSON.parse(localStorage.getItem("users"));
        let user1 = users.filter((user) =>
            user.display.split("@")[0].replace("_", " ").startsWith(name)
        );
        let user2 = users.filter(
            (user) =>
                user.display.split("@")[0].replace("_", " ").includes(name) &&
                !user1.includes(user)
        );
        setUsers([...user1, ...user2]);
    };
    return (
        <>
            <Container className="!justify-start !gap-10">
                <ScreenTitle title="Users" />
                <SearchBar
                    onChange={(e) => {
                        findUser(e.target.value);
                    }}
                />
                <FlexCol className="gap-5">
                    {users.map((user,ind) => (
                        <User
                            name={user.display.split("@")[0].replace("_", " ")}
                            onClick={() => {
                                let u = JSON.parse(localStorage.getItem("users"));
                                navigate("/manual", {
                                    state: { ind: user.id, users: u },
                                });
                            }}
                            key={user.id}
                        />
                    ))}
                </FlexCol>
            </Container>
        </>
    );
};

export default Users;
