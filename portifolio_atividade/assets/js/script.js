const username = 'mcavalcantedesouza';
const getPerfilImagem = document.querySelector('#perfil-usuario');
const getSeguidores = document.querySelector('#seguidores');
const getRepositorios = document.querySelector('#repositorios');
const getBtnGitHub = document.querySelector('#btn-github');


async function getApiGitHub(){

    try{

        const dadosPerfil = await fetch(`https://api.github.com/users/${username}`);
        const perfil = await dadosPerfil.json();

        getPerfilImagem.src = perfil.avatar_url;
        getSeguidores.innerHTML = `Seguidores: ${perfil.followers}`;
        getRepositorios.innerHTML = `Repositórios: ${perfil.public_repos}`;


    }catch (error) {
        console.log(error);
    }
}

function gitHub(){
    open(`https://github.com/${username}`, '_blank');
}

getApiGitHub();
