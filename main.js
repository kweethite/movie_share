var id = new URL(window.location).searchParams.get("id");
//var format = '<div class="card m-2"><div class="card-body"> <h5 class="card-title">Thapyarsone </h5> <p class="card-text"> this is body</p><a  <a href="fb://page/103547275447065/" class="btn btn-primary">Open in App</a>';

var api =  "https://api.allorigins.win/get?url=";
var source = "http://34.123.162.141/movie_share?id="+id;
api = api+encodeURIComponent(source);


function start_download(data,op){
if (data == "false"){
alert("၀မ်းနည်းပါ တယ် ဆေ့ာ၀လ်တွင်သာ Down နိုင်မည် ‌ဆော့၀လ် Down ပါ ");
op();

}else{
      let con = confirm("အပြာကားသီးသန့် Movieတွေ  \n ထောင်နဲ့ချီလုံး၀ဖရီး \n ကြည့်ရှုနိုင်ဖို့ thapyarsone ဆော့၀လ်ကို အခုဒေါင်းမလား");
         if(con){
          op();

         } else{ window.location.href = data}

}

}

function start(d){
let data = JSON.parse(d);
var download_link = data.meta_data.download;
if (data.meta_data.code == 200){
  function open(){
      alert("ဆော့၀လ် ပွင့်သွားလို့တခြားနေရာရောက်သွာ \n ရင်  back တချက်ပြန်ပေးပါ ခများ");
      let appWindow = window.open("th://movie/?id="+id,"blank");
         setTimeout( function () {
         if (appWindow) {
         appWindow.location ="https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.thite.apyarsone&ddl=1&pcampaignid=web_ddl_1"; } },1000);

    }


        document.getElementById("title").innerHTML = data.title;
        document.getElementById("about").innerHTML = data.about;
        document.getElementById("preview_image").setAttribute("src",data.preview);
        document.getElementById("main_box").setAttribute("class","card d-block");
        document.getElementById("loader").setAttribute("class","d-none");
        document.getElementById("open").addEventListener("click", _ => open() );
        document.getElementById("download").addEventListener("click", _ => start_download(download_link,open) );

    }
else start_error();

}


function start_error(){



}





try{
fetch(api)
     .then( res => res.json())
     .then( data => {


      if (data.contents == null){

     start_error();
      }
      else{ start(data.contents)}





     });

}
catch (e){
alert(e.message);
}
//document.getElementById("main_cn").innerHTML = format;
