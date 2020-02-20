import styled from "styled-components/macro";
export const Artboard = styled.div`
  font-family: "Linotte", "Noto Sans SC", "Noto Sans TC", "Noto Sans KR",
    sans-serif;
  background-color: ${props => props.colour};
  display: flex;
  justify-content: center;
  width: 640px;
  height: 360px;
  min-width: 640px;
  min-height: 360px;
  padding: 32px 48px;
  line-height: 150%;
  margin: 0 auto;
`;
