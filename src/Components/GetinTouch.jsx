import Container from './Shared/Container';

const GetinTouch = () => {
  return (
    <div className='my-20'>
      <Container>
        <div className='flex flex-col items-start justify-between gap-10 rounded-2xl bg-[#001F3F] p-5 text-white sm:flex-row sm:items-center lg:rounded-full'>
          <div className='ml-8 space-y-2'>
            <h1 className='text-lg font-bold'>Get in Touch</h1>
            <p>We&apos;re excited to hear from you.</p>
          </div>
          <a
            href='/'
            className='ml-8 rounded-full bg-slate-100 p-3 px-7 font-bold text-[#001F3F] sm:ml-0'
          >
            Contact US
          </a>
        </div>
      </Container>
    </div>
  );
};

export default GetinTouch;
