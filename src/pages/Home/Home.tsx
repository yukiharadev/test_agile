import Banner from "../../components/Home/Banner/Banner";
import Feature from "../../components/Home/Feature/Feature";
import GalleryCarousel from "../../components/Home/Gallery/Carousel/GalleryCarousel";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Banner />
            <Feature />
            <GalleryCarousel />
            <Footer />
        </div>
    )
}

export default Home;