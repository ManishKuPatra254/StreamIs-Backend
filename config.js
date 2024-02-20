
const config = {
    local: {
        DB: {
            HOST: "127.0.0.1",
            PORT: "27017",
            DATABASE: "streamies",
            UserName: "",
            Password: ""
        },

        PORTNO: 8680,

    },

    staging: {
        DB: {
            HOST: "0.0.0.0",
            PORT: "27017",
            DATABASE: "streamies",
            MONGOOSE: {
                useUndifinedTopology: true,
                useNewUrlParser: true
            },
            UserName: "",
            Password: ""
        },


        PORTNO: 8680,

    },
}
export const get = function get(env) {
    return config[env];
}