import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, user } = useAuth();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <Box sx={{ ml: 5, }}>
            <Toolbar />
            <Box sx={{ textAlign: 'center', mr: 5, mb: 3 }}>
                {
                    user.photoURL ? <img style={{ width: '40px', height: '40px', borderRadius: '50%', margin: '0 10px' }} src={user.photoURL} alt="" /> : <span style={{ fontSize: '20px', margin: '0 10px' }}><i className="fas fa-user icon"></i> {user.displayName}</span>
                }
            </Box>
            <List>
                <Link className='lnk' to='/home'><i className="fas fa-home"></i> Home</Link>
            </List>
            <List>
                <Link className='lnk' to='/dashboard/makeblog'><i className="fas fa-pen-nib"></i> Post</Link>
            </List>
            <List>
                <Link className='lnk' to='/dashboard/blogs'><i className="fas fa-rss"></i> Blogs</Link>
            </List>
            {
                admin && <List>
                    <Link className='lnk' to='/dashboard/admin'><i className="fas fa-user-shield"></i> Make Admin</Link>
                </List>
            }
            <List>
                <Link className='lnk' to='/dashboard/review'><i className="fas fa-thumbs-up"></i> Review</Link><br />
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor: '#333232'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ color: 'white' }} noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
