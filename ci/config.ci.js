module.exports = {
    // Website Settings
    port: 3000,

    secret: 'test-123456789',

    GACode: 'UA-113826252-4',

    baseURL: 'http://localhost',

    discord: {
        client_id: '12345',
        client_secret: 'test',
        token: 'test',
        scopes: ['identify'],
        guild_id: '12345',
        edit_log: '12345',
        lists_log: '12345',
        mod_role: '12345',
        admin_role: '12345',
        notifications: false
    },

    // SQL Database
    database: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'botblock',
        client: 'mysql'
    },

    // SQL Database for Seed Data Exports
    // This can be left blank unless you need to export seed data
    seedDatabase: {
        host: '',
        user: '',
        password: '',
        database: '',
        client: 'mysql'
    }
};
