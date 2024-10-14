/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { TodoItem } from "../todoItem/todo_item";

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
    }
    

}
