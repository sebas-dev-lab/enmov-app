const postConstantValues = {
  max_score: 100,
  min_score: 1,
  type: {
    veryBad_score: {
      min: 1,
      max: 30,
    },
    bad_score: {
      min: 31,
      max: 50,
    },
    good_score: {
      min: 51,
      max: 70,
    },
    very_good_score: {
      min: 71,
      max: 84,
    },
    excelent_score: {
      min: 85,
      max: 100,
    },
  },
};

const setValueScore = (score) => {
  let status = "";
  for (let i in postConstantValues.type) {
    if (
      score >= postConstantValues.type[i].min &&
      score <= postConstantValues.type[i].max
    ) {
      status = i;
    }
  }
  return status;
};

module.exports = {
  postConstantValues,
  setValueScore,
};
