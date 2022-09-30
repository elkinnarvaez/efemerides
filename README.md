# Efemérides Astronómicas

## Download project

To download this project in your local computer please run the following command:

```
git clone https://github.com/elkinnarvaez/efemerides.git
```

## Run app locally

In order to run this application you have to install [Node.js](https://nodejs.org/en/download/).

Running the application locally means that you'll only have access to it from your local machine, not from the internet.

1. Make sure that the *package.json* at the root folder has the following scripts:

    ```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node app",
        "server": "nodemon",
        "client": "npm start --prefix client",
        "dev": "concurrently \"npm run server\" \"npm run client\"",
        "build": "npm run build --prefix client"
    }
    ```

2. Install dependencies.

    Server's dependencies:

    ```
    npm install
    ```

    Client's dependencies:

    ```
    cd client
    npm install
    ```

3. Run the application.

    ```
    npm run dev
    ```

## Build client app

As the front-end side of the application is developed in [React](https://reactjs.org/), it's required to bundle, minify and optimize all front end code into HTML, CSS and JavaScript files in the build folder. You can do that by running the following command in your terminal:

```
npm run build
```

## Deploy app to Fly.io

In order to deploy this application, first you have create an account in [Fly.io](https://fly.io/app/sign-in), or sign in if you already have one.

It's also required that you've already built the client-side React application before deploying. See [Build Client App](build-client-app) if you haven't done that.

1. Follow [these](https://fly.io/docs/hands-on/install-flyctl/) steps to download Fly.io's command line tool (flyctl). Skip this step if you already have it installed.

2. If you didn't add flyctl to your PATH environment variable during installation, run these two commands everytime you open your terminal:

    ```
    export FLYCTL_INSTALL="/home/elkinnarvaez/.fly"
    ```

    ```
    export PATH="$FLYCTL_INSTALL/bin:$PATH"
    ```

3. Login to your Fly.io account using flyctl.

    ```
    flyctl auth login
    ```

4. Make sure that the *package.json* at the root folder has the following scripts:

    ```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node app",
    }
    ```

5. Deploy the app.

    Deploying the application means that you are uploading the project to a cloud server that will give you access to the app from the internet.

    * First time deployment.

        If you are doing the deployment for the first time, run the command below.

        ```
        flyctl launch
        ```

        When running this command you will be prompted several options that you will have choose to your own convenience. Please take a look at [Fly.io's pricing](https://fly.io/docs/about/pricing/). For the application to work properly, it is required that you attach a database to it (you will be promted that option when launching, or you can choose to attach it later).
    
    * Make changes to deployment.

        If you had previouly deployed the project, you can deploy changes to the app just by running:

        ```
        flyctl deploy
        ```

## Connect to PostgreSQL database

In order to access the apps database from your local computer, please run the following command:

```
flyctl postgres connect -a efemerides-db
```