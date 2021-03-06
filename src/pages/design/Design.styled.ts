import styled from "styled-components";

export const StyledDesign = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-height: 100vh;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.lg}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    margin-left: 18rem;
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    margin-left: 11rem;
  }
`;

export const SectionEditors = styled.section`
  max-width: 672px;
  margin: 2rem auto 0 auto;

  overflow: scroll;
  @media (min-width: ${({ theme }) => theme.sm}) {
    padding-right: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.sm}) {
    padding: 1rem;
  }
  h2 {
    font-weight: 600;
    margin: 3rem 0 1rem 0;
  }
`;
