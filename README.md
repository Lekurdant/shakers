# Shakers - Lieux d'Effervescence

Site web moderne pour la résidence d'artistes Shakers à Montluçon, développé avec Next.js, TypeScript et Tailwind CSS.

## 🎨 À propos

Shakers est une résidence d'artistes créée en 2002 à Montluçon. Ce site web moderne présente :
- Les artistes en résidence
- Les actualités et événements
- Les informations sur l'association
- Le processus de candidature
- Les archives des artistes accueillis

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes modernes
- **Responsive Design** - Optimisé pour tous les écrans

## 📦 Installation

1. **Cloner le projet**
   ```bash
   git clone [url-du-repo]
   cd shakers
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🏗️ Structure du projet

```
shakers/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── association/       # Page association
│   ├── residence/         # Page résidence
│   ├── artistes/          # Page artistes
│   ├── actualites/        # Page actualités
│   └── contact/           # Page contact
├── components/            # Composants réutilisables
│   ├── Header.tsx         # Navigation principale
│   ├── Footer.tsx         # Pied de page
│   ├── Hero.tsx           # Section héro
│   ├── About.tsx          # Section à propos
│   ├── CurrentResidents.tsx # Artistes actuels
│   ├── News.tsx           # Actualités
│   └── CTA.tsx            # Call-to-action
├── tailwind.config.js     # Configuration Tailwind
├── tsconfig.json          # Configuration TypeScript
└── package.json           # Dépendances
```

## 🎨 Design

Le site utilise un design moderne et élégant avec :
- **Palette de couleurs** : Bleu primaire (#0ea5e9) et tons neutres
- **Typographie** : Inter (sans-serif) et Playfair Display (serif)
- **Composants** : Cards, boutons, formulaires stylisés
- **Responsive** : Mobile-first design
- **Accessibilité** : Navigation clavier, contrastes optimisés

## 📱 Pages disponibles

- **Accueil** (`/`) - Présentation générale et actualités
- **Association** (`/association`) - Informations sur l'association et adhésion
- **Résidence** (`/residence`) - Programmes de résidence et candidatures
- **Artistes** (`/artistes`) - Archives des artistes par année
- **Actualités** (`/actualites`) - Événements et expositions
- **Contact** (`/contact`) - Informations pratiques et formulaire

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm run build
# Déployer sur Vercel
```

### Autres plateformes
```bash
npm run build
npm start
```

## 📝 Personnalisation

### Couleurs
Modifiez `tailwind.config.js` pour changer la palette de couleurs :
```javascript
colors: {
  primary: {
    // Vos couleurs personnalisées
  }
}
```

### Contenu
- Modifiez les composants dans `/components/`
- Ajoutez de nouvelles pages dans `/app/`
- Personnalisez les styles dans `globals.css`

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -m 'Ajouter nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Site web** : [residenceshakers.wordpress.com](https://residenceshakers.wordpress.com/)
- **Adresse** : 13 square Henri Barbusse, 03100 Montluçon
- **Téléphone** : 06 74 12 91 87

---

Développé avec ❤️ pour Shakers - Lieux d'Effervescence
# shakers
