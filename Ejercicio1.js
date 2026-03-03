
function obtenerTop3Precios(precios) {
   
    let max1 = -1; 
    let max2 = -1; 
    let max3 = -1; 
    
    for (let i = 0; i < precios.length; i++) {
        let precioActual = precios[i];

        
        if (precioActual > max1) {
           
            max3 = max2; 
            max2 = max1; 
            max1 = precioActual; 
            
        } else if (precioActual > max2) {
           
            max3 = max2;
            max2 = precioActual;
            
        } else if (precioActual > max3) {
            
            max3 = precioActual;
        }
    }

    
    let resultado = [];

   
    if (precios.length >= 1) {
        resultado.push(max1); 
    }
    if (precios.length >= 2) {
        resultado.push(max2); 
    }
    if (precios.length >= 3) {
        resultado.push(max3); 
    }

    
    return resultado;
}


console.log(obtenerTop3Precios([10, 50, 20, 90, 30])); 


console.log(obtenerTop3Precios([15, 8])); 