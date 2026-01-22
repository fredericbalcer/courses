import { Component, Fragment } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export class Header extends Component {
  
  state = {
    open: false
  };

  toggleDrawer = (open) => {
    this.setState({ open });
  };

  render() {
    const { setView } = this.props;
    return (
      <Fragment>
      <AppBar position="sticky" 
      sx={{
          backgroundColor: '#c0b659',
          color: '#fff',
          top: 0,
          zIndex: theme => theme.zIndex.drawer - 1
          
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Shopping List
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
          anchor="left"
          open={this.state.open}
          onClose={() => this.toggleDrawer(false)}
        >
        <Box sx={{ width: 250 }}>
            <List>

              <ListItem disablePadding>
                <ListItemButton onClick={() => {
                  setView('courses');
                  this.toggleDrawer(false);
                }}>
                  <ListItemText
                    primary="🛒 Courses à faire"
                    primaryTypographyProps={{
                    fontSize: '1.5rem',
                    fontWeight: 1000
            }}
                />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={() => {
                  setView('selection');
                  this.toggleDrawer(false);
                }}>
                  <ListItemText primary="➕ Ajouter des articles" 
                    primaryTypographyProps={{
                    fontSize: '1.5rem',
                    fontWeight: 1000
                  }}
                />
                </ListItemButton>
              </ListItem>

            </List>
          </Box>
        </Drawer>
      </Fragment>
    )
  }
}

export default Header
