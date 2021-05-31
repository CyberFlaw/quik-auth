# quik-auth @0.0.1

![image info](https://img.shields.io/github/issues/CyberFlaw/json-auth)
![image info](https://img.shields.io/github/forks/CyberFlaw/json-auth)
![image info](https://img.shields.io/github/stars/CyberFlaw/json-auth)
![image info](https://img.shields.io/github/license/CyberFlaw/json-auth)

<h4>A small package which makes authentification using express-mongodb and jwt much simpler. The only effort is to build your own mongoose.Schema and set values for a few functions. More features will be added soon...

<br/>
<br/>

<br>

<h2> How to Configure:
<h4>
<ol>
<li>

Clone the repository

<!-- <li>

Run `npm i json-auth` -->

<li>

Make a `.env` file in your root directory and initialize
<br/>
<br/>
`DB_CONNECT =` Your MongoDB authentification endpoint
`PRIVATE_KEY =` A private key for signing JWT

<br>

<li>The function launchServer() takes in 2 arguments
<ol>
<li> port: Defines which port to start the server
<li> app: This is the return value of Express(), which is used to make some routes 
</ol>
<br>

```
schema();

launchServer(port, app);

app.get(
  '/private/route',
  auth,
  (req,res) => res.send("Its a private route!")
);
```

<li>

Call the function `schema()`
<br>
<br>
You can either call the function directly which will use this default schema. You can also pass your own custom schema as an argument to the function so that you can use a custom schema

This is the default schema:

```
// Importing dependencies
const mongoose = require("mongoose");

// Defining post schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 12,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 32,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 124,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model("User", userSchema);

```

<br>

<li>

`auth` is a Middleware, which can be passed on to your other routes in order to make it private. This will be the middleware code running in the background

```

const token = req.header("token");

  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = decoded.user;

    next();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Invalid Token" });
  }

```

<li>Hopefully it will workout
</ol>

<br>

<h2>Developer Log
<h4>
The package is still in its early stage and I'm a new developer with little experience. I'll do my best to polish out this package in the upcoming weeks. I'll be adding more features too. I've got many plans and less experience to execute hopefully it will end up all fine.
<br>
<br>
The repository is kinda a mess right now. It's not in a place to ask for contributors. I'll be fixing it soon,  more details on that later. Meanwhile start an Issue if you spot some bugs of errors in my code. 
<br>
<br>
❤ Thanks For Your Support ❤
