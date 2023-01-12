import React from "react";
import { TailSpin } from "react-loader-spinner";
import { LoaderStyled } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderStyled>
      <TailSpin
        height="80"
        width="80"
        color="#4a9519"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderStyled>
  );
};
