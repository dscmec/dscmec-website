import "./Loader.css";
import { GridLoader } from "react-spinners";
function Loader() {
  return (
    <div className="loader_container">
      <GridLoader size={20} color="#3667d6" />
    </div>
  );
}
export default Loader;
