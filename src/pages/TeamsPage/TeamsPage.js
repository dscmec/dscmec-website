import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Team from "../../components/Team/Team";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
function TeamsPage() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1500);
  }, []);
  return (spinner ? (
    <Loader/>
  ) : (<><Navbar />
      <Team/>
      <Footer />
    </>)
  );
}
export default TeamsPage;
