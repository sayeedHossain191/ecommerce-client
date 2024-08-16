import { BsFillFuelPumpFill } from 'react-icons/bs';
import img1 from '../assets/car5-660x440.jpg.png'
import { LuGaugeCircle } from 'react-icons/lu';
import { GiGearStickPattern } from 'react-icons/gi';
import { MdOutlineStarRate } from 'react-icons/md';
import { FaRegCalendarTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {


    const [productPerPage, setProductPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const [products, setProducts] = useState([])

    //const { count } = useLoaderData();

    const numberOfPages = Math.ceil(count / productPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1);


    useEffect(() => {
        const getService = async () => {

            const { data } = await axios(`http://localhost:5000/products?page=${currentPage}&size=${productPerPage}`)

            setProducts(data)
        }
        getService()

    }, [currentPage, productPerPage])


    useEffect(() => {
        const getCount = async () => {

            const { data } = await axios(`https://b9a11-consultation-server.vercel.app/service-count`)

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
                                    <h2>20 Miles</h2>
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
            <div className='mx-auto'>
                <div className="join flex justify-center mb-20">
                    <button className="join-item btn btn-outline">Previous page</button>
                    <button className="join-item btn btn-outline">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Product;