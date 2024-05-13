const username = 'mcavalcantedesouza';

fetch(`https://api.github.com/users/${username}`)
.then(response => response.json())
.then(user => {
    const followersCount = user.followers;
    const repositoriesCount = user.public_repos;

    const followersCountElement = document.getElementById('followers-count');
    const repositoriesCountElement = document.getElementById('repositories-count');

    followersCountElement.textContent = `Número de seguidores: ${followersCount}`;
    repositoriesCountElement.textContent = `Número de repositórios: ${repositoriesCount}`;
})
.catch(error => console.error('Erro ao recuperar informações:', error));
