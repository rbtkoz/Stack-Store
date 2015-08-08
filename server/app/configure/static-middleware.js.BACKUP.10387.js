"use strict";
var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');

module.exports = function (app) {

    var root = app.getValue('projectRoot');

    var npmPath = path.join(root, './node_modules');
    var publicPath = path.join(root, './public');
    var browserPath = path.join(root, './browser');
<<<<<<< HEAD
    //var uiBootstrapPath = path.join(root, './node_modules');

    app.use(favicon(app.getValue('faviconPath')));
    //app.use(express.static(uiBootstrapPath));
=======

    app.use(favicon(app.getValue('faviconPath')));
    app.use(express.static(uiBootstrapPath));
>>>>>>> 5b7092bca5a9001b4a9691966ac81b76db2fee03
    app.use(express.static(npmPath));
    app.use(express.static(publicPath));
    app.use(express.static(browserPath));

};
