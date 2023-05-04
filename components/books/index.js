import React from 'react';
import { BlockData } from './constants';
import Link from 'next/link';

const index = () => {
  return (
    <div>
    <div class="container my-12 -mb-64 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

    {BlockData.map((data, i) => (
        <div class="my-4 px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">

            
            <article class="overflow-hidden rounded-lg shadow-lg  bg-white">

                <Link href={data.Link}>
                    <img alt={data.name}  class="block h-[200px] w-full" src={data.picture}/>
                </Link>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <Link class="no-underline hover:underline text-black" href={data.Link}>
                            {data.name}
                        </Link>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        {data.type}
                    </p>
                </header>

                {/* <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href={data.Link}>
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <p class="ml-2 text-sm">
                            {data.author}
                        </p>
                    </a>    
                    <a class="no-underline text-grey-darker hover:text-red-dark" href={data.Link}>
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer> */}

            </article>
            

        </div>
    ))}
        

    </div>
</div>
    </div>
  );
}

export default index;
