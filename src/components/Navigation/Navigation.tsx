import { Filter } from "../../interfaces/Filter";
import { StyledNavigation, NavigationButton } from "./styles";

interface NavigationProps {
  activeFilter: Filter;
  setActiveFilter: any;
}

const filters = [
  {
    title: "All",
    type: Filter.ALL,
  },
  {
    title: "Active",
    type: Filter.NOT_COMPLETED,
  },
  {
    title: "Completed",
    type: Filter.COMPLETED,
  },
];

const Navigation = ({ activeFilter, setActiveFilter }: NavigationProps) => {
  return (
    <StyledNavigation>
      {filters.map((filter) => (
        <NavigationButton
          onClick={() => setActiveFilter(filter.type)}
          className={filter.type === activeFilter ? "active" : ""}
        >
          {filter.title}
        </NavigationButton>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;
