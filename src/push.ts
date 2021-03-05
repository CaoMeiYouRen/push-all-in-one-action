import { AxiosResponse } from 'axios'
import { ServerChanTurbo, CoolPush, Dingtalk, Email, WechatRobot, WechatApp, PushPlus, IGot } from 'push-all-in-one'
import {
    SEND_TITLE, SEND_DESP, SCTKEY, COOL_PUSH_SKEY, COOL_PUSH_TYPE, BER_KEY, EMAIL_ADDRESS, DINGTALK_ACCESS_TOKEN, DINGTALK_SECRET,
    WX_ROBOT_KEY, WX_APP_CORPID, WX_APP_AGENTID, WX_APP_SECRET, WX_APP_USERID, PUSH_PLUS_TOKEN, I_GOT_KEY, PUSH_PLUS_TEMPLATE_TYPE,
    WX_ROBOT_MSG_TYPE,
} from './env'
import { info } from './help'

export async function runPushAllInOne(): Promise<PromiseSettledResult<AxiosResponse<any>>[]> {
    const pushs: Promise<AxiosResponse<any>>[] = []
    const title = SEND_TITLE
    const desp = SEND_DESP
    if (SCTKEY) {
        // Server酱。官方文档：https://sct.ftqq.com/
        const serverChanTurbo = new ServerChanTurbo(SCTKEY)
        pushs.push(serverChanTurbo.send(title, desp))
        info('Server酱·Turbo 已加入推送队列')
    } else {
        info('未配置 Server酱·Turbo，已跳过')
    }

    if (COOL_PUSH_SKEY) {
        // 酷推。官方文档：https://cp.xuthus.cc/
        const coolPush = new CoolPush(COOL_PUSH_SKEY)
        pushs.push(coolPush.send(`${title}\n${desp}`, COOL_PUSH_TYPE))
        info('Cool Push 已加入推送队列')
    } else {
        info('未配置 Cool Push，已跳过')
    }

    if (EMAIL_ADDRESS) {
        // BER分邮件系统。官方文档：http://doc.berfen.com/1239397
        // 如果不提供 BER_KEY 将会使用免费版本进行推送。免费接口有较多限制，请自行斟酌
        const email = new Email(BER_KEY)
        pushs.push(email.send({
            title,
            // subtitle: '这是个小标题',
            desp,
            address: EMAIL_ADDRESS,
        }))
        info('BER分邮件系统 已加入推送队列')
    } else {
        info('未配置 BER分邮件系统，已跳过')
    }

    if (DINGTALK_ACCESS_TOKEN) {
        // 钉钉机器人。官方文档：https://developers.dingtalk.com/document/app/custom-robot-access
        const dingtalk = new Dingtalk(DINGTALK_ACCESS_TOKEN, DINGTALK_SECRET)
        pushs.push(dingtalk.send(title, desp))
        info('钉钉机器人 已加入推送队列')
    } else {
        info('未配置 钉钉机器人，已跳过')
    }

    if (WX_ROBOT_KEY) {
        // 企业微信群机器人。官方文档：https://work.weixin.qq.com/help?person_id=1&doc_id=13376
        // 企业微信群机器人的使用需要两人以上加入企业，如果个人使用微信推送建议使用 企业微信应用+微信插件 推送
        const wechatRobot = new WechatRobot(WX_ROBOT_KEY)
        pushs.push(wechatRobot.send(`${title}\n${desp}`, WX_ROBOT_MSG_TYPE))
        info('企业微信群机器人 已加入推送队列')
    } else {
        info('未配置 企业微信群机器人，已跳过')
    }

    if (WX_APP_CORPID && WX_APP_AGENTID && WX_APP_SECRET) {
        // 企业微信应用推送，官方文档：https://work.weixin.qq.com/api/doc/90000/90135/90664
        const wechatApp = new WechatApp({
            WX_APP_CORPID,
            WX_APP_AGENTID,
            WX_APP_SECRET,
            WX_APP_USERID,
        })
        pushs.push(wechatApp.send(`${title}\n${desp}`))
        info('企业微信应用推送 已加入推送队列')
    } else {
        info('未配置 企业微信应用推送，已跳过')
    }

    if (PUSH_PLUS_TOKEN) {
        // pushplus 推送，官方文档：http://pushplus.hxtrip.com/doc/
        const pushplus = new PushPlus(PUSH_PLUS_TOKEN)
        pushs.push(pushplus.send(title, desp, PUSH_PLUS_TEMPLATE_TYPE))
        info('pushplus推送 已加入推送队列')
    } else {
        info('未配置 pushplus推送，已跳过')
    }

    if (I_GOT_KEY) {
        // iGot 推送，官方文档：https://wahao.github.io/Bark-MP-helper
        const iGot = new IGot(I_GOT_KEY)
        pushs.push(iGot.send(title, desp))
        info('iGot推送 已加入推送队列')
    } else {
        info('未配置 iGot推送，已跳过')
    }

    return Promise.allSettled(pushs)
}
