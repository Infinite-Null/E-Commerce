import './App.css';
import NavBar from "./Components/NavBar/Navbar";
import {Home} from "./Pages/Home";
import {Cart} from "./Pages/Cart";
import {Route, Routes} from "react-router-dom";
import {Orders} from "./Pages/Orders";
import {ProductDetails} from "./Pages/ProductDetails";
import {AllProductWithCategory} from "./Pages/AllProductWithCategory";
function App() {
   return<>
       <NavBar/>
       <Routes>
           <Route path="/" element={ <Home/> } />
           <Route path="cart" element={ <Cart/> } />
           <Route path="orders" element={ <Orders/> } />
           <Route path="product/:id" element={ <ProductDetails/> } />
           <Route path="/:id" element={<AllProductWithCategory/>}/>
       </Routes>
   </>
}

export default App;
