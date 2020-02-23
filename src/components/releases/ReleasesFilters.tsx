import React, { useCallback } from 'react';
import { Popularity, Tags } from '../../pages/releases';
import styled from '@emotion/styled';
import { Label, Icon } from 'semantic-ui-react';
import { colors } from '../../shared';

interface ReleasesFiltersProps {
  starsFilter: Popularity;
  tagFilter: Tags;
  setStarsFilter: React.Dispatch<React.SetStateAction<Popularity>>;
  setTagFilter: React.Dispatch<React.SetStateAction<Tags>>;
  popularLevel?: number;
  veryPopularLevel?: number;
}

export const ReleasesFilters = ({
  starsFilter,
  tagFilter,
  setStarsFilter,
  setTagFilter,
  popularLevel,
  veryPopularLevel,
}: ReleasesFiltersProps) => {
  const filterStars = useCallback(
    (e, data) => {
      const result =
        data.color === 'yellow' ? Popularity.veryPopular : data.color === 'blue' ? Popularity.popular : Popularity.all;
      setStarsFilter(result);
    },
    [setStarsFilter]
  );

  const filterTags = useCallback(
    (e, data) => {
      const result = data.children.toLowerCase() as 'all' | 'patch' | 'minor' | 'major';
      setTagFilter(Tags[result]);
    },
    [setTagFilter]
  );

  const iconProps = {
    name: 'star',
    size: 'large',
    onClick: filterStars,
    link: true,
  };

  const labelProps = {
    size: 'large',
    onClick: filterTags,
  };

  return (
    <ReleasesFiltersWrapper>
      <Filter>
        <FilterName>Popularity:</FilterName>
        <FilterOptions>
          <OptionIcon
            title={`All tools`}
            color="grey"
            {...iconProps}
            active={(starsFilter === Popularity.all).toString()}
          />
          <OptionIcon
            title={`More than ${popularLevel} stars`}
            color="blue"
            {...iconProps}
            active={(starsFilter === Popularity.popular).toString()}
          />
          <OptionIcon
            title={`More than ${veryPopularLevel} stars`}
            color="yellow"
            {...iconProps}
            active={(starsFilter === Popularity.veryPopular).toString()}
          />
        </FilterOptions>
      </Filter>
      <Filter>
        <FilterName>Release type:</FilterName>
        <FilterOptions>
          <OptionLabel {...labelProps} basic={tagFilter !== Tags.all} color="grey">
            All
          </OptionLabel>
          <OptionLabel {...labelProps} basic={tagFilter !== Tags.patch} color="teal">
            Patch
          </OptionLabel>
          <OptionLabel {...labelProps} basic={tagFilter !== Tags.minor} color="purple">
            Minor
          </OptionLabel>
          <OptionLabel {...labelProps} basic={tagFilter !== Tags.major} color="red">
            Major
          </OptionLabel>
        </FilterOptions>
      </Filter>
    </ReleasesFiltersWrapper>
  );
};

const ReleasesFiltersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 20px;
`;

const FilterName = styled.h4`
  display: inline-block;
  margin: 0 5px 0 0;
`;

const FilterOptions = styled.div`
  display: inline-block;
`;

const OptionLabel = styled(Label)`
  &&& {
    cursor: pointer;
    margin: 2px;
    &&&:hover {
      background: ${colors.grey};
    }
  }
`;

const OptionIcon = styled(Icon)<{ active: string }>`
  &&& {
    position: relative;
    margin: 5px;
    opacity: ${props => (props.active === 'true' ? 1 : 0.3)};
    &:hover {
      opacity: 1;
    }
  }
`;
