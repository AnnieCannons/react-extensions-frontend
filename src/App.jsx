import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home.jsx';
// import About from './pages/About';

function App() {
  
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
