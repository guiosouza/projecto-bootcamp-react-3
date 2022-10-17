import './styles.css';


const SearchCard = () => {
    return (
        <div className="base-card search-card">
            <div>
                <label htmlFor="btn btn-secondary"></label>
                <input type="text" placeholder='Digite sua busca'/><button className="btn btn-secondary">Buscar</button>
            </div>
        </div>
    );
}

export default SearchCard;