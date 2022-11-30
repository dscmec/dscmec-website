import Landing from "../../components/Landing/Landing";
import Navbar from "../../components/Navbar/Navbar";
import Announcements from "../../components/Announcements/Announcements";
import Focus from "../../components/Focus/Focus";
import OurTeam from "../../components/OurTeam/OurTeam";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import CustomTitle from "../../utils/customTitle";
import EventHome from "../../components/EventHome/EventHome";
function LandingPage() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 1500);
  }, []);
  return spinner ? (
    <Loader />
  ) : (
    <>
    <CustomTitle title="Home"/>
      <Navbar />
      <Landing />
      <Announcements />
      <Focus />
      <EventHome/>
      <OurTeam />
      <ContactUs />
      <Footer />
    </>
  );
}
export default LandingPage;
