import type {MetaFunction} from "remix";
import {Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration} from "remix";
// STYLES
import core from '~/styles/core.css'
import theme from '~/styles/theme.css'
import reset from '~/styles/reset.css'

export const meta: MetaFunction = () => {
    return {title: "Personal Journal"};
};

export const links: LinksFunction = () => {
    return [
        {rel: 'stylesheet', href: core},
        {rel: 'stylesheet', href: theme},
        {rel: 'stylesheet', href: reset},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;800&display=swap'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ]
}

export default function App() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <Meta/>
            <Links/>
            {typeof document === "undefined"
                ? "__STYLES__"
                : null}
        </head>
        <body>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        {process.env.NODE_ENV === "development" && <LiveReload/>}
        </body>
        </html>
    );
}
