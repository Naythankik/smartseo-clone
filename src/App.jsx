import {Routes, Route, BrowserRouter} from 'react-router-dom';
import LandingPage from './components/landing/LandingPage.jsx';

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />}>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
