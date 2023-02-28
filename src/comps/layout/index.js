import { Outlet, useLocation, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { LOGIN } from "../../Routes/routes";
import useAuth from "../../hooks/auth";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Box, Flex } from "@chakra-ui/react";


const Layout = () => {

    const {pathname} = useLocation();
    const navigate = useNavigate();
    const {user, isLoading} = useAuth();

        
    useEffect(()=>{
        if (isLoading && pathname.startsWith("/protected") && !user) {
            navigate(LOGIN);
        }
    },[pathname, user, isLoading, navigate])

    if (isLoading) {
        return "Loading...";
    }

    return (
        <>
        <Navbar />
        <Flex pt="16" pb="12" mx="auto" w="full" maxW="1200px">
            <Box w="900px">
                <Outlet />
            </Box>
            <Sidebar />
        </Flex>
        </>
    )

   
}

export default Layout;