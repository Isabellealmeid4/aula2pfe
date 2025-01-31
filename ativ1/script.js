function verificarnum(){
    let numero = Number(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    if (numero < 1000){
        mensagem.innerHTML = 'o número escolhido é menor que 1000'
    }else{
        alert('o número é maior que 1000, digite outro')
    }
}