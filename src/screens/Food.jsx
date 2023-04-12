import {useContext} from "react";
import { Container, ScreenTitle, Card, FlexCol } from "../utils/Utilities";
import data from "../data/food.json";
import { useNavigate } from "react-router-dom";
import { AdminControlContext } from "../contexts/adminControlContext";

const Food = () => {
    const navigate = useNavigate();
    let stateAC = useContext(AdminControlContext);
    return (
        <>
            <Container className="!justify-start" gap="2.5rem">
                <ScreenTitle title="Food" />
                <FlexCol className="gap-5">
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            width="30"
                            height="30"
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon}
                            button={true}
                            disabled={!stateAC.adminData[item.adminName]}
                            onClick={() => {
                                navigate("/qr");
                            }}
                        />
                    ))}
                </FlexCol>
            </Container>
        </>
    );
};

export default Food;
