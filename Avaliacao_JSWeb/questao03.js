// o uso de ... no parâmetro faz com que todos os parâmetros passados
// sejam agrupados em um único array
function imprimirParametros(...parametros){
    // passando por cada parâmetro através do forEach
    // para imprimir cada um no console
    parametros.forEach(parametro => console.log(parametro));
}

imprimirParametros("param1", "param2", 3, 4, 5);