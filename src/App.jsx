import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./core/components/navbar.jsx";
import HomePage from "./features/home/pages/home.page.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default App
