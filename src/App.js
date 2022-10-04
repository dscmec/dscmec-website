import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTop from "../src/utils/ScrollToTop";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import TeamsPage from "./pages/TeamsPage/TeamsPage";
import VideosPage from "./pages/VideosPage/VideosPage";
import ReactGA from 'react-ga';
import { useEffect } from "react";
const TRACKING_ID =process.env.REACT_APP_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  AOS.init();
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route path="/team" exact>
            <TeamsPage />
          </Route>
          <Route path="/events" exact>
            <EventsPage />
          </Route>
          <Route path="/videos" exact>
            <VideosPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
