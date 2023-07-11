import LoginPage from "./Login";
import Registration from "./Registration";
import { Routes, Route } from 'react-router-dom';

const App = () => {


    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Registration />} />
            </Routes>
        </>
    );
}

export default App;