import { Outlet } from "react-router";
import Main from "../ui/tags/Main";

const PlayGroundLayout = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};

export default PlayGroundLayout;
