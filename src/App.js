import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "../src/utils/ScrollToTop";
import Team from "./pages/Team/Team";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import "./App.css";
import Announcements from "./pages/Announcements/Announcements";
import Focus from "./pages/Focus/Focus";
import OurTeam from "./pages/OurTeam/OurTeam";
import Events from "./pages/Events/Events";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Videos from "./pages/Videos/Videos";
function App() {
  AOS.init();
  return (
    <Router>
      <div className="App">
      
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/team" exact>
            <Team />
          </Route>
          <Route path="/events" exact>
            <Events />
          </Route>
          <Route path="/videos" exact>
            <Videos />
          </Route>
          <Route path="/">
            <Landing />
            <Announcements />
            <Focus />
            <OurTeam />
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
