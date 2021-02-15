import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Team from "./pages/Team/Team";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import "./App.css";
import Announcements from "./pages/Announcements/Announcements";
import Focus from "./pages/Focus/Focus";
import OurTeam from "./pages/OurTeam/OurTeam";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/">
            <Landing />
            <Announcements />
            <Focus />
            <OurTeam />
            <ContactUs />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
