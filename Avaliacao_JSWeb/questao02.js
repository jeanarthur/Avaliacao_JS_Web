function logApos5Segundos(mensagem){
    // setTimeout recebe uma função de callback como primeiro parametro
    // e a executa após o tempo, em ms, passado no segundo parametro
    setTimeout(()=>{ console.log(mensagem); }, 5000);
}

logApos5Segundos("Mensagem após 5 segundos de espera!");