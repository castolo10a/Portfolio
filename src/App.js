import Landing from "./views/Landing";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Landing />
      <Toaster position="bottom-right" reverseOrder={false} />
      <Footer />
    </div>
  );
}

export default App;
