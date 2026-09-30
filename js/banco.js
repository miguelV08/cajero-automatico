let restMount;
let Mountfifty = 0;
let MountTwenty = 0;
let mountTen = 0;

function retiro(){
    //defino el valor del id del input
    valorRetiro = parseInt(document.getElementById('valor').value);

    //verificar si el valor no es negativo
    if (valorRetiro > 0 ){
        //verificar si el valor es multiplo de 10000
        if(valorRetiro % 10000 == 0){

            //si el valor es mayor a 50000
            if(valorRetiro > 50000){
                Mountfifty = Math.trunc(valorRetiro / 50000); //math.trunc para tomar solo la parte real
                restMount = valorRetiro % 50000; // esto es para saber lo que sobra 
                
                if(restMount >= 20000){
                    MountTwenty = Math.trunc(restMount / 20000);
                    restMount = valorRetiro % 20000

                    if(restMount >= 10000){
                        mountTen = restMount / 10000;
                    }
                    else{}
                    
                }
                else{}

            }
            else if(valorRetiro >= 20000){
                MountTwenty = Math.trunc(valorRetiro / 20000);
                restMount = valorRetiro % 20000;
                if (restMount >= 10000){
                    mountTen = restMount / 10000;
                }
            }

            else{
                mountTen = valorRetiro / 10000;
            }

             //defino la variable que me va a modificar en el dom la cantidad de billetes
    divResumen = document.getElementById('total');
    if(!divResumen){
        divResumen = document.createElement('div')
        divResumen.id = 'totalGlobal';
        document.body.appendChild(divResumen);
    }

    divResumen.innerHTML = "<h4> total del retiro: " + valorRetiro + "</h4>" +
                            "<h3> billetes de 50000: " + Mountfifty + "</h3>" +
                            "<h3> billetes de 20000: " + MountTwenty + "</h3>" +
                            "<h3> billetes de 10000: " + mountTen + "</h3>" 
        }

        else{
            alert('ingresa un valor que sea multiplo de 10000, por ejemplo: 10000, 20000, etc.');
            valorNulo()
        }
    }

    else{
        alert('no se puede ingresar valores negativos')
        valorNulo()
    }



    
}
//funcion por si en caso de ingresarse un valor negativo o que no corresponde a las caracterisiticas solicitadas
//no se haga ningun calculo apra que no afecte el programa
function valorNulo(){
    valorRetiro = parseInt(document.getElementById('valor').value = "")
}
//esto es para cuando se requiera hacer un nuevo retiro, recarga la pagina y define el valor acumulado como 0
function recarga(){
    location.reload();
    valorNulo();
}