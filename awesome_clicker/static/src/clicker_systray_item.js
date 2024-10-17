/** @odoo-module **/

import { Component, useState, useExternalListener } from "@odoo/owl";
import { registry } from "@web/core/registry";


export class SystrayItem extends Component{

    static template = "awesome_clicker.SystrayItem";
    static props = {};

    setup(){
      this.state = useState({counter: 0 });
      useExternalListener(document.body, "click", () => this.state.counter++, true);  
    }
    increment(){
        this.state.counter += 9;
    }

}

registry.category("systray").add(
    "awesome_clicker.SystrayItem", 
    { Component: SystrayItem, }, 
    { sequence: 0 });