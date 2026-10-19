//quer começar?
começar = prompt("Quer começar a jogar?\n" + "sim ou não");
if(começar == sim)
{    
 let tela_Inicial = 0;
 let categorias = 0;
 let voltar = false;
 
 
 while (tela_Inicial != 4)
 {
     tela_Inicial = prompt("1 - Charadas\n" + "2 - Escolhas\n" + "3 - Situação atual\n" + "4 - Sair");
 
 
     if (tela_Inicial == 1)
     {
         categorias = prompt("1 - Cores\n" + "2 - Bebidas\n" + "3 - Nacionalidades\n" + "4 - Animais\n" + "5 - Estilos musicais\n" + "0 - Voltar");

         if (categorias == 1)
         { voltar = false;
             while (!voltar)
             { let resposta = prompt("Charadas_cores\n\n" + "1 -Quem mora na casa rosa bebe Fanta.\n\n" + "2 -A última casa da rua e amarela.\n\n" + "3 -A casa azul fica entre a vermelha e a verde.\n\n" 
                + "4-Quem tem um cachorro mora na casa vermelha.\n\n" + "5-Quem mora na casa vermelha bebe água\n\n"
                + "0 - Voltar");
 
 
                 if (resposta == 0 || resposta == null)
                 {
                     voltar = true;
                 }
             }
         }
 
 
         if (categorias == 2)
         {
             voltar = false;
 
 
             while (!voltar)
             {
                 let resposta = prompt("Charadas_bebidas\n\n" +
                     "6-Quem toma fanta mora na casa rosa\n\n" +
                     "7-Quem toma suco e o Argentino\n\n" + "8-quem toma coca não ouve música clássica\n\n" +
                     "0 - Voltar");
 
 
                 if (resposta == 0 || resposta == null)
                 {
                     voltar = true;
                 }
             }
         }
 
 
         if (categorias == 3)
         {
             voltar = false;
 
 
             while (!voltar)
             {
                 let resposta = prompt("Charadas_nacionalidades\n\n" +
                     "5-O Argentino tem vizinhos tanto para a esquerda como direita\n\n" + "6-Na segunda casa mora o Coreano.\n\n" + "7-O Coreano não gosta de fanta\n\n" +
                     "0 - Voltar");
 
 
                 if (resposta == 0 || resposta == null)
                 {
                     voltar = true;
                 }
             }
         }
 
 
         if (categorias == 4)
         {
             voltar = false;
 
 
             while (!voltar)
             {
                 let resposta = prompt("Charadas_animais\n\n" + "8-O português tem uma gaivota de estimação.\n\n" +
                     "9-quem tem o cachorro mora a duas casa antes de quem tem uma gaivota\n\n" +
                     //continuar a corrigir daqui
                     "10 - O dono do pássaro mora ao lado da casa verde.\n\n" +
                     "0 - Voltar");
 
 
                 if (resposta == 0 || resposta == null)
                 {
                     voltar = true;
                 }
             }
         }
 
 
         if (categorias == 5)
         {
             voltar = false;
 
 
             while (!voltar)
             {
                 let resposta = prompt("Charadas_estilos musicais\n\n" +
                     "11- Quem prefere rock não mora na casa amarela.\n\n" +
                     "12- O fã de pop mora ao lado de quem prefere jazz.\n\n" +
                     "13- Quem prefere música clássica mora à esquerda de quem prefere rock.\n\n" +
                     "0 - Voltar");
 
 
 












                 }
                }
 }  
 }
 if(tela_Inicial == 2)
{  casa_numero = prompt("casa 1 ; casa 2 ; casa 3; casa 4; casa 5;") 

   caracteristicas = prompt( "1 cor; 2 bebida; 3 nacionalidade;4 animal; 5 musica")
   if (caracteristicas == 1)
{   
prompt("1 rosa\n" + "2 azul\n" + "3 vermelho\n" + "4 verde\n" + "5 amarelo\n");
}
if (caracteristicas == 2)
{
prompt("1 coca_cola\n" + "2 fanta\n" + "3 cerveja\n" + "4 agua\n" + "5 suco\n");
}
if (caracteristicas == 3)
{
prompt("1 argentino\n" + "2 coreano\n" + "3 russo\n" + "4 portugues\n" + "5 brasileiro\n");
}
if (caracteristicas == 4)
{    
prompt("1 cachorro\n" + "2 raposa\n" + "3 gaivota\n" + "4 urso\n" + "5 capivara\n");
}
if (caracteristicas == 5)
{
    prompt("1 rock\n" + "2 rbd\n" + "3 samba\n" + "4 classica\n" + "5 kpop\n");
}
}
}
// casa 1 =1;2;3,4;1
//casa 2  =3;4;2;1;2
// casa 3 =2;5;1;2;4
// casa 4 =4;3;5;5;3
// casa 5 =5;1;4;3;5

class casas
 {
    constructor(casa_numero, cor, bebida, nacionalidade, animal,musica) {
        this.casa = casa_numero;
        this.cor = cor;
        this.bebida = bebida;
        this.nacionalidade = nacionalidade;
        this.animal = animal;
        this.musica = musica;
    }


}
let ordem_certa = [
    new casas("1", "1", "2", "3", "4","1"),
    new casas("2", "3", "4", "2", "1","2"),
    new casas("3", "2", "5", "1", "2","4"),
    new casas("4", "4", "3", "5", "5","3"),
    new casas("5", "5", "1", "4", "3","5"),
];
