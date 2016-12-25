module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.initConfig({
        sass: {
            options: {
                // sourceMap: 'true',
                includePaths: ['./public/lib/foundation-sites/scss/']
            },
            dist: {
                files: {
                    'public/css/styles.css': 'source_sass/styles.scss'
                }
            }
        },
        typescript: {
            base: {
                src: ['source_ts/*.ts'],
                dest: 'public/js/',
                options: {
                    module: "commonjs",
                    target: "es5",
                    sourceMap: true,
                    declaration: true
                }
            }
        },
        watch: {
            options: { livereload: true},
            scripts: {
                files: ['source_js/*.js'],
                // tasks: [],
            },
            sass_files: {
                files: ['source_sass/*.scss'],
                tasks: ['sass'],
            },
            html: {
                files: ['public/*.html']
            },
            server: {
                files: ['server_code/server.js']
            }
        },
        express: {
            options: {
                //Override defaults here
                spawn: false
            },
            dev: {
                options: {
                    script: 'server_code/server.js',
                }
            }
        }
    }) //initConfig
    grunt.registerTask('default', ['sass', 'typescript', 'express:dev', 'watch']);
}
