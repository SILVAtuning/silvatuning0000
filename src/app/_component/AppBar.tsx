"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { MuiLinkForNextJs as Link } from './MuiLinkForNextJs';

type NavItems = {
  label: string;
  to: string;
}

type DrawerContentProps = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  navItems: NavItems[]
}

const drawerWidth = 240;
const navItems: NavItems[] = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Works',
    to: '/works'
  },
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Pricement',
    to: '/pricement'
  },
  // {
  //   label: 'Contact',
  //   to: '/contact'
  // }
];

const DrawerContent = (props: DrawerContentProps) => {
  const { onClick, navItems } = props;
  return (
    <Box onClick={onClick} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2 }}>
        <Link href="/">
          <img src={`/images/silvatuning_logo.png`} height={36} alt="logo"></img>
        </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link href={item.to}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

const CustomAppBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar>
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
            <Box sx={{ flexGrow: 1, mt: 1, display: { xs: 'block', sm: 'block' } }}>
              <Link href="/">
                <img src={`/images/silvatuning_logo.png`} height={36} alt="logo"></img>
              </Link>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item, index) => (
                <Link href={item.to} key={`button-item-${index}`}>
                  <Button key={item.label} sx={{ color: '#fff' }}>
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
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
            <DrawerContent onClick={handleDrawerToggle} navItems={navItems} />
          </Drawer>
        </nav>
      </Box>
      <Toolbar />
    </React.Fragment>
  );
}

export default CustomAppBar;
