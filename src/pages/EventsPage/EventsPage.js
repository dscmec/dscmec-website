
import { Events, Footer, Navbar } from "../../components";
import CustomTitle from "../../utils/customTitle";
function EventsPage() {
  return (
    <>
      <CustomTitle title="Events" />
      <Navbar />
      <Events />
      <Footer />
    </>
  );
}
export default EventsPage;
