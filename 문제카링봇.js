const scriptName = "문제카링봇";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
 
   /*const { KakaoLinkClient } = require('kakaolink');

const Kakao = new KakaoLinkClient('11a692736fd179e3129324a17324daa7', 'https://renjunote.netlify.com');

Kakao.login('whsndk5@gmail.com', 'akakqhdl3');*/
 


/*const { KakaoApiService, KakaoLinkClient } = require('kakaolink')


const Kakao = new KakaoLinkClient();
KakaoApiService.createService().login({ 
  email: 'whsndk5@gmail.com', password: 'akakqhdl3', keepLogin: true,}).then(e => { 
    Kakao.login(e, { apiKey:'11a692736fd179e3129324a17324daa7', url:'https://renjunote.netlify.com' 
    });}).catch(e => { 
      Log.e(e);
      });*/
/*      
const { KakaoApiService, KakaoLinkClient, TemplateBuilder, Button } = require('kakaolink')

const Kakao = new KakaoLinkClient();

KakaoApiService.createService().login({
    email: 'whsndk5@gmail.com',
    password: 'akakqhdl3',
    keepLogin: true,
}).then(e => {
    Kakao.login(e, {
        apiKey: '11a692736fd179e3129324a17324daa7',
        url: 'www.naver.com'
    });
}).catch(e => {
    throw e;
});
 //로그인 세션이 만료되어 오류가 발생할 각이 보이면 알아서 로그인한 뒤에 전송   

 */
 
const { KakaoApiService, KakaoLinkClient } = require('kakaolink')
const Kakao = new KakaoLinkClient();
const FS = FileStream;
const PATH = "/sdcard/kabotdb/auth.json";
const API_KEY = "11a692736fd179e3129324a17324daa7";
const URL = "https://www.naver.com";
let cookies = FS.read(PATH);
if(cookies=== null){
    cookies = {};
    FS.write(PATH,"{}");
}
else{
    cookies = JSON.parse(cookies)
}
if(Object.keys(cookies).length ===0){
    KakaoApiService.createService().login({
        email: "whsndk5@gmail.com",
        password: "akakqhdl3",
        keepLogin: true,
    }).then( rawCookie => {
        let jsonObj = {};
        rawCookie.forEach( (k,v)=>{
            jsonObj[k] = v
        })
        FS.write(PATH,JSON.stringify(jsonObj));
        Kakao.login(rawCookie, {
            apiKey: API_KEY,
            url: URL
        });
    }).catch(e => {
        throw e;
    });
}
else{
    Kakao.login(cookies, {
        apiKey: API_KEY,
        url: URL
    });

}
 
 
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
  
    if (msg == "!오늘의문제"||msg=="!오늘의 문제") {
      
var now = new Date();
var year = now.getFullYear();   // 연도
var month = now.getMonth()+1;   // 월    
var day = now.getDate();        // 일
var stDate = new Date(2021, 11, 04);
var endDate = new Date(year, month, day);
var btMs = endDate.getTime() - stDate.getTime() ;
var btDay = btMs / (1000*60*60*24) ;
      
      if(btDay%2==1){
      
    Kakao.sendLink(room, {
      template_id: 64743, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
 }else{
   Kakao.sendLink(room, {
      template_id: 64891, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
   
   
 }
 
 
 
  }
  
  
  var Qu=[0,64779,64790,64815,64866,64908,64973,65044,65127,65246,65247,65248,65302,65355,65420,65463,66520,65561,65603,65658,65769,65839,65884,66961,65988,66032,66100,66180,66232,66310,66363,66408,66449,66504,66560,66609,66671,66722,66754,66786,66841,66842,67012,67101,67159,67173,67193,67237,67294,67364,67419,67454,67487,67538,67609,67673,67754,67828,67859,67892,67946,67998,68086,68176,68266,68314,68358,68424,68504,68588,68699,68784,68859,68884,68917,68987,69048,69185,69189,69271,69302,69344,69409,69506,69601,69700,69783,69836,69892,69893,69946,70041,70119,70121,70276,70311,70388,70476,70540,70601,70728,70729,70850,70922,71049,71133,71221,71227,71290,71379,71488,71600,71705,71805,71911,71981,72029,72125,72224,72329,72439,72503,72534,72569,72638,72675,72734,72797,72844,72881,72933,72987,73053,73310,73311,73312,73348,73414,73493,73561,73658,73729,73812,73904,73905,73968,74018,74445,74446,74447,74448,74523,74524,74601,74654,74728,74804,74830,75153,75285,75333,75392,75455,75483,75527,75719,75777,75823,75846,75891,75946,76040,76172,76195,76215
  ,76350,76351,76481,76486,76846,76847,76848,76977,76978,77041,77042,77250,77251,77252];
  
var Qu1=[110];
var Qu2=[45,65,66,70,74,78,115,117,119,127,131,134,153];
var Qu3=[4,18,27,28,36,51,56,62,67,68,72,79,82,88,94,100,105,121,123,129,147,149,150,154,159,169,176];
var Qu4=[5,17,20,21,22,29,40,46,52,64,83,86,89,90,96,97,108,112,118,120,139,142,144,160,164,166,168,172,174,180,181,182,187];
var Qu5=[3,6,7,8,11,15,16,25,26,31,38,53,54,60,63,71,75,81,85,91,93,98,102,103,107,114,124,128,136,137,138,143,145,146,155,157,158,161,165,167,170,177,179,183,184,186,188]; /*5*/
var Qu6=[10,14,19,23,24,30,34,37,39,43,44,47,49,50,58,76,80,84,95,99,125,126,130,132,133,140,151,162,171,173,178];
var Qu7=[1,2,13,35,42,48,55,57,59,61,69,73,77,92,101,109,111,116,122,147,156,163];
var Qu8=[9,12,33,41,87,104,106,141,152,175];
var Qu9=[32,113];
  
var Score=[4.0,4.4];


var score=[
{num : 157, sco : 3.13},
{num : 158, sco : 4.33},
{num : 159, sco : 4.71},
{num : 160, sco : 3.0},
{num : 161, sco : 4.0},
{num : 162, sco : 4.75},
{num : 163, sco : 4.5},
{num : 164, sco : 4.0},
{num : 165, sco : 4.44},
{num : 166, sco : 5.0},
{num : 167, sco : 4.0},
{num : 168, sco : 4.0},
{num : 169, sco : 4.0},
{num : 170, sco : 4.4},
{num : 171, sco : 4.0},
{num : 172, sco : 4.75},
{num : 173, sco : 4.75},
{num : 174, sco : 3},
{num : 175, sco : 4.0},
{num : 176, sco : 4.33},
{num : 177, sco : 4.25},
{num : 178, sco : 5.0},
{num : 179, sco : 3.5},
{num : 180, sco : 3},
{num : 181, sco : 4.67},
{num : 182, sco : 4.0},
{num : 183, sco : 4.67},
{num : 184, sco : 2.5},
{num : 185, sco : 4.5},
{num : 186, sco : 4.0},
{num : 187, sco : 4.5}




];

score.sort(function(a,b){
  return b.sco - a.sco
});


if(msg=='test'){
  
  Kakao.send(room, 64743, 'custom', true);
}




if(msg=="!문제평점"){
  var S4="\n\n";
   for(var i=0; i<score.length; i++){
      S4=S4+score[i].num+"번 문제    평점 : "+score[i].sco+"점 \n";
     }
     
     replier.reply("문제 평점 목록입니다."+(" ").repeat(500)+S4);
}
  
  
  
  
  
  
  if(msg.indexOf("!문제 #")==0){
    
    
    
    num=msg.substring(5);
    if(num>0 && num<Qu.length){
    num2=Qu[num];
    
    Kakao.sendLink(room, {
      template_id: num2, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom'); 
    }
    
  }
  
   if(msg.indexOf("!puzzle #")==0){
    
    
    
    num=msg.substring(9);
    if(num>0 && num<Qu.length){
    num2=Qu[num];
    
    Kakao.sendLink(room, {
      template_id: num2, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom'); 
    }
    
  }
  
  
  

  
  
  if (msg == "!난이도 1" || msg=="!난이도1") {
    var Quu1="\n\n";
    for(var i=0; i<Qu1.length; i++){
      Quu1=Quu1+Qu1[i]+"번 문제\n";
     }
    replier.reply("난이도1 문제 목록입니다."+(" ").repeat(500)+Quu1);
  }
  if (msg == "!난이도 2" || msg=="!난이도2") {
    var Quu2="\n\n";
    for(var i=0; i<Qu2.length; i++){
      Quu2=Quu2+Qu2[i]+"번 문제\n";
     }
    replier.reply("난이도2 문제 목록입니다."+(" ").repeat(500)+Quu2);
  }
  if (msg == "!난이도 3" || msg=="!난이도3") {
    var Quu3="\n\n";
    for(var i=0; i<Qu3.length; i++){
      Quu3=Quu3+Qu3[i]+"번 문제\n";
     }
    replier.reply("난이도3 문제 목록입니다."+(" ").repeat(500)+Quu3);
  }
  
   if (msg == "!난이도 4" || msg=="!난이도4") {
    var Quu4="\n\n";
    for(var i=0; i<Qu4.length; i++){
      Quu4=Quu4+Qu4[i]+"번 문제\n";
     }
    replier.reply("난이도4 문제 목록입니다."+(" ").repeat(500)+Quu4);
  }
  if (msg == "!난이도 5" || msg=="!난이도5") {
    var Quu5="\n\n";
    for(var i=0; i<Qu5.length; i++){
      Quu5=Quu5+Qu5[i]+"번 문제\n";
     }
    replier.reply("난이도5 문제 목록입니다."+(" ").repeat(500)+Quu5);
  }
  
  if (msg == "!난이도 6" || msg=="!난이도6") {
    var Quu6="\n\n";
    for(var i=0; i<Qu6.length; i++){
      Quu6=Quu6+Qu6[i]+"번 문제\n";
     }
    replier.reply("난이도6 문제 목록입니다."+(" ").repeat(500)+Quu6);
  }
  
  if (msg == "!난이도 7" || msg=="!난이도7") {
    var Quu7="\n\n";
    for(var i=0; i<Qu7.length; i++){
      Quu7=Quu7+Qu7[i]+"번 문제\n";
     }
    replier.reply("난이도7 문제 목록입니다."+(" ").repeat(500)+Quu7);
  }
  
  if (msg == "!난이도 8" || msg=="!난이도8") {
    var Quu8="\n\n";
    for(var i=0; i<Qu8.length; i++){
      Quu8=Quu8+Qu8[i]+"번 문제\n";
     }
    replier.reply("난이도8 문제 목록입니다."+(" ").repeat(500)+Quu8);
  }
  
  if (msg == "!난이도 9" || msg=="!난이도9") {
    var Quu9="\n\n";
    for(var i=0; i<Qu9.length; i++){
      Quu9=Quu9+Qu9[i]+"번 문제\n";
     }
    replier.reply("난이도9 문제 목록입니다."+(" ").repeat(500)+Quu9);
  }
  
  
  if(msg=="!랜덤문제"){
    var rr=Math.floor(Math.random()*Qu.length)+1;
     Kakao.sendLink(room, {
      template_id: Qu[rr], //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom'); 
  }
  
  
  if(msg=="!랜덤문제 난이도1"||msg=="!random 1"||msg=="!random1"){
    var rr1=Math.floor(Math.random()*Qu1.length);
     Kakao.sendLink(room, {
      template_id: Qu[Qu1[rr1]], //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom'); 
  }
  
  
   if(msg=="!랜덤문제 난이도2"||msg=="!random 2"||msg=="!random2"){
    var rr2=Math.floor(Math.random()*Qu2.length);
     Kakao.sendLink(room, {
      template_id: Qu[Qu2[rr2]], //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom'); 
  }

 if(msg=="!랜덤문제 난이도3"||msg=="!random 3"||msg=="!random3"){
    var rr3=Math.floor(Math.random()*Qu3.length);
     Kakao.sendLink(room, {
      template_id: Qu[Qu3[rr3]], //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom'); 
  }
  
   if(msg=="!랜덤문제 난이도4"||msg=="!random 4"||msg=="!random4"){
    var rr4=Math.floor(Math.random()*Qu4.length);
     Kakao.sendLink(room, {
      template_id: Qu[Qu4[rr4]], //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom'); 
  }
  
   if(msg=="!랜덤문제 난이도5"||msg=="!random 5"||msg=="!random5"){
    var rr5=Math.floor(Math.random()*Qu5.length);
     Kakao.sendLink(room, {
      template_id: Qu[Qu5[rr5]], //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom'); 
  }
  
   if(msg=="!랜덤문제 난이도6"||msg=="!random 6"||msg=="!random6"){
    var rr6=Math.floor(Math.random()*Qu6.length);
     Kakao.sendLink(room, {
      template_id: Qu[Qu6[rr6]], //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom'); 
  }
  
   if(msg=="!랜덤문제 난이도7"||msg=="!random 7"||msg=="!random7"){
    var rr7=Math.floor(Math.random()*Qu7.length);
     Kakao.sendLink(room, {
      template_id: Qu[Qu7[rr7]], //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom'); 
  }
  
  
   if(msg=="!랜덤문제 난이도8"||msg=="!random 8"||msg=="!random8"){
    var rr8=Math.floor(Math.random()*Qu8.length);
     Kakao.sendLink(room, {
      template_id: Qu[Qu8[rr8]], //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom'); 
  }
  
  
   if(msg=="!랜덤문제 난이도9"||msg=="!random 9"||msg=="!random9"){
    var rr9=Math.floor(Math.random()*Qu9.length);
     Kakao.sendLink(room, {
      template_id: Qu[Qu9[rr9]], //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom'); 
  }
  
  
   
  if (msg == "!!도움말"||msg.toUpperCase()=="!도우미") {
    Kakao.sendLink(room, {
      template_id: 67164, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }
  
  
  if (msg == "!한성"||msg.toUpperCase()=="!D1") {
    Kakao.sendLink(room, {
      template_id: 64708, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!계월"||msg.toUpperCase()=="!D2") {
    Kakao.sendLink(room, {
      template_id: 64709, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!소성"||msg.toUpperCase()=="!D3") {
    Kakao.sendLink(room, {
      template_id: 64710, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!화월"||msg.toUpperCase()=="!D4") {
    Kakao.sendLink(room, {
      template_id: 64711, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!잔월"||msg.toUpperCase()=="!D5") {
    Kakao.sendLink(room, {
      template_id: 64712, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!우월"||msg.toUpperCase()=="!D6") {
    Kakao.sendLink(room, {
      template_id: 64713, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!금성"||msg.toUpperCase()=="!D7") {
    Kakao.sendLink(room, {
      template_id: 64714, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!송월"||msg.toUpperCase()=="!D8") {
    Kakao.sendLink(room, {
      template_id: 64715, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!구월"||msg.toUpperCase()=="!D9") {
    Kakao.sendLink(room, {
      template_id: 64716, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!신월"||msg.toUpperCase()=="!D10") {
    Kakao.sendLink(room, {
      template_id: 64717, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!서성"||msg.toUpperCase()=="!D11") {
    Kakao.sendLink(room, {
      template_id: 64718, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!산월"||msg.toUpperCase()=="!D12") {
    Kakao.sendLink(room, {
      template_id: 64719, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!직접유성"||msg.toUpperCase()=="!D13") {
    Kakao.sendLink(room, {
      template_id: 64720, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!장성"||msg.toUpperCase()=="!I1") {
    Kakao.sendLink(room, {
      template_id: 64721, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!협월"||msg.toUpperCase()=="!I2") {
    Kakao.sendLink(room, {
      template_id: 64722, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!항성"||msg.toUpperCase()=="!I3") {
    Kakao.sendLink(room, {
      template_id: 64723, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!수월"||msg.toUpperCase()=="!I4") {
    Kakao.sendLink(room, {
      template_id: 64724, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!간접유성"||msg.toUpperCase()=="!I5") {
    Kakao.sendLink(room, {
      template_id: 64725, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!운월"||msg.toUpperCase()=="!I6") {
    Kakao.sendLink(room, {
      template_id: 64726, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!포월"||msg.toUpperCase()=="!I7") {
    Kakao.sendLink(room, {
      template_id: 64727, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!람월"||msg.toUpperCase()=="!I8") {
    Kakao.sendLink(room, {
      template_id: 64728, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!은월"||msg.toUpperCase()=="!I9") {
    Kakao.sendLink(room, {
      template_id: 64729, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!명성"||msg.toUpperCase()=="!I10") {
    Kakao.sendLink(room, {
      template_id: 64730, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!사월"||msg.toUpperCase()=="!I11") {
    Kakao.sendLink(room, {
      template_id: 64731, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!명월"||msg.toUpperCase()=="!I12") {
    Kakao.sendLink(room, {
      template_id: 64732, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }

  if (msg == "!혜성"||msg.toUpperCase()=="!I13)") {
    Kakao.sendLink(room, {
      template_id: 64733, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }
  
  
  if (msg == "!도움말"||msg.toUpperCase()=="!도우미") {
    Kakao.sendLink(room, {
      template_id: 67164, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
  }
  
  
  
   if (msg == "!주형이름"||msg.toUpperCase()=="!주형") {
    Kakao.sendLink(room, {
      template_id: 73318, //템플릿 아이디 5자리
      template_args: { 
      }
    }, 'custom');
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