function primo(){
    var numero = parseInt(document.getElementById('num').value);
    var resposta = document.getElementById('resposta');
    var divisores= [];
  
    for(var count=1 ; count<=numero ; count++)
     if(numero % count == 0)
         divisores.push(count);
    
    if(divisores==2)
        resposta.innerHTML='É primo';
    else
        resposta.innerHTML='Não é primo. Esse número é divisível por: ' + divisores.join(',');
  }
  