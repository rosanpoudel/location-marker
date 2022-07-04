import styled from "styled-components";

export const TabWrapper = styled.div`
  display: flex;
`;

// tab header
export const TabHead = styled.div`
  max-width: 60px;
  height: 100vh;
  padding: 8px;
  background: #ffffff;
  dislay: flex;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1),
    0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
`;

// tab links
interface TabLinkProps {
  active: boolean;
}
export const TabLink = styled.p<TabLinkProps>`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.active ? "#1F4782" : "transparent")};
  border-radius: 5px;
  cursor: pointer;
  margin: 0 0 10px 0;
  img {
    filter: ${(props) => (props.active ? " brightness(0) invert(1)" : "none")};
  }
  transition: 0.7s;
`;

export const TabContents = styled.div`
  width: calc(100% - 60px);
`;
