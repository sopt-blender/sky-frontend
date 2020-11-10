import React from "react";
import ButtonLineComponent from "../components/common/ButtonLineComponent";
import ButtonShadowComponent from "../components/common/ButtonShadowComponent";

const MainPage = () => {
  return (
    <div>
      <ButtonLineComponent size="small">버튼</ButtonLineComponent>
      <ButtonShadowComponent>버튼2</ButtonShadowComponent>
    </div>
  );
};

export default MainPage;
