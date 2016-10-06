module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            html: {
                src: ['src/*.html'],
                dest: 'build/index.html'
            },
            js: {
                src: ['src/js/*.js'],
                dest: 'build/js/main.js'
            },
            css: {
                src: ['src/css/**/*.css'],
                dest: 'build/css/style.css'
            },
            options: {
                separator: ';',
            },
        },
        uglify: {
            dist: {
                src: ['build/js/main.js'],
                dest: 'build/js/main.min.js',
            }
        },
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['src/index.html'],
                tasks: ['concat:html'],
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['concat:js'],
            },
            css: {
                files: ['src/css/*.css'],
                tasks: ['concat:css'],
            },
        },
        connect: {
            site: {
                options: {
                    port: 9000,
                    base: 'build/'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect', 'concat', 'uglify', 'watch']);

};
