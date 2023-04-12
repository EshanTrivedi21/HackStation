import { useContext, useEffect, useState } from "react";
import { Container, ScreenTitle, FlexCol, Tkt } from "../utils/Utilities";
import { Animation } from "../components/exports";
import { useLocation, useNavigate } from "react-router-dom";
import { UserDataContext } from "../contexts/userDataContext";

const Ticket = () => {
    let location = useLocation();
    let navigate = useNavigate();
    let [entity, setEntity] = useState(null);
    let stateUD = useContext(UserDataContext);
    useEffect(() => {
        if (!location.state) {
            navigate("/food");
        } else {
            setEntity(location.state.entity);
        }
    });
    return (
        <>
            <Container minHeight="auto" gap="4rem" overflow="hidden">
                <ScreenTitle title="Ticket" />
                <FlexCol className="!w-auto">
                    <Animation size={300} />
                </FlexCol>
                {stateUD.userData && (
                    <FlexCol>
                        <Tkt
                            user={stateUD.userData.display
                                .split("@")[0]
                                .replace("_", " ")}
                            team={stateUD.userData.display.split("@")[1]}
                            entity={entity}
                        />
                    </FlexCol>
                )}
            </Container>
        </>
    );
};

export default Ticket;
