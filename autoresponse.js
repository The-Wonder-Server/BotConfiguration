module.exports = [
    {
        keywords: [["error code 123", "There was an error sending your chat message! Please try again in a few minutes. If the issue continues, try logging out and back in. (Error Code 123)"]],
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
]
