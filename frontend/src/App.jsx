import './App.css';
import NavBar from "./Components/NavBar/Navbar";
import {Home} from "./Pages/Home";
import {Cart} from "./Pages/Cart";
import {Route, Routes} from "react-router-dom";
import {Orders} from "./Pages/Orders";
import {ProductDetails} from "./Pages/ProductDetails";
import {AllProductWithCategory} from "./Pages/AllProductWithCategory";
import {ToastContainer} from "react-toastify";
import {ContactUs} from "./Pages/ContactUs";
import {AboutUser} from "./Pages/AboutUser";
import {HelpandFeedback} from "./Pages/HelpandFeedback";
function App() {
   return<>
       <NavBar/>
       <Routes>
           <Route path="/" element={ <Home/> } />
           <Route path="/Help" element={ <HelpandFeedback/> } />
           <Route path="Profile" element={ <AboutUser/> } />
           <Route path="AboutUs" element={ <ContactUs/> } />
           <Route path="cart" element={ <Cart/> } />
           <Route path="orders" element={ <Orders/> } />
           <Route path="product/:id" element={ <ProductDetails/> } />
           <Route path="/:id" element={<AllProductWithCategory/>}/>
       </Routes>
       <ToastContainer position="bottom-center" theme="colored" icon={false} limit={2} toastStyle={{
           backgroundColor:"cadetblue",
       }}/>
   </>
}

export default App;
