function leiaMais(p, m, l){
    /**
     * -> Expande os textos da tag "a -> leia mais"
     * @param p - recebe o id "pontos" dos três pontos da tag span
     * @param m - recebe o id "mais" da tag span
     * @param l - recebe o id "link" da tag a
     */
    var pontos = document.getElementById(p);
    var maisTexto = document.getElementById(m);
    var linkLeiaMais = document.getElementById(l);

    if(pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        linkLeiaMais.innerHTML = "Leia mais";
    } else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        linkLeiaMais.innerHTML = "Leia menos";
    }
}
