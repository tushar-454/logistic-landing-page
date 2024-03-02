import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
import Header from '../Components/Shared/Header';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
