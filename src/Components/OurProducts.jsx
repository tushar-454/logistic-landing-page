import { useEffect, useState } from 'react';
import Container from './Shared/Container';

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('./products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className='bg-[#f2f2f2] p-4 py-10'>
      <Container>
        <h1 className='text-4xl font-bold'>Our Products</h1>
        {/* products wrapper  */}
        <div className='mt-10 grid grid-cols-1 content-center items-center justify-between gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {products?.map((product, index) => (
            <div key={index}>
              <img src={product.image} alt={product.name} className='w-full' />
              <p className='font-xl -mt-5 rounded-bl-2xl rounded-br-2xl bg-[#001F3F] p-4 pt-10 text-center font-medium text-white'>
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurProducts;
