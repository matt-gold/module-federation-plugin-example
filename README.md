This repository is a pared down version of Manfred Steyer's module-federation-plugin-example that adds a simple ngxs store to the shell and microfrontend to reproduce an issue with ngxs feature modules loaded via webpack 5 module federation.



simply clone, npmi, and run "npm start". The shell app will load at localhost:5000, and the issue can be reproduced here.

The microfrontend will also load "standalone" in it's own local wrapper at localhost:3000, where there is no issue. The problem only occurs when running it inside of the shell app.  

I've added text to the home page that explains the problem in greater detail.
