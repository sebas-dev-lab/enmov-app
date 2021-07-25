const averageScore = (reviews) => {
  let totalScore = 0;
  reviews.map((item) => {
    totalScore += item.score;
  });
  let average = totalScore / reviews.length;
  return average;
};

module.exports = {
  averageScore,
};
