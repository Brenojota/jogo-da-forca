let tentativas = 6;
let digitos = document.querySelectorAll(".digitos");
let somavalue = 0;
let categoriaPalavra;
let palavraSecreta = [];
let vazio = [];
let renderizarPalavra = []
palavras = [
    palavra001 = {
        nome: "FRANÇA",
        categoria: "PAIS"
    },
    palavra002 = {
        nome: "INDONESIA",
        categoria: "PAIS"
    },
    palavra003 = {
        nome: "ESPANHA",
        categoria: "PAIS"
    },
    palavra004 = {
        nome: "GUINE-EQUATORIAL",
        categoria: "PAIS"
    },
    palavra005 = {
        nome: "DINAMARCA",
        categoria: "PAIS"
    },
    palavra006 = {
        nome: "ITALIA",
        categoria: "PAIS"
    },
    palavra007 = {
        nome: "ALEMANHA",
        categoria: "PAIS"
    },
    palavra008 = {
        nome: "PORTUGAL",
        categoria: "PAIS"
    },
    palavra009 = {
        nome: "BELGICA",
        categoria: "PAIS"
    },
    palavra010 = {
        nome: "CHILE",
        categoria: "PAIS"
    },
    palavra011 = {
        nome: "JAPAO",
        categoria: "PAIS"
    },
    palavra012 = {
        nome: "INGLATERRA",
        categoria: "PAIS"
    },
    palavra013 = {
        nome: "HOLANDA",
        categoria: "PAIS"
    },
    palavra014 = {
        nome: "ARGENTINA",
        categoria: "PAIS"
    },
    palavra015 = {
        nome: "LUXEMBURGO",
        categoria: "PAIS"
    },
    palavra016 = {
        nome: "FLAMENGO",
        categoria: "TIME NACIONAL"
    },
    palavra017 = {
        nome: "FLUMINENSE",
        categoria: "TIME NACIONAL"
    },
    palavra018 = {
        nome: "BOTAFOGO",
        categoria: "TIME NACIONAL"
    },
    palavra019 = {
        nome: "VASCO",
        categoria: "TIME NACIONAL"
    },
    palavra020 = {
        nome: "CRUZEIRO",
        categoria: "TIME NACIONAL"
    },
    palavra021 = {
        nome: "ATLETICO-MINEIRO",
        categoria: "TIME NACIONAL"
    },
    palavra022 = {
        nome: "FORTALEZA",
        categoria: "TIME NACIONAL"
    },
    palavra023 = {
        nome: "CEARA",
        categoria: "TIME NACIONAL"
    },
    palavra024 = {
        nome: "GREMIO",
        categoria: "TIME NACIONAL"
    },
    palavra025 = {
        nome: "INTERNACIONAL",
        categoria: "TIME NACIONAL"
    },
    palavra026 = {
        nome: "CORITIBA",
        categoria: "TIME NACIONAL"
    },
    palavra027 = {
        nome: "BAHIA",
        categoria: "TIME NACIONAL"
    },
    palavra028 = {
        nome: "CORINTHIAS",
        categoria: "TIME NACIONAL"
    },
    palavra029 = {
        nome: "SANTOS",
        categoria: "TIME NACIONAL"
    },
    palavra030 = {
        nome: "PALMEIRAS",
        categoria: "TIME NACIONAL"
    },
    palavra031 = {
        nome: "LAMPADA",
        categoria: "OBJETO"
    },
    palavra032 = {
        nome: "CADEADO",
        categoria: "OBJETO"
    },
    palavra033 = {
        nome: "COLHER",
        categoria: "OBJETO"
    },
    palavra034 = {
        nome: "BANDEJA",
        categoria: "OBJETO"
    },
    palavra035 = {
        nome: "TECLADO",
        categoria: "OBJETO"
    },
    palavra036 = {
        nome: "MARCADOR",
        categoria: "OBJETO"
    },
    palavra037 = {
        nome: "GARRAFA",
        categoria: "OBJETO"
    },
    palavra038 = {
        nome: "CELULAR",
        categoria: "OBJETO"
    },
    palavra039 = {
        nome: "CHAVE",
        categoria: "OBJETO"
    },
    palavra040 = {
        nome: "LUVA",
        categoria: "OBJETO"
    },
    palavra041 = {
        nome: "BAIAO",
        categoria: "COMIDA"
    },
    palavra042 = {
        nome: "LASANHA",
        categoria: "COMIDA"
    },
    palavra043 = {
        nome: "TAPIOCA",
        categoria: "COMIDA"
    },
    palavra044 = {
        nome: "CUZCUZ",
        categoria: "COMIDA"
    },
    palavra045 = {
        nome: "SANDUICHE",
        categoria: "COMIDA"
    },
    palavra046 = {
        nome: "PIZZA",
        categoria: "COMIDA"
    },
    palavra047 = {
        nome: "MACAXEIRA",
        categoria: "COMIDA"
    },
    palavra048 = {
        nome: "MACARRONADA",
        categoria: "COMIDA"
    },
    palavra049 = {
        nome: "VATAPA",
        categoria: "COMIDA"
    },
    palavra050 = {
        nome: "PAO",
        categoria: "COMIDA"
    },
    palavra051 = {
        nome: "ABACAXI",
        categoria: "FRUTA"
    },
    palavra052 = {
        nome: "MACA",
        categoria: "FRUTA"
    },
    palavra053 = {
        nome: "UVA",
        categoria: "FRUTA"
    },
    palavra054 = {
        nome: "TANGERINA",
        categoria: "FRUTA"
    },
    palavra055 = {
        nome: "CARAMBOLA",
        categoria: "FRUTA"
    },
    palavra056 = {
        nome: "MELANCIA",
        categoria: "FRUTA"
    },
    palavra057 = {
        nome: "JACA",
        categoria: "FRUTA"
    },
    palavra058 = {
        nome: "SIRIGUELA",
        categoria: "FRUTA"
    },
    palavra059 = {
        nome: "GOIABA",
        categoria: "FRUTA"
    },
    palavra060 = {
        nome: "ACEROLA",
        categoria: "FRUTA"
    },
    palavra061 = {
        nome: "AMEIXA",
        categoria: "FRUTA"
    },
    palavra062 = {
        nome: "MURICI",
        categoria: "FRUTA"
    },
    palavra063 = {
        nome: "FRAMBOESA",
        categoria: "FRUTA"
    },
    palavra064 = {
        nome: "BANANA",
        categoria: "FRUTA"
    },
    palavra065 = {
        nome: "DAMASCO",
        categoria: "FRUTA"
    },
    palavra066 = {
        nome: "PYTHON",
        categoria: "LINGUAGEM DE PROGRAMAÇÃO"
    },
    palavra067 = {
        nome: "JAVASCRIPT",
        categoria: "LINGUAGEM DE PROGRAMAÇÃO"
    },
    palavra068 = {
        nome: "ELIXIR",
        categoria: "LINGUAGEM DE PROGRAMAÇÃO"
    },
    palavra069 = {
        nome: "REACT",
        categoria: "LINGUAGEM DE PROGRAMAÇÃO"
    },
    palavra070 = {
        nome: "CSHARP",
        categoria: "LINGUAGEM DE PROGRAMAÇÃO"
    },
    palavra071 = {
        nome: "PHP",
        categoria: "LINGUAGEM DE PROGRAMAÇÃO"
    },
    palavra072 = {
        nome: "SQL",
        categoria: "LINGUAGEM DE PROGRAMAÇÃO"
    },
    palavra073 = {
        nome: "JAVA",
        categoria: "LINGUAGEM DE PROGRAMAÇÃO"
    },
    palavra074 = {
        nome: "INGLÊS",
        categoria: "IDIOMA"
    },
    palavra075 = {
        nome: "ALEMAO",
        categoria: "IDIOMA"
    },
    palavra076 = {
        nome: "ESPANHOL",
        categoria: "IDIOMA"
    },
    palavra077 = {
        nome: "CHINES",
        categoria: "IDIOMA"
    },
    palavra078 = {
        nome: "PORTUGUES",
        categoria: "IDIOMA"
    },
    palavra079 = {
        nome: "MANDARIM",
        categoria: "IDIOMA"
    },
    palavra080 = {
        nome: "FRANCES",
        categoria: "IDIOMA"
    },
    palavra081 = {
        nome: "SAMSUNG",
        categoria: "FABRICANTE DE PRODUTOS"
    },
    palavra082 = {
        nome: "DELL",
        categoria: "FABRICANTE DE PRODUTOS"
    },
    palavra083 = {
        nome: "ESMALTEC",
        categoria: "FABRICANTE DE PRODUTOS"
    },
    palavra084 = {
        nome: "TOSHIBA",
        categoria: "FABRICANTE DE PRODUTOS"
    },
    palavra085 = {
        nome: "CHEVROLET",
        categoria: "FABRICANTE DE PRODUTOS"
    },
    palavra086 = {
        nome: "PHILIPS",
        categoria: "FABRICANTE DE PRODUTOS"
    },
    palavra087 = {
        nome: "XIAOMI",
        categoria: "FABRICANTE DE PRODUTOS"
    },
    palavra088 = {
        nome: "APPLE",
        categoria: "FABRICANTE DE PRODUTOS"
    },
    palavra089 = {
        nome: "ADIDAS",
        categoria: "FABRICANTE DE PRODUTOS"
    },
    palavra090 = {
        nome: "SONY",
        categoria: "FABRICANTE DE PRODUTOS"
    },
    palavra091 = {
        nome: "MOTOROLA",
        categoria: "FABRICANTE DE PRODUTOS"
    },
    palavra092 = {
        nome: "HONDA",
        categoria: "FABRICANTE DE PRODUTOS"
    },
    palavra093 = {
        nome: "YAMAHA",
        categoria: "FABRICANTE DE PRODUTOS"
    },
    palavra094 = {
        nome: "NIKE",
        categoria: "FABRICANTE DE PRODUTOS"
    },
    palavra095 = {
        nome: "MATEMATICA",
        categoria: "MATERIA ESCOLAR"
    },
    palavra096 = {
        nome: "QUIMICA",
        categoria: "MATERIA ESCOLAR"
    },
    palavra097 = {
        nome: "GEOGRAFIA",
        categoria: "MATERIA ESCOLAR"
    },
    palavra098 = {
        nome: "BIOLOGIA",
        categoria: "MATERIA ESCOLAR"
    },
    palavra099 = {
        nome: "PORTUGUES",
        categoria: "MATERIA ESCOLAR"
    },
    palavra100 = {
        nome: "FISICA",
        categoria: "MATERIA ESCOLAR"
    },
    palavra101 = {
        nome: "FILOSOFIA",
        categoria: "MATERIA ESCOLAR"
    },
]

function geraPalavra() {
    const indexPalavra = parseInt(Math.random() * palavras.length);
    palavraSecreta = palavras[indexPalavra].nome;
    categoriaPalavra = palavras[indexPalavra].categoria;
    inserirPalavra();
}
geraPalavra();

function inserirPalavra() {
    const categoria = document.querySelector('#dica-palavra');
    categoria.innerHTML = categoriaPalavra;
    const word = document.querySelector('#palavra-secreta');
    word.innerHTML = "";
    console.log(palavraSecreta);

    for (let i = 0; i < palavraSecreta.length; i++) {

        if (renderizarPalavra[i] == undefined) {

            renderizarPalavra[i] = "&nbsp";
            word.innerHTML += `<div id='letra'> ${renderizarPalavra[i]} </div>`
        }
        else {
            word.innerHTML += `<div id='letra'> ${renderizarPalavra[i]} </div>`
        }
    }
}

function verificaLetraEscolhida(letra) {
    if (tentativas > 0) {

        mudarBackLetra("tecla-" + letra);
        compararLetras(letra);
    } else {

    }

}

function mudarBackLetra(letra) {
    document.getElementById(letra).style.backgroundColor = "#ff0000";

}

const conjuntoLetras = document.querySelectorAll("#letra");
console.log(conjuntoLetras);

function criaImagem(url) {

    const div = document.querySelector(".imagem");
    const image = document.createElement("img");
    image.src = url;
    image.width = 190;
    image.height = 140;
    div.appendChild(image);
}
// OBTEM IMAGEM PARA FAZER A TROCA
var img = document.querySelector(".imagem");

function compararLetras(letra) {
    const posicao = palavraSecreta.indexOf(letra);

    // posi > 0 == letra existe na palavra;  < 0 == letra não existe na palavra

    if (posicao < 0) {
        tentativas--
        if (tentativas == 5) {
            img.setAttribute('src', './imagem/forca01.png');
        }
        if (tentativas == 4) {
            img.setAttribute('src', './imagem/forca02.png');
        }
        if (tentativas == 3) {
            img.setAttribute('src', './imagem/forca03.png');
        }
        if (tentativas == 2) {
            img.setAttribute('src', './imagem/forca04.png');
        }
        if (tentativas == 1) {
            img.setAttribute('src', './imagem/forca05.png');
        }
        if (tentativas == 0) {
            img.setAttribute('src', './imagem/forca06.png');
            window.alert(`VOCÊ PERDEU! A PALAVRA SECRETA FOI : ${palavraSecreta}`)
        }


    }
    else {
        for (let j = 0; j < palavraSecreta.length; j++) {

            if (letra == palavraSecreta[j]) {
                conjuntoLetras[j].textContent = letra;
                vazio.push(letra)
                let valorLetra = parseInt(digitos[j].value);
                somavalue += valorLetra;
                console.log(somavalue);
            }
        }
    }
    if (somavalue == palavraSecreta.length) {
        img.setAttribute('src', './imagem/voce-venceu.jpg');
    }

}