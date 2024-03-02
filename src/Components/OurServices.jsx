import { useEffect, useState } from 'react';
import Container from './Shared/Container';

const OurServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Container>
        <h1 className='text-3xl font-bold'>Our Services</h1>
        {/* Services wrapper  */}
        <div className='my-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {services?.map((service, index) => (
            <div key={index} className='relative rounded-lg bg-gray-100 p-8'>
              <div className='mb-10 flex items-center justify-between'>
                <h1 className='text-3xl font-medium'>{service.service}</h1>
                <img
                  src={service.icon}
                  alt={service.service}
                  className='w-20'
                />
              </div>
              <p className='text-gray-500'>{service.details}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurServices;
