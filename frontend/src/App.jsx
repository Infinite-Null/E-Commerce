import './App.css';
import NavBar from "./Components/NavBar/Navbar";
import {Home} from "./Pages/Home";
import {Cart} from "./Pages/Cart";
import {Route, Routes} from "react-router-dom";
function App() {
   return<>
       <NavBar/>
       <Routes>
           <Route path="/" element={ <Home/> } />
           <Route path="cart" element={ <Cart/> } />
       </Routes>
   </>
}

export default App;
