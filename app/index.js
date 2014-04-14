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
        name: 'bootstrap',
        message: 'Twitter Bootstrap?',
        default: false
      },
      {
        type: 'confirm',
        name: 'normalize',
        message: 'Normalize.css?',
        default: true,
        when: function(answers) {
          return !answers.bootstrap;
        }
      },
      {
        type: 'confirm',
        name: 'css',
        message: 'Include a blank main.css?',
        default: true
      },
      {
        type: 'confirm',
        name: 'jquery',
        message: 'jQuery?',
        default: false
      },
      {
        type: 'confirm',
        name: 'jasmine',
        message: 'Jasmine tests?',
        default: false
      },
      {
        type: 'confirm',
        name: 'js',
        message: 'Include a blank main.js file?',
        default: true
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

    this.template('index.html');

    if(this.props.css) {
      this.write('main.css', '');
    }

    if(this.props.js) {
      if(this.props.jquery) {
        this.copy('main-jquery.js', 'main.js')
      }
      else {
        this.write('main.js', '')
      }
    }

    if(this.props.jasmine) {
      this.directory('test', 'test');
    }
  },
});

module.exports = RefactoruHtmlGenerator;