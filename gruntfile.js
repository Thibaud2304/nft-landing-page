grunt.initConfig( {
    bake: {
        your_target: {
            options: {
                // Task-specific options go here.
            },
 
            files: {
                // files go here, like so:
 
                "dist/index.html": "app/index.html",
 
                // etc ...
            }
        },
    },
} )