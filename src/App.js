import Landing from "./views/Landing";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Landing />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
