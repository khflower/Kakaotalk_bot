const scriptName = "파싱봇";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
 
 const Jsoup = org.jsoup.Jsoup;
 

  
  
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {


var doc = org.jsoup.Jsoup.connect("https://renjurating.wind23.com/").get();
doc1=doc.select("td[class=num]");
doc2=doc.select("a[class=num]");
doc3=doc.select("tr").text();

var dock = org.jsoup.Jsoup.connect("https://renjurating.wind23.com/rating_c6.html").get();
dock1=dock.select("td[class=num]");
dock2=dock.select("a[class=num]");
dock3=dock.select("tr").text();






var rank="세계 랭킹\n\n"+(" ").repeat(500);
var rank2="한국 랭킹\n\n"+(" ").repeat(500);





var doc4 = doc3.split(" ");
var dock4 = dock3.split(" ");
var cnt1=1;
var cntk1=1;
var cntk2=0;
var cnt2=0;

if(msg=="!세계랭킹"||msg=="!세계 랭킹") {
for(a=8;a<doc4.length;a++){ 
  if(isNaN(doc4[a])==false && cnt1==1){
    rank=rank+"\n"+doc4[a]+"위 ";
    cnt1=cnt1+1;
  }
  else if(isNaN(doc4[a])==false && cnt1!=1){
    
    if(cnt1==2){
    rank=rank+doc4[a]+"점 ";
    }
    cnt1=cnt1+1;   
    if(cnt1==7){
      cnt1=1;
    } 
  }
  else if(isNaN(doc4[a])==true){
    rank=rank+doc4[a]+" ";
  } 
}
replier.reply(rank);
}

  if(msg=="!한국랭킹"||msg=="!한국 랭킹") {
for(a=8;a<dock4.length;a++){ 
  if(isNaN(dock4[a])==false && cntk1==1){
    rank2=rank2+"\n"+dock4[a]+"위 ";
    cntk1=cntk1+1;
  }
  else if(isNaN(dock4[a])==false && cntk1!=1){
    
    if(cntk1==2){
    rank2=rank2+dock4[a]+"점 ";
    }
    cntk1=cntk1+1;   
    if(cntk1==7){
      cntk1=1;
    } 
  }
  else if(isNaN(dock4[a])==true){
    rank2=rank2+dock4[a]+" ";
  } 
}
replier.reply(rank2);
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