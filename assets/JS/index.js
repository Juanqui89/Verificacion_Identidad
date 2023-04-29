const identidad = {
    nombre: 'juan',
    DNI: 123456,
    fecha: '29-04-2023'
};

function validarIdentidad(){
    if(identidad.nombre === 'juan' && identidad.DNI === 123456 && identidad.fecha === '29-04-2023'){
       alert("Validacion correcta");
    }else{
        alert("Validacion incorrecta por favor asegurese de entrar los datos correctos");
    };
};

validarIdentidad(identidad);

