import React from "react";
import Box from "../stphils-ds/box";
import styled from "styled-components/macro";

export function IconButton({ icon, text }) {
  return (
    <div css={`
      display: flex;
      align-items: flex-start;
      
    `}>
      <div
        css={`
          flex-shrink: 0;
          height: 10px;
          position: relative;
          top: -2px;
        `}
      >
        {icon}
      </div>
      <Box paddingH={0.5} />
      {text}
      </div>
  );
}
