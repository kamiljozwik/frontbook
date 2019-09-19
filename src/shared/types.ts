export type CategoriesCodes = 'js' | 'css';
export type Subcategories =
  | 'js_animations'
  | 'js_authorization';

export interface ListItem {
  name: string;
  slogan: {
    slogan: string
  };
  github: string;
  fields: any;
}

export interface SubcategoryNode {
  node: ListItem;
}

export interface SubcategoryProps {
  data: {
    allContentfulToolEntry: {
      edges: SubcategoryNode[]
    }
  };
  pageContext: {
    subcategory: string;
  };
}
