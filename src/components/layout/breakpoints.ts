import facepaint from 'facepaint';

export const mq = facepaint([
  '@media(max-width: 400px)',
  '@media(min-width: 400px)',
  '@media(min-width: 600px)',
  '@media(min-width: 900px)',
  '@media(min-width: 1200px)',
], {
  literal: true,
  overlap: false,
});
