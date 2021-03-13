import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 40px 0;
  color: #333333;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

const Header = () => {
  return <StyledHeader>#todo</StyledHeader>;
};

export default Header;
