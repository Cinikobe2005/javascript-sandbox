// // Local Storage

// // set sth inth localstorage
// localStorage.setItem("token", "hello");

// // getting something from the localstorage
// localStorage.getItem("token");

// // rmove values in the loaclstorage
// localStorage.removeItem("token");

// // clear our local storage

// localStorage.clear();

// localstorage can only take in strings

const user = {
    id: 1,
    theme: "dark",
}

// JSON.stringify
// Javascript object notation
localStorage.setItem("user", JSON.stringify(user));
// JSON.parse
JSON.parse(localStorage.getItem("user"));