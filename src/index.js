import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productContext";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider
    domain="dev-otro3djslbof6hku.us.auth0.com"
    clientId="D5akcMI2pEpYehHeD2DpvpQ5CKDam5OK"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
        <FilterContextProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </FilterContextProvider>
    </AppProvider>
    </Auth0Provider>
);

reportWebVitals();
