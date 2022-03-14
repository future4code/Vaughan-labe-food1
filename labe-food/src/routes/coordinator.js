export const goToHome = (navigate) => {
    navigate("");
};

export const goToSignUp = (navigate) => {
    navigate("/signup");
};

export const goToLogin = (navigate) => {
    navigate("/login");
};

export const goToProfile = (navigate) => {
    navigate("/profile");
};

export const goToEditProfile = (navigate, id) => {
    navigate("/profile/edit/user");
};

export const goToDetails = (navigate) => {
    navigate(`/restaurant/${id}`);
};

export const goToSearch = (navigate) => {
    navigate("/search");
};

export const goToAddress = (navigate) => {
    navigate("/address");
};

export const goToEditAddress = (navigate) => {
    navigate("/profile/edit/address");
};

export const goToCart = (navigate) => {
    navigate("/cart");
};