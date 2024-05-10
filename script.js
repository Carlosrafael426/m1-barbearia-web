const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {

    for(let i = 0; i < barbearia.cortes.length; i++){
        if(barbearia.cortes[i].id === id){
            return barbearia.cortes[i];
        }
    }
    return "Corte não encontrado"
}    


function buscaBarbaPorId(id) {
    for(let j = 0; j < barbearia.barbas.length; j++){
        if(barbearia.barbas[j].id === id){
            return barbearia.barbas[j];
        }
    }
    return "Barba não encontrada"
}

function verificaStatusBarbearia() {
    if(barbearia[2] === false){
        return "Estamos fechados";
    }

    return "Estamos abertos";
}

function retornaTodosCortes() {
    let tiposDeCortes = barbearia.cortes;
    return tiposDeCortes;
   
}

function retornaTodasBarbas() {
    let tiposDeBarbas = barbearia.barbas;
    return tiposDeBarbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
}

function atualizarServico(lista, id, valor, tipo) {
    
}

function calculaTotal(pedido) {
}
  
  
