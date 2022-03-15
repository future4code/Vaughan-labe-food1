import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { BoxStyled } from './styled-navigation';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const Navigation = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BoxStyled sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction icon={<ShoppingCartOutlinedIcon />} />
        <BottomNavigationAction icon={<PermIdentityOutlinedIcon />} />
      </BottomNavigation>
    </BoxStyled>
  );
};

export default Navigation;