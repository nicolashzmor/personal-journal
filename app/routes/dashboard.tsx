import {Outlet} from "remix";
import Header from '../blocks/layout/header';
import MainContainer from "../blocks/layout/container";

export default function Dashboard() {
    return (
        <>
            <Header/>
            <MainContainer>
                <Outlet/>
            </MainContainer>
        </>
    )
}