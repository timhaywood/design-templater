import styled from "styled-components/macro";
import { useThemeColours } from "../stphils-ds/colour";
export const Small = styled.p`
  font-size: 12px;
  font-weight: normal;
`;
export const ControlHeading = styled.h1`
  color: ${useThemeColours("blue").light.heading};
`;
