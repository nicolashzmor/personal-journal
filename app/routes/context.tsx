import type {LoaderFunction} from "remix";
import {Outlet, redirect} from "remix";
import Header from "../blocks/layout/header";
import MainContainer from "../blocks/layout/container";


export const loader: LoaderFunction = ({params}) => {
    if (!params.context) {
        return redirect('/dashboard')
    }
    return null;
}

export default function Context() {
    return (
        <>
            <Header/>
            <MainContainer>
                <Outlet/>
            </MainContainer>
        </>
    )
}