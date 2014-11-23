'use strict';
 
app.factory('Auth',
  function ($firebase, FIREBASE_URL, $rootScope) {
    var ref = new Firebase(FIREBASE_URL);
 
 
    var Auth = {
      register: function (user) {
           ref.createUser({email: user.email, password: user.password}, function(error) {
            if (error === null) {
              $rootScope.registerMessage =  "User created successfully";
              Auth.login(user);

              return;
            } else {
              $rootScope.registerMessage =  error;
              return;
            }
        });
      },
      signedIn: function () {
       return ref.getAuth();
      },
      login: function (user) {
          ref.authWithPassword({
          email    : user.email,
          password : user.password
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
            var webView = new steroids.views.WebView("/views/task/index.html?user="+authData.uid);
            steroids.layers.push(webView);
          }
        });
      },
      logout: function () {
        ref.unauth();
      }
    };
 
    $rootScope.signedIn = function () {
      return Auth.signedIn() != null;
    };

    $rootScope.logout = function() {
      return Auth.logout();
    }
 
    return Auth;
  });