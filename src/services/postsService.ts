import { tranformPosts } from '../transformations/postsTranformation';

import { IPost } from '../types/post';

export const fetchPosts = async (subreddit: string): Promise<IPost[]> => {
  try {
    const rawResponse: any = await fetch(`https://reddit.com/r/${subreddit}.json`);
    const parsedResponse = await rawResponse.json();
    return tranformPosts(parsedResponse);
  } catch (e) {
    console.error(e);
    return [];
  }
};
