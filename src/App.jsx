
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/Home';
import Navbar from './assets/Navbar';
import About from './assets/About';
import Innovations from './assets/Innovations';
import Careers from './assets/Careers';
import Arc from './assets/Arc';
    
function App() {
        return(
            <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Innovations" element={<Innovations />} />
                    <Route path="/Careers" element={<Careers />} />
                    <Route path="/Arc" element={<Arc />} />
                </Routes> 
            </BrowserRouter>
        );
    }


export default App
