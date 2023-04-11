import React, { useContext } from "react";
import { Container, ScreenTitle, Card, FlexCol } from "../utils/Utilities";
import data from "../data/others.json";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { AdminControlContext } from "../contexts/adminControlContext";

const Others = () => {
    const navigate = useNavigate();
    let stateAC = useContext(AdminControlContext);
    const nullFunc = () => {
        return null;
    };

    const logoutUser = () => {
        return signOut(auth).then(() => {
            navigate("/login");
        });
    };

    return (
        <>
            <Container className="!justify-start" gap="2rem" overflow="hidden">
                <ScreenTitle title="Others" className="pb-5" />
                {stateAC.adminData &&
                    data.map((items, index) => (
                        <FlexCol className="!items-start" key={index}>
                            <Card
                                width="30"
                                height="30"
                                title={items.title}
                                subtitle={items.subtitle}
                                icon={items.icon}
                                button={true}
                                onClick={() => {
                                    items.link
                                        ? window.open(items.link)
                                        : nullFunc();
                                    items.logout ? logoutUser() : nullFunc();
                                }}
                                disabled={
                                    items.logout ||
                                    stateAC.adminData[items.adminName]
                                        ? false
                                        : true
                                }
                            />
                        </FlexCol>
                    ))}
            </Container>
        </>
    );
};

export default Others;
