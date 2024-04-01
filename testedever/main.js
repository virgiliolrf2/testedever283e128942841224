const mes = ['janeiro','fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'setembro', 'outubro', 'novembro', 'dezembro'];

function pegarmes (mesatual){
    let date = new Date();
    var mesatual = date.getMonth();
    const mesescrito = mes[mesatual];
    console.log (mesescrito)
    mesdisplay = document.querySelector('.mesatual')
    mesdisplay.innerHTML = mesescrito
}
pegarmes()

dias.addEventListener("click", function() {
    var modal = document.createElement('div');
    modal.classList.add('modal');
    var countedo = document.querySelector('.conteudo')
    countedo.appendChild(modal);

    var botaofechar = document.createElement('button')
    botaofechar.innerText = 'X'
    botaofechar.classList.add('botaofechar');
    modal.appendChild(botaofechar)

    var adicionarumatarefa = document.createElement('h3');
    adicionarumatarefa.innerHTML = 'Não há nenhum agendamento'
    adicionarumatarefa.classList.add('texto');
    modal.appendChild(adicionarumatarefa);

    var botaocreate = document.createElement('button')
    botaocreate.innerText = 'Criar'
    botaocreate.classList.add('botaocriar');
    modal.appendChild(botaocreate)

    botaocreate.addEventListener('click', function(){
        var modal2 = document.createElement('div');
        modal2.classList.add('modal2');
        var conteudo = document.querySelector('.conteudo')
        conteudo.appendChild(modal2);

        var title2 = document.createElement('h3');
        title2.innerHTML = 'Adicione um dever'
        title2.classList.add('texto2');
        modal2.appendChild(title2);

        var input = document.createElement('input')
        input.classList.add('input');
        modal2.appendChild(input)

        var botaocreate2 = document.createElement('button')
        botaocreate2.innerText = 'Criar'
        botaocreate2.classList.add('botaocriar2');
        modal2.appendChild(botaocreate2)

        var botaocreate3 = document.createElement('button')
        botaocreate3.innerText = 'Fechar'
        botaocreate3.classList.add('botaocriar3');
        modal2.appendChild(botaocreate3)

        modal.style.visibility = 'hidden'


    }) 


});