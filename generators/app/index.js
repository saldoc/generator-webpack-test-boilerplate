const Generator = require('yeoman-generator');

module.exports = class extends Generator {
	welcome() {
		this.log('Welcome to the Gulp and Sass Generator!');
	}

	writing() {
    this.fs.copy(
      this.templatePath('.eslintignore'),
      this.destinationPath('.eslintignore')
    );
		this.fs.copy(
			this.templatePath('.eslintrc.js'),
			this.destinationPath('.eslintrc.js')
		);
		this.fs.copy(
			this.templatePath('gulpfile.js'),
			this.destinationPath('gulpfile.js')
		);
    this.fs.copy(
      this.templatePath('.prettierignore'),
      this.destinationPath('.prettierignore')
    );
    this.fs.copy(
      this.templatePath('.prettierrc.js'),
      this.destinationPath('.prettierrc.js')
    );
		this.fs.copy(
			this.templatePath('_gitignore'),
			this.destinationPath('.gitignore')
		);
		this.fs.copy(
			this.templatePath('package-lock.json'),
			this.destinationPath('package-lock.json')
		);
		this.fs.copy(
			this.templatePath('package.json'),
			this.destinationPath('package.json')
		);
    this.fs.copy(
			this.templatePath('tsconfig.json'),
			this.destinationPath('tsconfig.json')
		);
    this.fs.copy(
			this.templatePath('webpack.common.js'),
			this.destinationPath('webpack.common.js')
		);
    this.fs.copy(
			this.templatePath('webpack.dev.js'),
			this.destinationPath('webpack.dev.js')
		);
    this.fs.copy(
			this.templatePath('webpack.prod.js'),
			this.destinationPath('webpack.prod.js')
		);
		this.fs.copy(this.templatePath('app'), this.destinationPath('app'));
	}

	end() {
		this.log(' ');
		this.log(
			'Finished generating!'
		);
		this.log(' ');
	}
};