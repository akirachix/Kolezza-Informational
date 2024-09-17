import FaQs from "./components/Faqs";
import Landingpage from './components/Landingpage';
import SawaTokInfo from "./components/About";
import HowSawaToWorks from "./components/Sawatok";
import Testimonials from "./components/Testimonials";



export default function Home() {
  return (
    <div>
      <Landingpage />
      <SawaTokInfo/>
      <HowSawaToWorks/>
      <Testimonials/>
      <FaQs/>
    </div>
  );
}

