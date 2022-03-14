import { useNavigate } from "react-router";
import Feed from "../../components/Feed/Feed";
import { goToSearch } from "../../routes/coordinator";
import { ButtonNoStyle, MainStyle, SearchIconStyled, TextFieldStyled, Search } from "./styled-home";
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";

const Home = () => {
    const navigate = useNavigate();
    const {restaurants, isLoading, error} = useContext(GlobalStateContext);

    return (
        <div>
            <MainStyle>
                <h2>Ifuture</h2>


                <ButtonNoStyle onClick={() => { goToSearch(navigate) }
                }>
                    <Search>
                        <SearchIconStyled sx={{ fontSize: 40 }} color="secondary" />
                        <TextFieldStyled 
                        placeholder="Restaurante..."
                        />
                    </Search>
                </ButtonNoStyle>

            </MainStyle>
            <Feed />
        </div>
    )
};

export default Home;