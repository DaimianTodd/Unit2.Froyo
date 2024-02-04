let promptString = prompt("please provide froyo flavors comma separated");

function froyoFlavors(){
    let trimedValuesArray = []
    let valuesArray = promptString.split(",")
    valuesArray.forEach(value => trimedValuesArray.push(value.trim()))
    
        let flavorNumbers ={}
        console.log(flavorNumbers)
        for (let i=0; i<trimedValuesArray.length; i++){
            let flavor = trimedValuesArray[i];
            if(!flavorNumbers[flavor]){
                console.log(!flavorNumbers[flavor])
                flavorNumbers[flavor] = 1;
            }else{
                flavorNumbers[flavor]++;
            }    
        }    
        console.log(flavorNumbers)
    }        

    
    froyoFlavors()
        
