'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var WormholeGenerator = yeoman.generators.Base.extend({

	initializing: function () {
		this.pkg = require('../package.json');
		this.on('end', function () {

			this.installDependencies({
				npm: true
			},function(){
				console.log("All dependencies installed.");
			});
		});
	},

	askFor: function () {
		var done = this.async();
		this.log(yosay('** Timewarp generator **'));
		done();
	},
    
    app: function () {

    	this.copy('_gruntfile.js','Gruntfile.js');
    	this.copy('index.html','index.html');
    	this.mkdir('css');
    	this.mkdir('imgs');

    	this.mkdir('js');
    		this.mkdir('js/controllers');
    			this.copy('js/controllers/index.js','js/controllers/index.js');

    		this.mkdir('js/libs');
    			this.copy('js/libs/analytics.js','js/libs/analytics.js');
    			this.copy('js/libs/angular.js','js/libs/angular.js');
    			this.copy('js/libs/jquery.js','js/libs/jquery.js');

    		this.mkdir('js/plugins');
    			this.copy('js/plugins/boilerplate.js','js/plugins/boilerplate.js');

    		this.mkdir('js/views');
    			this.copy('js/views/index.js','js/views/index.js');

    	this.mkdir('scss');
    		this.copy('scss/index.scss','scss/index.scss')
    		
    		this.mkdir('scss/framework');
    			this.copy('scss/framework/_forms.scss','scss/framework/_forms.scss');
    			this.copy('scss/framework/_inputs.scss','scss/framework/_inputs.scss');
    			this.copy('scss/framework/_mixins.scss','scss/framework/_mixins.scss');
    			this.copy('scss/framework/_variables.scss','scss/framework/_variables.scss');

    		this.mkdir('scss/layouts');
    			this.copy('scss/layouts/_all.scss','scss/layouts/_all.scss');
    			this.copy('scss/layouts/_desktop.scss','scss/layouts/_desktop.scss');
    			this.copy('scss/layouts/_desktop-large.scss','scss/layouts/_desktop-large.scss');
    			this.copy('scss/layouts/_phablets.scss','scss/layouts/_phablets.scss');
    			this.copy('scss/layouts/_retina.scss','scss/layouts/_retina.scss');
    			this.copy('scss/layouts/_tablets.scss','scss/layouts/_tablets.scss');

    		this.mkdir('scss/layouts/index');
    		    this.copy('scss/layouts/index/_all.scss','scss/layouts/index/_all.scss');
    			this.copy('scss/layouts/index/_desktop.scss','scss/layouts/index/_desktop.scss');
    			this.copy('scss/layouts/index/_desktop-large.scss','scss/layouts/index/_desktop-large.scss');
    			this.copy('scss/layouts/index/_phablets.scss','scss/layouts/index/_phablets.scss');
    			this.copy('scss/layouts/index/_retina.scss','scss/layouts/index/_retina.scss');
    			this.copy('scss/layouts/index/_tablets.scss','scss/layouts/index/_tablets.scss');

    		this.mkdir('scss/libs');
    			this.copy('scss/libs/_normalize.scss','scss/libs/_normalize.scss');
    			this.copy('scss/libs/_reset.scss','scss/libs/_reset.scss');

    		this.mkdir('scss/plugins');
    			this.copy('scss/plugins/_animate.scss','scss/plugins/_animate.scss');

    	this.mkdir('__example');
    		this.copy('__example/index.html','__example/index.html');
    		this.copy('__example/sample.html','__example/sample.html');

    	this.mkdir('__example/css');
    		this.copy('__example/css/index.css','__example/css/index.css');
    		this.copy('__example/css/sample.css','__example/css/sample.css');
    	this.mkdir('__example/imgs');

    	this.mkdir('__example/js');
    		this.mkdir('__example/js/controllers');
    			this.copy('__example/js/controllers/index.js','__example/js/controllers/index.js');
    			this.copy('__example/js/controllers/sample.js','__example/js/controllers/sample.js');

    		this.mkdir('__example/js/libs');
    			this.copy('__example/js/libs/angularjs-v1.2.0.js','__example/js/libs/angularjs-v1.2.0.js');
    			this.copy('__example/js/libs/jquery-v1.11.js','__example/js/libs/jquery-v1.11.js');

    		this.mkdir('__example/js/plugins');
    			this.copy('__example/js/plugins/jquery.airport.js','__example/js/plugins/jquery.airport.js');

    		this.mkdir('__example/js/views');
    			this.copy('__example/js/views/index.js','__example/js/views/index.js');
    			this.copy('__example/js/views/sample.js','__example/js/views/sample.js')

    	// SASS FOLDER

    	this.mkdir('__example/scss');
    		this.copy('__example/scss/index.scss','__example/scss/index.scss');
    		this.copy('__example/scss/sample.scss','__example/scss/sample.scss');

    		this.mkdir('__example/scss/framework');
    			this.copy('__example/scss/framework/_forms.scss','__example/scss/framework/_forms.scss');
    			this.copy('__example/scss/framework/_inputs.scss','__example/scss/framework/_inputs.scss');
    			this.copy('__example/scss/framework/_mixins.scss','__example/scss/framework/_mixins.scss');
    			this.copy('__example/scss/framework/_variables.scss','__example/scss/framework/_variables.scss');

    		this.mkdir('__example/scss/layouts');
    			this.copy('__example/scss/layouts/_all.scss','__example/scss/layouts/_all.scss');
    			this.copy('__example/scss/layouts/_desktop.scss','__example/scss/layouts/_desktop.scss');
    			this.copy('__example/scss/layouts/_desktop-large.scss','__example/scss/layouts/_desktop-large.scss');
    			this.copy('__example/scss/layouts/_phablets.scss','__example/scss/layouts/_phablets.scss');
    			this.copy('__example/scss/layouts/_retina.scss','__example/scss/layouts/_retina.scss');
    			this.copy('__example/scss/layouts/_tablets.scss','__example/scss/layouts/_tablets.scss');

    		this.mkdir('__example/scss/layouts/index');
    		    this.copy('__example/scss/layouts/index/_all.scss','__example/scss/layouts/index/_all.scss');
    			this.copy('__example/scss/layouts/index/_desktop.scss','__example/scss/layouts/index/_desktop.scss');
    			this.copy('__example/scss/layouts/index/_desktop-large.scss','__example/scss/layouts/index/_desktop-large.scss');
    			this.copy('__example/scss/layouts/index/_phablets.scss','__example/scss/layouts/index/_phablets.scss');
    			this.copy('__example/scss/layouts/index/_retina.scss','__example/scss/layouts/index/_retina.scss');
    			this.copy('__example/scss/layouts/index/_tablets.scss','__example/scss/layouts/index/_tablets.scss');

    		this.mkdir('__example/scss/layouts/sample');
    		    this.copy('__example/scss/layouts/sample/_all.scss','__example/scss/layouts/sample/_all.scss');
    			this.copy('__example/scss/layouts/sample/_desktop.scss','__example/scss/layouts/sample/_desktop.scss');
    			this.copy('__example/scss/layouts/sample/_desktop-large.scss','__example/scss/layouts/sample/_desktop-large.scss');
    			this.copy('__example/scss/layouts/sample/_phablets.scss','__example/scss/layouts/sample/_phablets.scss');
    			this.copy('__example/scss/layouts/sample/_retina.scss','__example/scss/layouts/sample/_retina.scss');
    			this.copy('__example/scss/layouts/sample/_tablets.scss','__example/scss/layouts/sample/_tablets.scss');

    		this.mkdir('__example/scss/libs');
    			this.copy('__example/scss/libs/_normalize.scss','__example/scss/libs/_normalize.scss');
    			this.copy('__example/scss/libs/_reset.scss','__example/scss/libs/_reset.scss');

    		this.mkdir('__example/scss/plugins');
    			this.copy('__example/scss/plugins/_animate.scss','__example/scss/plugins/_animate.scss');



    	this.copy('_package.json', 'package.json');
    	this.copy('_bower.json', 'bower.json');

    },

    projectfiles: function () {
      this.copy('editorconfig', '.editorconfig');
      this.copy('jshintrc', '.jshintrc');
    }




});

module.exports = WormholeGenerator;
