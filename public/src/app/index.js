(function (index) {
    'use strict';
  
    index.registerModule('index', ['core']);
    // The core module is required for special route handling; see /core/client/config/core.client.routes
    index.registerModule('index.admin', ['core.admin']);
    index.registerModule('index.admin.routes', ['core.admin.routes']);
    index.registerModule('index.services');
    index.registerModule('index.routes', ['ui.router', 'core.routes', 'index.services']);
  }(ApplicationConfiguration));