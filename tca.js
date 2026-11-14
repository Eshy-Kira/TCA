
let começar = prompt("Quer começar a jogar?\n" + "sim ou não");

if (começar == "sim")
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
    let resposta_musica = 0;
    let quantidade_acertos = 0;

    let cores = ["", "Rosa", "Azul", "Vermelho", "Verde", "Amarelo"];
    let bebidas = ["", "Coca-Cola", "Fanta", "Cerveja", "Água", "Suco"];
    let nacionalidades = ["", "Argentino", "Coreano", "Russo", "Português", "Brasileiro"];
    let animais = ["", "Cachorro", "Raposa", "Gaivota", "Urso", "Capivara"];
    let musicas = ["", "Rock", "Pop", "Samba", "Clássica", "K-pop"];

    class casas
    {
        constructor(casa_numero, cor, bebida, nacionalidade, animal, musica)
        {
            this.casa = casa_numero;
            this.cor = cor;
            this.bebida = bebida;
            this.nacionalidade = nacionalidade;
            this.animal = animal;
            this.musica = musica;
        }
    }

    let ordem_certa = [
        new casas("1", "1", "2", "3", "4", "1"),
        new casas("2", "3", "4", "2", "1", "2"),
        new casas("3", "2", "5", "1", "2", "4"),
        new casas("4", "4", "3", "5", "5", "3"),
        new casas("5", "5", "1", "4", "3", "5")
    ];

    let respostas_jogador = [
        new casas("1", "0", "0", "0", "0", "0"),
        new casas("2", "0", "0", "0", "0", "0"),
        new casas("3", "0", "0", "0", "0", "0"),
        new casas("4", "0", "0", "0", "0", "0"),
        new casas("5", "0", "0", "0", "0", "0")
    ];

    function Verifica_duplicado(caracteristica, valor, casaNumero)
    {
        for (let i = 0; i < respostas_jogador.length; i++)
        {
            if (respostas_jogador[i].casa != casaNumero &&
                respostas_jogador[i][caracteristica] == valor)
            {
                return true;
            }
        }

        return false;
    }

    function abrirCasa(numero)
    {
        return respostas_jogador[numero - 1];
    }

    while (tela_Inicial != 5)
    {
        tela_Inicial = prompt(
            "1 - Charadas\n" +
            "2 - Escolhas\n" +
            "3 - Situação atual\n" +
            "4 - Finalizar jogo\n" +
            "5 - Sair"
        );

        if (tela_Inicial == 1)
        {
            categorias = prompt(
                "1 - Cores\n" +
                "2 - Bebidas\n" +
                "3 - Nacionalidades\n" +
                "4 - Animais\n" +
                "5 - Estilos musicais\n" +
                "0 - Voltar"
            );

            if (categorias == 1)
            {
                voltar = false;

                while (!voltar)
                {
                    let resposta = prompt(
                        "Charadas_cores\n\n" +
                        "- Quem mora na casa rosa bebe Fanta.\n\n" +
                        "- A última casa da rua é amarela.\n\n" +
                        "- A casa azul fica entre a vermelha e a verde.\n\n" +
                        "- Quem tem um cachorro mora na casa vermelha.\n\n" +
                        "- Quem mora na casa vermelha bebe água.\n\n" +
                        "0 - Voltar"
                    );

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
                    let resposta = prompt(
                        "Charadas_bebidas\n\n" +
                        "- Quem toma Fanta mora na casa rosa.\n\n" +
                        "- Quem toma suco é o Argentino.\n\n" +
                        "- Quem toma Coca não ouve música clássica.\n\n" +
                        "- O brasileiro bebe cerveja.\n\n" +
                        "0 - Voltar"
                    );

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
                    let resposta = prompt(
                        "Charadas_nacionalidades\n\n" +
                        "- O Argentino tem vizinhos tanto para a esquerda como para a direita.\n\n" +
                        "- Na segunda casa mora o Coreano.\n\n" +
                        "- O Coreano não gosta de Fanta.\n\n" +
                        "0 - Voltar"
                    );

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
                    let resposta = prompt(
                        "Charadas_animais\n\n" +
                        "- O Português tem uma gaivota de estimação.\n\n" +
                        "- Quem tem o cachorro mora a duas casas antes de quem tem uma gaivota.\n\n" +
                        "- Quem mora na terceira casa tem uma raposa.\n\n" +
                        "- Quem tem um urso escuta rock.\n\n" +
                        "0 - Voltar"
                    );

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
                    let resposta = prompt(
                        "Charadas_estilos musicais\n\n" +
                        "- Quem escuta rock mora à esquerda do Coreano.\n\n" +
                        "- Quem prefere pop mora ao lado de quem bebe Fanta.\n\n" +
                        "- Quem mora na quarta casa escuta samba.\n\n" +
                        "- O vizinho do vizinho de quem bebe cerveja escuta pop.\n\n" +
                        "0 - Voltar"
                    );

                    if (resposta == 0 || resposta == null)
                    {
                        voltar = true;
                    }
                }
            }
        }

        if (tela_Inicial == 2)
        {
            voltar = false;

            while (!voltar)
            {
                casa_numero = prompt(
                    "Escolha uma casa:\n" +
                    "1 - Casa 1\n" +
                    "2 - Casa 2\n" +
                    "3 - Casa 3\n" +
                    "4 - Casa 4\n" +
                    "5 - Casa 5\n" +
                    "0 - Voltar"
                );

                if (casa_numero == 0 || casa_numero == null)
                {
                    voltar = true;
                }
                else
                {
                    if (casa_numero >= 1 && casa_numero <= 5)
                    {
                        let casa_escolhida = abrirCasa(casa_numero);
                        let voltarCaracteristica = false;

                        while (!voltarCaracteristica)
                        {
                            caracteristicas = prompt(
                                "1 - Cor\n" +
                                "2 - Bebida\n" +
                                "3 - Nacionalidade\n" +
                                "4 - Animal\n" +
                                "5 - Música\n" +
                                "0 - Voltar"
                            );

                            if (caracteristicas == 0 || caracteristicas == null)
                            {
                                voltarCaracteristica = true;
                            }
                            else
                            {
                                if (caracteristicas == 1)
                                {
                                    resposta_cor = prompt(
                                        "1 rosa\n2 azul\n3 vermelho\n4 verde\n5 amarelo\n0 - voltar"
                                    );

                                    if (resposta_cor >= 1 && resposta_cor <= 5)
                                    {
                                        if (!Verifica_duplicado("cor", resposta_cor, casa_numero))
                                        {
                                            casa_escolhida.cor = resposta_cor;
                                        }
                                        else
                                        {
                                            alert("Essa cor já está sendo utilizada em outra casa!");
                                        }
                                    }
                                }

                                if (caracteristicas == 2)
                                {
                                    resposta_bebida = prompt(
                                        "1 coca_cola\n2 fanta\n3 cerveja\n4 agua\n5 suco\n0 - voltar"
                                    );

                                    if (resposta_bebida >= 1 && resposta_bebida <= 5)
                                    {
                                        if (!Verifica_duplicado("bebida", resposta_bebida, casa_numero))
                                        {
                                            casa_escolhida.bebida = resposta_bebida;
                                        }
                                        else
                                        {
                                            alert("Essa bebida já está sendo utilizada em outra casa!");
                                        }
                                    }
                                }

                                if (caracteristicas == 3)
                                {
                                    resposta_nacionalidade = prompt(
                                        "1 argentino\n2 coreano\n3 russo\n4 portugues\n5 brasileiro\n0 - voltar"
                                    );

                                    if (resposta_nacionalidade >= 1 && resposta_nacionalidade <= 5)
                                    {
                                        if (!Verifica_duplicado("nacionalidade", resposta_nacionalidade, casa_numero))
                                        {
                                            casa_escolhida.nacionalidade = resposta_nacionalidade;
                                        }
                                        else
                                        {
                                            alert("Essa nacionalidade já está sendo utilizada em outra casa!");
                                        }
                                    }
                                }

                                if (caracteristicas == 4)
                                {
                                    resposta_animal = prompt(
                                        "1 cachorro\n2 raposa\n3 gaivota\n4 urso\n5 capivara\n0 - voltar"
                                    );

                                    if (resposta_animal >= 1 && resposta_animal <= 5)
                                    {
                                        if (!Verifica_duplicado("animal", resposta_animal, casa_numero))
                                        {
                                            casa_escolhida.animal = resposta_animal;
                                        }
                                        else
                                        {
                                            alert("Esse animal já está sendo utilizado em outra casa!");
                                        }
                                    }
                                }

                                if (caracteristicas == 5)
                                {
                                    resposta_musica = prompt(
                                        "1 rock\n2 pop\n3 samba\n4 classica\n5 kpop\n0 - voltar"
                                    );

                                    if (resposta_musica >= 1 && resposta_musica <= 5)
                                    {
                                        if (!Verifica_duplicado("musica", resposta_musica, casa_numero))
                                        {
                                            casa_escolhida.musica = resposta_musica;
                                        }
                                        else
                                        {
                                            alert("Esse estilo musical já está sendo utilizado em outra casa!");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if (tela_Inicial == 3)
        {
            for (let i = 0; i < respostas_jogador.length; i++)
            {
                alert(
                    "Casa " + respostas_jogador[i].casa +
                    "\nCor: " + (cores[respostas_jogador[i].cor] || "Vazio") +
                    "\nBebida: " + (bebidas[respostas_jogador[i].bebida] || "Vazio") +
                    "\nNacionalidade: " + (nacionalidades[respostas_jogador[i].nacionalidade] || "Vazio") +
                    "\nAnimal: " + (animais[respostas_jogador[i].animal] || "Vazio") +
                    "\nMúsica: " + (musicas[respostas_jogador[i].musica] || "Vazio")
                );
            }
        }

        if (tela_Inicial == 4)
        {
            let completo = true;

            for (let i = 0; i < respostas_jogador.length; i++)
            {
                if (respostas_jogador[i].cor == "0" ||
                    respostas_jogador[i].bebida == "0" ||
                    respostas_jogador[i].nacionalidade == "0" ||
                    respostas_jogador[i].animal == "0" ||
                    respostas_jogador[i].musica == "0")
                {
                    completo = false;

                    alert("A casa " + respostas_jogador[i].casa + " ainda possui características vazias");

                    break;
                }
            }

            if (completo == true)
            {
                quantidade_acertos = 0;

                for (let i = 0; i < respostas_jogador.length; i++)
                {
                    if (respostas_jogador[i].cor == ordem_certa[i].cor)
                    {
                        quantidade_acertos++;
                    }

                    if (respostas_jogador[i].bebida == ordem_certa[i].bebida)
                    {
                        quantidade_acertos++;
                    }

                    if (respostas_jogador[i].nacionalidade == ordem_certa[i].nacionalidade)
                    {
                        quantidade_acertos++;
                    }

                    if (respostas_jogador[i].animal == ordem_certa[i].animal)
                    {
                        quantidade_acertos++;
                    }

                    if (respostas_jogador[i].musica == ordem_certa[i].musica)
                    {
                        quantidade_acertos++;
                    }
                }

                if (quantidade_acertos == 25)
                {
                    alert("Parabéns! Você ganhou!");
                }
                else
                {
                    alert("Você perdeu! Acertos: " + quantidade_acertos);
                }

                let jogar_novamente = prompt("Deseja jogar novamente?\nsim ou não");

                if (jogar_novamente == "sim")
                {
                    for (let i = 0; i < respostas_jogador.length; i++)
                    {
                        respostas_jogador[i].cor = "0";
                        respostas_jogador[i].bebida = "0";
                        respostas_jogador[i].nacionalidade = "0";
                        respostas_jogador[i].animal = "0";
                        respostas_jogador[i].musica = "0";
                    }

                    quantidade_acertos = 0;
                    tela_Inicial = 0;
                }
                else
                {
                    tela_Inicial = 5;
                }
            }
        }
    }
}