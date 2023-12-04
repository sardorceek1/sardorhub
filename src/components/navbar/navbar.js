import {Box, Stack} from "@mui/material";
import React from "react";
import {logo} from "../../constants";
import {colors} from "../../constants/color";
import {Link} from "react-router-dom";
import SearchBar from "../search-bar/search-bar";

const Navbar = () => {
    return (
        <Stack direction={"row"}
               alignItems={'center'}
               justifyContent={'space-between'}
               p={'2'}
               sx={{position: "sticky", top: 0, zIndex: 999, backgroundColor: colors.secondary,}}>

            <Link to={'/'}>
                <img src={logo} alt="logo" height={50}/>
            </Link>
            <SearchBar/>
            <Box/>
        </Stack>
    )
}
export default Navbar;