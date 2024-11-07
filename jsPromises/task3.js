async function fetchTodo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) throw new Error("Failed to fetch todo");
        const todo = await response.json();
        return todo;
    } catch (error) {
        console.error("Error fetching todo:", error);
    }
}

async function fetchUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) throw new Error("Failed to fetch user");
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

async function fetchDataWithPromiseAll() {
    try {
        const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
        console.log("Results from Promise.all:");
        console.log("Todo:", todo);
        console.log("User:", user);
    } catch (error) {
        console.error("Error in Promise.all:", error);
    }
}

async function fetchDataWithPromiseRace() {
    try {
        const result = await Promise.race([fetchTodo(), fetchUser()]);
        console.log("Result from Promise.race:", result);
    } catch (error) {
        console.error("Error in Promise.race:", error);
    }
}

fetchDataWithPromiseAll();
fetchDataWithPromiseRace();
