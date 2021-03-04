import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './core/components/Header';
import FindGitProfile from './pages/FindGitProfile';
import Home from './pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/find" component={FindGitProfile} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;