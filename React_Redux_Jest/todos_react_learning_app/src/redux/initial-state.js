

export const initialState = JSON.parse(window.localStorage.getItem("wl-todos")) || {
    todos: [
        {
            id: 0,
            reminder: "Study Redux",
            completed: false,
            important: false,
        },
        {
            id: 1,
            reminder: "Study Java",
            completed: true,
            important: true,
        },
        {
            id: 2,
            reminder: "Write school PS",
            completed: true,
            important: false,
        },
        {
            id: 3,
            reminder: "Beat up river",
            completed: false,
            important: true,
        },
    ],
}