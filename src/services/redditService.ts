import { tranformPosts } from '../transformations/postsTranformation';

import { IPost } from '../types/post';

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

export const searchSubreddits = async (query: string): Promise<string[]> => {
  try {
    const response = await fetchAndParse(`https://reddit.com/subreddits/search.json?q=${query}`);
    return response.data.children.map(
      ({ data }: any) => data.display_name_prefixed,
    );
  } catch (e) {
    console.error(e);
    return [];
  }
};
