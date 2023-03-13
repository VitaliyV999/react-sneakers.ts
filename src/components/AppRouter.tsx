import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "../pages/SignIn";
import Shop from "../pages/Shop";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<SignIn />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='' element={<SignIn />} />
                <Route path='*' element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;