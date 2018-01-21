# missed-calls-notify

IP-Phone SMART の着信通知サービスのメールをSlackに通知する。
GASでGmailを検索して着信通知があればSlackにPOSTする。

## 使い方

```shell
$ npm install -g node-google-apps-script
$ git clone git@github.com:mursts/missed-calls-notify
$ cd missed-calls-notify
$ gapps init xxxxxxx # https://script.google.com/d/xxxxxxx/edit?usp=drive_web
$ npm run publish
```

### SlackのPOST URLを環境変数に追加
GASのファイル→プロジェクトのプロパティ→スクリプトのプロパティに `SLACK_POST_URL` を設定
