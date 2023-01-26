# NEEDED TO RUN
In __server__ folder create a `.env` file and add the code below
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.hngum1r.mongodb.net/?retryWrites=true&w=majority
API_URL=https://pokeapi.co/api/v2
```
Remember change __username__ and __password__ in `MONGO_URI`

In __client__ folder create a `.env` file and add the code below
```
REACT_APP_API_BASE_URL=http://localhost:3001/api
```
or
```
REACT_APP_API_BASE_URL=server_link
```

## DEVELOP
Go to /client and run
```
npm run start
```

Go to /server and run
```
npm run start
```
or
```
npm run dev
```

## USING DOCKER
```
docker-compose up --build
```