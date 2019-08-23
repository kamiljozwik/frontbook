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
