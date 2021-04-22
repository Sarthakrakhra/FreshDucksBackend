# FreshDucks Backend

This mini-project is developed as the backend for the Full-Stack Developer Test. You can find a working demo [here](https://freshducks-backend.herokuapp.com/)

To run the application please look at the commands below. First thing you will want to do is execute the commands in the [Project Setup](#project-setup) section and then you can run the application by executing the command in the [Compiles and run application locally](#compile-and-run-application-locally) section.

### Project setup

To setup the project we first need to install all the main and development dependencies using the command:

```
npm install
```

Since there is some sensitive information such as the link to the [MongoDB database](https://www.mongodb.com/) the code references, we need to create a `.env` file in the root directory of the project.

`.env` is a file which holds envrionment variables. These variables can in turn be used to store sensitive data and be accessed from the source code. The variables to add in the `.env` file are provided in the written document submitted with this project.

Eventhough the `.env` file is mentioned in the `.gitignore`, it is vital that envrionment variable files are not committed to the repository. To read more, please visit the [dotenv](https://github.com/motdotla/dotenv#dotenv) and [Heroku Config Variables page](https://devcenter.heroku.com/articles/config-vars)

### Compile and run application locally

The app runs locally using this command:

```
npm run serve
```

The main reason the `serve` script was created is so that [Nodemon](https://www.npmjs.com/package/nodemon) could be used for hot reloading while developing in a local environment.

#### Endpoints

- `GET /` is the default endpoint to check if the API is working
- `GET /ducksData/` returns all the submissions from the form in the front-end
- `GET /ducksData/foodTypes` returns all the distinct food types that people have previously mentioned.
- `POST /ducksData/submitDuckData` receives all the duck data to add to the database
  - The endpoint is expecting a JSON object as such:
    ```
    {
        personName: "Some name",
        timeFed: "Any JS DATE String",
        duckLocation: "Some location",
        numberOfDucksFed: 123,
        foodsFed: [
            {
                food: "Some food name",
                amountFed: 123
            },
            ...
        ],
    }
    ```
