import Indexpage from './components/index';
import {Routes,Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Product from './components/Product';
import Report from './components/Report';
import Profile from './components/Profile';
import Editprofile from './components/Editprofile';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Productdetail from './components/Productdetail';
import EditProduct from './components/EditProduct';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
function App() {
 
  return (
    <div className="App">    
      <Routes>
        <Route path="/" element={ <Indexpage /> } />
        <Route path='/Register' element={ <Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route exact path="/resetPassword/:id" element={<ResetPassword />} />
        {/* Routes that needs a navbar will need to go as children of this Route component */}
       <Route path='/' element={<NavBar /> } > 
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/add-product" element={<Product />} />
        <Route exact path="/product-detail/:id" element={<Productdetail />} />
        <Route exact path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-update" element={<Editprofile />} />
        <Route path="/contact-us" element={<Report />} />  
       </Route>
      </Routes>
    
    </div>
  );
}

export default App;
