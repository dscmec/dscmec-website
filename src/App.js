import { Route, BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import ScrollToTop from "../src/utils/ScrollToTop";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import TeamsPage from "./pages/TeamsPage/TeamsPage";
import VideosPage from "./pages/VideosPage/VideosPage";
import { useEffect } from "react";
function App() {
  AOS.init();
  const location = useLocation();

  useEffect(() => {
      window.gtag('event', 'page_view', {
          page_path: location.pathname + location.search,
          page_location: window.location.href
      })
  }, [location]);
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
