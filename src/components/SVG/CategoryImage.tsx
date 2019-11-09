import { Placeholder, Js, Css, Jam, Frontops, Seo, Monitor, Ux, Utils } from '.';
import { CategoriesCodes } from '../../shared';

interface CategoryImageProps {
  code: CategoriesCodes;
  style?: any;
}

export const CategoryImage = ({ code, style }: CategoryImageProps) => {
  switch (code) {
    case 'js':
      return <Js style={style} />;
    case 'css':
      return <Css style={style} />;
    case 'jam':
      return <Jam style={style} />;
    case 'frontops':
      return <Frontops style={style} />;
    case 'seo':
      return <Seo style={style} />;
    case 'monitor':
      return <Monitor style={style} />;
    case 'ux':
      return <Ux style={style} />;
    case 'utils':
      return <Utils style={style} />;
    default:
      return <Placeholder style={style} />;
  }
};
