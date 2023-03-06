function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    const tooQuiet = "I can\'t hear you!"
    const ohYeah = "YES INDEED!"
    const ohYeahYeah = "I would love to!"
    if (string === string.toLowerCase())
    return tooQuiet;
    else if (string === string.toUpperCase())
    return ohYeah;
    else if (string === "Let's have dinner together!")
    return ohYeahYeah;
}