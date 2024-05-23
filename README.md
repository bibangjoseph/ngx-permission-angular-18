# Intégration de `ngx-permissions` dans Angular 18

Ce projet démontre comment intégrer et utiliser `ngx-permissions` pour gérer les permissions et les accès dans une application Angular 18.

## Prérequis

- Node.js et npm installés
- Angular CLI installé

## Installation

1. Clonez ce dépôt :

    ```bash
    git clone https://github.com/bibangjoseph/ngx-permission-angular-18.git
    cd ngx-permission-angular-18
    ```

2. Installez les dépendances :

    ```bash
    npm install
    ```

3. Installez `ngx-permissions` :

    ```bash
    npm install ngx-permissions
    ```

## Configuration

1. Ouvrez `src/app/app.module.ts` et ajoutez `NgxPermissionsModule` à vos imports :

    ```typescript
    import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
    import { provideRouter } from '@angular/router';
    
    import { routes } from './app.routes';
    import {NgxPermissionsModule} from "ngx-permissions";
    
    export const appConfig: ApplicationConfig = {
    providers: [
    
        // Import providers from NgxPermissionsModule
        importProvidersFrom(NgxPermissionsModule.forRoot()),
    
        // Provide the router configuration
        provideRouter(routes),
    ]
    };
    ```

## Définition des Permissions

1. Dans un service ou un composant, définissez vos permissions :

    ```typescript
    import { NgxPermissionsService } from '@ngx-permissions/core';
    import {inject, OnInit } from '@angular/core';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent implements OnInit {
      permissionsService = inject(NgxPermissionsService)
      

      ngOnInit() {
        this.permissionsService.addPermission('ADMIN');
        this.permissionsService.addPermission('USER');
      }
    }
    ```

## Utilisation des Permissions dans les Composants

1. Utilisez les directives `ngxPermissionsOnly` et `ngxPermissionsExcept` dans vos templates pour contrôler l'accès :

    ```html
    <div *ngxPermissionsOnly="'ADMIN'">
      Ce contenu est visible uniquement par les administrateurs.
    </div>

    <div *ngxPermissionsExcept="'USER'">
      Ce contenu est visible par tous sauf les utilisateurs.
    </div>
    ```

## Gestion Dynamique des Permissions

1. Vous pouvez charger et supprimer des permissions de manière dynamique :

    ```typescript
    this.permissionsService.loadPermissions(['GUEST', 'EDITOR']);
    this.permissionsService.removePermission('GUEST');
    ```

## Lancement de l'Application

1. Pour démarrer l'application Angular, exécutez :

    ```bash
    ng serve
    ```

2. Ouvrez votre navigateur à l'adresse `http://localhost:4200`.

## Contribuer

Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou soumettre une pull request pour proposer des améliorations ou signaler des problèmes.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

N'hésitez pas à explorer ce projet et à l'utiliser comme référence pour intégrer `ngx-permissions` dans vos propres applications Angular 18. Pour toute question ou suggestion, veuillez laisser un commentaire dans le dépôt GitHub.

## Liens Utiles

- [ngx-permissions sur GitHub](https://github.com/AlexKhymenko/ngx-permissions)
- [Documentation officielle d'Angular](https://angular.io/docs)

---

## Auteur

Fait avec ❤️ par [Joseph Donovan BIBANG BEFENE](https://www.linkedin.com/in/joseph-donovan-bibang-befene-552624127).

