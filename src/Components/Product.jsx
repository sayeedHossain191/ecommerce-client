import { BsFillFuelPumpFill } from 'react-icons/bs';
import { LuGaugeCircle } from 'react-icons/lu';
import { GiGearStickPattern } from 'react-icons/gi';
import { MdOutlineStarRate } from 'react-icons/md';
import { FaRegCalendarTimes } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalStateContext } from '../Providers/GlobalStateProvider';

const Product = () => {

    const [dsc, setDsc] = useState(true)
    const [productPerPage, setProductPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const [products, setProducts] = useState([])
    const { getProducts } = useContext(GlobalStateContext)


    const numberOfPages = Math.ceil(count / productPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1);

    useEffect(() => {
        getProducts(null, dsc ? 'dsc' : 'asc')
    }, [dsc])

    useEffect(() => {
        const getProduct = async () => {

            const { data } = await axios(`http://localhost:5000/all-products?page=${currentPage}&size=${productPerPage}`)

            setProducts(data)
        }
        getProduct()

    }, [currentPage, productPerPage])


    useEffect(() => {
        const getCount = async () => {

            const { data } = await axios(`http://localhost:5000/product-count`)

            setCount(data.count)
        }
        getCount()

    }, [])


    const handlePagination = (page) => {
        setCurrentPage(page)
    }


    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }


    return (
        <div>
            <button onClick={() => setDsc(!dsc)} className="btn btn-primary font-poppins my-20 w-full">
                {dsc ? 'Price: Low to High' : 'Price: High to Low'}
            </button>

            <div className='m-20 grid lg:grid-cols-3 md:grid-cols-2 gap-10 font-dm'>
                {
                    products.map(product => <div key={product._id} className="card border border-white w-96 shadow-xl">
                        <figure>
                            <img
                                src={product.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {product.name}
                                <div className="badge badge-primary">{product.category}</div>
                            </h2>
                            <p>{product.description}</p>
                            <hr />


                            <div className='flex justify-between my-2'>
                                <div className='items-center'>
                                    <BsFillFuelPumpFill />
                                    <h2>{product.fuel_type}</h2>
                                </div>
                                <div className=''>
                                    <LuGaugeCircle />
                                    <h2>{product.average_mileage} Miles</h2>
                                </div>
                                <div className=''>
                                    <GiGearStickPattern />
                                    <h2>{product.transmission_type}</h2>
                                </div>
                            </div>
                            <hr />

                            <div className="card-actions justify-between items-center mt-2">
                                <h2 className='text-xl'>$ {product.price}</h2>
                                <div className='flex justify-end gap-2'>
                                    <div className="badge badge-outline gap-1"><MdOutlineStarRate /> <h2>Grade {product.rating}</h2></div>
                                    <div className="badge badge-outline gap-1"><FaRegCalendarTimes /> <h2>{product.date}</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            {/* Pagination */}
            <div className='mx-auto'>
                <div className="join flex justify-center mb-20">
                    <button disabled={currentPage === 1} onClick={handlePrevPage} className="join-item btn btn-outline">Previous page</button>

                    {
                        pages.map(page => <button onClick={() => handlePagination(page)}
                            key={page} className={`${currentPage === page ? 'bg-[#0152A8]' : ''} join-item btn btn-outline`}>{page}</button>)
                    }

                    <button disabled={currentPage === numberOfPages} onClick={handleNextPage} className="join-item btn btn-outline">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Product;