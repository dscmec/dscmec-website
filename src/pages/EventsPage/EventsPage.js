import Navbar from "../../components/Navbar/Navbar";
import Events from "../../components/Events/Events";
import Footer from "../../components/Footer/Footer";
import CustomTitle from "../../utils/customTitle";
function EventsPage() {
  return (
    <>
    <CustomTitle title="Events"/>
      <Navbar />
      <Events />
      <Footer />
    </>
  );
}
export default EventsPage;
