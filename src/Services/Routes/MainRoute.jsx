import { Route, Routes } from "react-router-dom"
import { Home } from "../../Screens/Home/Home"
import { Dashboard } from "../../Screens/Dashboard/Dashboard"
import { Signin } from "../../Screens/Auth/Signin"
import { Signup } from "../../Screens/Auth/Signup"
import { PageNotFound } from "../../Shared/404page/PageNotFound"
import { WebSocket } from "../../Shared/WebShocket/WebShocket"
import { VideoCalling } from "../../Shared/VideoCalling/VideoCalling"

export const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route element={<Home />}>
                <Route path="/dashboard" element={< Dashboard/>}/>
                <Route path="/websocket" element={< WebSocket/>}/>
                <Route path="/videocalling" element={< VideoCalling/>}/>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}
