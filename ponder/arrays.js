// Activity One: map
const steps = ["one", "two", "three"];

function listTemplate(steps){
    return `<li>${steps}</li>`;
}
const stepsHTML = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHTML.join("");

//Activity Two: map

const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}

const gpaPoints = grades.map(convertGradeToPoints);

//Activity Three: Reduce

const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});

// Activity Four: Filter

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const shortWords = words.filter(function (word){
    return word.length < 6;
})