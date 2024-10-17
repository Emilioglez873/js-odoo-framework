/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";

class ClientAction extends Component {
    static template = "awesome_clicker.ClickerAction";
    static props = ['*'];
}
registry.category("actions").add("awesome_clicker.client_action", ClientAction);