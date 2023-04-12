import { useEffect, useState } from "react";
import { Container, ScreenTitle, User, FlexCol } from "../utils/Utilities";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import { db } from "../utils/firebase";
import { collection, query, limit, getDocs, where } from "@firebase/firestore";

const Users = () => {
    const navigate = useNavigate();
    let [users, setUsers] = useState([]);
    function fetchUsers() {
        let users = [];
        let q = query(collection(db, "users"), limit(10));
        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let a = doc.data();
                a["id"] = doc.id;
                users.push(a);
            });
            localStorage.setItem("users", JSON.stringify(users));
            setUsers(users);
        });
    }
    useEffect(() => {
        fetchUsers();
    }, []);
    const findUser = (name) => {
        name = name.toLowerCase().replace(" ", "_");
        const q = query(
            collection(db, "users"),
            where("display", ">=", name),
            where("display", "<", name + "\uf8ff"),
            limit(2)
        );
        getDocs(q).then((querySnapshot) => {
            const results = [];
            querySnapshot.forEach((doc) => {
                let a = doc.data();
                a["id"] = doc.id;
                results.push(a);
            });
            setUsers(results);
        });
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
                    {users.map((user, ind) => (
                        <User
                            name={user.display.split("@")[0].replace("_", " ")}
                            onClick={() => {
                                let u = JSON.parse(
                                    localStorage.getItem("users")
                                );
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
