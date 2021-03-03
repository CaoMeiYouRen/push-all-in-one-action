'use strict';

var core = require('@actions/core');

async function wait(milliseconds) {
    return new Promise((resolve) => {
        if (isNaN(milliseconds)) {
            throw new Error('milliseconds not a number');
        }
        setTimeout(() => resolve('done!'), milliseconds);
    });
}

async function run() {
    try {
        const ms = core.getInput('milliseconds');
        core.debug(`Waiting ${ms} milliseconds ...`); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
        core.debug(new Date().toTimeString());
        await wait(parseInt(ms, 10));
        core.debug(new Date().toTimeString());
        core.setOutput('time', new Date().toTimeString());
    }
    catch (error) {
        core.setFailed(error.message);
    }
}
run();
//# sourceMappingURL=index.js.map
