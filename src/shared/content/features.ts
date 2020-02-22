export type Features = 'uiExamples' | 'amazingCss' | 'releases';
export interface DataKeys {
  title: string;
  description: string;
  image?: string;
  link?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraData?: any;
}
export type FeaturesData = { [key in Features]: DataKeys };

export const featuresData: FeaturesData = {
  uiExamples: {
    title: 'Helpful UI examples',
    description:
      'Check out examples of useful UI elements which you can use directly on your website or application. No funny or ridiculous stuff - only serious implementations here.',
    image: 'uiExamples',
    link: '/ui-examples',
  },
  amazingCss: {
    title: 'CSS is awesome',
    description:
      "Things that probably you won't use in production but show the full power and unlimited possibilities of CSS. Plus some simple and funny designs.",
    image: 'cssAwesome',
    link: '/css-is-awesome',
  },
  releases: {
    title: 'Keep up to date with your favourite tools',
    description: 'Check regularly for the latest releases and never let yourself be surprised by breaking changes',
    extraData: {
      title: 'Last releases',
      description:
        'Here you can find most important releases from last 30 days. Click "More" to see all releases from last month',
    },
  },
};
