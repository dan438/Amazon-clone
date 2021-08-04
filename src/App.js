import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Orders from "./Components/Orders/Orders";

const promise = loadStripe(
  "pk_test_51InWjOAZVY3GqRbDvRoA8Zbqht04pPw9ZMAPKlMBfFBR04qr3Hg5QDWgyTaG2pAN0Ed2ix2szfSLutF23fPqYMuH00QGLVAPGT"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
          <ProtectedRoute Component={Orders} />
          
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
            <Payment />
          </Elements>                 
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
