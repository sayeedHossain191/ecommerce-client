import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">


                <div className="container px-6 py-16 mx-auto text-center">
                    <div className="max-w-lg mx-auto">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Create beautiful website layout with Meraki UI.</h1>

                        <p className="mt-6 text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
                        </p>

                        <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
                            <form className="flex flex-col md:flex-row">
                                <input type="email" placeholder="Enter your email address" className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                                <button type="button" className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                                    Join Us
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="max-w-screen-xl mx-auto mt-20">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <div className="badge badge-outline">Sedan</div>
                            </div>
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <div className="badge badge-outline">SUV</div>
                            </div>
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <div className="badge badge-outline">Hybrid</div>
                            </div>
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <div className="badge badge-outline">Hatchback</div>
                            </div>
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <div className="badge badge-outline">Coupe</div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;