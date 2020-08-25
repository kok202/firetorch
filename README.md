<p align="center">
  <p align="center">
    <img src='./document/firetorch.png' alt='firetorch' height='180px'>
  </p>
</p>

# Firetorch

## Quickstart for firebase FE and BE

This is a Quickstart template that implements a simple user authentication scenario using by a firebase FE and BE. This project was developed with a design that I personally think is good to develop FE and BE. It just my recommend. So you don't have to follow the project approach shown here.

## Sample

![Main](./document/firetorch_00.png)

![Counter sample for mobx](./document/firetorch_01.png)

![Login](./document/firetorch_02.png)

![Signup](./document/firetorch_03.png)

![Regist](./document/firetorch_04.png)

![Info](./document/firetorch_05.png)

Mosaic feature is not a part of project.

## Quick start

1. Before start it, please check that you set firestore resource location. [More](https://firebase.google.com/docs/projects/locations)
2. Find all string `fixme` and change it as your project name.
3. Go to `https://console.firebase.google.com/project/**YOUR_PROJECT**/settings/serviceaccounts/adminsdk` and create new private key button. then you can get json file `serviceAccountCredentials.json`. And replace it in the functions folder.

## Frontend

### Default setting

- Import absolute path. (alias)
- Divide Environment as phase.
- Locale for multi language.

### Start command

- `yarn local`
- `yarn prod`
- `yarn start` = `yarn local`

### Installed module

- React
- Typescript
- Firebase
- Styled component
- Mobx
- Axios
- lodash
- class-transformer ...

## Backend

### API Root

`http://localhost:5001/fixme-my-project/us-central1/api`

### Default setting

- CRU api for user with unique nicknam.
- Detail [Readme.md](./functions/README.md) at functions directory.
