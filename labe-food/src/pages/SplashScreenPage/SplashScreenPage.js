import { MainStyled } from "./style-splashScreen";
import logowhite from "../../assets/images/whitelogo/logowhite.png";

const SplashScreenPage = () => {
  return (
    <MainStyled>
      <div>
        <img src={logowhite} />
      </div>
    </MainStyled>
  );
};

export default SplashScreenPage;
