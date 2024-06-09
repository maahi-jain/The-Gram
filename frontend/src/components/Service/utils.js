const getInitials = (userName) => {
    let name = userName.split(" ");
    let initials = "";
    name.forEach((elem) => {
        initials += elem.substring(0, 1).toUpperCase();
    });
    return initials;
}

module.exports = { getInitials }