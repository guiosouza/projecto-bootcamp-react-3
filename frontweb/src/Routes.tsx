import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact> {/* Abrir somento quando for exatament */}
        <Home />
      </Route>
      <Route path="/products">
        <Catalog />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
