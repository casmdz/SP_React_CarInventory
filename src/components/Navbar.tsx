import * as React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { AppBar, Box, Toolbar, Menu } from "@mui/material";
import { Tooltip, MenuItem, Container, Typography } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GarageRoundedIcon from "@mui/icons-material/GarageRounded";

import { useAuth0 } from '@auth0/auth0-react';



export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const signOutOnClick = () => {
        logout();
    };
    const signInOnClick = () => {
        loginWithRedirect();
    };


    const location = useLocation();
    const linkStyle = (to:string) => {
        return {
        fontWeight: location.pathname === to ? 'bolder' : 'lighter',
        };
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

                {/* hamburger dropdown */}
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
                    <MenuItem><NavLink to={'home'} onClick={handleCloseNavMenu}>Home</NavLink></MenuItem>
                    {!isAuthenticated ? (
                    <>
                        <MenuItem>
                            <NavLink to={'login'} style={linkStyle('/login')} 
                            onClick={signInOnClick}>Login</NavLink>
                        </MenuItem>

                        {/* <MenuItem>
                            <NavLink to={'signup'} style={linkStyle('/signup')}>Signup</NavLink>
                        </MenuItem> */}
                    </>
                   ) : (
                    <>
                    <MenuItem>
                        <NavLink to={'garage'} style={linkStyle('/garage')}>Garage</NavLink>
                    </MenuItem>

                    <MenuItem>
                        <NavLink to={"/"} onClick={signOutOnClick}>Log Out</NavLink>
                    </MenuItem>
                    </>
                    )}
                    
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
                    
                    <MenuItem>
                        <NavLink to={'home'} style={linkStyle('/home')}>Home</NavLink>
                    </MenuItem>
                    {!isAuthenticated ? (
                    
                        <MenuItem>
                            <NavLink to={'login'} style={linkStyle('/login')} 
                            onClick={signInOnClick}>Enter Site</NavLink>
                        </MenuItem>
                    
                   ) : (
                    <>
                    <MenuItem>
                        <NavLink to={'garage'} style={linkStyle('/garage')}>Garage</NavLink>
                    </MenuItem>

                    <MenuItem>
                        <NavLink to={"/"} onClick={signOutOnClick}>Log Out</NavLink>
                    </MenuItem>
                    </>
                    )}
                </Box>
                
                {/* <NavLink to={'home'} style={linkStyle('/home')}>Home</NavLink>
                <NavLink to={'login'} style={linkStyle('/login')}>Login</NavLink>
                <NavLink to={'signup'} style={linkStyle('/signup')}>Signup</NavLink>
                <NavLink to={'garage'} style={linkStyle('/garage')}>Garage</NavLink> */}

                {/* right hand side button */}
                { isAuthenticated ? (
                    <>
                    <Box sx={{ flexGrow: 0 }}>
                        <NavLink to={"/garage"}>
                        <IconButton aria-label="car icon" sx={{ color: "#fafafa" }}>
                            <Tooltip title="Your Cars"><GarageRoundedIcon /></Tooltip>
                        </IconButton>
                        </NavLink>
                    </Box>
                    </>
                ) : (<></>)
                }

            </Toolbar>
        </Container>
    </AppBar>    
    
    // {/* </> */}
)
}
