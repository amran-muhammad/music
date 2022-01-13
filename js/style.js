// Search icon
const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("input");
searchBtn.onclick = () => {
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
}
cancelBtn.onclick = () => {
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
}
// Counter Section
document.addEventListener("DOMContentLoaded", () => {
    function counter(id,start,end,duration){
        let obj= document.getElementById(id),
        current=start,
        range = end-start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration/range)),
        timer= setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval (timer);
            }
        },step);
    }
    counter("count1",0,1240,3000);
    counter("count2",0,2000,3000);
    counter("count3",0,1000,3000);
});