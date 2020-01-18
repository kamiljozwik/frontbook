/* eslint-disable @typescript-eslint/camelcase */
const js_animations =
  'Animations are a great way to make our website "not boring". Properly used animations can emphasize most important parts of the page and make user more engaged. Check this section and choose the one what is proper for you.';
const js_security =
  'In this section you will find great tools you can use to professionally authenticate and authorize users of your applications and also information how to protect your website from any kinds of cyber attacks.';
const js_cheatsheets =
  'Browsing long documentations to find a small code snippet or use case for simple solutions makes you think like "Why... why I have to do it again..." ? If so - stop doing it and use cheatsheets instead.';
const js_css_in_js =
  'You are feeling comfortable with JavaScript but writing CSS makes you cry? There is an alternative for you: "CSS in JSS". It is still CSS, but.. now you can write it inside JS files. Check this section if you want to know more.';
const js_data_layer =
  'Writing large application is always connected with some kind of data layer within the app. Check this section if you want to know what tools you can use to fetch, store, transform and distribute data in your app. ';
const js_data_visualization =
  'Sometimes one image is worth more than thousands words (or numbers), thus visualizing large amount of data can be easier understand by user. Having that in mind check out this section and start using great tools that are waiting here for you.';
const js_extensions =
  'JavaScript is great, but... it is not perfect. Using some language extensions, like type checking can bring us a tons of new functionalities and code quality. Sounds interesting? Click the title above.';
const js_frameworks =
  'JavaScript is known from its reach frameworks ecosystem. Thanks to it we can create great applications in a very efficient way. Check this section If you want to stay up to date with information regarding JavaScript frameworks ecosystem you should.';
const js_graphic =
  'Handling graphics on a page can be tricky and challenging task. Using big and not optimized images can significantly slow down page and discourage users from using again so using right tools and techniques is crucial in this area.';
const js_interactions =
  'In this section you will find all tools regarding scrolling, movement, popups, modals, notifications and a lots more than that. In short - everything that is related to interactions with user.';
const js_search =
  'Searching feature is one of the most important and also one of the most challenging to implement feature in any website  The purpose of this section is to help you create this functionality without hassle.';
const js_tests =
  'Nowadays writing automation tests is a very important part of applications development. It protects us from random, unintentional mistakes and errors. It is also crucial when using any CI or CD tools to deploy your app.';
const js_translations =
  'Using on a website only one language narrows a lot potential users. Do not limit yourself only to one country or one commonly used language - add translations and internationalization to you app and significantly increase the number of users.';
const js_utils =
  'Linting, validation, date manipulation, objects helpers and much much more tools that will make your daily contact with JavaScript even more enjoyable. It is one of the most important section in Frontobook, so do not forget to check it carefully.';
const js_ui =
  'In this section you will find great tools that help you creating great UI elements like menus, text editors, calendars, inputs, forms, etc. This is a must see section for every front-end developer.';

const jam_cms =
  'Content Management System (CMS) is a really powerful way to manage content displayed on a page. Thanks to it we can edit page content without touching the application code. Check this section and choose the best CMS fits for your needs.';
const jam_hosting =
  'JAM applications as a static pages can be hosted and served in a different way than traditional web applications. Thankfully "different" here means "easier" - sometimes with literally "one click". Check this section if you do not believe me.';
const jam_media =
  'In this section you will find places where you can store any media files like images, video, music, etc. and get them usually via application API which makes media management easier and independent from your code base.';
const jam_ssg =
  'Static site generator (SSG) is the crucial part of every JAM application. Here you create all the logic and layouts for your website and use API and/or Markdowns to fill it with content. Choosing the right SSG for your project is very important decision.';

const css_animations =
  'Animations are a great way to make our website "not boring". Properly used animations can emphasize most important parts of the page and make user more engaged. Check this section and choose the one what is proper for you.';
const css_cheatsheets =
  'Browsing long documentations to find a small code snippet or use case for simple solutions makes you think like "Why... why I have to do it again..." ? If so - stop doing it and use cheatsheets instead.';
const css_frameworks =
  'When creating prototypes or admin-like applications it is easier and much faster to use already created CSS styles gathered in frameworks rather than created them from scratch. CSS frameworks becoming more and more popular so it is worth to know the most popular ones.';
const css_processors =
  'Writing pure CSS styles that will work in almost all browser within all systems is really tough job. Thankfully we can use CSS processors which bring writing CSS to next level and simplify our work very much. This knowledge is crucial for every front-end developer.';
const css_utils =
  'If you think that creating fancy border shapes or filling backgrounds with multi color gradients is a hard task, then you should check this section - with right tools it is much easier than you might imagine.';

const ux_colors =
  'Choosing the right color palette for your website is much more important than you may think. Every great layout can be ruined by choosing an inappropriate colors. Check this section and do not make this mistake.';
const ux_design =
  'You have an idea how you site or app should look like but you do not know how to draw it or share your idea with others? Here you will find all the tools you can use to easily create mockups and whole design systems.';
const ux_fonts =
  'Looking for a perfect font for your application? There are other tools than Google Fonts - really. Check this section to find out more.';
const ux_graphics =
  'In this section you will find great resources which you can use to freely download great images or photos to add variety to your website. Do not hesitate to use it right now.';
const ux_icons =
  'Icons are great - they are small, lightweight, easy to understand and work great as a labels or small indicators. They are easy to use and users are usually familiar what they mean. In this section you can find a lot of great resources with first class icons.';
const ux_inspirations =
  'Looking for an inspiration for your next project? Do not waste your time any more and definitely check out this section to browse from most popular pages full of great UI/UX examples.';
const ux_logos =
  'If you are looking for a bunch of logos then using Google to find all of them can be very time consuming job. Instead use resources listed in this section. It is also good place if you are looking for an inspiration for your new logo.';

export const subcategoriesInfo = {
  js_animations,
  js_security,
  js_cheatsheets,
  'js_css-in-js': js_css_in_js,
  'js_data-visualization': js_data_visualization,
  'js_data-layer': js_data_layer,
  js_extensions,
  js_frameworks,
  js_graphic,
  js_interactions,
  js_search,
  js_tests,
  js_translations,
  js_utils,
  js_ui,
  jam_cms,
  jam_hosting,
  jam_media,
  jam_ssg,
  css_animations,
  css_cheatsheets,
  css_frameworks,
  css_processors,
  css_utils,
  ux_colors,
  ux_design,
  ux_fonts,
  ux_graphics,
  ux_icons,
  ux_inspirations,
  ux_logos,
};

export const categoriesNames = {
  js: {
    name: 'JavaScript',
    info:
      'Essential part of modern front-end and one of the most popular programming language in the world. Tests, extensions, helpers, security and lots more - everything you need to make great JS application without hassle.',
    color: '#D1BF20',
    subcategories: {
      animation: 'Animation',
      security: 'Security',
      cheatsheets: 'Cheatsheets',
      css_in_js: 'CSS in JS',
      data_layer: 'Data layer',
      data_visualization: 'Data visualization',
      extensions: 'Extensions',
      frameworks: 'Frameworks',
      graphic: 'Graphic',
      interactions: 'Interactions',
      search: 'Searching',
      tests: 'Tests',
      translations: 'Translations',
      utils: 'Utilities',
      ui: 'UI',
    },
  },
  jam: {
    name: 'JAM',
    info:
      'JAM Stack is the newest way of creating modern websites and simple applications. Mix of JavaScript, headless CMSes and Markdowns brings us a very efficient and much simpler way of creating blogs, SPAs and web applications.',
    color: '#00C7B7',
    subcategories: {
      jam_cms: 'CMS',
      jam_hosting: 'Hosting',
      jam_media: 'Media',
      jam_ssg: 'Static Site Generators',
    },
  },
  css: {
    name: 'CSS',
    info:
      'Web apps does not just have to work well, it has to look great too! Here comes the CSS - the beauty part of front-end. If you want to know it better and find best tools regarding this technology - this section is for you!',
    color: '#00B7C3',
    subcategories: {
      animations: 'Animations',
      cheatsheets: 'Cheatsheets',
      frameworks: 'Frameworks',
      processors: 'Procesors',
      utils: 'Utilities',
    },
  },
  seo: {
    name: 'SEO',
    info:
      'Even greatest and most efficient applications can be useless when potential users can not find it in the web. SEO is here to helps our apps improve their position in search engines like Google or Bing.',
    color: '#525E54',
    subcategories: {
      empty: 'empty',
    },
  },
  ide: {
    name: 'IDE',
    info:
      'IDE info enthusiastically integrate next-generation convergence for proactive bandwidth. Assertively deliver bricks-and-clicks leadership with installed base core competencies. ',
    color: '#767676',
    subcategories: {
      empty: 'empty',
    },
  },
  frontops: {
    name: 'FrontOps',
    info:
      'Coding web application is the hardest part in process of creation of our product. But is has to be accessible  somewhere outside our local machine. How to build, publish and deploy our application - check it here.',
    color: '#10893E',
    subcategories: {
      empty: 'empty',
    },
  },
  monitor: {
    name: 'Monitor',
    info:
      'Is my site online? Is it working properly? How many people are currently online? You never find answers to this questions without any monitoring tools constantly "watching" your website.',
    color: '#6B69D6',
    subcategories: {
      empty: 'empty',
    },
  },
  ux: {
    name: 'UX',
    info:
      'Creating websites without any mockups or at least simple sketches can significantly lengthen the process of development and brings us constant refactors. Do not do it. Use UX tools to be sure what you really want to build.',
    color: '#ce70c5',
    subcategories: {
      colors: 'Colors',
      design: 'Design',
      fonts: 'Fonts',
      graphics: 'Graphics',
      icons: 'Icons',
      inspirations: 'Inspirations',
      logos: 'Logos',
    },
  },
  utils: {
    name: 'Utilities',
    info:
      'There are some tools that hard to categorize into one of the above sections but are so great and helpful that has to be included in Frontbook. Check them, use them and make your daily work much more enjoyable experience.',
    color: '#8E8CD8',
    subcategories: {
      empty: 'empty',
    },
  },
};

/** Categories displayed on landing page */
export const activeCategories = ['js', 'css', 'jam', 'frontops', 'seo', 'monitor', 'ux', 'utils'];

/** Subcategories displayed with cards rathen than with tables */
export const nonTableSubcategories = [
  'js_cheatsheets',
  'jam_cms',
  'jam_hosting',
  'jam_media',
  'css_cheatsheets',
  'ux_colors',
  'ux_design',
  'ux_fonts',
  'ux_graphics',
  'ux_icons',
  'ux_inspirations',
  'ux_logos',
];
