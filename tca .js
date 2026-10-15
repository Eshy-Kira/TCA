//quer começar?
começar = prompt("Quer começar a jogar?\n" + "sim ou não");
if(começar == sim)
{    
 tela_Inicial = prompt("ver 1-charadas ; 2-escolhas; 3-situaçao_atual");
 if(tela_Inicial == 1)
 {   categorias = prompt("1-falam de cor\n" + "2-falam da bebida\n" + "3-falam da nacionalidade\n" + "4-falam do animal\n" + "5-falam do estilo musical")
    if(categorias == 1)
    {
      prompt("-a cor da casa 2 e azul\n" + "-quem mora na casa rosa bebe fanta\n" + "a casa vermelha esta a direita da casa azul")
    }
    if(categorias == 2)
        {
          prompt("-quem mora na casa rosa bebe fanta\n" + "-o brasileirio bebe cerveja")    
        }
        if(categorias == 3)
        {
            prompt("-o brasileirio bebe cerveja" + "- o portugues tem uma gaivota de estimaçao")
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

let casas= [
    {
        posiçao: "casa 1",
        cor: "",
        bebida: 0,
        nacionalidade: 0,
        animal: 0,
        musica: 0
    },
    {
        posiçao: "casa 2",
        cor: "",
        bebida: 0,
        nacionalidade: 0,
        animal: 0,
        musica: 0
    },
    {
        posiçao: "casa 3",
        cor: "",
        bebida: 0,
        nacionalidade: 0,
        animal: 0 ,
        musica: 0
    },
    {
        posiçao: "casa 4",
        cor: "",
        bebida: 0,
        nacionalidade: 0,
        animal: 0,
        musica: 0
    },
    {
        posiçao: "casa 5",
        cor: "",
        bebida: 0,
        nacionalidade: 0,
        animal: 0,
        musica: 0
    }
];