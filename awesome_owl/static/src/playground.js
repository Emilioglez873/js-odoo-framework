/** @odoo-module **/

import {Component, markup, useState} from "@odoo/owl";
import {Counter} from "./counter/counter";
import {Card} from "./card/card";
import {TodoList} from "./todoList/todo_list";

export class Playground extends Component {
    static template = "awesome_owl.playground";

    innerHtml = markup("<div>some text 2</div>");

    setup() {
        this.sum = useState({value: 2});
    }
    incrementSum() {
        this.sum.value++;
    }

    static components = {Counter, Card, TodoList};
}
