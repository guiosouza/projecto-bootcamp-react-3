import './styles.css';
import ProductCarImg from 'assets/images/car-card.png'; 

const productCard = () => {
    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductCarImg} alt="Nome do produto"/>
            </div>
            <div className="card-bottom-container">
                <h6>Audio Supra TT</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                <button>COMPRAR</button>
            </div>
        </div>
    );
}

export default productCard;