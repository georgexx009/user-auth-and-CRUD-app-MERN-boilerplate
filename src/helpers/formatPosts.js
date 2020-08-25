export const formatAllPosts = rawPosts => {
  return rawPosts.map(post => {
    const { _id, content, userId } = post;
    return {
      _id,
      content,
      username: userId.username,
    };
  });
};

export const formatUserPosts = rawPosts => {
  return rawPosts.posts.map(post => {
    const { _id, content } = post;
    return {
      _id,
      content,
      username: rawPosts.username,
    };
  });
};
