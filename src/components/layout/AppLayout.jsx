import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 220px',
        // backgroundColor: '#D788F2'
    }}>
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
