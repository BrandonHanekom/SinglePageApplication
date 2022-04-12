window.addEventListener('load', () => {
    const form = document.querySelector("#newToDoForm");
    const input = document.querySelector("#newToDoInput");
    const list_el = document.querySelector("#todo");
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const todo = input.value;

        if (!todo) {
            alert("Enter your next thing to do.");
            return;
        }

        const todo_el = document.createElement("div");
        todo_el.classList.add("todo");

        const todo_content_el = document.createElement("div");
        todo_content_el.classList.add("content");

        todo_el.appendChild(todo_content_el);

        const todo_input_el = document.createElement("input");
        todo_input_el.classList.add("text");
        todo_input_el.type = "text"
        todo_input_el.value = todo; 

        list_el.appendChild(todo_el);
    })
})