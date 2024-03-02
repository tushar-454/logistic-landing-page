import banner from '../Assets/banner.png';
import Container from './Shared/Container';

const Banner = () => {
  return (
    <div className='my-4'>
      <Container>
        {/* banner wrapper  */}
        <div className='flex flex-col gap-5 lg:flex-row'>
          {/* banner text content  */}
          <div className='w-full space-y-4 rounded-2xl bg-gray-100 p-6 lg:w-1/2'>
            <h1 className='text-4xl font-bold'>LOGISTICS</h1>
            <p className='py-2 font-semibold'>
              Seamless Logistics, Global Solutions
            </p>
            <p className='text-lg text-[#474747B2]'>
              Powering Global Commerce: Our robust supply chain solutions
              streamline processes, ensuring your products reach every corner of
              the world efficiently. Powering Global Commerce: Our robust supply
              chain solutions streamline processes, ensuring your products reach
              every corner of the world efficiently.
            </p>
          </div>
          {/* banner image  */}
          <div className='w-full lg:w-1/2'>
            <img src={banner} alt='banner' className='w-full' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
