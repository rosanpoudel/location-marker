import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  height: 100vh;

  .coordinates {
    width: 100%;
    max-width: 306px;
  }
  .map {
    width: calc(100% - 306px);
  }
`;
