import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
interface Types {
    children: React.ReactNode | React.ReactNode[]
}
const Layout:FC<Types> = ({children}) => {
    const navigate = useNavigate();
    return (
        <>
            <Button variant={"outlined"} onClick={() => navigate(-1)}>Go back</Button>
            <Button variant={"outlined"} onClick={() => navigate(1)}>Go forward</Button>

            {children}
        </>
    );
};

export default Layout;
