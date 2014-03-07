'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var RefactoruHtmlGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    // this.on('end', function () {
    //   if (!this.options['skip-install']) {
    //     this.npmInstall();
    //   }
    // });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('You\'re using the fantastic RefactoruHtml generator.'));

    var prompts = [
      {
        type: 'confirm',
        name: 'css',
        message: 'Would you like to include a css file? (Type desired filename or leave empty for none)',
        default: 'main.css'
      },
      {
        type: 'confirm',
        name: 'js',
        message: 'Would you like to include a javascript file? (Type desired filename or leave empty for none)',
        default: 'main.js'
      },
      {
        type: 'confirm',
        name: 'bootstrap',
        message: 'Would you like to include Twitter Bootstrap?',
        default: false
      },
      {
        type: 'confirm',
        name: 'jquery',
        message: 'Would you like to include jQuery?',
        default: false
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;

      done();
    }.bind(this));
  },

  app: function () {
    // this.mkdir('app');
    // this.mkdir('app/templates');

    this.template('index.html', 'index.html');
  },
});

module.exports = RefactoruHtmlGenerator;