const postConstantValues = {
  max_score: 100,
  min_score: 1,
  type: {
    veryBad_score: [1, 30],
    bad_score: [31, 50],
    good_score: [51, 70],
    very_good_score: [71, 84],
    excelent_score: [85, 100],
  },
};

const setValueScore = (score) => {
  let status = "";
  for (let i in Object.keys(postConstantValues.type)) {
    if (postConstantValues.type[i][1] >= score) {
      status = i;
    }
  }
};

module.exports = {
  postConstantValues,
};
