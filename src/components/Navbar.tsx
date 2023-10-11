import * as React from "react";
import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";

import { AppBar, Box, Toolbar, Menu, Badge } from "@mui/material";
import { Tooltip, MenuItem, Container, Typography } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GarageRoundedIcon from "@mui/icons-material/GarageRounded";


const pages = ["home", "about", "login", "signup", "garage"];

export default function Navbar() {
  // ... (other code)

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
    // <>
    <AppBar position="static">
        <Container maxWidth='xl'>
            <Toolbar disableGutters>

                <Link to="/">
                <HomeRoundedIcon sx={{ display: { xs: 'none', md: "flex" }, mr: 1 }} />
                </Link>

                <Typography variant="h6" noWrap component="a" href="#navbar"
                sx={{
                mr: 1,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                }}
                >Car Inventory
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                    <IconButton
                    size="large"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>

                    <Menu
                    id="menu-appbar" 
                    anchorEl={anchorElNav} 
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }} 
                    keepMounted 
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }} 
                    open={Boolean(anchorElNav)} 
                    onClose={handleCloseNavMenu} 
                    sx={{
                        display: { xs: "block", md: "none" },
                    }}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <NavLink key={page} to={page}>{page}</NavLink>
                        {/* <Typography textAlign="center">{page}</Typography> */}
                        </MenuItem>
                    ))}

                    </Menu>
                </Box>

                <GarageRoundedIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                <Typography variant="h5" noWrap component="a" href="#smaller-screen-nav"
                    sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    }}
                >
                    Project
                </Typography>

                {/* this is the list of pages */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <NavLink
                        key={page}
                        to={page}
                        onClick={handleCloseNavMenu}
                        style={({ isActive, isPending }) => {
                        return {
                            marginInlineStart: '2rem',
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "green" : "white",
                        };
                        }}
                    >
                        {page}
                    </NavLink>
                    ))}
                </Box>

                {/* right hand side button */}
                <Box sx={{ flexGrow: 0 }}>
                    <div>
                    <IconButton 
                    aria-label="car icon" sx={{ color: "#fafafa" }}
                    // onClick={openCart}
                    >
                        <Badge
                        color="error"
                        badgeContent={2}
                        // badgeContent={cartQuantity}
                        >
                        <Tooltip title="Your Cars">
                            <GarageRoundedIcon />
                        </Tooltip>
                        </Badge>
                    </IconButton>
                    </div>
                </Box>


            </Toolbar>
        </Container>
    </AppBar>    
    
    // {/* </> */}

    )
}
