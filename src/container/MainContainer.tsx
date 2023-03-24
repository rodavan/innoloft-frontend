import React, { useEffect } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";

import HorizontalConatiner from "./HorizontalContainer";
import { useSelector, useDispatch } from "react-redux";
import { configType } from "../types";
import { fetchConfigure } from "../utils/fetch";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const setConfigure = async () => {
      const appId = parseInt(process.env.REACT_APP_ID || "1");
      fetchConfigure(appId)
        .then((res) => res.json())
        .then((data) => dispatch({ type: "SET", payload: data }));
    };
    setConfigure();
  }, [dispatch]);
  const config: configType = useSelector(
    (state): configType => state as configType
  );
  return (
    <div>
      <HorizontalConatiner bgColor={config.mainColor}>
        <Header />
      </HorizontalConatiner>
      <HorizontalConatiner>
        <div className="flex pt-5">
          <div className="hidden lg:block">
            <Menu />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </HorizontalConatiner>
    </div>
  );
};

export default MainContainer;
