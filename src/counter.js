
const dicremer = document.getElementById("dicremer");
const incremer = document.getElementById("incremer");
const async = document.getElementById("async");
const state = document.getElementById("state");

let stateValue = 0;

function render() {
    state.textContent =  stateValue.toString();
}

dicremer.addEventListener("click", () => {
   stateValue--;
   render();
   console.log("salom");
});
incremer.addEventListener("click", () => {
   stateValue++;
   render();
});
async.addEventListener("click", () => {
    setTimeout(()=>{
        stateValue++;
        render();
    }, 2000);
});