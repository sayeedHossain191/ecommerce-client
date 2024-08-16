import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Product from '../Components/Product';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Product />
            <Footer />
        </div>
    );
};

export default Home;