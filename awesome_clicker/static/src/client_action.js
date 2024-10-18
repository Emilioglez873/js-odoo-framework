/** @odoo-module */

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { useClicker } from "./use_clicker";
import { ClickValue } from "./click_value/click_value";


class ClientAction extends Component {
    static template = "awesome_clicker.ClickerAction";
    static props = ['*'];
    static components = { ClickValue };
    
    setup(){
        this.clickerService = useClicker();
    }
}
registry.category("actions").add("awesome_clicker.client_action", ClientAction);