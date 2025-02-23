import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./core/components/navbar.jsx";
import HomePage from "./features/home/pages/home.page.jsx";
import ContactPage from "./features/contact/pages/contact.page.jsx";
import Footer from "./core/components/footer.jsx";
import AboutPage from "./features/about/pages/about.page.jsx";
import ServicesPage from "./features/service/pages/service.page.jsx";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/services" element={<ServicesPage/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App
