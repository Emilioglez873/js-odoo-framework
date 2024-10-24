/** @odoo-module **/

import {registry} from "@web/core/registry";
import {reactive} from "@odoo/owl";

const statisticsService = {
    dependencies: ["rpc"],
    start(env, {rpc}) {
        const statistics = reactive({isReady: false});
        // This part was following the instructions in the 7th step of the Chapter 2 of Discover web framework in which the service
        // should return a reactive object that is being updated every 10 minutes
        async function loadData() {
            const updates = await rpc("/dashboard/statistics");
            Object.assign(statistics, updates, {isReady: true});
        }
        setInterval(loadData, 10 * 60 * 1000);
        loadData();
        return statistics;
    },
};

registry.category("services").add("awesome_dashboard.statistics", statisticsService);
