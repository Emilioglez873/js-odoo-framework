/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { TodoItem } from "../todoItem/todo_item";
import { useAutoFocus } from "../utils";

export class TodoList extends Component {
    static template = "awesome_owl.todolist";
   
    static components = {TodoItem};

    addTodo(event){
        if(event.keyCode === 13){
            this.todos.push({
                id: this.id++,
                description: event.target.value,
                isCompleted: false
            })
            event.target.value = "";
        }
    }

    setup(){
        this.id = 0;
        this.todos = useState([]);
        useAutoFocus("input-list")
    }

    toggleTodo(todoId){
        const todo = this.todos.find((todo) => todo.id === todoId);
        if(todo){
            todo.isCompleted = !todo.isCompleted;
        }
    }

    removeItem(todoId){
        const indexToDelete = this.todos.findIndex((todo) => todo.id === todoId);

        if(indexToDelete >= 0){
            this.todos.splice(indexToDelete, 1);
        }
    }

}
