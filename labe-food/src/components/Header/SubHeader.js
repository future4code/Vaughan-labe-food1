import * as React from "react";
import Typography from "@mui/material/Typography";
import { StyledSubBox } from "./styled";

export default function SubHeader({ title2 }) {
  return (
    <StyledSubBox>
    {title2}
    </StyledSubBox>
  );
}
