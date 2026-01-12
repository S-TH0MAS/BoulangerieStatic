import { defineConfig } from 'vite'

// Déterminer le base path pour GitHub Pages
// Si GITHUB_REPOSITORY est défini (dans GitHub Actions), utiliser le nom du repo
// Sinon, utiliser '/' pour le développement local
const getBasePath = () => {
    // Si la variable d'environnement base existe (définie par cross-env ou autre), on l'utilise
    if (process.env.BASE_URL) {
        return process.env.BASE_URL;
    }
    
    // Dans GitHub Actions, GITHUB_REPOSITORY est sous la forme "owner/repo"
    if (process.env.GITHUB_REPOSITORY) {
        const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
        // Si le repo se termine par .github.io, c'est un site utilisateur, base path = '/'
        if (repoName.endsWith('.github.io')) {
            return '/';
        }
        // Sinon, base path = '/nom-du-repo/'
        return `/${repoName}/`;
    }
    
    return '/';
};

const basePath = getBasePath();

export default defineConfig({
  base: basePath,
})
