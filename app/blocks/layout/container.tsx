import {Container} from "@mui/material";
import {PropsWithChildren, VoidFunctionComponent} from "react";

const MainContainer: VoidFunctionComponent<PropsWithChildren<{}>> = ({children}) => {
    return (
        <Container maxWidth="lg" sx={{paddingTop: '1em'}}>
            {children}
        </Container>
    )
}

export default MainContainer;