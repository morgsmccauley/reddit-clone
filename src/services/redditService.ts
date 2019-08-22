import { tranformPosts } from '../transformations/postsTranformation';
import { transformSubredditSearchResults } from '../transformations/subredditSearchTransformations';

import { IPost } from '../types/post';
import { ISubredditSearchResult } from '../types/subredditSearch';

const fetchAndParse = async (uri: string) => (await fetch(uri)).json();

export const fetchPosts = async (subreddit: string): Promise<IPost[]> => {
  try {
    const response = await fetchAndParse(`https://reddit.com/${subreddit}.json`);
    await searchSubreddits('aww');
    return tranformPosts(response);
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const searchSubreddits = async (query: string): Promise<ISubredditSearchResult[]> => {
  try {
    const response = await fetchAndParse(`https://reddit.com/subreddits/search.json?q=${query}`);
    return transformSubredditSearchResults(response);
  } catch (e) {
    console.error(e);
    return [];
  }
};
