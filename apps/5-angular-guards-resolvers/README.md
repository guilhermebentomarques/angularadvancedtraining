# Angular Guards / Resolvers

### Install

```
npm install
```

### Run

```
npm run start 5-angular-guards-resolvers
```

### What now?

1. Create a TodoService
2. Expose a getAll$ method fetching and returning a list of todos from: https://jsonplaceholder.typicode.com/todos
3. Expose a get$ method accepting an id, fetching and returning a specific todo from: https://jsonplaceholder.typicode.com/todos/{id}
4. Create a TodosResolver that fetches and returns the first 10 todos using TodoService
5. Create a TodoResolver that fetches and returns a specific todo using TodoService
6. Create a TodoComponent component displaying a specific Todo (get the Todo from the ActivatedRoute)
7. Create a TodosComponent component displaying a list of Todo (get the Todos from the ActivatedRoute). A click on a todo redirects to TodoComponent
8. Declare routes
