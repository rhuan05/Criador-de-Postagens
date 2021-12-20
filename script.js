if(localStorage.comentariosPostados){
    document.querySelector('.comentariosPostados').innerHTML = localStorage.comentariosPostados;
};

var tituloInput = document.querySelector('.tituloInput');
var postagemInput = document.querySelector('.postagemInput');
var autorInput = document.querySelector('.autorInput');

function clicouPostar(){
    if(tituloInput.value.length == 0 || postagemInput.value.length == 0 || autorInput.value.length == 0){
        alert('Preencha todos os campos para postar.');
    } else {

        // Estrutura da Postagem
        let postagem = {
            titulo: tituloInput.value,
            mensagem: postagemInput.value,
            autor: autorInput.value,
            estaAoVivo: true
        };

        // Sessão Style
        document.querySelector('.containerPostagem').style.display = 'none';
        document.querySelector('.containerConteudo').style.display = 'block';
        document.querySelector('.tituloPostagem').innerText = postagem.titulo;

        // Sessão InnerText
        document.querySelector('.mensagemPostagem').innerText = postagem.mensagem;
        document.querySelector('.autorPostagem').innerText = postagem.autor;
        document.querySelector('.autorComentario').innerText = postagem.comentarios[1].autor;
        document.querySelector('.mensagemComentario').innerText = postagem.comentarios[1].mensagem;
    }
}

function comentar(){
    var deixarComentario = document.querySelector('.deixarComentario');
    var comentariosPostados = document.querySelector('.comentariosPostados');

    if(deixarComentario.value.length == 0){
        alert('Preencha o campo vazio para comentar.');
    }else{
        
        // Criar Comentários
        var div = document.createElement('div');
        div.innerText = deixarComentario.value;
        div.classList.add('textoComentario');
        comentariosPostados.appendChild(div);
        var comentariosPostados = comentariosPostados.innerHTML;

        // Local Storage para comentários feitos
        localStorage.setItem('comentariosPostados', comentariosPostados);
    }
}