import styled from "styled-components/macro";
export const DesignHeading = styled.h2`
  font-size: 36px;
  line-height: 42px;
  letter-spacing: -0.5px;
  color: ${props => props.colour};
`;
export const DesignText = styled.p`
  white-space: pre-wrap;
  font-size: 18px;
  color: ${props => props.colour};
`;
