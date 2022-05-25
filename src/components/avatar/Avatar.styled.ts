import styled from "styled-components";

export const StyledAvatar = styled.img`
  width: ${({ width }) => width || 96};
  height: ${({ height }) => height || 96};
  border-radius: 50%;
`;
