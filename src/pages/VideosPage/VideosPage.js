import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Videos from "../../components/Videos/Videos";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
function VideosPage() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1500);
  }, []);
  return (spinner ? (
    <Loader/>
  ) : (<>
      <Navbar />
      <Videos/>
      <Footer />
    </>)
  );
}
export default VideosPage;
