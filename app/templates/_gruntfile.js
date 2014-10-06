module.exports = function(grunt) {

	grunt.initConfig({

		/* =============================================
   			DEFINING PATHS AND FOLDERS
   		================================================ */

		pkg: grunt.file.readJSON('package.json'),
		path_controllers: 'js/controllers',
	    path_libs: 'js/libs',
        path_plugins: 'js/plugins',
        path_views: 'js/views',
        path_build_js: 'js/build',
        path_build_css: "css",
	    path_css: "css",
	    path_scss: "scss",

	    /* =============================================
   			TASKS SETUP
   		================================================ */


	   	/* -------------------------------------------------
   			CONCAT
   		---------------------------------------------------- */
 
	    concat: {
             
            options: { separator: ';' },
 
            index: {
                src: [

                '<%= path_controllers %>/index.js',
                '<%= path_libs %>/index.js',
                '<%= path_plugins %>/index.js',
                '<%= path_views %>/index.js',
                ],
 
                dest: '<%= path_build_js %>/index.build.js'
            }
 
            // ,sample: {
            //     src: [

            //     '<%= path_controllers %>/sample.js',
            //     '<%= path_libs %>/sample.js',
            //     '<%= path_plugins %>/sample.js',
            //     '<%= path_views %>/sample.js',
            //     ],
 
            //     dest: '<%= path_build_js %>/sample.build.js'
            // }
 
        }, // end concat



        uglify: {


	    	options:{
	    		mangle: true,
	    		preserveComments: false
	    	},


	    	index: {
                src: [
                '<%= path_controllers %>/index.js',
                '<%= path_libs %>/index.js',
                '<%= path_plugins %>/index.js',
                '<%= path_views %>/index.js',
                ],
                dest: '<%= path_build_js %>/index.build.js'
            }

            // , sample: {
            //     src: '<%= concat.js.dest %>',
            //     dest: '<%= path_build_js %>/sample.build.js'
            // }



	    }, // end uglify 

	  
	    /* -------------------------------------------------
   			COMPASS COMPILE
   		---------------------------------------------------- */

   		compass: {
   			dist: {
   				options: {
   					sassDir: '<%= path_scss %>',
   					cssDir: '<%= path_css %>',
   					environment: 'development',
   					outputStyle: 'compressed'
   				}
   			}
   		},

   		/* -------------------------------------------------
   			COMPASS WATCH
   		---------------------------------------------------- */

   		watch: {
   			css: {
				files: '**/*.scss',
				tasks: ['compass']
			}
   		},


	    /* -------------------------------------------------
   			CSS MINIFY
   		---------------------------------------------------- */

	    cssmin: {

	    	index: {
	    		src: '<%= concat.css.dest %>',
	    		dest:'<%= path_build_css %>/index.min.css'
	    	}
	    }


});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['concat', 'uglify', 'compass', 'watch', 'cssmin']);
};