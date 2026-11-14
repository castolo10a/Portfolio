import Landing from "./views/Landing";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Landing />
      <Footer />
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
