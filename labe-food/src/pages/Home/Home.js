import { useNavigate } from "react-router";
import Feed from "../../components/Feed/Feed";
import { goToSearch } from "../../routes/coordinator";
import { ButtonNoStyle, MainStyle, SearchIconStyled, TextFieldStyled } from "./styled-home";
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
    const navigate = useNavigate();


    return (
        <div>
            <MainStyle>
            <h2>Ifuture</h2>

            <ButtonNoStyle onClick={() => { goToSearch(navigate) }
            }>
                    <SearchIconStyled />
                <TextFieldStyled label="Restaurante" />
                
            </ButtonNoStyle>
            </MainStyle>
            <Feed />
        </div>
    )
};

export default Home;