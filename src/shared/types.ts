export type CategoriesCodes = 'js' | 'css' | 'seo' | 'ide' | 'build' | 'monitor' | 'ux' | 'utils';
export type Subcategory =
  | 'js_animations'
  | 'js_authorization'
  | 'js_cheatsheets'
  | 'js_data-visualization'
  | 'js_data-layer'
  | 'js_extensions'
  | 'js_frameworks'
  | 'js_graphic'
  | 'js_interactions'
  | 'js_linters'
  | 'js_package-managers'
  | 'js_search'
  | 'js_tests'
  | 'js_translations'
  | 'js_utils'
  | 'css_animations'
  | 'css_cheatsheets'
  | 'css_css-in-js'
  | 'css_frameworks'
  | 'css_processors'
  | 'css_utils'
  | 'ux_colors'
  | 'ux_design'
  | 'ux_fonts'
  | 'ux_graphics'
  | 'ux_icons'
  | 'ux_inspirations'
  | 'ux_logos';

export interface ListItem {
  name: string;
  subcategory: string;
  slogan: {
    slogan: string
  };
  github?: string;
  website?: string;
  fields: {
    githubData?: {
      stars?: number;
      repository: {
        name: string;
        description?: string;
        diskUsage: number;
        issues: {
          totalCount: number;
        }
        stargazers: {
          totalCount: number;
        }
        licenseInfo: {
          spdxId?: string;
          url?: string;
        }
        pushedAt: Date;
      }
    };
    npmData?: {
      downloads: number;
    };
  };
}

export interface SubcategoryNode {
  node: ListItem;
}

export interface LinkEntry {
  node: {
    title: string;
    url: string;
  };
}

export interface SubcategoryProps {
  data: {
    subcategory: {
      edges: SubcategoryNode[]
    };
    subcategories: {
      distinct: string[];
    };
    links: {
      edges: LinkEntry[];
    }
  };
  pageContext: {
    subcategory: string;
  };
}

export interface CategoryPageNoSubcategories {
  data: {
    allContentfulToolEntry: {
      edges: SubcategoryNode[]
    }
  };
}

export interface CategoryPage {
  data: {
    allContentfulToolEntry: {
      distinct: string[]
    }
  };
}
