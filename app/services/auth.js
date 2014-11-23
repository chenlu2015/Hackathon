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
        // return auth.$login('password', user);
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