export function formatQuestion (question, author) {
    const { id, optionOne, timestamp } = question
    const { name, avatarURL } = author

    return {
        author:name,
        id,
        text : optionOne.text,
        avatarURL,
        timestamp
    }
}