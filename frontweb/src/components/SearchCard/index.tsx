import './styles.css';

import ProductImg from 'assets/images/product.png'; 

const SearchCard = () => {
    return (
        <div className="base-card search-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do produto"/>
            </div>
            <div className="card-bottom-container">
                <h6>Nome do produto</h6>
            </div>
        </div>
    );
}

export default SearchCard;