import BannerImage from 'assets/images/main-image.png'; 
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="banner-card">
          <div className="banner-image-container">
            <img src={BannerImage} alt="carro-tela-principal"/>
          </div>
          <div className="banner-content-container" >
            <h1>O carro perfeito para você</h1>
            <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
          </div>
        </div>
        <div className="card-home-catalog">
          <Link to="/products">
            <button>VER CATÁLOGO</button>
          </Link> 
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
};

export default Home;
