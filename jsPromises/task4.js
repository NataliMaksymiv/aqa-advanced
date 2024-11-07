class TodoService {
    async fetchTodo() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            if (!response.ok) throw new Error("Failed to fetch todo");
            const todo = await response.json();
            return todo;
        } catch (error) {
            console.error("Error fetching todo:", error);
        }
    }
}

class UserService {
    async fetchUser() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            if (!response.ok) throw new Error("Failed to fetch user");
            const user = await response.json();
            return user;
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }
}

async function fetchDataWithPromiseAll() {
    const todoService = new TodoService();
    const userService = new UserService();
    
    try {
        const [todo, user] = await Promise.all([todoService.fetchTodo(), userService.fetchUser()]);
        console.log("Results from Promise.all:");
        console.log("Todo:", todo);
        console.log("User:", user);
    } catch (error) {
        console.error("Error in Promise.all:", error);
    }
}

async function fetchDataWithPromiseRace() {
    const todoService = new TodoService();
    const userService = new UserService();
    
    try {
        const result = await Promise.race([todoService.fetchTodo(), userService.fetchUser()]);
        console.log("Result from Promise.race:", result);
    } catch (error) {
        console.error("Error in Promise.race:", error);
    }
}

fetchDataWithPromiseAll();
fetchDataWithPromiseRace();
