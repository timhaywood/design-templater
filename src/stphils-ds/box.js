import React from "react";
import styled from "styled-components/macro";

const StyledBox = styled.div`
  padding: ${props => props.padAmount};
  margin: 0;
`;

const Box = ({ children, paddingH = 0, paddingV = 0 }) => {
  const padH = `${paddingH * 8}px`;
  const padV = `${paddingV * 8}px`;
  const padAmount = `${padV} ${padH} ${padV} ${padH}`;
  return <StyledBox padAmount={padAmount}>{children}</StyledBox>;
};

export default Box;
