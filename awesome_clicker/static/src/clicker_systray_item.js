/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

export class SystrayItem extends Component{

    static template = "awesome_clicker.SystrayItem";
    static props = {};

    setup(){
        this.clickerService = useState(useService("awesome_clicker.clicker"))
        this.action = useService("action")

    }
    
    openClientAction() {
        this.action.doAction({
            type: "ir.actions.client",
            tag: "awesome_clicker.client_action",
            target: "new",
            name: "Clicker Game"
        });
    }

}

registry.category("systray").add( "awesome_clicker.SystrayItem", { Component: SystrayItem, }, { sequence: 0 });