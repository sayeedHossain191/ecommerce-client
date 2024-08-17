import { useContext, useEffect, useState } from 'react';
import bg1 from '../assets/rs-sbg-px → rs-sbg-wrap → rs-sbg → image.png'
import { GlobalStateContext } from '../Providers/GlobalStateProvider';

const Banner = () => {

    const [search, setSearch] = useState('')

    const { getProducts } = useContext(GlobalStateContext)

    useEffect(() => {

        if (search) {
            getProducts(search, null);
        } else {
            getProducts('', '')
        }
    }, [search, getProducts])

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        console.log(searchText)
        setSearch(searchText)
    }

    return (
        <div>
            <section className="bg-white dark:bg-gray-900 hero min-h-screen mt-10 font-dm" style={{
                backgroundImage: `url(${bg1})`,
            }}>

                <div className="container px-6 py-16 mx-auto text-center">
                    <div className="max-w-xl mx-auto">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-5xl">Find Your Perfect Vehicle</h1>

                        <p className="mt-6 text-white">
                            We are committed to providing our customers with exceptional service, competitive
                            pricing, and a wide range of..
                        </p>

                        <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">

                            <form onSubmit={handleSearch} className="flex flex-col md:flex-row">
                                <input type="text" name="search" placeholder="Search your product" className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-white bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                                <button type="submit" className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="max-w-screen-xl mx-auto mt-20 font-dm font-semibold">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <div className="badge badge-outline bg-white text-black">Sedan</div>
                            </div>
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <div className="badge badge-outline bg-white text-black">SUV</div>
                            </div>
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <div className="badge badge-outline bg-white text-black">Hybrid</div>
                            </div>
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <div className="badge badge-outline bg-white text-black">Hatchback</div>
                            </div>
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <div className="badge badge-outline bg-white text-black">Sports</div>
                            </div>
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <div className="badge badge-outline bg-white text-black">Electric</div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;