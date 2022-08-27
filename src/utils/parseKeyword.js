
export const parseKeyword = (keywords) => {
  if (!Array.isArray(keywords)) return null;
  if (keywords.length === 0) return null;
  const keywordCount = {};
  keywords.forEach((keyword) => {
    if (keywordCount[keyword]) {
      keywordCount[keyword] += 1;
    } else {
      keywordCount[keyword] = 1;
    }
  });
  const sortedKeywords = Object.keys(keywordCount).sort(
    (a, b) => keywordCount[b] - keywordCount[a]
  );
  const topThree = sortedKeywords.slice(0, 3);
  const other = sortedKeywords.slice(3);
  const keywordsString = topThree.join(', ');
  return `${keywordsString}${other.length > 0 ? `, ${other.join(', ')}` : ''}`;
};

