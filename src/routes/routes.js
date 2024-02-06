
import HomePrincipal from "../components/layout/homePrincipal";


const routes = [
   {
    spaceName: "common",
    secure: false,
    routes: [
        {
            component: <HomePrincipal />,
            path: '/',
        },
    ]
   }
];

export default routes;