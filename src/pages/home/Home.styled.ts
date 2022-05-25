import { theme } from "./../../components/styles/theme";
import styled from "styled-components";

export const StyledHome = styled.main`
  min-height: 100vh;
  padding-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: ${({ theme }) => theme.lg}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const SectionLeft = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  padding: 1rem;

  h1 {
    font-size: 4.5rem;
    font-weight: bold;
    color: #374151;
    line-height: 1;
  }
  p {
    font-size: 1.25rem;
  }

  a {
    background-color: ${({ theme }) => theme.colors.themeColor};
    padding: 1rem 0;
    color: white;
    max-width: 24rem;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.sm}) {
    h1 {
      font-size: 2.25rem;
    }
  }
`;

export const SectionRight = styled.section`
  display: flex;
  align-items: center;
  justify-content: end;

  @media (min-width: ${({ theme }) => theme.lg}) {
    display: none;
  }
`;
