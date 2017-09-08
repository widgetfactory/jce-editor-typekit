(function() {
    tinymce.create('tinymce.plugins.typekit', {
        init: function(ed, url) {
            ed.onPreInit.add(function(ed) {

                var config = {
                    "kitid": ed.getParam('typekit_kitid')
                };

                var scriptLoader = new tinymce.dom.ScriptLoader();
                scriptLoader.add('//use.typekit.net/' + config.kitId + '.js');
                scriptLoader.loadQueue(function() {
                    try {
                        Typekit.load(config);
                    } catch (e) {}
                });
            });
        }
    });
    tinymce.PluginManager.add('typekit', tinymce.plugins.typekit);
})();
