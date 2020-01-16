import React, { CSSProperties } from 'react';
import {
  Animations,
  Security,
  Cheatsheets,
  Cssinjs,
  Extensions,
  Cms,
  DataLayer,
  Processing,
  DataVisualization,
  Graphic,
  Interactions,
  Search,
  Tests,
  Translations,
  Utils,
  Framework,
  Hosting,
  Media,
  Ssg,
  Colors,
  Design,
  Fonts,
  Icons,
  Inspirations,
  Logos,
  UI,
} from './subcategories';
import { Placeholder } from '.';
import { Subcategory } from '../../shared';

interface CategoryImageProps {
  code: Subcategory;
  style?: CSSProperties;
}

export const SubcategoryImage = ({ code, style }: CategoryImageProps) => {
  switch (code) {
    case 'js_animations':
    case 'css_animations':
      return <Animations style={style} />;
    case 'js_security':
      return <Security style={style} />;
    case 'js_css-in-js':
      return <Cssinjs style={style} />;
    case 'js_cheatsheets':
    case 'css_cheatsheets':
      return <Cheatsheets style={style} />;
    case 'js_data-layer':
      return <DataLayer style={style} />;
    case 'js_data-visualization':
      return <DataVisualization style={style} />;
    case 'js_graphic':
    case 'ux_graphics':
      return <Graphic style={style} />;
    case 'js_interactions':
      return <Interactions style={style} />;
    case 'js_search':
      return <Search style={style} />;
    case 'js_tests':
      return <Tests style={style} />;
    case 'js_frameworks':
    case 'css_frameworks':
      return <Framework style={style} />;
    case 'js_extensions':
      return <Extensions style={style} />;
    case 'js_translations':
      return <Translations style={style} />;
    case 'js_ui':
      return <UI style={style} />;
    case 'js_utils':
    case 'css_utils':
      return <Utils style={style} />;
    case 'css_processors':
      return <Processing style={style} />;
    case 'jam_cms':
      return <Cms style={style} />;
    case 'jam_hosting':
      return <Hosting style={style} />;
    case 'jam_media':
      return <Media style={style} />;
    case 'jam_ssg':
      return <Ssg style={style} />;
    case 'ux_colors':
      return <Colors style={style} />;
    case 'ux_design':
      return <Design style={style} />;
    case 'ux_fonts':
      return <Fonts style={style} />;
    case 'ux_icons':
      return <Icons style={style} />;
    case 'ux_inspirations':
      return <Inspirations style={style} />;
    case 'ux_logos':
      return <Logos style={style} />;
    default:
      return <Placeholder style={style} />;
  }
};
