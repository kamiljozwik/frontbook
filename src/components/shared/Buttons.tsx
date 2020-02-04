import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors } from '../../shared';

export const SimpleButton = styled(Link)`
  border: 1px solid ${colors.darkBlue};
  padding: 10px;
  width: 100px;
  text-align: center;
  color: ${colors.darkBlue};
  transition: 0.3s;
  border-radius: 6px;
  &:hover {
    background: ${colors.darkBlue};
    color: white;
  }
`;
