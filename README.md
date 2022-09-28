# Efemérides Astronómicas

## Download project

To download this project to your computer please run the command below.

    git clone https://github.com/elkinnarvaez/efemerides.git

## Run project locally

To run this project locally please follow the steps below.

1. Make sure that the package.json at the root folder has the following scripts:

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

2. Install dependencies
    
    Server's dependencies:

    ```
    npm install
    ```

    Client's dependencies:

    ```
    cd client
    ```
    ```
    npm install
    ```

3. Run the application with the following command

    ```
    npm run dev
    ```

## Deploy project to Fly.io

1. Make sure that the package.json at the root folder has the following scripts:

    ```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node app",
    }
    ```

2. 