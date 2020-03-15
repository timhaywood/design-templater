import styled from "styled-components/macro";
import { useThemeColours } from "../stphils-ds/colour";
import { shadowStyles } from "../stphils-ds/shadowStyles";

export const ControlsArea = styled.div`
  font-family: "Linotte", sans-serif;
  background-color: white;
  overflow: auto;
  height: 100vh;
  width: 420px;
  padding: 48px;
  color: ${useThemeColours("blue").white.text};
  ${shadowStyles};
`;
