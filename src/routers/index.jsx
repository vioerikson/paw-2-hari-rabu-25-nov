import { createBrowserRouter } from "react-router";
import PublicLayout from "../layouts/PublicLayout";

const router = createBrowserRouter([
    {
    path: '/',
    Component: PublicLayout,
    children : [
        {
            index : true,
            lazy : async() => {
                const module = await import("../pages/home/home")

                return{
                    Component: module.default
                }
            }
        },
        {
            path: '/about',
            lazy : async() => {
                const module = await import("../pages/about/about")

                return{
                    Component: module.default
                }
            }
        },
        {
            path : '/Register',
            lazy : async() => {
                const module = await import("../pages/register/Register")

                return{
                    Component: module.default
                }
            }
        },
    ]
  },
  
])

export default router