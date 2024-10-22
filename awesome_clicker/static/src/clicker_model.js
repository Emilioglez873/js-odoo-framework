/** @odoo-module */

import { Reactive } from '@web/core/utils/reactive';
import { EventBus } from '@odoo/owl';

export class ClickerModel extends Reactive{
    
    constructor(){
        super();
        this.counter = 0;
        this.level = 0,
        this.clickBots = 0;
        this.bus = new EventBus();
        document.addEventListener("click", () => this.increment(1), true );
        setInterval(()=>{
            this.counter += 10*this.clickBots;
        }, 10000);
    }

    buyBot(){
        if(this.counter < 1000){
            return false;
        }
        this.counter -= 1000;
        this.clickBots++;
    }

    increment(inc) {
        this.counter += inc;
        if(this.level < 1 && this.counter >= 1000){
            this.bus.trigger("MILESTONE_1k")
            this.level++;
        }
    }


}