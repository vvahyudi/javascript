const cekGrade = (score) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (score >= 0 && score <= 100) {
        resolve(score);
      } else {
        reject(new Error("Nilai harus bernilai 0 - 100!"));
      }
    }, 3000);
  });
};

const scoreToGrade = (score) => {
  let grade = "";
  if (score >= 90 && score <= 100) grade = "A";
  else if (score >= 80) grade = "B";
  else if (score >= 70) grade = "C";
  else if (score >= 60) grade = "D";
  else grade = "E";
  console.log(`Nilai ${score} jika dikonversi jadi ${grade}`);
};

cekGrade(80)
  .then(scoreToGrade)
  .catch((err) => console.log(err));


