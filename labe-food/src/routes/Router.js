import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../pages/Home/Home';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import RestaurantDetails from '../pages/RestaurantDetails/RestaurantDetails';
import Search from '../pages/Search/Search';
import AddAddress from '../pages/AddAddress/AddAddress';
import EditAddress from '../pages/EditAddress/EditAddress';
import Cart from '../pages/Cart/Cart';
import EditProfile from '../pages/EditProfile/EditProfile';
import Error from '../pages/Error/Error';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={ <Home />} />

                <Route path='/signup' element={<SignUp />} />

                <Route path='/login' element={<Login />} />

                <Route path='/profile' element={<Profile /> } />

                <Route path='/restaurant/:id' element={<RestaurantDetails />} />

                <Route path='/search' element={<Search />} />

                <Route path='/address' element={<AddAddress />} />

                <Route path='/profile/edit/address' element={<EditAddress />} />

                <Route path='/cart' element={<Cart />} />

                <Route path='/profile/edit/user' element={<EditProfile />} />

                <Route path={'*'} element={<Error /> } />


            </Routes>
        </BrowserRouter>
    )
}