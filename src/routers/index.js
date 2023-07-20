import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/Home";
import { About } from "../pages/about/About";
import { AllProducts } from "../pages/shop/AllProducts";
import { NewArrivals } from "../pages/shop/NewArrivals";
import { PopularItems } from "../pages/shop/PopularItems";
import { Contact } from "../pages/contact/Contact";
import { Connexion } from "../pages/auth/Connexion";
import { Inscription } from "../pages/auth/Inscription";
import { Profile } from "../pages/account/profile";

const Routers = () => {
    return (
        <Fragment>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />

                    <Route path="/shop/all-products" element={<AllProducts />} />
                    <Route path="/shop/popular-items" element={<PopularItems />} />
                    <Route path="/shop/new-arrivals" element={<NewArrivals />} />

                    <Route path="/contact" element={<Contact />} />
                    <Route path="/auth/connexion" element={<Connexion />} />
                    <Route path="/auth/inscription" element={<Inscription />} />
                    <Route path="/account/profile" element={<Profile />} />

                </Route>
            </Routes>
        </Fragment>
    )
}

export default Routers;