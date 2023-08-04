// "Following" section - GET https://cross-platform.rp.devfactory.com/following
// Returns the next content item for the user’s Following section
// "For you" section - GET https://cross-platform.rp.devfactory.com/for_you
// Returns the next content item for the user’s For You section
// Reveal answer - GET https://cross-platform.rp.devfactory.com/reveal?id=X
// Reveal the correct answer for an MCQ question with id = X

export const revealAnswer = ({questionId}: {questionId: string}) => {
  console.log(
    `https://cross-platform.rp.devfactory.com/reveal?id=${questionId}`,
  );
  return fetch(
    `https://cross-platform.rp.devfactory.com/reveal?id=${questionId}`,
  );
};
