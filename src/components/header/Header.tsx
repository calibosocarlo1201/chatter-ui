import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import Branding from './Branding';
import MobileNav from './MobileNav';
import MobileBranding from './MobileBranding';
import Navigation from './Navigation';
import Settings from './Settings';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Branding />
          <MobileNav pages={pages} />
          <MobileBranding />
          <Navigation pages={pages} />
          <Settings settings={settings} />
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
