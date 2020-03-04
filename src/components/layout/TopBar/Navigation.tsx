import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { categoriesNames, CategoriesCodes, colors, mq } from '../../../shared';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

interface DropdownCategoriesProps {
  category: CategoriesCodes;
}

const SingleCategory = ({ category }: DropdownCategoriesProps) => {
  return (
    <Dropdown.Item as={Link} to={`/${category}`}>
      {categoriesNames[category].name}
    </Dropdown.Item>
  );
};

const DropdownCategories = ({ category }: DropdownCategoriesProps) => {
  return (
    <Dropdown as={Link} to={`/${category}`} text={categoriesNames[category].name} pointing="left" className="link item">
      <Dropdown.Menu>
        {Object.entries(categoriesNames[category].subcategories).map(subcategory => (
          <Dropdown.Item as={Link} to={`/${category}/${subcategory[0]}`}>
            {subcategory[1]}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Categories = () => {
  const categories = [];

  for (const category in categoriesNames) {
    categories.push(
      Object.keys(categoriesNames[category as CategoriesCodes].subcategories).includes('empty') ? (
        <SingleCategory category={category as CategoriesCodes} />
      ) : (
        <DropdownCategories category={category as CategoriesCodes} />
      )
    );
  }

  return (
    <Dropdown simple text="Best tools">
      <Dropdown.Menu>{categories}</Dropdown.Menu>
    </Dropdown>
  );
};

const Examples = () => {
  return (
    <Dropdown simple text="UI Examples">
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/ui-examples">
          Helpful UI
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/css-is-awesome">
          CSS is awesome
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const Navigation = () => {
  return (
    <NavWrapper text>
      <NavItem active>
        <Link to="/leaderboard">Leaderboard</Link>
      </NavItem>
      <NavItem name="bestTools">
        <Categories />
      </NavItem>
      <NavItem active name="lastReleases">
        <Link to="/releases">Last releases</Link>
      </NavItem>
      <NavItem name="UIExamples">
        <Examples />
      </NavItem>
      <NavItem active as={Link}>
        <Link to="/learning">Learning resources</Link>
      </NavItem>
    </NavWrapper>
  );
};

const NavWrapper = styled(Menu)`
  &&& {
    ${mq({
      display: ['none', 'none', 'none', 'none', 'flex'],
    })}
  }
`;

const NavItem = styled(Menu.Item)`
  &&&&&& {
    font-weight: 600;
    margin: 0 5px;
    color: white;
    a:not(.pointing) {
      color: white;
      &:hover {
        opacity: 0.8;
      }
    }
    .text {
      color: white;
      &:hover {
        opacity: 0.8;
      }
    }
    .dropdown.icon {
      color: white;
      display: none;
    }
    .dropdown.link.item {
      .text {
        color: ${colors.black};
      }
      .dropdown.icon {
        color: ${colors.black};
        display: inline-block;
      }
    }
    &::after {
      content: '·';
      position: absolute;
      right: -7px;
    }
    &:last-child::after {
      content: '';
    }
  }
`;
