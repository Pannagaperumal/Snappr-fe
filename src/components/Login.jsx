import { HomeIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <div className={`bg-inherit fixed h-[80px] w-full flex z-10 justify-between items-center py-4 px-6 md:px-[75px] text-red-500 shadow-xl transition-colors duration-300`}>
        <Link to='/' className='comfortaa font-bold text-[30px] md:text-[39px]'>Snappr</Link>
        <Link to='/' className=''><HomeIcon className=' h-8 w-8'/></Link>
      </div>
      <div id='login' className="relative min-h-screen flex flex-col items-start justify-start py-12 px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('/girl-taking-a-photo-in-nature-8k-bt-1920x1080.jpg')" }}></div>
        
        {/* Background Overlay */}
        <div className="absolute inset-0"></div>
        
        {/* Login Form Elements */}
        <div className="relative max-w-[350px] p-4 w-full bg-red-500 border border-l-red-500 mt-14 rounded-lg shadow-xl md:ml-[50px] space-y-8 z-10">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Log In to Your Account</h2>
            <p className="mt-2 text-center text-md text-gray-900">
              Welcome back! Please log in to continue.
            </p>
          </div>
          <form className="mt-8 space-y-6 items-center flex justify-center flex-col" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm w-full -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className='w-full items-center flex justify-center'>
            <Link
          type="submit"
          to='/dashboard'
          className="group relative self-center w-full text-center items-center flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign Up
        </Link>
            </div>
          </form>
          {/* <div className="mt-6 flex justify-center shadow-lg">
            <video className="w-fit h-[200px] object-full rounded-lg" loop autoPlay muted>
              <source src="/snappr.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
