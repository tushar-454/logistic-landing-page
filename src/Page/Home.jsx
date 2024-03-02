import Banner from '../Components/Banner';
import GetinTouch from '../Components/GetinTouch';
import OurMission from '../Components/OurMission';
import OurProducts from '../Components/OurProducts';
import OurServices from '../Components/OurServices';
import Paralax from '../Components/Paralax';
import Testimonials from '../Components/Testimonials';
import WhyLogistic from '../Components/WhyLogistic';

const Home = () => {
  return (
    <main>
      <Banner />
      <WhyLogistic />
      <OurServices />
      <OurMission />
      <OurProducts />
      <GetinTouch />
      <Testimonials />
      <Paralax />
    </main>
  );
};

export default Home;
