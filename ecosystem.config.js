module.exports = {
    apps: [
      {
        exec_mode: 'cluster',
        script: 'build',
        watch: false,
        env: {
          PM2_SERVE_PATH: './dist',
          PM2_SERVE_PORT: 5173,
          PM2_SERVE_SPA: 'true',
        },
        instances: '2',
        name: 'my-profile',
      },
    ],
}