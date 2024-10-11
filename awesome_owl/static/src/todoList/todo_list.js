/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { TodoItem } from "../todoItem/todo_item";

export class TodoList extends Component {
    static template = "awesome_owl.todolist";
   
    static components = {TodoItem};

    setup(){
        this.todos = useState([
            { id: 2, description: "buy milk", isCompleted: false },
            { id: 3, description: "write tutorial", isCompleted: true } 
        ]);
    }
    

}
