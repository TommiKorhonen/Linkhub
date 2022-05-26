import styled from "styled-components";

export const PreviewContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media (max-width: ${({ theme }) => theme.lg}) {
    display: none;
  }
`;
