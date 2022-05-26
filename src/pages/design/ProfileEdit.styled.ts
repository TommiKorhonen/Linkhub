import styled from "styled-components";

export const AvatarEditContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0;

  div {
    display: flex;
    gap: 1rem;
    align-items: center;

    label {
      margin: 0;
      input {
        background-color: ${({ theme }) => theme.colors.themeColor};
        font-weight: 600;
        color: white;
        border-radius: 0.375rem;
        cursor: pointer;
      }
    }
  }
`;

export const BioEdit = styled.div`
  label {
    margin-bottom: 0;
  }
  button {
    width: 100%;
  }
  textarea {
    resize: none;
  }
`;

export const BioLength = styled.span`
  float: right;
  margin: 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: 0.7rem;
`;
