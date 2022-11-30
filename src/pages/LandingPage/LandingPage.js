import { useEffect, useState } from "react";
import {
  Announcements,
  ContactUs,
  EventHome,
  Focus,
  Footer,
  Landing,
  Loader,
  Navbar,
  OurTeam,
} from "../../components";
import CustomTitle from "../../utils/customTitle";
function LandingPage() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 1500);
  }, []);
  return spinner ? (
    <Loader />
  ) : (
    <>
      <CustomTitle title="Home" />
      <Navbar />
      <Landing />
      <Announcements />
      <Focus />
      <EventHome />
      <OurTeam />
      <ContactUs />
      <Footer />
    </>
  );
}
export default LandingPage;
