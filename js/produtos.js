function ativaQuentes() {
    document.getElementById( 'bebidasGeladas' ).style.display = 'none';
    document.getElementById( 'bebidasQuentes' ).style.display = 'block';
    document.getElementById( 'doces' ).style.display = 'none';
    document.getElementById( 'salgados' ).style.display = 'none';
}

function ativaGeladas() {
    document.getElementById( 'bebidasGeladas' ).style.display = 'block';
    document.getElementById( 'bebidasQuentes' ).style.display = 'none';
    document.getElementById( 'doces' ).style.display = 'none';
    document.getElementById( 'salgados' ).style.display = 'none';
}

function ativaDoces() {
    document.getElementById( 'doces' ).style.display = 'block';
    document.getElementById( 'bebidasQuentes' ).style.display = 'none';
    document.getElementById( 'bebidasGeladas' ).style.display = 'none';
    document.getElementById( 'salgados' ).style.display = 'none';
}

function ativaSalgados() {
    document.getElementById( 'bebidasGeladas' ).style.display = 'none';
    document.getElementById( 'bebidasQuentes' ).style.display = 'none';
    document.getElementById( 'salgados' ).style.display = 'block';
    document.getElementById( 'doces' ).style.display = 'none';
}

function ativaInformacoes() {
    document.getElementById( 'container-informacoes' ).style.display = 'flex';
}

function escondeInformacoes() {
    document.getElementById( 'container-informacoes' ).style.display = 'none';
}