import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import Chat from "../pages/Chat";

const AppRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/chat" element={<Chat/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoute