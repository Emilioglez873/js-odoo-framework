/** @odoo-module */

import { Reactive } from '@web/core/utils/reactive'

export class ClickerModel extends Reactive{
    
    constructor(){
        super();
        this.counter = 0;
        this.level = 0,
        this.clickBots = 0;

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
            this.level++;
        }
    }


}