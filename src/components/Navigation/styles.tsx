import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid #bdbdbd;
`;
export const NavigationButton = styled.button`
  position: relative;
  padding: 18px 35px;

  background: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;

  &.active:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;

    background: #2f80ed;
    border-radius: 4px 4px 0px 0px;

    content: "";
  }
`;
