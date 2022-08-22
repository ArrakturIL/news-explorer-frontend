
export const parseKeyword = (keywords) => {
  if (!Array.isArray(keywords)) {
    return null;
  }
  if (keywords.length === 0) {
    return null;
  }
  const keywordMap = {};
  keywords.forEach((keyword) => {
    keywordMap[keyword] = keywordMap[keyword] ? keywordMap[keyword] + 1 : 1;
  });
  const keywordList = Object.keys(keywordMap).sort(
    (a, b) => keywordMap[b] - keywordMap[a]
  );
  return keywordList.slice(0, 3);
};

