import core from '@actions/core'
import { runPushAllInOne } from './push'
import { info, warn } from './help'
async function run(): Promise<void> {
    try {
        const results = await runPushAllInOne()
        if (results.length === 0) {
            warn('未配置任何推送，请检查推送配置的环境变量！')
            return
        }
        const success = results.filter((e) => e.status === 'fulfilled')
        const fail = results.filter((e) => e.status === 'rejected')
        info(`本次推送成功 ${success.length} 个，失败 ${fail.length} 个`)
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
