import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./core/components/navbar.jsx";
import HomePage from "./features/home/pages/home.page.jsx";
import AboutPage from "./features/about/pages/about.page.jsx";
import ContactPage from "./features/contact/pages/contact.page.jsx";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
        </Router>
    )
}

export default App
