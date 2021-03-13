import { StyledNavigation, StyledNavigationButton } from "./styles";

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledNavigationButton className="active">All</StyledNavigationButton>
      <StyledNavigationButton>Active</StyledNavigationButton>
      <StyledNavigationButton>Completed</StyledNavigationButton>
    </StyledNavigation>
  );
};

export default Navigation;
