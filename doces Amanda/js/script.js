/*Menu mobile*/

function abrirMenu() {

    var botaoMenu = document.getElementById('menu')

    botaoMenu.style.transform = 'translateX(-225px)'

    botaoMenu.style.transition = '1s'


    var back = document.getElementById('container_2')

    back.style.opacity = '0.3'
    back.style.transition = '1s'



    //esconder btn menu

    var botaoMenu2 = document.getElementById('btnMenu')
    var botaoFechar = document.getElementById('btnFechar')

    botaoMenu2.style.visibility = 'hidden'

    botaoFechar.style.visibility = 'visible'


}

//Voltar Menu

function fecharMenu() {

    var botaoMenu2 = document.getElementById('menu')

    botaoMenu2.style.transform = 'translateX(0px)'

    botaoMenu2.style.transition = '2s'

    var botaoMenu2 = document.getElementById('btnMenu')
    var botaoFechar = document.getElementById('btnFechar')

    botaoMenu2.style.visibility = 'visible'

    botaoFechar.style.visibility = 'hidden'

    var back = document.getElementById('container_2')

    back.style.opacity = '1'
}


//Esconder menu quando clicar no link

