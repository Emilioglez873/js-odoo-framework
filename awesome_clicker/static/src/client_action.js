/** @odoo-module */

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";


class ClientAction extends Component {
    static template = "awesome_clicker.ClickerAction";
    static props = ['*'];
    setup(){
        this.clickerService = useState(useService("awesome_clicker.clicker"))
    }
}
registry.category("actions").add("awesome_clicker.client_action", ClientAction);