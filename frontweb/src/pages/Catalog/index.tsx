import ProductCard from 'components/ProductCard';
import SearchCard from 'components/SearchCard';

const Catalog = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-12 col-lg-12 col-xl-12">
          <SearchCard/>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
