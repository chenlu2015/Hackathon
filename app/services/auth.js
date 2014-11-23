'use strict';
 
app.factory('Auth',
  function ($firebase, FIREBASE_URL, $rootScope) {
    var ref = new Firebase(FIREBASE_URL);
 
 
    var Auth = {
      register: function (user) {
            return ref.createUser({email: user.email, password: user.password}, function(error) {
            if (error === null) {
              console.log("User created successfully");
            } else {
              console.log("Error creating user:", error);
            }
        });
      },
      signedIn: function () {
        // return auth.user !== null;
      },
      login: function (user) {
         return ref.authWithPassword({
  email    : 'bobtony@firebase.com',
  password : 'invalid-password'
}, function(err, authData) {
  if (err) {
    switch (err.code) {
      case "INVALID_EMAIL":
      // handle an invalid email
      case "INVALID_PASSWORD":
      // handle an invalid password
      default:
    }
  } else if (authData) {
    // user authenticated with Firebase
    console.log("Logged In! User ID: " + authData.uid);
  }
});
      },
      logout: function () {
        // auth.$logout();
      }
    };
 
    $rootScope.signedIn = function () {
      return Auth.signedIn();
    };
 
    return Auth;
  });