import React from 'react';
import Logo from '../components/assets/logobg.png'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
        
        <nav className=" nav flex flex-wrap items-center justify-between lg:px-36 px-3">
  <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
    <div className='h-14 mr-2 w-14'>
    <Image src={Logo} alt="logo" className="" />
    </div>
    {/* <svg className="fill-current h-8 mr-2 w-8" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 716 895">
      <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
      <path className="text-white fill-current" d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"></path>
      <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
    </svg> */}
    <a href='#' className="font-semibold aspirefont tracking-[0.3em] text-xl text-white ">IBH</a>
  </div>

  <input className="menu-btn hidden" type="checkbox" id="menu-btn"/>
  <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    <span className="navicon bg-grey-darkest flex items-center relative"></span>
  </label>

  <ul className="menu  md:border-none flex justify-end list-reset m-0 w-full md:w-auto p-4 mt-4 bg-[#121314]  md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 ">
  <li className='m-auto'>
          <a href="/" scrollsmooth className="scrollsmooth block  py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent" >Intro</a>
        </li>
        <li  className='m-auto'>
        <a href="/realstate" className="block  py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent" >RealState</a>
        </li>
        <li className='m-auto'>
        <a href="/crypto" className="block  py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent" >Crypto</a>
        </li>
        <li className='m-auto'>
        <a href="/infographic" className="block  py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent" >Graphs</a>
        </li>
        <li className='m-auto'>
        <a href="/books" className="block  py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent" >Books</a>
        </li>
        <ul className="flex flex-row p-2 mt-4   md:flex-row md:space-x-4 md:mt-0 md:text-lg md:font-medium   ">

        <li className='md:mr-0 mr-4 hover:scale-110 transition duration-300 ease-in-out'>
       <a href="mailto:investmenthouse@gmail.com">
       <svg  fill="#ffffff  " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 60 60" width="40px" height="40px"><path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"/></svg>
        </a>
        </li>
        </ul>
    
  </ul>
</nav>




    </div>
  );
}

export default Navbar;
