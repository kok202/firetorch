# Api server

## API Root

`http://localhost:5001/fixme-my-project/us-central1/api`

## Installed module

- class-transformer

## Default setting

- Api server should be follow layered architecture.
- Only repository layer can access `FirebaseAdmin` except when using transaction on service layer.

## Start command

- `yarn serve`

## Layered architecture

- Controller -> Service -> Repository
- Trigger -> Service -> Repository

## Layer

- Controller (collection of handler)
- Service (buiseness logic using by repository method)
- Repository (only one query of firebase)
- Trigger (collection of listener)

## Word

- id : firebase document id
