import React from "react";
import { Container, ScreenTitle, Card, FlexCol } from "../utils/Utilities";
import data from "../data/other.json";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Other = () => {
    const navigate = useNavigate();

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
            <Container className="!justify-start" gap="2rem">
                <ScreenTitle title="Others" className="pb-5" />
                {data.map((items, index) => {
                    return (
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
                            />
                        </FlexCol>
                    );
                })}
            </Container>
        </>
    );
};

export default Other;
