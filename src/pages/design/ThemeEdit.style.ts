import styled from "styled-components";

export const BgEditor = styled.label`
  margin: 0;

  input {
    height: 4rem;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`;

export const FontEditor = styled(BgEditor)`
  margin-top: 1rem;
`;
