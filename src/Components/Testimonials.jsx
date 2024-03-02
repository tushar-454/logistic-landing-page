import { useEffect, useState } from 'react';
import Container from './Shared/Container';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('./testimonials.json')
      .then((response) => response.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div>
      <Container>
        <h1 className='text-center text-4xl font-bold'>Client Testimonials</h1>
        {/* Client Testimonials wrapper  */}
        <div className='my-24 grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5'>
          {testimonials?.map((testimonial, index) => (
            <div key={index} className='relative flex flex-col items-center'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='absolute -top-12 w-24'
              />
              <div className='flex-grow rounded-lg bg-gray-100 p-8 pt-20 text-center'>
                <h1 className='mb-3 text-xl font-semibold'>
                  {testimonial.name}
                </h1>
                <p>{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
