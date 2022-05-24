import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  background: none;
  padding: 1rem 0 0 2rem;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListItemLeft = styled.li`
  a {
    font-size: 1.125rem;
    font-weight: bold;
  }
`;

export const ListItemRight = styled.li`
  display: flex;
  gap: 1rem;

  & > a {
    border: 1px solid ${({ theme }) => theme.colors.themeColor};
    padding: 0.5rem 1.5rem;
    color: ${({ theme }) => theme.colors.themeColor};
  }
  a:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.themeColor};
    color: white;
    padding: 0.5rem 1.5rem;
  }
`;
