module.exports = {
    development: {
        port: 3000,
        db: {
            host: '127.0.0.1',
            port: 27017,
            url() {
                return `mongodb://${this.host}:${this.port}/shopping`;
            }
        }
    }
};