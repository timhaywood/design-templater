import styled from "styled-components/macro";
import { useThemeColours } from "../stphils-ds/colour";
export const Page = styled.div`
  background-color: ${useThemeColours("grey").light.background};
  display: flex;
  align-items: center;
  font-family: sans-serif;
  margin: auto;
`;
