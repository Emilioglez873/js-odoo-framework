/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";


export class SystrayItem extends Component{

    static template = "awesome_clicker.SystrayItem";
    static props = {};

    setup(){
      this.state = useState({counter: 0 });  
    }
    increment(){
        this.state.counter++;
    }

}

registry.category("systray").add(
    "awesome_clicker.SystrayItem", 
    { Component: SystrayItem, }, 
    { sequence: 0 });