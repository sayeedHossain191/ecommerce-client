import Banner from '../Components/Banner';
import PopularBrand from '../Components/PopularBrand';
import Product from '../Components/Product';

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Banner />
            <PopularBrand />
            <Product />

            {/* <Footer /> */}
        </div>
    );
};

export default Home;