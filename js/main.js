function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigdo por Clicar<b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por Cliquar");   
}
function redirecionar(){
    //window.open("https://globallabs.academy/");
    window.Location.href = "https://google.com.br";
}
function trocar(elemento){
    elemento.innerHTML="Obrigado por passar o mouse Aqui";
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse Aqui";
    //alert("Trocar Texto");
}
function voltar(elemento){
    elemento.innerHTML="Passe o Mouse Aqui.";
    //document.getElementById("mousemove").innerHTML="Passe o Mouse Aqui.";
    //alert("Trocar Texto");
}
function load(){
    alert("Página Carregada");
}
function funcChange(elemento){
    console.log(elemento.value);

}


/*


function soma(n1, n2){
    return n1+n2;
}

alert(soma(10,5));
function validaIdade(idade){
    var validar;
    if (idade>= 18){
        validar = true;
        alert("Maior de Idade");
    }else{
        validar = false;
        alert("Manor de Idade");
    }
    return validar;
}
var idade = prompt("Qual sua Idade");
console.log(validaIdade(idade));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Sr Caetano ", "Santos ", "Silva " ));

var d = new Date();
alert(d.getDate());
alert(d.getDay());
alert(d.getHours());

var count;
for(count=0;count<=5;count++){
alert(count);
}


var count =0;
while(count < 5){
    console.log(count);
    count ++;
}


var idade = prompt("Qual sua Idade");
if(idade > 18){
    alert("Maior de Idade");
}else{
    alert("Menor de Idade");
}


var frutas =[{nome:"maça",cor:"vermelho"},{nome:"uva",cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);

var fruta ={nome:"maça",cor:"vermelho"}
console.log(fruta);
alert(fruta.cor);

var lista = ["maça","Pera","Laranja"];
//lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse);
console.log(lista.toString());
console.log(lista.join(" - "));

var nome = "Caetano Santos";
var n1 = 25;
var n2 = 10;
var frase = "Japão e o Melhor Time Do Mundo";
//alert(nome + " tem " + idade + "anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Japão","Sergipe"));
console.log(frase.toLocaleLowerCase());
console.log(frase.toLocaleUpperCase());
alert(frase.replace("Japão","Sergipe"));
*/