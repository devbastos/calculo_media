// exercicio nota escolar 
// obter a media a partir de um array 

// 0-59: f
// 60-69:d
// 70-79: c 
// 80-89: B
// 90-100: A 


const array = [100, 30, 180]; //coloque aqui e veja o console

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A'
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma / (array.length);
}


// function obtermedia() {
//     var a = parseInt(document.getElementById("a").value);
//     var b = parseInt(document.getElementById("b").value);
//     var c = parseInt(document.getElementById("c").value);

//     var media = (a + b + c) / 3;

//     document.getElementById("resultado").innerHTML = " Á media é:" + media;


// }