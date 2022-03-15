import { useNavigate } from "react-router";
import Feed from "../../components/Feed/Feed";
import { goToSearch } from "../../routes/coordinator";
import { ButtonNoStyle, MainStyle, SearchIconStyled, TextFieldStyled, Search } from "./styled-home";
import { Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { AccountCircle } from "@mui/icons-material";

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <MainStyle>
                <h2>Ifuture</h2>


                <ButtonNoStyle onClick={() => { goToSearch(navigate) }
                }>
                    <Search>
                        <TextFieldStyled
                            id="input-with-icon-textfield"
                            placeholder="Restaurante"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                        />
                    </Search>
                </ButtonNoStyle>

            </MainStyle>
            <Feed />
        </div>
    )
};

export default Home;