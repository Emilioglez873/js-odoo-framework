/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { useClicker } from "./use_clicker";

export class SystrayItem extends Component{

    static template = "awesome_clicker.SystrayItem";
    static props = {};

    setup(){
        this.clickerService = useClicker();
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