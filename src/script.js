const botoes = document.querySelectorAll(".botao-indice");
var butaoAtivo = true;

botoes.forEach( (butao) => {
    butao.addEventListener('click', function () {
        const valor = butao.getAttribute("data-value");
        
        const isActive = butao.getAttribute("isActive");
        const arrowIMG = document.querySelector("#arrowIMG" + valor);
        const content = document.querySelector("#content" + valor);
        if (isActive == "true"){
            butao.setAttribute("isActive", "false");
            content.style.display = "none";
            arrowIMG.src = "./images/arrows-down-double34_97743.png"
        } else {
            butao.setAttribute("isActive", "true");
            content.style.display = "block";
            arrowIMG.src = "./images/arrows-up-double33_98249.png"
        }
    })
    
})