export type Features = 'uiExamples' | 'amazingCss';
export interface DataKeys {
  title: string;
  description: string;
  image: string;
  link: string;
}
export type FeaturesData = { [key in Features]: DataKeys };

export const featuresData: FeaturesData = {
  uiExamples: {
    title: 'Helpful UI examples',
    description:
      'Check out examples of useful UI elements which you can use directly on your website or application. No funny or ridiculous stuff - only serious implementations here.',
    image: '',
    link: '/ui-examples',
  },
  amazingCss: {
    title: 'CSS is awesome',
    description:
      "Things that probably you won't use in production but show the full power and unlimited possibilities of CSS. Plus some simple and funny designs.",
    image: '',
    link: '/css-is-awesome',
  },
};
