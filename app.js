function findUserByUsername(arr, username) {
    return arr.find(function (key) {
        return key.username === username;
    })
}

function removeUser(arr, username) {
    const index = arr.findIndex(function (key) {
        return key.username === username
    })

    if (index === -1) return;

    return arr.splice(index, 1);
}