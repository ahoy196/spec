// If this code is called through and a previous check of NoMouseEvents is
// true then rotate through themes until NoMouseEvents is false

type Theme = "basic" | "essential" | "advanced";

type User = {
    userId: number,
    machineId: number,
    settings: {
        configuration: Theme
    }
}

const changeTheme = (user: User, theme: Theme): User => {
    return user;
}

type State = {
    user: User | undefined;
    saveUser: ProbableCause
}

type ProbableCause = true | false | "maybe"

type DriverID = "mouse" | "keyboard";

function mouseStream(id: DriverID): Boolean {
    return true;
} 

const hello = (state: State, driverID: DriverID) => {
    if (mouseStream(driverID)) {
        console.log("Hello, ths checkpoint is a probable cause");
        state.saveUser = "maybe";
        console.log(state);
    }
}

const initState: State = {
    user: undefined,
    saveUser: false
}

console.log("This is the initState supplied");
console.log(initState);
hello(initState, "mouse");