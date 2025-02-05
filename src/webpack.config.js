const Encore = require('@symfony/webpack-encore');

Encore
    // Verzeichnis, in dem die kompilierten Assets gespeichert werden
    .setOutputPath('public/build/')
    // Öffentlicher Pfad, den der Webserver verwenden wird, um auf das Build-Verzeichnis zuzugreifen
    .setPublicPath('/build')

    // Entry Points für deine App
    .addEntry('app', './assets/app.js')  
    .addEntry('dashboard', './assets/js/dashboard/index.js') 
    .addEntry('sidebar', './assets/js/util/sidebar.js') 
    // Optimierungsfeatures aktivieren
    .splitEntryChunks() 
    .enableSingleRuntimeChunk()  
    .cleanupOutputBeforeBuild()  
    .enableVersioning(Encore.isProduction())  

    // Babel-Konfiguration für Polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';  
        config.corejs = '3.38';  
    })
;

module.exports = Encore.getWebpackConfig();
