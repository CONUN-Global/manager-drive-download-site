import HeadBar from "./components/HeadBar";
import Downloads from "./pages/Downloads";
import Drive from "./pages/Drive";
import DrivePros from "./pages/DrivePros";
import Footer from "./pages/Footer";
import Intro from "./pages/Intro";
import Manager from "./pages/Manager";
import ManagerPros from "./pages/ManagerPros";

function App() {
    return (
      <>
      <HeadBar/>
    <main>
      <Intro/>
      <Manager/>
      <ManagerPros/>
      <Drive/>
      <DrivePros/>
      <Downloads/>
      <Footer/>
    </main>
    </>
      );
}

export default App;
