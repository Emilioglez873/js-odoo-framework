/** @odoo-module **/

import { registry } from "@web/core/registry";
import { reactive } from "@odoo/owl";

const clickerService = {
    start(env){
        const state = reactive({
            counter: 0, 
            level: 0, 
            clickBots: 0,
        });
        setInterval(()=>{
            state.counter += 10*state.clickBots;
        }, 10000);
        function increment(inc) {
            state.counter += inc;
            if(state.level < 1 && state.counter >= 1000){
                state.level++;
            }
         }
        function buyBot(){
            if(state.counter < 1000){
                return false;
            }
            state.counter -= 1000;
            state.clickBots++;
        }
        
        document.addEventListener("click", () => increment(1), true );
        return {
            state,
            increment,
            buyBot
         };    
    }   
}

registry.category("services").add("awesome_clicker.clicker", clickerService);
