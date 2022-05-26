import styled from "styled-components";

export const StyledPreview = styled.div`
  width: 375px;
  height: 668px;
  border: 4px solid black;
  border-radius: 35px;
  overflow: hidden;
  overflow-y: auto;
`;

export const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  div {
    margin: 0 auto;
    padding: 0 0.75rem;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 0.25rem;
    overflow: hidden;
    overflow-wrap: break-word;

    h3 {
      text-align: center;
      font-weight: 600;
    }

    p {
      text-align: center;
      padding: 0 1rem;
      font-weight: 600;
    }
  }
  div:nth-child(3) {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 0.75rem;
    margin-top: 2rem;
  }
`;
