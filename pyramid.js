
function pyramid(rows) {

 
   for(let i = 0 ; i < rows ; i++){
        str = "";
        for(let j = 0 ; j < rows ; j++){
            
            if ( i === j || i + j === rows - 1 ) {
              str += "X";
            } else {
              str += "-";
            }
            // console.log('result ', i+j);
            // console.log("result Rows", rows - 1);
        }

        
        console.log(str);
      
   }

}

pyramid(5);


