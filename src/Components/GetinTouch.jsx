import Container from './Shared/Container';

const GetinTouch = () => {
  return (
    <div className='my-20'>
      <Container>
        <div className='flex items-center justify-between rounded-full bg-[#001F3F] p-5 text-white'>
          <div className='ml-8 space-y-2'>
            <h1 className='text-lg font-bold'>Get in Touch</h1>
            <p>We&apos;re excited to hear from you.</p>
          </div>
          <a
            href='/'
            className='rounded-full bg-slate-100 p-3 px-7 font-bold text-[#001F3F]'
          >
            Contact US
          </a>
        </div>
      </Container>
    </div>
  );
};

export default GetinTouch;
