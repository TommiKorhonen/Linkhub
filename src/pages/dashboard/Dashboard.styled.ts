import styled from "styled-components";

export const StyledDashboard = styled.main`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  min-height: 100vh;
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

export const SectionLinks = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  /* mx-auto sm:mx-0  */

  h2 {
    font-weight: 600;
    font-size: 1.875rem;
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    padding: 3rem;
  }
`;
export const StyledCopy = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.themeColor};
    background-color: white;
    border: 1px solid #e5e7eb;
    padding: 0.25rem 0;

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`;

export const DashboardList = styled.ul`
  li {
    border: 1px solid black;
    max-width: 400px;
    padding: 1rem;
    margin-top: 1rem;
    background-color: white;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border-radius: 0.375rem;
    @media (min-width: ${({ theme }) => theme.sm}) {
      width: 24rem;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        color: #6b7280;
        cursor: pointer;
      }
    }
  }
`;
