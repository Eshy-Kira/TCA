
começar = prompt("Quer começar a jogar?\n" + "sim ou não");
if(começar == "sim")
{    
 let tela_Inicial = 0;
 let categorias = 0;
 let voltar = false;
 let casa_numero = 0;
let caracteristicas = 0;
let resposta_cor = 0;
let resposta_bebida = 0;
let resposta_nacionalidade = 0;
let resposta_animal = 0;
let resposta_musica = 0
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
let respostas_jogador = [
    new casas("1", "0", "0", "0", "0","0"),
    new casas("2", "0", "0", "0", "0","0"),
    new casas("3", "0", "0", "0", "0","0"),
    new casas("4", "0", "0", "0", "0","0"),
    new casas("5", "0", "0", "0", "0","0"),
];
function abrirCasa(numero)
{
    return respostas_jogador[numero - 1];
}    
while (tela_Inicial != 5)
    {
        tela_Inicial = prompt("1 - Charadas\n" + "2 - Escolhas\n" + "3 - Situação atual\n" + "4 - Finalizar jogo\n" + "5 - Sair");
    
    
        if (tela_Inicial == 1)
        {
            categorias = prompt("1 - Cores\n" + "2 - Bebidas\n" + "3 - Nacionalidades\n" + "4 - Animais\n" + "5 - Estilos musicais\n" + "0 - Voltar");
   
   
            if (categorias == 1)
            { voltar = false;
                while (!voltar)
                { let resposta = prompt("Charadas_cores\n\n" + 
                    "-Quem mora na casa rosa bebe Fanta.\n\n" + 
                    "-A última casa da rua e amarela.\n\n" + 
                    "-A casa azul fica entre a vermelha e a verde.\n\n" + 
                    "-Quem tem um cachorro mora na casa vermelha.\n\n" + 
                    "-Quem mora na casa vermelha bebe água\n\n" + 
                    "0 - Voltar");
    
    
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
                        "-Quem toma fanta mora na casa rosa.\n\n" +
                        "-Quem toma suco e o Argentino.\n\n" + 
                        "-quem toma coca não ouve música clássica\n\n" + 
                        "-O brasileiro bebe cerveja.\n\n" +
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
                        "-O Argentino tem vizinhos tanto para a esquerda como direita\n\n" + 
                        "-Na segunda casa mora o Coreano.\n\n" + 
                        "-O Coreano não gosta de fanta\n\n" +
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
                    let resposta = prompt("Charadas_animais\n\n" + 
                        "-O português tem uma gaivota de estimação.\n\n" +
                        "-Quem tem o cachorro mora a duas casa antes de quem tem uma gaivota.\n\n" +
                        " -Quem mora na 3 casa tem uma raposa.\n\n" + 
                        "-Quem tem um urso escuta rock.\n\n" +
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
                        "-Quem escuta rock mora a esquerda do coreano.\n\n" +
                        "-Quem prefere pop mora ao lado de quem bebe Fanta.\n\n" +
                        "-Quem mora na 4 casa escuta samba.\n\n" + 
                        "-O vizinho do vizinho de quem bebe cerveja escuta pop.\n\n" +
                        "0 - Voltar");
    
       if (resposta == 0 || resposta == null)
                    {
                        voltar = true;
                    }
                    }
                   }
    }  
    
   if (tela_Inicial == 2)
   {
    //empedir que a mesma caracteristica va para mais de uma casa
       casa_numero = prompt("Casa 1; casa 2; casa 3; casa 4; casa 5; 0 - voltar");
   
   
       if (casa_numero == 0 || casa_numero == null)
       {
           voltar = true;
       }
       else if (casa_numero >= 1 && casa_numero <= 5)
       {
                  
        let casa_escolhida = abrirCasa(casa_numero);
      
      caracteristicas = prompt( "1 cor; 2 bebida; 3 nacionalidade;4 animal; 5 musica; 0 voltar")
      if (caracteristicas == 0 || caracteristicas == null)
                    {
                        voltar = true;
                    }
                  
      if (caracteristicas == 1)
   {  
   resposta_cor = prompt("1 rosa\n" + "2 azul\n" + "3 vermelho\n" + "4 verde\n" + "5 amarelo\n" + "0-voltar");
     if (resposta_cor == 0 || resposta_cor == null)
                    {
                        voltar = true;
                    }
                     else
                    {
             
                   if (resposta_cor >= 1 && resposta_cor <= 5)
                   {  
                       casa_escolhida.cor = resposta_cor;
                   }
                   }
                   }
   if (caracteristicas == 2)
   {
   resposta_bebida = prompt("1 coca_cola\n" + "2 fanta\n" + "3 cerveja\n" + "4 agua\n" + "5 suco\n");
     if (resposta_bebida == 0 || resposta_bebida == null)
                    {
                        voltar = true;
                    }
                    else
                   {
                    if (resposta_bebida >= 1 && resposta_bebida <= 5)
                    {
                           casa_escolhida.bebida = resposta_bebida;
                    }
                   }
   }
   if (caracteristicas == 3)
   {
   resposta_nacionalidade = prompt("1 argentino\n" + "2 coreano\n" + "3 russo\n" + "4 portugues\n" + "5 brasileiro\n");
     if (resposta_nacionalidade == 0 || resposta_nacionalidade == null)
                    {
                        voltar = true;
                    }
                   else
                   {
                    if (resposta_nacionalidade >= 1 && resposta_nacionalidade <= 5)
                     { 
                         casa_escolhida.nacionalidade = resposta_nacionalidade;
                     }
                   }
                   }
   if (caracteristicas == 4)
   {    
   resposta_animal = prompt("1 cachorro\n" + "2 raposa\n" + "3 gaivota\n" + "4 urso\n" + "5 capivara\n");
     if (resposta_animal == 0 || resposta_animal == null)
                    {
                        voltar = true;
                    }
                    else
                   {
                    if (resposta_animal >= 1 && resposta_animal <= 5)
                    { 
                       casa_escolhida.animal = resposta_animal;
                    }
                   }
                   }
   if (caracteristicas == 5)
   {
      resposta_musica = prompt("1 rock\n" + "2 pop\n" + "3 samba\n" + "4 classica\n" + "5 kpop\n");
     if (resposta_musica == 0 || resposta_musica == null)
                    {
                        voltar = true;
                    }
                    else
                   {
                    if (resposta_musica >= 1 && resposta_musica <= 5)
                        { 
                       casa_escolhida.musica = resposta_musica;
                        }
                   }
   }
   }
   }
   if (tela_Inicial == 3)
   {
       let texto = "";
   
   
       for (let i = 0; i < respostas_jogador.length; i++)
       {
           texto = prompt(texto + "Casa " + respostas_jogador[i].casa +
           "\nCor: " + respostas_jogador[i].cor +
           "\nBebida: " + respostas_jogador[i].bebida +
           "\nNacionalidade: " + respostas_jogador[i].nacionalidade +
           "\nAnimal: " + respostas_jogador[i].animal +
           "\nMúsica: " + respostas_jogador[i].musica + "\n\n");
       }
   
   
      //descobrir o poque nao abre o if == 4
   }
    if (tela_Inicial == 4)
      { 
        for (let i = 0; i < respostas_jogador.length; i++)
           {    
            alert = respostas_jogador[i].casa == ordem_certa[i].casa;
            alert =  respostas_jogador[i].cor == ordem_certa[i].cor;
            alert =  respostas_jogador[i].bebida == ordem_certa[i].bebida;
            alert =  respostas_jogador[i].nacionalidade == ordem_certa[i].nacionalidade;
            alert =  respostas_jogador[i].animal == ordem_certa[i].animal;
            alert =  respostas_jogador[i].musica == ordem_certa[i].musica;
        
           }

      }

   }
}
