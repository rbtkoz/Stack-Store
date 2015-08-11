# Routes
Frontend and backend routes that are being called by our app. Most of these are predefined.

## Frontend

### POST /login
To log into the service

### GET /logout
Simple logout

### GET /session
Creates a session and emits it

## Backend

### GET /api/members/:id
Can get a member by their id

### GET /*
Returns that path of the home route

### The following routes are weird

* GET /session (This is in configure/authentication/index)
* GET /login (This is in configure/authentication/local)
* GET /logout (This is in configure/authentication/index)

At the top most level of our app there is ./index.js. In that file we see this:

```javascript
require('./configure')(app);
```
App (or express) is being passed into the index.js of the configure directory and that function is being exported.

Inside of the configuration directory index.js file we see something similar:
```javascript
require('./authentication')(app);
```
This file is passed app (or express) and invokes its function that is exported to the configuration file. When this function is invoked it "hoists" the routes above to the top most level.
