function calcularNota() {
    var nota = document.getElementById('nota').value
    var faltas = document.getElementById('faltas').value
    
    if(nota >= 6 && faltas <= 10) {
        document.getElementById('resultado').value = 'Aprovado!'
    }else {
        document.getElementById('resultado').value = 'Reprovado!'
    }
} 

function limparNota() {
    var nota = document.getElementById('nota').value = ''
    var faltas = document.getElementById('faltas').value = ''
    document.getElementById('resultado').value = ''
}