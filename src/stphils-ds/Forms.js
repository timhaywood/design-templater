import styled from "styled-components/macro";
import { useThemeColours } from "./Colour";
import { shadowStyles } from "./shadowStyles";
export const Label = styled.label`
  font-weight: bold;
  display: block;
`;
const InputStyles = `
  width: 100%;
  display: block;
  font-family: sans-serif;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: ${useThemeColours("grey").light.background};
  font-size: small;
  resize: none;
`;
export const InputArea = styled.textarea`
  ${InputStyles}
  width: 100%;
  height: 64px;
`;
export const Input = styled.input`
  ${InputStyles}
`;
export const Select = styled.select`
  ${InputStyles}
  padding-right: 24px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='grey' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
`;
export const Button = styled.button`
  font-family: "Linotte", sans-serif;
  color: white;
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 16px;
  background-color: ${useThemeColours("blue").dark.background};
  border: none;
  ${shadowStyles};
`;
export const StrokeButton = styled.button`
  font-family: "Linotte", sans-serif;
  color: ${useThemeColours("blue").white.heading};
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 16px;
  background-color: white;
  border: 2px solid ${useThemeColours("blue").white.accent};
`;
export const ControlGroup = styled.div`
  display: flex;
  align-items: flex-start;
  label {
    margin: 0px;
    margin-right: 8px;
  }
`;
