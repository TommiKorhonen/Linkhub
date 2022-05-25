import styled from "styled-components";

export const StyledSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  width: 200px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.themeColor};

  button {
    display: flex;
    background: none;
    align-items: center;
    margin-bottom: 1rem;
    gap: 0.5rem;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    &:hover {
      background-color: #6b7280;
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: #e5e7eb;
    }
    span {
      color: white;
      font-weight: 500;
      font-size: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.sm}) {
    display: none;
  }
`;
export const UserContainer = styled.div`
  padding: 1rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-weight: 700;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    &:hover {
      background-color: #6b7280;
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: #e5e7eb;
    }
    span {
      color: white;
      font-weight: 600;
    }
  }
`;
