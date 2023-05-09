const scriptName = "고차원";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
 
 var score=0;
 var qu1=0;
 var name1=" ";
 
 var rgame=0;
 var rname="";
 



 
 
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {


  
            


if(msg =="!디코"||msg=="!디스코드"){
 replier.reply("https://discord.gg/ZYZBqVQyb6");
}


if(msg =="!VCF"){
 replier.reply("VCF란?  사와 같은 등급 또는 그 이상 등급의 공격을 연속으로 두어 이기는 것");
}

if(msg =="!VCT"){
 replier.reply("VCT란?  삼과 같은 등급 또는 그 이상 등급의 공격을 연속으로 두어 이기는 것");
}

if(msg =="!수줄임"){
 replier.reply("삼과 사를 이용하지 않고 VCF유도수나 VCT유도수를 두는 것");
}

if(msg =="!룰"){
 replier.reply("가장 기본적인 룰은 렌주룰이며 대회에서는 공정한 게임을 위해 오프닝 과정을 도입한 오프닝룰을 사용한다.");
}

if(msg =="!거짓금수"){
 replier.reply("언뜻 보기에는 삼삼처럼 보이지만 삼삼의 정의에 부합하지 않는 수");
}

if(sender=="방장봇" && msg.indexOf("어서오세요~") !=-1){
 replier.reply("어서오세요"+"~ 처음오셨으면 공지사항 읽어주시고 양식에 맞게 자기소개 부탁드립니다ㅎㅎ");
}


if(msg =="!도움말!!!!"){
 replier.reply("현재 지원하는 도움말 목록은 : "+(" ").repeat(500)+"\n \n!오늘의문제\n!문제 #번호\n!난이도 숫자\n!랜덤문제 \n!랜덤문제 난이도숫자 ex(!랜덤문제 난이도7) \n!방번호\n!VCF\n!VCT\n!수줄임\n!거짓금수\n!(주형이름)ex!한성\n!친선등록 할말\n!친선삭제\n!친선대기목록\n!공식용어\n!기원 이름\n!디코\n");
}

if(msg =="잘봤습니다"){
 replier.reply("(우와)");
}


if(msg =="ㅎㅇ요"){
  replier.reply("(그만)")
}

if(msg =="잘배웠습니다"||msg=="잘 배웠습니다"){
  replier.reply("(굿)")
}


 msg = msg.trim();  //닼토봇은 불필요
    if (msg == "!방번호") {
        var rr = Math.floor(Math.random() * 9900) + 100;  //1 이상 6 이하인 정수 생성
        replier.reply("랜덤 방번호 : " + rr);
    }  
    
    
    
    
    


  
 




if(msg =="!!!친선등록"){
  var er=-1;
  var ename=sender;
  er=name1.indexOf(ename);

  if(er==-1){
  
name1=name1+sender+" ";
 replier.reply(sender+" 님이 등록되었습니다.");
}


if(er>-1){
  
replier.reply(sender+" 님은 이미 등록되었습니다.");
}

}

if(msg =="!!!친선삭제"){
  var er=-1;


  
  
  var ername=sender;
  
   er=name1.indexOf(ername);
   if(er==-1){
     replier.reply(sender+" 님은 명단에 없음");
     
   }
   if(er>-1){
  name1=name1.replace(ername+" ", "");
  replier.reply(sender+" 님이 대기자 명단에서 빠졌습니다.");
  }
}




if(msg =="!!!친선리셋"){
  var we=0;
  if(sender=="강현"){
   we=1
  }
  
  if(we==1)
  {
 replier.reply("리셋되었습니다.");
}

if(we==0){
  replier.reply("권한이 없습니다.");
  
  
}

}



if(msg =="!!!친선대기목록"||msg=="!!!친선목록"){
  
  
 replier.reply("현재 친선 대기자 : " + name1);
}

if(msg=="!오프닝룰"){
  replier.reply("오프닝룰이란?(소시로프-8룰) \n 8가지의 과정을 통해 진행되는 룰 \n\n\n"+
  ("1. 임시로 흑과 백을 정함\n\n2. 임시 흑이 원하는 주형(3수)을 둠\n\n3. 임시 백에게 흑백 변경 기회가 주어짐\n\n4. 선택된 임시 백은 4수를 원하는 자리에 두면서 1~8개 사이의 착수 가능 자리(포인트)를 제시함.\n\n 5. 임시 흑에게 흑백 변경 기회가 주어짐(마지막 교체)\n\n 6. 흑은 백이 제시한 포인트를 확인하고 포인트만큼 원하는 자리에 돌을 둠\n\n 7. 백은 두어진 자리 중에서 1개의 돌만 남겨놓고 나머지 제거\n\n8. 이후 렌주룰로 진행"));
  
}


if(msg=="!봇제작자"){
  
  replier.reply("봇 제작자는 강현님");
}

if(msg=="!이스터에그"){
  
  replier.reply("있음");
}




if(msg.indexOf("!네이버")==0){

sc=msg.substring(5);

replier.reply("네이버 검색 결과입니다.\nhttps://search.naver.com/search.naver?query="+encodeURI(sc));

}

if(msg=="!!!랜덤시간"){
  var timeh=0;
  var timem=0;
  timeh=Math.floor(Math.random() * 60) + 1;
    timem=Math.floor(Math.random() * 60) + 1;
  replier.reply("랜덤설정완료\n분 : "+timeh+"분  초읽기 : "+timem+"초");
  
}



  if (msg == "!공식용어" || msg=="!공식 용어") {
    
    replier.reply("오목 공식 용어 입니다.."+(" ").repeat(500)+
    "\n\n장목 : 돌 여섯개 이상이 끊기지 않고 연결 된 형태 \n오목 : 돌 다섯개가 끊기지 않고 연결 된 형태 \n\n\n 사 : 돌 하나를 추가하여 오목을 만들 수 있는 형태 \n 스트레이트 사 : 돌 네개가 끊기지 않고 연결되어 오목을 만들 수 있는 자리가 두 곳인 형태 \n\n\n 삼 : 돌 하나를 추가하여 스트레이트 사를 만들 수 있는 형태 \n\n\n 삼삼 : 마지막 착수 지점을 기준으로 삼이 동시에 두개 이상이 만들어 질때\n 사사 : 마지막 착수 지점을 기준으로 사가 동시에 두개 이상 만들어 질때 ");
  }



    

  
  
  
  
  
  




}