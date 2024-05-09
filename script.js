console.log("Olá mundo!");



botao.addEventListener("click", () => alert("Fui clicado!!!"));
botao.addEventListener("click", () => {
    console.log("Assédio");
});
 
const divs = document.querySelectorAll("div");
console.log(divs);
 
divs.forEach((item, key) => {
    item.addEventListener("click", () => {
        alert("Cliquei na div " + key);
    });
});
const qualBotao = (evt) => {
    alert(`Você clicou em "${evt.currentTarget.textContent}"`)
}

const botoes = document.querySelectorAll("button");
botoes.forEach(botao => {
    botao.addEventListener("click", qualBotao);

});


