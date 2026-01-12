# Boulangerie Dupont 🥖

🔗 **Site en ligne :** [https://S-TH0MAS.github.io/BoulangerieStatic/](https://S-TH0MAS.github.io/BoulangerieStatic/)

Site vitrine moderne pour une boulangerie artisanale, construit avec **Vite**, **Tailwind CSS** et des **Web Components (Vanilla JS)**.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js (version 18 ou supérieure)
- npm

### Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/S-TH0MAS/BoulangerieStatic.git
   cd boulangerie-dupont
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
   Le site sera accessible à l'adresse `http://localhost:5173`.

## 📦 Structure du Projet

Le projet utilise une architecture basée sur les composants natifs :

```
src/
├── components/          # Web Components indépendants
│   ├── header/         # En-tête et navigation
│   ├── hero/           # Bannière principale
│   ├── specials/       # Grille des produits du jour
│   ├── about/          # Section "À propos"
│   └── footer/         # Pied de page
├── main.js             # Point d'entrée JS
└── style.css           # Styles globaux Tailwind
```

## 🌐 Déploiement sur GitHub Pages

Le déploiement est **automatisé** via GitHub Actions.

### Configuration Requise

1. Allez dans les **Settings** de votre dépôt GitHub.
2. Dans le menu latéral, cliquez sur **Pages**.
3. Sous **Build and deployment** > **Source**, sélectionnez **GitHub Actions**.

### Configuration du Chemin (Important)

Si votre dépôt ne s'appelle pas `boulangerie-dupont`, vous devez modifier le fichier `vite.config.js` :

```javascript
export default defineConfig({
  // Remplacez par le nom de VOTRE dépôt entre les slashes
  base: '/nom-de-votre-repo/', 
})
```

Une fois ces étapes effectuées, chaque "push" sur la branche `main` déclenchera automatiquement la construction et le déploiement du site.

## 🛠 Commandes Utiles

- `npm run dev` : Lance le serveur de développement.
- `npm run build` : Compile le projet pour la production (dossier `dist`).
- `npm run preview` : Prévisualise la version de production localement.
