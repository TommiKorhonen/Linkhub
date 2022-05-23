import styled from "styled-components";

export const StyledHome = styled.main`
  min-height: 100vh;
  padding-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
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
  }
  p {
    font-size: 1.25rem;
  }
`;
