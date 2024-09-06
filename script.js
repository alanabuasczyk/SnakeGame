//Função que usa o teclado para determinar em qual direção o objeto irá se movimentar.
function leDoTeclado(evento) {


    if(evento.keyCode === cima) {



    } else if (evento.keyCode === baixo) {
        sentidoAtual = baixo;


    } else if (evento.keyCode === esquerda) {
        sentidoAtual = esquerda;


    } else if (evento.keyCode === direita) {
        sentidoAtual = direita;
    }
    }

    //Função para fazer a cauda seguir a cabeça da cobra.
    function deslocarCauda(){

        //se a cobra estiver se deslocando para direita:
        if (sentidoAtual === direita) {
            cauda.unshift([cauda[0][0]+15,cauda[0][1]]);
            cauda.pop();
        }
        if (sentidoAtual === esquerda) {
            cauda.unshift([cauda[0][0]-15,cauda[0][1]]);
            cauda.pop();

    }
    if (sentidoAtual === cima) {
        cauda.unshift([cauda[0][0],cauda[0][1]-15]);
        cauda.pop();
    }
    if (sentidoAtual === baixa) {
        cauda.unshift([cauda[0][0]-15,cauda[0][1]+15]);
        cauda.pop();

    }
    function desenhaCauda(cauda, raio) {
        for (var i=0; i < cauda.length; i ++){
            
        }
    }
