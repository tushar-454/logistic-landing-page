import Banner from '../Components/Banner';
import OurMission from '../Components/OurMission';
import OurProducts from '../Components/OurProducts';
import OurServices from '../Components/OurServices';
import WhyLogistic from '../Components/WhyLogistic';

const Home = () => {
  return (
    <main>
      <Banner />
      <WhyLogistic />
      <OurServices />
      <OurMission />
      <OurProducts />
    </main>
  );
};

export default Home;
