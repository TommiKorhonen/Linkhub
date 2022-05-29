import styled from "styled-components";

export const StyledUser = styled.div`
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const UserWrapper = styled.div`
  max-width: 680px;
  height: 100vh;
  width: 100%;

  overflow: hidden;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 0.75rem 2rem 0 2rem;
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;

    h2 {
      text-align: center;
      font-weight: 600;
    }
    p {
      text-align: center;
      margin-top: 0.5rem;
      opacity: 1;
      font-weight: 600;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 0.75rem;
  margin-top: 2rem;
  width: 100%;
`;
