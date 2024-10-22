/** @odoo-module **/

import { registry } from "@web/core/registry";
import { reactive } from "@odoo/owl";
import { ClickerModel } from "./clicker_model";

const clickerService = {
    start(env){
        return new ClickerModel();
    }
}

registry.category("services").add("awesome_clicker.clicker", clickerService);
