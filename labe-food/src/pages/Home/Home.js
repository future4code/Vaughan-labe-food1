import { useNavigate } from "react-router";
import Feed from "../../components/Feed/Feed";
import { goToSearch } from "../../routes/coordinator";

const Home = () => {
    const navigate = useNavigate();


    return (
        <div>
            <h2>Ifuture</h2>
            <button onClick={() => {goToSearch(navigate)}}>
                <input label="Busca"/>
                </button>
            <Feed/>
        </div>
    )
};

export default Home;