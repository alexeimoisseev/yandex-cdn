module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            files: {
                dest: './dist/',
                src: './*.html',
                expand: true
            }
        },
        cdnify: {
            options: {
                cdn: require('../yandex-cdn')
            },
            dist: {
                html: ['./dist/*.html']      
            },
        }
    });
    grunt.loadNpmTasks('grunt-google-cdn');
    grunt.loadNpmTasks('grunt-copy');
    grunt.registerTask('default', ['copy', 'cdnify']);
}
