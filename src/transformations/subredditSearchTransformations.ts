import { prop } from '../utils/object';
import { ISubredditSearchResult } from '../types/subredditSearch';

const transformSearchResult = ({
  display_name_prefixed,
  subscribers,
  icon_img,
}: any): ISubredditSearchResult => ({
  subscribers,
  namePrefixed: display_name_prefixed,
  iconUrl: icon_img,
});

export const transformSubredditSearchResults = (response: any): ISubredditSearchResult[] => {
  const rawResult = prop(response, 'data', 'children');
  if (rawResult && rawResult.length) {
    return rawResult.map(({ data }: any) => transformSearchResult(data));
  }
  return [];
};
