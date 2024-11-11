function fetchTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => {
			if (!response.ok) throw new Error('Failed to fetch todo');
			return response.json();
		})
		.catch((error) => console.error('Error fetching todo:', error));
}

function fetchUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => {
			if (!response.ok) throw new Error('Failed to fetch user');
			return response.json();
		})
		.catch((error) => console.error('Error fetching user:', error));
}

Promise.all([fetchTodo(), fetchUser()]).then(([todo, user]) => {
	console.log('Results from Promise.all:');
	console.log('Todo:', todo);
	console.log('User:', user);
});
