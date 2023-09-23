import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';

import CHAT from "./pages/CHAT";
import MyCalender from "./pages/MyCalender";
import Blank5 from "./pages/Blank5";
import Mypage from "./pages/Mypage";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<MyCalender />} />
                    <Route path='/calendar' element={<CHAT />} />
                    <Route path='/user' element={<Mypage />} />
                    <Route path='/order' element={<Blank5 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
