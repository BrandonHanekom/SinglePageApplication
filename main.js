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
        todo_input_el.type = "text";
        todo_input_el.value = todo;

        todo_content_el.appendChild(todo_input_el);

        const todo_actions_el = document.createElement("div");
        todo_actions_el.classList.add("actions");

        const todo_edit_el = document.createElement("button");
        todo_edit_el.classList.add("edit");
        todo_edit_el.innerHTML = "Edit";

        const todo_delete_el = document.createElement("button");
        todo_delete_el.classList.add("delete");
        todo_delete_el.innerHTML = "Delete";

        todo_actions_el.appendChild(todo_edit_el);
        todo_actions_el.appendChild(todo_delete_el);

        todo_el.appendChild(todo_actions_el);

        list_el.appendChild(todo_el);

        input.value = ""; 

        todo_edit_el.addEventListener('click', () => {
            if (todo_edit_el.innerText.toLowerCase() == "edit") {
                todo_input_el.removeAttribute;
                todo_input_el.focus();
                todo_edit_el.innerText = "Save";
            } else {
                todo_input_el.setAttribute
                todo_edit_el.innerText = "Edit"
            }
        })
    })
})