import './App.css';
import {   Routes , Route } from 'react-router-dom';
import Home01 from "./view/home";


function App() {

    return (
        <Routes >
                <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path="/" element={<Home01 />} />
      </Routes>
    );
}

export default App;
