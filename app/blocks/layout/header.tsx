import * as React from 'react';
import {redirect, Link} from 'remix';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const Header: React.VoidFunctionComponent<{ title?: string }> = ({title}) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Link to={'/dashboard'}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <HomeIcon/>
                    </IconButton>
                    </Link>
                    <Typography variant="h6" sx={{flexGrow: 1}}>{title || 'Personal Journal'}</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;