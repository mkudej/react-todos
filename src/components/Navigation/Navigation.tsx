import { StyledNavigation, NavigationButton } from "./styles";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavigationButton className="active">All</NavigationButton>
      <NavigationButton>Active</NavigationButton>
      <NavigationButton>Completed</NavigationButton>
    </StyledNavigation>
  );
};

export default Navigation;
