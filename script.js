let seletorArquivos = document.getElementById("seletor-arquivos")
let listaDeArquivos = document.getElementById("lista-de-arquivos")
let numDeArquivos = document.getElementById("num-de-arquivos")
seletorArquivos.addEventListener("change", () =>{

listaDeArquivos.innerHTML = "";
numDeArquivos.textContent = `${seletorArquivos.files.length} Arquivos Selecionados`; 
for (let arquivo of seletorArquivos.files) {
    let itemLista = document.createElement("li");
    let nomeArquivo = arquivo.name;
    let tamanhoArquivo = (arquivo.size/1024).toFixed(1);
    let tamanhoFormatado = `${tamanhoArquivo} KB` ;
    if (tamanhoArquivo >= 1024) {
        tamanhoFormatado = `${(tamanhoArquivo / 1024).toFixed(1)}MB`;

    }
    itemLista.innerHTML = `<p>${nomeArquivo}</p><p>${tamanhoFormatado}</p>`;
listaDeArquivos.appendChild(itemLista);
}   
});

