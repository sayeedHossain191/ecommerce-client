import { BsFillFuelPumpFill } from 'react-icons/bs';
import img1 from '../assets/car5-660x440.jpg.png'
import { LuGaugeCircle } from 'react-icons/lu';
import { GiGearStickPattern } from 'react-icons/gi';
import { MdOutlineStarRate } from 'react-icons/md';
import { FaRegCalendarTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Product = () => {


    const [products, setProducts] = useState([])

    useEffect(() => {

    }, [])


    return (
        <div className='m-20'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={img1}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        2025 COOPER 2 DOOR
                        <div className="badge badge-primary">Hatchback</div>
                    </h2>
                    <p>3.5 D5 PowerPulse Momentum 5dr AW…
                        Geartronic Estate</p>
                    <hr />


                    <div className='flex justify-between my-2'>
                        <div className='items-center'>
                            <BsFillFuelPumpFill />
                            <h2>Petrol</h2>
                        </div>
                        <div className=''>
                            <LuGaugeCircle />
                            <h2>20 Miles</h2>
                        </div>
                        <div className=''>
                            <GiGearStickPattern />
                            <h2>Manual</h2>
                        </div>
                    </div>
                    <hr />

                    <div className="card-actions justify-between items-center mt-2">
                        <h2 className='text-xl'>$40,000</h2>
                        <div className='flex justify-end gap-2'>
                            <div className="badge badge-outline gap-1"><MdOutlineStarRate /> <h2>Grade 3.5</h2></div>
                            <div className="badge badge-outline gap-1"><FaRegCalendarTimes /> <h2>2/4/24</h2></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;