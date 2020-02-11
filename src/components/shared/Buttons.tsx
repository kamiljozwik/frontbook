import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors } from '../../shared';

export const LinkButton = styled(Link)`
  background: ${colors.logoDark};
  padding: 10px;
  width: 100px;
  text-align: center;
  color: white;
  font-weight: 600;
  transition: 0.3s;
  border-radius: 6px;
  &:hover {
    background: ${colors.darkBlue};
    color: white;
  }
`;
