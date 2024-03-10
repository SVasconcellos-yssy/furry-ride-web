/* eslint-disable react/jsx-key */

import * as React from 'react';
import { Box, Drawer, CssBaseline, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Typography, Hidden, IconButton } from '@mui/material';
import { Star, DeliveryDining, MonetizationOn, DriveEta, Payment, Help, Settings, Money} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';


const drawerWidth = 240;

export default function DrawerComponent() {
 const [menuHamburguer, setMenuHamburguer] = React.useState(false);

 const handleDrawerToggle = () => {
    setMenuHamburguer(!menuHamburguer);
 };

 return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Hidden mdUp>
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          sx={{ ml: 2, mt: 2, display: 'block', background: "#4A9273" }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          anchor="left"
          open={menuHamburguer}
          onClose={handleDrawerToggle}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              backgroundColor: '#62C299',
            },
          }}
        >
          {renderDrawerContent()}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              backgroundColor: '#62C299',
            },
          }}
          open
        >
          {renderDrawerContent()}
        </Drawer>
      </Hidden>
    </Box>
 );
}

function renderDrawerContent() {
 const listIcons = [
    <DriveEta sx={{ color: '#FFF' }} />,
    <Payment sx={{ color: '#FFF' }} />,
    <Help sx={{ color: '#FFF' }} />,
    <DeliveryDining sx={{ color: '#FFF' }} />,
    <Settings sx={{ color: '#FFF' }} />
 ];

 return (
    <Box sx={{ marginTop: '30px', paddingLeft: '20px', color: '#FFF', width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar alt="Avatar do usuário" src="/path/to/avatar.jpg" />
        <Box sx={{ marginLeft: '10px' }}>
          <Typography>Stephanye</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ marginRight: '6px' }}>4,8</Box>
            <Star color='primary' sx={{ color: 'yellow' }} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: '20px', marginBottom: '10px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <DeliveryDining />
          <Typography sx={{ marginLeft: '10px' }}>Faça entrega</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <MonetizationOn />
          <Typography sx={{ marginLeft: '10px' }}>Ganhe dinheiro dirigindo</Typography>
        </Box>
      </Box>
      <Divider sx={{ marginTop: '30px', backgroundColor: '#EFF9F5' }} />
      <List>
        {['Suas viagens', 'Pagamento', 'Ajuda', 'Furry Pass*', 'Configurações'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ '&:hover': { backgroundColor: '#58AF8A' } }}>
              <ListItemIcon>
                {listIcons[index]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
 );
}
