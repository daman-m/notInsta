import { Outlet, useLocation, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { LOGIN } from "Routes/routes";
import useAuth from "hooks/auth";
import MyPage from "Routes/MyPage";

const Layout = () => {

    const {pathname} = useLocation();
    const navigate = useNavigate();
    const {user, isLoading} = useAuth();

        
    useEffect(()=>{
        if (pathname.startsWith("/protected") && !user) {
            navigate(LOGIN);
        }
    },[pathname, user])

    if (isLoading) {
        return "Loading...";
    }

    return (
        <>
             <Outlet />
        </>
    )

   
}

export default Layout;