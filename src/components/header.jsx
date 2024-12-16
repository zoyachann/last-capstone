import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Logo from '../asess/Logo-new.webp';
import '@fontsource/roboto/400.css';
import AppleIcon from '@mui/icons-material/Apple';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ResponsiveAppBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (

        <AppBar position="sticky" color="default" elevation={0} justify-content-between className='py-2'>

            <Toolbar>

                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, marginLeft: '20' }}>
                    <img src={Logo} alt="PickBazar Logo" style={{ height: 40, marginRight: 8 }} />
                    <Typography

                        variant="h6"
                        component="div"
                        sx={{ fontWeight: 'bold', color: '#333', marginRight: '20px' }}
                    >
                        PickBazar
                    </Typography>
                    <Box className='d-flex ' >
                        <Button  sx={{display:{ xs: 'none' , md: 'flex' } , color: '#019376', border:'1px solid #019376'}}startIcon={<AppleIcon />} endIcon={<ArrowDropDownIcon />}  >
                            Grocery
                        </Button>


                    </Box> 
                    
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                    <Button color="inherit">Shops</Button>
                    <Button color="inherit">Offers</Button>
                    <Button color="inherit">Contact</Button>
                    <Button
                        color="inherit"
                        endIcon={<ExpandMoreIcon  />}
                        onClick={handleMenuOpen}
                 sx={{marginRight:'10px'}}
                    >
                        Pages
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                        <MenuItem onClick={handleMenuClose}>Page 1</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Page 2</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Page 3</MenuItem>
                    </Menu>
                </Box>

           
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                    
                        variant="contained"
                        sx={{ textTransform: 'none', background: '#019376' ,  display: { xs: 'none', md: 'flex' },   textTransform: 'none', }}
                    >
                        Join
                    </Button>
                    <Button
                        variant="contained"
                    
                        sx={{ textTransform: 'none', background: '#019376' , display: { xs: 'none', sm: 'flex' }, }}
                    >
                        Become a Seller
                    </Button>
                </Box>
            </Toolbar>

        </AppBar>

    );
};

export default ResponsiveAppBar;

