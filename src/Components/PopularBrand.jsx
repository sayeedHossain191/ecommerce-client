import bg1 from '../assets/audi-logo.png'
import bg2 from '../assets/BMW-Logo.png'
import bg3 from '../assets/Chevrolet-Logo.png'
import bg4 from '../assets/Ford-Logo.png'
import bg5 from '../assets/Hyundai-Logo.png'
import bg6 from '../assets/Jeep-Logo.png'
import bg7 from '../assets/Land-Rover-Logo.png'
import bg8 from '../assets/Mercedes-Benz-Logo.png'
import bg9 from '../assets/Toyota-Logo.png'
import bg10 from '../assets/Porsche-Logo.png'

const PopularBrand = () => {
    return (
        <div>
            <div className='font-dm my-20 mx-20'>
                <h2 className='text-4xl font-bold mb-10'>Explore Our Premium Brands</h2>


                <div className='grid lg:grid-cols-5 sm:grid-cols-1 gap-5'>
                    <div className="card border border-white bg-slate-200 shadow-xl ">
                        <figure className="">
                            <img src={bg1} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card border border-white bg-slate-200 shadow-xl ">
                        <figure className="">
                            <img src={bg2} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card border border-white bg-slate-200 shadow-xl ">
                        <figure className="">
                            <img src={bg3} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card border border-white bg-slate-200 shadow-xl ">
                        <figure className="">
                            <img src={bg4} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card border border-white bg-slate-200 shadow-xl ">
                        <figure className="">
                            <img src={bg5} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card border border-white bg-slate-200 shadow-xl ">
                        <figure className="">
                            <img src={bg6} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card border border-white bg-slate-200 shadow-xl ">
                        <figure className="">
                            <img src={bg7} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card border border-white bg-slate-200 shadow-xl ">
                        <figure className="">
                            <img src={bg8} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card border border-white bg-slate-200 shadow-xl ">
                        <figure className="">
                            <img src={bg9} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card border border-white bg-slate-200 shadow-xl ">
                        <figure className="">
                            <img src={bg10} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopularBrand;