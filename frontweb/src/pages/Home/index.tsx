import BannerImage from 'assets/images/main-image.png'; 
import Navbar from 'components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="home-container">
        <div className="banner-card">
          <div className="banner-image-container">
            <img src={BannerImage} alt="carro-tela-principal"/>
        </div>
          <div className="banner-content-container" >
            <h1>O carro perfeito para você</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
