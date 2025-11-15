import { Outlet } from "react-router";
import Profile from "../components/Profile";
import Main from "../ui/tags/Main";

const MainLayout = () => {
  return (
    <Main>
      <Profile />
      <Outlet />
    </Main>
  );
};

export default MainLayout;
