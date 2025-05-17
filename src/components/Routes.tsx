import { createBrowserRouter } from "react-router-dom";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
])

export default router