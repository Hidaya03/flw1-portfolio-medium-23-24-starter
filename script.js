let contents = document.querySelector(".content");
let projectsBtn = document.querySelector(".projectsButton");
console.log(contents)
console.log(projectsBtn)
projectsBtn.addEventListener("click", function (){
 contents.innerHTML = "contents";
});

