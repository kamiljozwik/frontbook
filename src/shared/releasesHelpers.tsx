import { Release, ListItem } from './types';
import moment from 'moment';
import ms from 'ms';

export const getReleaseType = (releases: Release[]) => {
  const tagRegEx = /(\d+\.)(\d+\.)(\d+)/gm;
  const oldTag = releases[0].tagName;
  const newTag = releases[1].tagName;
  const [mainOldTag] = oldTag.split('-');
  const [mainNewTag] = newTag.split('-');

  const oldTagClear = mainOldTag.match(tagRegEx);
  const newTagClear = mainNewTag.match(tagRegEx);

  const [oldMajor, oldMinor, oldPatch] = oldTagClear ? oldTagClear[0].split('.') : [];
  const [newMajor, newMinor, newPatch] = newTagClear ? newTagClear[0].split('.') : [];

  const releaseType =
    oldMajor !== newMajor && oldMajor < newMajor
      ? 'major'
      : oldMinor !== newMinor
      ? 'minor'
      : oldPatch !== newPatch
      ? 'patch'
      : 'other';
  return [releaseType, newMajor >= oldMajor];
};

/** Update array with releases from last 30 days */
export const getLastReleases = (ItemData?: ListItem) => {
  const now = moment();
  const publishedAt =
    ItemData?.fields.githubData && ItemData?.fields.githubData.repository.releases.nodes[1]
      ? ItemData?.fields.githubData.repository.releases.nodes[1].publishedAt
      : '2000-01-01';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const duration = moment.duration(now.diff(publishedAt)) as any;
  return duration['_milliseconds'] < ms('30d');
};
