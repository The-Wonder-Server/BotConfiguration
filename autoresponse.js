module.exports = [
    {
        keywords: [
            ["error code 123"], ["error 123"], ["There was an error sending your chat message! Please try again in a few minutes. If the issue continues, try logging out and back in. (Error Code 123)"]
        ],
        response: {
            title: "Error: 123",
            footer: "",
            body: [
                "The most likely causes for this error are:",
                "1. You don't have permission to chat.",
                "2. Internal server error (unlikely).",
            ],
        },
    },
    {
        keywords: [
            ["Your account is not authorized on our network"], ["An error occurred while connecting you to this server. Please try again soon!"]
        ],
        response: {
            title: "Network Error",
            footer: "",
            body: [
                "Common Fixes:",
                "1. Try reconnecting",
                "2. Try restarting your client.",
            ],
        },
    },
    {
        keywords: [
            ["This server is still starting up. Try again in a few seconds"]
        ],
        response: {
            title: "Server still starting",
            footer: "",
            body: [
                "The most likely cause for this error is:",
                "The server is still starting up",
            ],
        },
    },
    {
        keywords: [
            ["error code 100"], ["error 100"], ["There seems to be an error, please report this to a Staff Member! (Error Code 100)"]
        ],
        response: {
            title: "Error: 100",
            footer: "",
            body: [
                "The most likely causes for this error are:",
                "1. Internal server error (unlikely).",
                "2. You declined our resource pack.",
                "3. Resource pack download failed."
            ],
        },
    },
    {
    keywords: [
        ["error code 101"], ["error 101"], ["There seems to be an error, please report this to a Staff Member! (Error Code 101)"]
    ],
    response: {
        title: "Error: 101",
        footer: "",
        body: [
            "The most likely cause for this error is:",
            "Internal server error (unlikely).",
        ],
    },
},
    {
        keywords: [
            ["help"], ["help me"]
        ],
        response: {
            title: "Please tell us what's going on!",
            footer: "",
            body: [
                "Please tell us what's going on! We really would absolutely love to help you out! However, telling us that it isn't working wastes everyone's time. Please, just **describe the issue you're having clearly** and with as much detail as possible, and **send any relevant screenshots** of whatever problems you're having.",
            ],
        },
    },
    {
        keywords: [
            ["ip"], ["whats the ip"], ["what's the ip"]
        ],
        response: {
            title: "Hello, stranger!",
            footer: "",
            body: [
                "The ip of the server: play.thewonderserver.com",
            ],
        },
    },
    {
        keywords: [
            ["website"], ["what's the website"], ["whats the website"]
        ],
        response: {
            title: "Hello, stranger!",
            footer: "",
            body: [
                "The link to our website is: https://thewonderserver.com/",
            ],
        },
    },
    {
        keywords: [
            ["rules"], ["what are the rules"]
        ],
        response: {
            title: "Hello, stranger!",
            footer: "",
            body: [
                "Find the rules of our discord at: https://thewonderserver.com/rules/discord",
            ],
        },
    },
    {
        keywords: [
            ["!poll"]
        ],
        response: {
            title: "New poll has been created!",
            footer: "",
            body: [
                "Go to <#1003458268087197807> to vote!",
            ],
        },
    },
]
