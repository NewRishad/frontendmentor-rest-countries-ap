import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import './App.css'
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/country/:code' element={<CountryDetail />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </Router>
);
}

export default App
