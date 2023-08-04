export const revealAnswer = ({questionId}: {questionId: string}) => {
  return fetch(
    `https://cross-platform.rp.devfactory.com/reveal?id=${questionId}`,
  );
};

export const getFollowingPost = () => {
  return fetch('https://cross-platform.rp.devfactory.com/following');
};

export const getForYouPost = () => {
  return fetch('https://cross-platform.rp.devfactory.com/for_you');
};
