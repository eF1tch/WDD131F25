// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { 
        sectionNum: 1, 
        roomNum: 'STC 353', 
        enrolled: 26, 
        days: 'TTh', 
        instructor: 'Bro T'
    },
    { 
        sectionNum: 2, 
        roomNum: 'STC 347', 
        enrolled: 28, 
        days: 'TTh', 
        instructor: 'Sis A'
    }],
    
  updateEnrollment: function (sectionNum, action) {
    console.log("section to update:", sectionNum, "action", action);
    const theSection = this.sections.find(
      (section)=> sectionNum == section.sectionNum
    );
    if (action === "enroll") {
      theSection.enrolled++;
    }
    else if (action === "drop") {
      theSection.enrolled--;
    }
    renderSections(this.sections);
  }
};


//Create a function to set the name and number of the course in the HTML. Pass the course object into your function (remember that you can use the dot notation to access the parts of an object.)

function renderHeader(course) {
    const courseName = document.querySelector("#courseName")
    const courseCode = document.querySelector("#courseCode")
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function sectionTemplate(section) {
    return` <tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>`
}

function renderSections(sections) {
    const sectionsEl = document.querySelector("#sections")
    const html = sections.map(sectionTemplate)
    sectionsEl.innerHTML = html.join("")
}

renderHeader(aCourse);
renderSections(aCourse.sections);

function clickHandler(event) {
  const sectionInput = document.querySelector("#sectionNumber");
  const sectionNum = sectionInput.value;
  const action = event.target.id === "enrollStudent" ? "enroll" : "drop";
  aCourse.updateEnrollment(sectionNum, action);
}

document
  .querySelector("#enrollStudent")
  .addEventListener("click", clickHandler);
document
  .querySelector("#dropStudent")
  .addEventListener("click",clickHandler);


