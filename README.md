# push-all-in-one-action

基于 [push-all-in-one](https://github.com/CaoMeiYouRen/push-all-in-one) 的定时推送 action，支持 Server酱、酷推、邮件、钉钉机器人、企业微信机器人、企业微信应用、pushplus、iGot 等多种推送方式。

本项目也欢迎二次开发。

## 使用

### 方法一：fork 本项目

点击右上角的 `fork` 按钮，然后进入 `Actions` 页面开启`Workflows` 下的  `Send`，然后请阅读[配置](#配置)一栏

>   此处借用了 `BiliExp` 的图片，配置过程是一样的

![](https://cdn.jsdelivr.net/gh/CaoMeiYouRen/image-hosting-01@master/images/20210304232639.png)

### 方法二：配置 GitHub workflows

在项目根目录下新建 `.github/workflows/send.yml` 然后复制如下内容

```yaml
name: "Send"

on:
  schedule:
    - cron: "0 23 * * *" # UTC+8 的 7 点执行，修改时注意时区
  watch:
    types: started
  workflow_dispatch:

jobs:
  send:
    name: "Push All In One"
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: "执行 Push All In One"
        uses: CaoMeiYouRen/push-all-in-one-action@master
        env:
          SEND_TITLE: ${{secrets.SEND_TITLE}}
          SEND_DESP: ${{secrets.SEND_DESP}}
          SCTKEY: ${{secrets.SCTKEY}}
          COOL_PUSH_SKEY: ${{secrets.COOL_PUSH_SKEY}}
          COOL_PUSH_TYPE: ${{secrets.COOL_PUSH_TYPE}}
          BER_KEY: ${{secrets.BER_KEY}}
          EMAIL_ADDRESS: ${{secrets.EMAIL_ADDRESS}}
          DINGTALK_ACCESS_TOKEN: ${{secrets.DINGTALK_ACCESS_TOKEN}}
          DINGTALK_SECRET: ${{secrets.DINGTALK_SECRET}}
          WX_ROBOT_KEY: ${{secrets.WX_ROBOT_KEY}}
          WX_ROBOT_MSG_TYPE: ${{secrets.WX_ROBOT_MSG_TYPE}}
          WX_APP_CORPID: ${{secrets.WX_APP_CORPID}}
          WX_APP_AGENTID: ${{secrets.WX_APP_AGENTID}}
          WX_APP_SECRET: ${{secrets.WX_APP_SECRET}}
          WX_APP_USERID: ${{secrets.WX_APP_USERID}}
          PUSH_PLUS_TOKEN: ${{secrets.PUSH_PLUS_TOKEN}}
          PUSH_PLUS_TEMPLATE_TYPE: ${{secrets.PUSH_PLUS_TEMPLATE_TYPE}}
          I_GOT_KEY: ${{secrets.I_GOT_KEY}}

```

## 配置

![image](https://cdn.jsdelivr.net/gh/CaoMeiYouRen/image-hosting-01@master/images/20210304232805.png)

>   此处依旧借用了 `BiliExp` 的图片，注意下 `Name` 和 `Value` 别填成上面的内容就行了，按照下面列表的说明填写
>
>   在`Settings`-->`Secrets`里添加的参数，`Name`必须为下列的参数名称之一，`Value`则填写对应获取的值

本项目所有的配置都采用 `Actions Secrets` 的方式来配置，以下是配置说明。

没有配置的推送方式不会执行推送的。

| secrets                 | 说明                                                         |
| ----------------------- | ------------------------------------------------------------ |
| SEND_TITLE              | 要发送的标题，必填                                           |
| SEND_DESP               | 要发送的内容，选填                                           |
| SCTKEY                  | Server酱·Turbo  SCTKEY。官方文档：https://sct.ftqq.com/      |
| COOL_PUSH_SKEY          | 酷推 SKEY。官方文档：https://cp.xuthus.cc/                   |
| COOL_PUSH_TYPE          | 推送类型，默认为` send`                                      |
| BER_KEY                 | BER分邮件系统。官方文档：http://doc.berfen.com/1239397       |
| EMAIL_ADDRESS           | 推送到的邮箱                                                 |
| DINGTALK_ACCESS_TOKEN   | 钉钉机器人 access_token。官方文档：https://developers.dingtalk.com/document/app/custom-robot-access |
| DINGTALK_SECRET         | 钉钉机器人加签安全秘钥（HmacSHA256）                         |
| WX_ROBOT_KEY            | 企业微信群机器人。官方文档：https://work.weixin.qq.com/help?person_id=1&doc_id=13376 |
| WX_ROBOT_MSG_TYPE       | 消息类型，默认 `text`                                        |
| WX_APP_CORPID           | 企业微信企业ID，获取方式参考 https://work.weixin.qq.com/api/doc/90000/90135/91039#14953/corpid |
| WX_APP_AGENTID          | 企业应用的id。企业内部开发，可在应用的设置页面查看 |
| WX_APP_SECRET           | 应用的凭证密钥，获取方式参考：https://work.weixin.qq.com/api/doc/90000/90135/91039#14953/secret |
| WX_APP_USERID           | 指定接收消息的成员。若不指定则默认为 ”@all”。 |
| PUSH_PLUS_TOKEN                   | pushplus 推送加开放平台。官方文档：http://pushplus.hxtrip.com/doc/ |
| PUSH_PLUS_TEMPLATE_TYPE | 发送消息模板，默认为 html |
| I_GOT_KEY               | iGot 推送，官方文档：https://wahao.github.io/Bark-MP-helper |
