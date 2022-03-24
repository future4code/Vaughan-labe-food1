import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { BoxStyled } from "./styled-navigation";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { useNavigate } from "react-router";
import { goToCart, goToHome, goToProfile } from "../../routes/coordinator";

const Navigation = ({ screen }) => {
  const [value, setValue] = React.useState(screen);
  const navigate = useNavigate();

  return (
    <BoxStyled>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => goToHome(navigate)}
          icon={<HomeOutlinedIcon />}
        />
        <BottomNavigationAction
          onClick={() => goToCart(navigate)}
          icon={<ShoppingCartOutlinedIcon />}
        />
        <BottomNavigationAction
          onClick={() => goToProfile(navigate)}
          icon={<PermIdentityOutlinedIcon />}
        />
      </BottomNavigation>
    </BoxStyled>
  );
};

export default Navigation;
