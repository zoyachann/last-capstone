import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppleIcon from '@mui/icons-material/Apple';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from '../asess/Logo-new.webp';
import AuthModal from './login';
import SearchIcon from '@mui/icons-material/Search';
import { ToastContainer } from 'react-toastify';
import { InputBase, IconButton } from '@mui/material';
import { styled } from '@mui/system';

// Styled Components
const SearchBox = styled('div')({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '5px 10px',
    borderRadius: '5px',
    width: '100%',
    maxWidth: '400px',
});

const SearchInput = styled(InputBase)({
    marginLeft: '10px',
    flex: 1,
});

const ResponsiveAppBar = () => {
    const navigate = useNavigate();

    // State Management
    const [openModal, setOpenModal] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [showSearch, setShowSearch] = useState(false); // Toggle search visibility

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const handleOpenModal = () => setOpenModal(true);
    const toggleSearch = () => setShowSearch(!showSearch);

    const searchHandler = (e) => {
        console.log("Searching for:", e.target.value);
    };

    return (
        <AppBar position="sticky" color="default" elevation={0} className="py-2">
            <Toolbar>
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <img src={Logo} alt="PickBazar Logo" style={{ height: 40, marginRight: 8 }} />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: 'bold', color: '#333', marginRight: '20px' }}
                    >
                        PickBazar
                    </Typography>
                    <Box>
                        <Button
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                color: '#019376',
                                border: '1px solid #019376',
                            }}
                            startIcon={<AppleIcon />}
                            endIcon={<ArrowDropDownIcon />}
                        >
                            Grocery
                        </Button>
                    </Box>
                </Box>

                {/* Page Links */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                    <Button color="inherit">Shops</Button>
                    <Button color="inherit">Offers</Button>
                    <Button color="inherit">Contact</Button>
                    <Button color="inherit" endIcon={<ExpandMoreIcon />} onClick={handleMenuOpen}>
                        Pages
                    </Button>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <MenuItem onClick={handleMenuClose}>Page 1</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Page 2</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Page 3</MenuItem>
                    </Menu>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton onClick={toggleSearch} color="inherit">
                        <SearchIcon />
                    </IconButton>
                    {showSearch && (
                        <SearchBox>
                            <SearchIcon style={{ color: 'gray' }} />
                            <SearchInput
                                onChange={searchHandler}
                                placeholder="Search items..."
                                size="small"
                                autoFocus
                            />
                        </SearchBox>
                    )}
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                        sx={{
                            textTransform: 'none',
                            background: '#019376',
                            color: 'white',
                            display: { xs: 'none', md: 'flex' },
                            '&:hover': { background: '#017a5f' },
                        }}
                        variant="contained"
                        onClick={handleOpenModal}
                    >
                        Join
                    </Button>

                    <AuthModal
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        isRegister={isRegister}
                        setIsRegister={setIsRegister}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                            background: '#019376',
                            display: { xs: 'none', sm: 'flex' },
                        }}
                    >
                        Become a Seller
                    </Button>
                </Box>
                <ToastContainer />
            </Toolbar>
        </AppBar>
    );
};

export default ResponsiveAppBar;

