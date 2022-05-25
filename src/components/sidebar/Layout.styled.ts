import styled from "styled-components";

export const StyledLayout = styled.div`
  @media (min-width: ${({ theme }) => theme.sm}) {
    display: flex;
  }
`;
