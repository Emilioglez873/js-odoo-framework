/** @odoo-module **/

import { Component } from "@odoo/owl";
import { humanNumber } from '@web/core/utils/numbers'
import { useClicker } from "../use_clicker";

export class ClickValue extends Component{

    static template = "awesome_clicker.ClickValue"

    setup(){
        this.clicker = useClicker();
    }
 
    get humanNumber(){
        return this.number = humanNumber(this.clicker.counter, { decimals: 0, minDigits: 1 })
    }
}