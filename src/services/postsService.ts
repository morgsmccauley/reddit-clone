import { tranformPosts } from '../transformations/postsTranformation';

import { IPost } from '../types/post';

export const fetchPosts = async (subreddit: string): Promise<IPost[]> => {
  const rawResponse: any = await fetch(`https://reddit.com/r/${subreddit}.json`);
  const parsedResponse = await rawResponse.json();
  return tranformPosts(parsedResponse);
};
