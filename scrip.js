

function nott1(){
    document.getElementById('img').style.backgroundImage = 'url(1317021.png)'
    document.getElementById('content').innerHTML = '<h3>Minecaft En Descuento</h3> <p>Minecraft recientemente ha bajado de precio debido a su amiversario puedes encotrarlo en su pagina oficial</p>'
}
function nott2(){
    document.getElementById('img').style.backgroundImage = 'url(1316024.png)'
    document.getElementById('content').innerHTML = '<h3>Zelda novedades</h3> <p>Actualmente, hay fuertes rumores sobre un posible lanzamiento de "The Legend of Zelda: Twilight Princess"</p>'
}
function nott3(){
    document.getElementById('img').style.backgroundImage = 'url(1358387.jpeg)'
    document.getElementById('content').innerHTML = '<h3>Marvel Rivals</h3> <p>Nuevo juego de marvel aun en beta cerrada</p>'

}
function nott4(){
    document.getElementById('img').style.backgroundImage = 'url(destiny.webp)'
    document.getElementById('content').innerHTML = '<h3>Destiny 2 The Final Shape</h3> <p> lleva a los jugadores al corazón del Viajero para concluir la Guerra de la Luz y la Oscuridad</p>'

}
function nott5(){
    document.getElementById('img').style.backgroundImage = 'url(EldenRing.webp)'
    document.getElementById('content').innerHTML = '<h3>Shadow of the Erdtree</h3> <p> Esta muy anticipada expansión para "Elden Ring" se lanzará el 21 de junio</p>'

}
function button(){
    document.getElementById('navBar2').style.width = '100%'
    document.body.style.overflow = 'hidden'

}
function clouseButton(){
    document.getElementById('navBar2').style.width = '0'
        document.body.style.overflow = 'scroll'

}
function cambiarPagina() {
    window.location.href = 'new.html';
}
var x = 1
function nintendo(){

    if (x === 1){
        document.getElementById('nintendo').getElementsByTagName('img')[0].style.width = '25%'
        document.getElementById('nintendo').getElementsByTagName('img')[0].style.height = '50%'
        document.getElementById('nintendoImg').style.width = '75%'
        x  --
    }
    else if (x === 0){
        document.getElementById('nintendo').getElementsByTagName('img')[0].style.width = '50%'
        document.getElementById('nintendoImg').style.width = '0'
        document.getElementById('nintendo').getElementsByTagName('img')[0].style.height = '100%'
        x ++
    }
}



var y = 1
function playStation(){

    if (y === 1){
        document.getElementById('playStation').getElementsByTagName('img')[0].style.width = '25%'
        document.getElementById('playStation').getElementsByTagName('img')[0].style.height = '50%'
        document.getElementById('playStationImg').style.width = '75%'
        y  --
    }
    else if (y === 0){
        document.getElementById('playStation').getElementsByTagName('img')[0].style.width = '50%'
        document.getElementById('playStationImg').style.width = '0'
        document.getElementById('playStation').getElementsByTagName('img')[0].style.height = '100%'
        y ++
    }
}


var z = 1
function xbox(){

    if (z === 1){
        document.getElementById('xbox').getElementsByTagName('img')[0].style.width = '25%'
        document.getElementById('xbox').getElementsByTagName('img')[0].style.height = '50%'
        document.getElementById('xboxImg').style.width = '75%'
        z --
    }
    else if (z === 0){
        document.getElementById('xbox').getElementsByTagName('img')[0].style.width = '50%'
        document.getElementById('xboxImg').style.width = '0'
        document.getElementById('xbox').getElementsByTagName('img')[0].style.height = '100%'
        z ++
    }
}