import { Footer, Navbar, Videos } from "../../components";
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
