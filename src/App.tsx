import { useAppSelector, useAppDispatch } from "./store/hooks";
import { appActions } from "./store/appSlice";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import LightBox from "./Components/LightBox/LightBox";
import NavDrawer from "./Components/NavDrawer/NavDrawer";
import LogIn from "./Components/Login/LogIn";

function App() {
  const dispatch = useAppDispatch();
  const navList: string[] = ["Collections", "Men", "Women", "About", "Contact"];
  const showNavDrawer: boolean = useAppSelector(
    (state) => state.app.showNavDrawer
  );
  const closeNavDrawer = (): void => {
    dispatch(appActions.showNavDrawer());
  };
  const showLightBox: boolean = useAppSelector(
    (state) => state.app.showLightBox
  );
  const showLoginForm: boolean = useAppSelector(
    (state) => state.app.showLoginForm
  );

  return (
    <>
      <NavDrawer
        navList={navList}
        showNavDrawer={showNavDrawer}
        closeNavDrawer={closeNavDrawer}
      />
      <Navbar />
      <Home />
      {showLightBox && <LightBox />}
      {showLoginForm && <LogIn />}
    </>
  );
}

export default App;
