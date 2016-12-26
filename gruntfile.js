module.exports = function(grunt) {
    /* This might be useful to enable after development
     * */
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    // grunt.loadNpmTasks('grunt-express-server');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
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
                    sourceMap: true
                    // declaration: true
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
            typescript_files: {
                files: ['source_ts/*.ts'],
                tasks: ['typescript'],
            },
            html: {
                files: ['public/*.html']
            },
            server: {
                files: ['server_code/server.js']
            }
        },
        // express: {
        //     options: {
        //         //Override defaults here
        //         spawn: false
        //     },
        //     dev: {
        //         options: {
        //             script: 'server_code/server.js',
        //         }
        //     }
        // }
        nodemon: {
            dev: {
                script: 'server_code/server.js'
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    }) //initConfig
    grunt.registerTask('default', ['sass', 'typescript', 'concurrent:tasks']);
}
