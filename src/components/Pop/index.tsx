import React, { useEffect, useRef } from "react";
import PopContainer from "./styles";

const Pop = ({ isOpen, children, setOpenPop, isLogined = false }: any) => {
  const ref = useRef(null);

  const updatePopView = (e: any) => {
    // // @ts-ignore
    // if (ref.current !== null && !ref.current.contains(e.target)) {
    //   setOpenPop(!isOpen);
    // }
  };

  useEffect(() => {
    document.addEventListener("click", updatePopView);
    return () => document.removeEventListener("click", updatePopView);
  });

  return (
    <>
      {isOpen ? (
        <PopContainer isLogined={isLogined} ref={ref}>
          <div className="ant-popover-arrow" />
          {children}
        </PopContainer>
      ) : (
        ""
      )}
    </>
  );
};

export default Pop;
