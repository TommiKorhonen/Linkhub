import styled from "styled-components";

// eslint-disable-next-line no-undef
export const StyledLinks = styled.a<{ rounded?: number }>`
  padding: 1rem;
  text-align: center;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  &:hover {
    opacity: 0.8;
  }
`;
