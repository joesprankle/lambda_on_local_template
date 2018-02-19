var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
   lambda_invoke: {
      default: {
         options: {
            file_name: 'index.js'
         }
      }
   },
   lambda_deploy: {
    default: {
        arn: 'arn:aws:lambda:us-west-2:501170096260:function:gist_commit',
        options: {
            enableVersioning: true,
            region: 'us-west-2'
        }
    }
},
   lambda_package: {
      default: {
      }
   }
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy'])