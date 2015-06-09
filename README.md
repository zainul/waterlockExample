# waterlockExample
Example usage waterlock js with local-authentication

## Description

This project is example for using json web token using waterlock.js , in this project we ArticleController with 3 method such as : restricted, open and jwt. restricted method is example 
method in article controller that can be access if user authorized, open method is  example method
in article controller that can be access for public. jwt method is example of usage json web token.
```
module.exports = {
  restricted: function(req, res) {
    return res.ok("this is restricted controller, if you find this you are authenticated");
  },
  open: function(req, res){
    return res.ok("Its open for public");
  },
  jwt: function(req, res){
    return res.ok("Yeah you are have json web token right? ");
  }
};
```
then we manage polices sails js in config/polices, we will define Controller that has json web token. In this example we use article controller that consist restric method, open method and jwt method. the example polices in code below

```
'*': true,
ArticleController: {
  restricted: ['sessionAuth'], // can access if user authenticated
  open: true, // can access public
  jwt: ['hasJsonWebToken'] // can access if user send a json web token
}
```

## Example Usage

1. you can access open method with postman or browser for pulbic access http://localhost:1337/article/open 
2. you can access with browser or postman http://localhost:1337/article/restricted but you will be redirect to forbidden page because you are not authenticated
3. if you want to login you can use http://localhost:1337/auth/login use method post , and fill username and email, if you are not register user , the method will be register you and automatic login. This method use [findOrCreate](https://github.com/balderdashy/sails-docs/blob/master/reference/waterline/models/findOrCreate.md) of sails js 
4. after login you can get the json web token in http://localhost:1337/user/jwt to get access token , if you not authorized user system will be show 'You are not authorized.' but if you after login and hit /user/jwt route you will get response ```{token:******, expires:time_format}```
5. to access /article/jwt you can use acccess_token that given by /user/jwt . You can put the access_token in get parameter, post parameter or in header . you can use postman to execute this step.

You can manange waterlock config in config/waterlock for example manage expires token.

## Motivation

This porject is like tutorial and explanation how to use waterlock by example. i write this example because sharing is care.

## Dependencies NPM
1. sailsjs
2. waterlock
3. waterlock-local-auth

## Installation example project

1. clone this repo
2. npm install
3. sails lift

## Contributors

Very appreciate to user for contribute to this repo, and share the experiance to use waterlock example.

## License

A short snippet describing the license (MIT, Apache, etc.)
