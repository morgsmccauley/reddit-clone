export const fetchPosts = async (subreddit: string) => {
  const rawResponse: any = await fetch(`https://reddit.com/r/${subreddit}.json`);
  const parsedResponse = await rawResponse.json();
  const posts = parsedResponse.data.children.map(({ data }: any) => data);
  return posts;
};
