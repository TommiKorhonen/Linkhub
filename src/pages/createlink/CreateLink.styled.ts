import styled from "styled-components";

export const StyledCreate = styled.main`
  min-height: 100vh;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  form {
    position: relative;
    height: 450px;
    width: 100%;
  }
  svg {
    height: 1.5rem;
    width: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    color: #4b5563;
    background-color: #e2e8f0;
    padding: 0.25rem;
  }
  h2 {
    font-size: 1.875rem;
    font-weight: 600;
  }
  button {
    width: 100%;
    margin-top: 3rem;
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    margin-left: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    margin-left: 0;
  }
`;
