"use strict";
// If this code is called through and a previous check of NoMouseEvents is
// true then rotate through themes until NoMouseEvents is false
const changeTheme = (user, theme) => {
    return user;
};
function mouseStream(id) {
    return true;
}
const hello = (state, driverID) => {
    if (mouseStream(driverID)) {
        console.log("Hello, ths checkpoint is a probable cause");
        state.saveUser = "maybe";
        console.log(state);
    }
};
const initState = {
    user: undefined,
    saveUser: false
};
console.log("This is the initState supplied");
console.log(initState);
hello(initState, "mouse");
