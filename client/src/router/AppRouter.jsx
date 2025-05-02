import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import CountryDetail from '../pages/CountryDetail';

const AppRouter = () => {
    return (
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/country/:code' element={<CountryDetail />} />
            </Routes>
    );
}

export default AppRouter;