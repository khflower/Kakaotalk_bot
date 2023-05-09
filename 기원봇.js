const scriptName = "기원봇";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
     var cmd = msg.split(" ");
    if (cmd[0] == "!기원") {
        cmd.shift();
        var data = Utils.parse("https://m.map.kakao.com/actions/searchView?q=" + cmd.join("%20")+"%20기원")
            .select("li.search_item.base");
        var result = "[기원 리스트]\n\n";
        for (var n = 0; n < data.size(); n++) {
            var datum = data.get(n);
            result += (n + 1) + ". " + datum.attr("data-title") + "\n";
            result += "주소 : " + datum.select("span.txt_g").text() + "\n";
            result += "지도 : https://place.map.kakao.com/m/" + datum.attr("data-id");
            if (n == 1) result += "\u200b".repeat(500);
            result += "\n\n";
        }
        replier.reply(result.trim());
    }
  
  
  
  
  
  
  
}

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  var textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}