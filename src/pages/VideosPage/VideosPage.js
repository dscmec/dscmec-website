import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Videos from "../../components/Videos/Videos";
import CustomTitle from "../../utils/customTitle";
function VideosPage() {
  return (
    <>
      <CustomTitle title="Videos" />
      <Navbar />
      <Videos />
      <Footer />
    </>
  );
}
export default VideosPage;
