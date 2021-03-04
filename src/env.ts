import { MsgType, PushType, TemplateType } from 'push-all-in-one'

const env = process.env
/**
 * 要发送的标题，必填
 */
export const SEND_TITLE = env.SEND_TITLE || ''
/**
 * 要发送的内容，选填
 */
export const SEND_DESP = env.SEND_DESP || ''
/**
 * Server酱。官方文档：https://sct.ftqq.com/
 */
export const SCTKEY = env.SCTKEY || ''
/**
 * 酷推。官方文档：https://cp.xuthus.cc/
 */
export const COOL_PUSH_SKEY = env.COOL_PUSH_SKEY || ''
/**
 * 推送类型 'send' | 'group' | 'psend' | 'pgroup' | 'wx' | 'tg'
 */
export const COOL_PUSH_TYPE = (env.COOL_PUSH_TYPE || 'send') as PushType

/**
 * BER分邮件系统。官方文档：http://doc.berfen.com/1239397
 */
export const BER_KEY = env.BER_KEY || ''
/**
 * 推送到的邮箱
 */
export const EMAIL_ADDRESS = env.EMAIL_ADDRESS || ''
/**
 * 钉钉机器人。官方文档：https://developers.dingtalk.com/document/app/custom-robot-access
 */
export const DINGTALK_ACCESS_TOKEN = env.DINGTALK_ACCESS_TOKEN || ''
/**
 * 钉钉机器人加签安全秘钥（HmacSHA256）
 */
export const DINGTALK_SECRET = env.DINGTALK_SECRET || ''
/**
 * 企业微信群机器人。官方文档：https://work.weixin.qq.com/help?person_id=1&doc_id=13376
 */
export const WX_ROBOT_KEY = env.WX_ROBOT_KEY || ''
/**
 * 消息类型  'text' | 'markdown'
 */
export const WX_ROBOT_MSG_TYPE = (env.WX_ROBOT_MSG_TYPE || 'text') as MsgType

/**
 * 企业微信应用推送，官方文档：https://work.weixin.qq.com/api/doc/90000/90135/90664
 */
export const WX_APP_CORPID = env.WX_APP_CORPID || ''

export const WX_APP_AGENTID = Number(env.WX_APP_AGENTID)

export const WX_APP_SECRET = env.WX_APP_SECRET || ''

export const WX_APP_USERID = env.WX_APP_USERID || ''
/**
 * pushplus 推送，官方文档：http://pushplus.hxtrip.com/doc/
 */
export const PUSH_PLUS_TOKEN = env.PUSH_PLUS_TOKEN || ''
// 消息模板类型 'html' | 'json' | 'cloudMonitor'
export const PUSH_PLUS_TEMPLATE_TYPE = (env.PUSH_PLUS_TEMPLATE_TYPE || 'html') as TemplateType
/**
 * iGot 推送，官方文档：https://wahao.github.io/Bark-MP-helper
 */
export const I_GOT_KEY = env.I_GOT_KEY || ''
