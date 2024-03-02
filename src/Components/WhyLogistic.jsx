import whychoose from '../DB/whychoose';
import Container from './Shared/Container';
const WhyLogistic = () => {
  return (
    <div className='my-20'>
      <Container>
        <h1 className='mb-10 text-center text-3xl font-bold'>Why Logistics?</h1>
        {/* content wrapper  */}
        <div className='my-5 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3'>
          {whychoose?.map((item, index) => (
            <div key={index}>
              <div className='flex items-center justify-center rounded-full'>
                <img
                  src={item.icon}
                  alt={item.cause}
                  className='h-16 w-16 rounded-full bg-[#001F3F] object-contain p-4'
                />
              </div>
              <p className='my-2 text-center text-lg font-semibold text-[#000000B2]'>
                {item.cause}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyLogistic;
