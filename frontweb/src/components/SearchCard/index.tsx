import './styles.css';


const SearchCard = () => {
    return (
        <div className="base-card search-card">
            <div>
                <input type="text" placeholder='Digite sua busca'/><button className="btn btn-primary">Buscar</button>
            </div>
        </div>
    );
}

export default SearchCard;