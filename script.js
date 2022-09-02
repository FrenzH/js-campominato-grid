console.log('JS OK!')

const button = document.getElementById('generator-btn');
const grid = document.getElementById('grid');
button.addEventListener('click', CellsGenerator());












function CellsGenerator (){
    
    
    for(let i=1 ; i <= 100 ; i++){
        const cells = document.createElement('div');
        grid.append(cells)
    }
}


function getRandomNumber(min,max){
    const range = max - min; 
    const random = Math.floor(Math.random()*range)  
    const result = min + random;
    return result;
}