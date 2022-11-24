import { Route, Switch, BrowserRouter } from "react-router-dom";
import ScrollToTop from "../src/utils/ScrollToTop";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import TeamsPage from "./pages/TeamsPage/TeamsPage";
import VideosPage from "./pages/VideosPage/VideosPage";
function Routes() {
  return (
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
  );
}
function App() {
  AOS.init();
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
