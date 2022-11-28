import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Team from "../../components/Team/Team";
import CustomTitle from "../../utils/customTitle";
function TeamsPage() {
  return (
    <>
      <CustomTitle title="Team" />
      <Navbar />
      <Team />
      <Footer />
    </>
  );
}
export default TeamsPage;
