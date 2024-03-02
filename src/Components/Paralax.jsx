import Container from './Shared/Container';
const Paralax = () => {
  return (
    <div className='my-20 bg-[url("../src/Assets/bg.png")] bg-cover bg-fixed'>
      <Container>
        <div className='mx-auto h-full w-full space-y-4 py-20 text-white md:w-[768px]'>
          <h1 className='text-center text-3xl'>
            Join Us in Shaping the Future
          </h1>
          <p className='text-center'>
            Partner with us and join a community of businesses that are
            embracing the power of efficient
          </p>
          <p className='text-center'>
            supply chain management. Let&apos;s collaborate to optimize your
            operations, enhance customer satisfaction, and unlock new
            opportunities for growth.
          </p>
          <p className='text-center'>
            Discover the potential of a well-orchestrated supply chain with us.
            Contact us today to learn more about our services and how we can
            transform your business.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Paralax;
