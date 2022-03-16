import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import { StyledBox, StyledToolbar , StyledTitle } from "./styled";
import { goToSearch } from "../../routes/coordinator";

export default function Header({ title, goBack  }) {
  const navigate = useNavigate();

  return (
    <StyledBox>
      <AppBar
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "none",
        }}
        position='static'
        color='bar'
      >
       { !goBack  ? <StyledToolbar>
          <div>
            <IconButton
              onClick={() => navigate(-1)}
              size='large'
              edge='start'
              aria-label='voltar'
              sx={{ mr: 2 }}
            >
              <ArrowBackIosRoundedIcon />
            </IconButton>
          </div> 

          {title}
        </StyledToolbar> : 
         
         <StyledTitle>
         {title}
         </StyledTitle>

         
           } 
      </AppBar>
    </StyledBox>
  );
}
