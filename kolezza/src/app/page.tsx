import FaQs from "./components/Faqs";
import Landingpage from './components/Landingpage';
import SawaTokInfo from "./components/About";



export default function Home() {
  return (
    <div>
      <Landingpage />
      <SawaTokInfo/>
      <FaQs/>
    </div>
  );
}

