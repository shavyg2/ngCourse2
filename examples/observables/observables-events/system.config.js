var angularVersion = '2.0.0-rc.5';
var formsVersion = '0.3.0'
System.config({
  baseUrl: '/',
  paths: {
    'npmcdn:*': 'https://npmcdn.com/*'
  }
});

System.config({
  transpiler: 'typescript',
  typescriptOptions: { emitDecoratorMetadata: true },

  meta: {
    '*': {
      deps: [ 'zone.js', 'reflect-metadata' ]
    }
  }
});

System.config({
  packageConfigPaths: [
    "npmcdn:@*/*/package.json"
  ],

  map: {
    '@angular/core': 'npmcdn:@angular/core@'+angularVersion,
    '@angular/compiler': 'npmcdn:@angular/compiler@'+angularVersion,
     '@angular/forms': 'npmcdn:@angular/forms@'+formsVersion,
    '@angular/common': 'npmcdn:@angular/common@'+angularVersion,
    '@angular/platform-browser': 'npmcdn:@angular/platform-browser@'+angularVersion,
    '@angular/platform-browser-dynamic': 'npmcdn:@angular/platform-browser-dynamic@'+angularVersion,
    'rxjs': 'npmcdn:rxjs@5.0.0-beta.6',
    'zone.js': 'npmcdn:zone.js@0.6.12',
    'reflect-metadata': 'npmcdn:reflect-metadata@0.1.3',
    "crypto": "@empty"
  },

  packages: {
    'app': {
      defaultExtension: 'ts',
      main: './index.ts'
    }
  }
});
