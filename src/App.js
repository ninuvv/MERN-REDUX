
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";
import Footer from "./Components/Footer";



function App() {
  return ( 
    <div className="App">
      <Router> 
        
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
<Footer/>
       
      </Router>
    </div>
  );
}

export default App;
