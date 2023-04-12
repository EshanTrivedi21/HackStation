import { Container, ScreenTitle, State, FlexCol } from "../utils/Utilities";
import data from "../data/controls.json";
import { useContext } from "react";
import { AdminControlContext } from "../contexts/adminControlContext";

const Controls = () => {
    let stateAC = useContext(AdminControlContext)
    return (
        <>
            <Container className="!justify-start" gap="2.5rem">
                <ScreenTitle title="Controls" />
                <FlexCol className="gap-5">
                    {stateAC.adminData && data.map((item, index) => (
                        <State
                            key={index}
                            width="30"
                            height="30"
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon}
                            button={true}
                            value={item.value}
                            check={stateAC.adminData[item.value]}
                        />
                    ))}
                </FlexCol>
            </Container>
        </>
    );
};

export default Controls;
