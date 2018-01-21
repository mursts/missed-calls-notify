import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;

const querySearchMail = 'is:unread from:(mail-noreply@fusioncom.co.jp) 【IP-Phone SMART】着信通知サービス';
const telExp = '([0-9].* から着信がありました。)';
const dateExp = '([0-9]{4}年[0-9]{2}月[0-9]{2}日 [0-9]{2}:[0-9]{2}:[0-9]{2})';

function postSlack(message: string) {
  let payload = {
    'text': message
  };
  let options: URLFetchRequestOptions = {
    contentType: 'application/json',
    method: 'post',
    payload: JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(ScriptProperties.getProperty('SLACK_POST_URL')!, options)
}

function notify() {
  GmailApp.search(querySearchMail).forEach(thread => {
    let messages = thread.getMessages();
    messages.forEach(message => {
      let body = message.getPlainBody();

      let m = body.match(telExp);
      let tel = m![1];
      m = body.match(dateExp);
      let date = m![1];
      
      postSlack(tel + ': ' + date);
      
      message.markRead();
    })
  })
}
