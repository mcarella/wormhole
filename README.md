# <img src="https://assets-cdn.github.com/images/icons/emoji/new_moon.png" height="20" width="20"> WORMHOLE #
A yeoman generator for scaffolding responsive multipages webapps and websites.

# <img src="https://assets-cdn.github.com/images/icons/emoji/hear_no_evil.png" height="20" width="20"> SIMPLE USAGE #
`npm install -g generator-wormhole`

`yo wormhole`

# <img src="https://assets-cdn.github.com/images/icons/emoji/evergreen_tree.png" height="20" width="20"> FOLDERS TREE #

```
project
    \css
	\imgs
	\js
		\controllers
			pageOne.js
			pageTwo.js
		\libs
			angular.js
			jquery.js
			analytics.js
		\plugins
			jquery.tooltip.js
			textResize.js
			formValidation.js
		\views
			pageOne.js
			pageTwo.js
	\scss
		\framework
			_core.scss
			_forms.scss
			_input.scss
			_mixins.scss
			_variables.scss
		\layouts
			_all.scss
			_phablets.scss
			_tablets.scss
			_desktop.scss
			_desktop-large.scss
			_retina.scss

			\pageOne
				_all.scss
				_phablets.scss
				_tablets.scss
				_desktop.scss
				_desktop-large.scss
				_retina.scss

			\pageTwo
				_all.scss
				_phablets.scss
				_tablets.scss
				_desktop.scss
				_desktop-large.scss
				_retina.scss
		\libs
			_animate.scss
			_normalize.scss
			_reset.scss
		\plugins
			_jquery.tooltip.scss
			_jquery.fancyInput.scss
```

# <img src="https://assets-cdn.github.com/images/icons/emoji/speech_balloon.png" height="20" width="20"> FOLDERS EXPLANATION #

# <img src="https://assets-cdn.github.com/images/icons/emoji/file_folder.png" height="20" width="20"> imgs #

Put here all images files: ```.png``` , ```.jpg``` ,  ```.jpeg``` , wallpapers etc.

*EXAMPLE*

* ```icon.png```
* ```home-background.jpeg```
* ```userAvatar.jpg```

# <img src="https://assets-cdn.github.com/images/icons/emoji/file_folder.png" height="20" width="20"> js #

This folder contains all ```.js``` files, organized in subfolders as following:
### \ controllers ###


Put here all ```angular controllers```, each one with the same name of the corresponding view. For example if your ```home.html``` needs an angular controller, create a file like this: ```project\js\controllers\home.js```.

*EXAMPLE* 

* ```home.js```
* ```user-registration.js```
* ```user-login.js```

### \ libs ###

Put here all javascript libraries. 

*EXAMPLE* 

* ```jquery-latest.js```
* ```angular.js```
* ```googleAnalytics.js```

### \ plugins ###

Put here all javascript and jquery plugins.

*EXAMPLE* 

* ```jquery.fancyInput.js```
* ```jquery.tooltips.js```
* ```animate.js```
* ```customHomePagePlugin.js```


### \ views ###

Put here all **presentational stuff**. Each file must have the same name of the corresponding view. For example if your ```home.html``` needs some effects, stuff, and plugins initializazion create a file like this: ```project\js\views\home.js```, that has is own ```document ready```.

*EXAMPLE* 

* ```home-animations.js```
* ```user-registration.js```
* ```user-login.js```
* ```site-animations.js```


# <img src="https://assets-cdn.github.com/images/icons/emoji/file_folder.png" height="20" width="20"> css #

Contains all **generated** ```css``` files from main ```scss``` files. For example ```home.scss``` will generate the corresponding ```home.css``` file in this folder.

# <img src="https://assets-cdn.github.com/images/icons/emoji/file_folder.png" height="20" width="20"> scss #

### \ libs ###

Put here all css libraries.

*EXAMPLE* 

* ```_normalize.scss```
* ```_reset.scss```
* ```_animate.scss```

### \ plugins ###

Put here all css necessary to make javascript libraries work.

*EXAMPLE* 

* ```_jquery.fancyInput.scss```
* ```_jquery.tooltips.scss````

### \ framework ###

In this directory, will be ```scss``` files **shared across all project pages**.

*THE FOLDER IS ORGANIZED AS FOLLOWING* 

* ```_variables.scss``` (project variables declaration &mdash; colors, spacings, etc.)
* ```_mixins.scss``` (project mixin declaration &mdash; typography, clearfix, animations, etc.)
* ```_forms.scss``` (custom form styling &amp; reset)
* ```_input.scss``` (custom input styling &amp; reset)

### \ layouts ###

Files in this directory are organized in that way to cover all screens resolutions, following a **mobile first principle**. So, you should start declaring your own styles using ```_all.scss``` file. Rules declared in this file are valid **for all screen sizes and all views**. 
If you want your website to be adaptable, than just rewrite rules declared for any other screen resolution.

*THE FOLDER IS ORGANIZED AS FOLLOWING*

* phablets (**481up**) ```_phablets.scss```
* tablets and small laptops (**768up**) ```_tablets.scss```
* desktops (**1030up**) ```_desktop.scss```
* desktops with large screens (**1204up**) ```_desktop-large.scss```
* retina displays exceptions (**@2x**) ```_retina.scss```

These files will handle layout exceptions and are called by **mediaqueries**. 

<img src="https://assets-cdn.github.com/images/icons/emoji/warning.png" height="20" width="20">&nbsp; &nbsp; **Please note:** those files are shared across **all views** (html pages). That's why you need to create a new folder under ```scss\layouts``` to give specific style to a specific page.

 *EXAMPLE - you want to style a responsive home page and a responsive user-login page* 

1. Create under ```scss\layouts``` a new folder naming it with the same name of the views you want make adaptive (ex. home and userLogin) so: ```scss\layouts\home``` and ```scss\layouts\userLogin```
2. Put into these folders the same files listed up above: ```_all.scss``` , ```_phablets.scss``` , ```_tablets.scss``` , ```_desktops.scss``` , ```_desktop-large.scss``` and ```_retina.scss```. 
3. The final result will be as follow


```
project
	\scss
		\framework
		\layouts
			_all.scss
			_phablets.scss
			_tablets.scss
			_desktop.scss
			_desktop-large.scss
			_retina.scss

			\home
				_all.scss
				_phablets.scss
				_tablets.scss
				_desktop.scss
				_desktop-large.scss
				_retina.scss

			\userLogin
				_all.scss
				_phablets.scss
				_tablets.scss
				_desktop.scss
				_desktop-large.scss
				_retina.scss
		\libs
		\plugins
```

