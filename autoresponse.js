module.exports = [
    {
        keywords: [
            ["error code 123"], ["There was an error sending your chat message! Please try again in a few minutes. If the issue continues, try logging out and back in. (Error Code 123)"]
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
                "Find the rules of our discord at: https://thewonderserver.com/rules/discord/",
            ],
        },
    },
]
