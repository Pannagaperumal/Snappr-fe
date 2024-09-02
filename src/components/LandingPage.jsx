import { SquareArrowRightIcon } from 'lucide-react';
import '../index.css';
import { Link, Navigate } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div id='Land' className="relative h-screen w-screen flex justify-start items-center">
      {/* Background Image with Filters */}
      <div className="absolute inset-0 bg-center filter" style={{ backgroundImage: "url('/wallpaperflare.com_wallpaper2.jpg')" }}></div>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black filter brightness-30 opacity-50"></div>
      
      {/* Landing page elements */}
      <div className="relative flex flex-col gap-8 px-4 md:px-[45px] items-center ml-4 md:ml-10 justify-center h-fit w-fit space-y-4">
        <div className="comfortaa max-w-4xl filter md:mx-auto md:px-6 py-8 md:py-[88px] text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Candid photos <br />
            that capture the real <br /> <span className="text-red-500">YOU</span>
          </h2>
          <p className="text-white text-lg md:text-[20px] font-bold mt-4">
            Capture your special moments in a way <br className="hidden md:inline" /> you never thought possible.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Link to='/register' className="btn  px-4 md:px-8 py-2 text-base md:text-lg text-white border-2 rounded-lg transition duration-300 hover:text-gray-100 bg-red-500 border-red-500 hover:bg-inherit hover:border-white">
              Register
            </Link>
            <Link to='/login' className="btn px-4 md:px-8 py-2 flex gap-2 text-base md:text-lg text-white border-2 rounded-lg transition duration-300 hover:text-gray-100 bg-red-500 border-red-500 hover:bg-inherit hover:border-white">
             LogIn
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LandingPage;
