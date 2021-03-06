import React from "react";
import styled from "styled-components";
import Toast from "../Toast";

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 3;
`;

const Toaster = ({ toasts = [], unqueueToast }) => {
  return (
    <Wrapper>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          content={toast.content}
          unqueueToast={unqueueToast}
        />
      ))}
    </Wrapper>
  );
};

export default Toaster;
