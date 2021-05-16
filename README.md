# @cyberflaw/express-mongodb-jwt @2.0.0

![image info](https://img.shields.io/github/issues/CyberFlaw/Express-MongoDB-JWT-Auth)
![image info](https://img.shields.io/github/forks/CyberFlaw/Express-MongoDB-JWT-Auth)
![image info](https://img.shields.io/github/stars/CyberFlaw/Express-MongoDB-JWT-Auth)

<h4>A small package which makes authentification using express-mongodb and jwt much simpler. The only effort is to build your own mongoose.Schema and set values for a few json keys. More features will be added soon...

<br/>
<br/>
<h2> How to Configure:
<h4>
<ol>
<li>

Run `npm i express mongoose jsonwebtoken`

<li>

Run `npm i @cyberflaw/express-mongodb-jwt`

<li>

Make a file with name **config.json**
in the root directory

<li>Fill the code with the appropriate schema 
<br>

    {
        schemaPath: "path of your mongoose.Schema for your user",
        jwt:{
            expiresIn: "refer jwt documentation"
        }
    }

<br>

<li>

Make a file with name **env.json**
in the root directory and add this your .gitignore

<li>Fill the code with the appropriate schema 
<br>

```
{
    "dbConnect": "db auth key",
    "privateKey": "string for signing jwt (HSA SHA256 currently)"
}
```

<li>Require the package by using 
and execute the funtion you pass down a port for your local server<br>

```
const {launchServer} = require('@cyberflaw/express-mongodb-jwt');

launchServer(port);
```

<li>Hopefully it will workout
</ol>

<br/>
<h4>
[Visit Website](https://www.npmjs.com/package/@cyberflaw/express-mongodb-jwt)

<br>
<br>
<h2>Developer Log
<h4>
The package is still in its early stage and Im a new developer with little expreience. I'll do my best to polish out this package in the upcomming weeks. I'll be adding more features too. I've got many plans and less expriece to execute hopefully it will end up all fine.
<br>
<br>
Thanks For Your Support
