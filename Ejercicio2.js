
function calcularFactura(n, precios, cupon, envio) {
    
    let subtotal = 0;
    for (let i = 0; i < n; i++) {
        subtotal = subtotal + precios[i]; 
    }

    let descuento = 0; 

    if (cupon === "DESC10") {
       
        descuento = subtotal * 0.10; 

    } else if (cupon === "DESC20") {
        
        if (subtotal >= 200000) {
            descuento = subtotal * 0.20;
        }

    } else if (cupon === "FREESHIP") {
        
        envio = 0; 

    } else if (cupon === "NONE") {
        
        descuento = 0;
    }

    
    let base = subtotal - descuento;

    let iva = base * 0.19;
    
    iva = Math.round(iva); 

    let total = base + iva + envio;

   
    console.log("SUBTOTAL " + subtotal);
    console.log("DESCUENTO " + descuento);
    console.log("IVA " + iva);
    console.log("TOTAL " + total);
}


console.log();
calcularFactura(3, [10000, 20000, 30000], "NONE", 5000);



console.log();
calcularFactura(2, [150000, 100000], "DESC20", 10000);



console.log("--- Prueba 3 ---");
calcularFactura(4, [5000, 5000, 5000, 5000], "FREESHIP", 15000);
