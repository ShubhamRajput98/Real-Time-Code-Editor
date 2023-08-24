import { Route, Routes } from "react-router-dom"
import { Home } from "../../Screens/Home/Home"
import { Dashboard } from "../../Screens/Dashboard/Dashboard"
import { Signin } from "../../Screens/Auth/Signin"
import { Signup } from "../../Screens/Auth/Signup"
import { PageNotFound } from "../../Shared/404page/PageNotFound"

export const MainRoute = () => {
    return (
        <Routes>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<Home />}>
                <Route path="/" element={< Dashboard/>}/>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}
