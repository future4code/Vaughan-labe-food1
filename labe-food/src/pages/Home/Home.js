import { useNavigate } from "react-router";
import Feed from "../../components/Feed/Feed";
import { goToSearch } from "../../routes/coordinator";
import { ButtonNoStyle } from "./styled-home";
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
    const navigate = useNavigate();


    return (
        <div>
            <h2>Ifuture</h2>

            <ButtonNoStyle onClick={() => { goToSearch(navigate) }
            }>
                    <SearchIcon />
                <TextField label="Restaurante" />
                
            </ButtonNoStyle>
            <Feed />
        </div>
    )
};

export default Home;