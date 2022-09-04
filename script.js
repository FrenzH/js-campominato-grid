console.log('JS OK!')

const button = document.getElementById('generator-btn');
let grid = document.getElementById('grid');

const arr1=[]


button.addEventListener('click', CellsGenerator);













function CellsGenerator (){
    
    grid.innerHTML='';
    for(let i=0 ; i < 100 ; i++){
        const cells = document.createElement('div');
        grid.append(cells);
        cells.classList.add('cells');
        let arrnumb = genarray(100);
        cells.innerHTML=arrnumb[i]


        
        
        

        
        
        
        
    }
    
    
    
    }
   

        
        

       
    
    
    



function getRandomNumber(min,max){
    const range = max - min; 
    const random = Math.floor(Math.random()*range)  
    const result = min + random;
    return result;
}



function genarray(max) {
    let array = []
    while (array.length < max) {
        let number = getRandomNumber(0, 100);
        let numbernew = true;

        let i = 0
        do {
            if (number === array[i]) {
                numbernew = false;
            }
            i++
        } while (i < array.length)

        if (numbernew) {
            array.push(number)
        }
    }
    return array;
    
    
}