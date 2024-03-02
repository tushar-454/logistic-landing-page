import commit from '../Assets/commitment.png';
import mission from '../Assets/mission.png';
import Container from './Shared/Container';

const OurMission = () => {
  return (
    <div className='my-20'>
      <Container>
        {/* wrapper  */}
        <div className='space-y-20'>
          {/* mission  */}
          <div className='flex flex-col items-end justify-between gap-10 lg:flex-row'>
            {/* image  */}
            <div className='w-full lg:w-3/5'>
              <img src={mission} alt='our mission image' />
            </div>
            <div className='w-full lg:w-2/5'>
              <h1 className='text-4xl font-bold'>Our Mission </h1>
              <p className='mt-10 text-lg text-[#474747] lg:mt-20'>
                Our mission is to empower businesses of all sizes to achieve
                seamless, agile, and cost-effective supply chain operations. We
                believe that a well-optimized supply chain is the backbone of
                successful businesses, enabling them to deliver exceptional
                products and services to customers around the world.
              </p>
            </div>
          </div>
          {/* commitment  */}
          <div className='flex flex-col-reverse items-end justify-between gap-10 lg:flex-row'>
            <div className='w-full lg:w-3/5'>
              <h1 className='text-4xl font-bold'>
                Our Commitment to <br /> Sustainability
              </h1>
              <p className='mt-10 text-lg text-[#474747] lg:mt-20'>
                We are committed to sustainable practices that contribute to a
                better future. By optimizing supply chains, reducing waste, and
                promoting eco-friendly initiatives, we play a role in building a
                more environmentally conscious world.
              </p>
            </div>
            {/* image  */}
            <div className='w-full lg:w-2/5'>
              <img src={commit} alt='our mission image' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurMission;
