
/*var nome = window.prompt("Digite seu nome");

//Escreve dentro do documento html
document.write("OI, "+nome);
*/
var cidades = [];

while((valor = window.prompt("Digite o nome da cidade"))!="")
{
  cidades.push(valor);
}  

//--------------------------------------------------------------
document.write("Loop While <br>");
var ini=0;
var fim=cidades.length;

while(ini < fim)
{
  
  document.write(cidades[ini].toUpperCase()+"<br>");
  ini++;
}

//--------------------------------------------------------------
document.write("<hr>Loop While inverso<br>");
var ini=cidades.length-1;
var fim=0;

while(ini >= fim)
{
  document.write(cidades[ini]+"<br>");
  ini--;
}

//--------------------------------------------------------------
document.write("<hr>Loop For <br>");
for(i=0;i<cidades.length;i++)
{
  document.write(cidades[i]+"<br>");
  
}

//--------------------------------------------------------------
document.write("<hr>Loop For inverso<br>");
for((i=cidades.length-1);i>=0;i--)
{
  document.write(cidades[i]+"<br>");
  
}

//--------------------------------------------------------------
document.write("<hr>Array por ordem alfabetica<br>");
cidades.sort();
for(i=0;i<cidades.length;i++)
{
  document.write(cidades[i]+"<br>");
  
}
//--------------------------------------------------------------
document.write("<hr>Vogais todas em maiusculo<br>");
cidades.sort();
for(i=0;i<cidades.length;i++)
{  
  var cidade = cidades[i]; 
  
  for(j=0;j<cidade.length;j++)
  {
    
    if((cidade[j].toUpperCase()=="A") || (cidade[i].toUpperCase()=="E") || (cidade[i].toUpperCase()=="I") || (cidade[i].toUpperCase()=="O") || (cidade[i].toUpperCase()=="U"))
    {
      cidade[j]=cidade[j].toUpperCase();
    }    
  }  
}









