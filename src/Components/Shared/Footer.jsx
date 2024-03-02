import Container from '../Shared/Container';

const Footer = () => {
  return (
    <footer className='bg-gray-900 pt-20'>
      <Container>
        {/* <!-- Grid --> */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <div>
            <a
              className='flex-none text-xl font-semibold text-white'
              href='#'
              aria-label='Brand'
            >
              UK Logistic
            </a>
          </div>

          <div>
            <h4 className='font-semibold text-gray-100'>Company</h4>

            <div className='mt-3 grid space-y-3'>
              <p>
                <a
                  className='inline-flex gap-x-2 text-gray-400 hover:text-gray-200'
                  href='#'
                >
                  About us
                </a>
              </p>
              <p>
                <a
                  className='inline-flex gap-x-2 text-gray-400 hover:text-gray-200'
                  href='#'
                >
                  Blog
                </a>
              </p>
              <p>
                <a
                  className='inline-flex gap-x-2 text-gray-400 hover:text-gray-200'
                  href='#'
                >
                  Customers
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className='font-semibold text-gray-100'>Stay up to date</h4>

            <form>
              <div className='mt-4 flex flex-col items-center gap-2 rounded-lg bg-white p-2 sm:flex-row sm:gap-3'>
                <div className='w-full'>
                  <label htmlFor='hero-input' className='sr-only'>
                    Search
                  </label>
                  <input
                    type='text'
                    id='hero-input'
                    name='hero-input'
                    className='block w-full rounded-lg border-transparent px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50'
                    placeholder='Enter your email'
                  />
                </div>
                <a
                  className='inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-blue-600 p-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 sm:w-auto'
                  href='#'
                >
                  Subscribe
                </a>
              </div>
            </form>
          </div>
        </div>

        <p className='py-10 text-center text-sm text-gray-400'>
          © 2024 UK Logistic. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
