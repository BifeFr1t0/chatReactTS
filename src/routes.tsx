import { Routes as RoutesRouter, Route } from 'react-router'
import Login from "./pages/Login"
import Home from "./pages/Home"

function Routes() {
    return (
        
            <RoutesRouter>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            </RoutesRouter>
        
    )
}

export default Routes
