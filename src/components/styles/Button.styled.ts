import styled from "styled-components";

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 16px;
  font-weight: 700;
  color: white;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.themeColor};
  border: none;
  cursor: pointer;
`;
