import Feed from "../../components/Feed/Feed";
import Header from '../../components/Header/Header';

const Search = () => {

    return (
        <>
            <Header title="Busca"  />
        <div>
            <Feed
                isSearch="true"
            />
        </div>
        </>
    )
};

export default Search;