import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";

const AppRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoute