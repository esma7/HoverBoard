const container = document.querySelector("#container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"]



for(let i = 0; i<500; i++){
    const square = document.createElement("div");
    square.classList ="square";
    container.append(square);
}


const randomColor = () =>{
    const colorRandom =colors[Math.floor(Math.random() *  colors.length)];
    // console.log(colorRandom);
    return colorRandom;
}



const addColor =(element) =>{
    const color = randomColor();
    element.style.background = color;
}

const removeColor = (element) =>{
    element.style.background ="#1d1d1d";
}


container.addEventListener("mouseover", (e) => {
   const  element = e.target;
   if(element.classList.contains("square")){
    addColor(element);
   }
});
container.addEventListener("mouseout", (e) => {
   const  element = e.target;
   if(element.classList.contains("square")){
    removeColor(element);
   }
});






