import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './core/components/Header';
import Home from './pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;