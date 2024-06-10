







document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nombreTarjeta = document.getElementById('nombre-tarjeta').value;
    var numeroTarjeta = document.getElementById('numero-tarjeta').value;
    var fechaExpiracion = document.getElementById('fecha-expiracion').value;
    var codigoCVC = document.getElementById('codigo-cvc').value;
    var codigoTienda = document.getElementById('codigo-tienda').value;
    
   
    console.log('Nombre en la tarjeta:', nombreTarjeta);
    console.log('Número de tarjeta:', numeroTarjeta);
    console.log('Fecha de expiración:', fechaExpiracion);
    console.log('Código CVC:', codigoCVC);
    console.log('Código de tienda:', codigoTienda);
    

});

