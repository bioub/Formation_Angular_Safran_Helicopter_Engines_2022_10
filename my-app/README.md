# Exercices RxJS

## Pipe Async

Dans `UsersComponent`, remplacer `.subscribe` dans le fichier `.ts` par `| async` dans le fichier `.html` (regarder `UserDetails`)

## Operateurs

Récréer un `ClockComponent` dans `shared` et l'utiliser dans `app.component.html` en fin de fichier

Dans `ClockComponent` remplacer setInterval par la fonction `interval` de RxJS et utiliser l'opérateur `map` pour transformer chaque valeur émise en date.

Utiliser ensuite `| async` pour souscrire à l'heure dans le template.
