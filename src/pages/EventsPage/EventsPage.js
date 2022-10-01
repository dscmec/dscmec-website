import Navbar from "../../components/Navbar/Navbar";
import Events from "../../components/Events/Events";
import Footer from "../../components/Footer/Footer";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
function EventsPage() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1500);
  }, []);
  return spinner ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <Events />
      <Footer />
    </>
  );
}
export default EventsPage;
