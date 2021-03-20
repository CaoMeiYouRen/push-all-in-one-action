import core from '@actions/core'
import { runPushAllInOne } from './push'
import { SEND_TITLE, SEND_DESP } from './env'

async function run(): Promise<void> {
    try {
        const title = SEND_TITLE
        const desp = SEND_DESP
        await runPushAllInOne(title, desp)
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
