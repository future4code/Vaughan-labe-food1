import Navigation from "../../components/Navigation/Navigation";
import Restaurant from "../../components/Restaurant/Restaurant";
import useProtectedPage from "../../hooks/useProtectedPage";

const RestaurantDetails = () => {
    useProtectedPage();
    return (
        <div>
            <Restaurant />
            <Navigation />
        </div>
    )
};

export default RestaurantDetails;