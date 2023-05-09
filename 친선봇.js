const scriptName = "친선봇";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
 var name0=new Array();
 var name1=new Array();
 var time1=new Array();
 var cnt=0;
 var name2="친선대기목록 명단 \n\n  시간    이름     할말\n\n";
 var name3="";
 
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
 
 
 if(msg.indexOf("!친선등록")==0){
   
   var flag=0;
 for(var i=0; i<name1.length; i++){
   
 if(name1[i].indexOf(sender)>=0){
    
      flag=1;
    
     }
   
 }
 
 if(flag==1){
   
   replier.reply(sender+"님은 이미 등록되었습니다.\n!친선삭제 후 이용해주세요");
 }else{
 sc=msg.substring(6);
 today=new Date();
 hou=today.getHours();
 min=today.getMinutes();
   name1[cnt]=hou+"시 "+min+"분) "+sender+" : "+sc+"\n";
   name0[cnt]=hou+"시 "+min+"분) "+sender+" : "+sc+"\n";
   time1[cnt]=today;
   cnt=cnt+1;
   replier.reply(sender+"님이 등록되었습니다.");
   }
 }
 
 
 if(msg=="!친선대기목록"||msg=="!친선목록"){
  
  name2=name2="친선대기목록 명단 \n\n";
   for(var i=0; i<name1.length; i++){
     if(new Date()-time1[i]<36000000){
     name2=name2+name1[i];
     }else{
       name1[i]="";
     }
   }
   replier.reply(name2); 
 }
 
 if(msg=="!친선삭제"){
   var flag=0;
   var temp=0;
   for(var i=0; i<name1.length; i++){
     if(name1[i].indexOf(sender)>=0){
      name1[i]="";
      flag=1;
      temp=i;
     }
   }
   if(flag==0){
     replier.reply(sender+"님은 친선명단에 없습니다.");
   }else{
     
     replier.reply(sender+"님이 명단에서 빠졌습니다.");
   }
   
  
    
   
 }
 
 
 
   if(msg=="!!친선리셋"){
     var we=0;
     
  if(sender=="강현"){
   we=1;
  }
  
  if(we==1)
  {
    
    time1=new Array();
    name1=new Array();
    cnt=0;
    name2="친선대기목록 명단 \n\n  시간    이름     할말\n\n";
    
    
 replier.reply("리셋되었습니다.");
}

if(we==0){
  replier.reply("권한이 없습니다.");
}         


  }
  
  
  if(msg=="!!친선이전목록"&&sender=="강현"){
  
  name3="친선이전목록 명단 \n\n";
   for(var i=0; i<name1.length; i++){
     name3=name3+name0[i];

   }
   replier.reply(name3); 
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