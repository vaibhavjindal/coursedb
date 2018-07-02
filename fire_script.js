// Initialize Firebase
var config = {
  apiKey: "AIzaSyBlnIx5UZcA3aNCwI0GjtSQOgvFDHgdnJQ",
  authDomain: "coursedbiitk.firebaseapp.com",
  databaseURL: "https://coursedbiitk.firebaseio.com",
  projectId: "coursedbiitk",
  storageBucket: "coursedbiitk.appspot.com",
  messagingSenderId: "227597663485"
};
firebase.initializeApp(config);





function timeset(data){
  setTimeout(gotData(data),200);
  obj.getdata();
  setTimeout(obj.addkeys(),500)
}


function send_email()
{
  var email=document.getElementById("exampleInputEmail1").value;
  var domain=email.split("@")[1];
  var d=new Date();
  var hrs=d.getHours();
  var hashstr=email+hrs;
  var h=md5(hashstr);
  if(domain=="iitk.ac.in")
  {
      document.getElementById("clickbut").disabled = true;
      console.log("Access granted");
      var actionCodeSettings = {
          'url':"https://coursedbiitk.firebaseapp.com/upload-data?user="+email+"&hash="+h, //Redirection Link
          'handleCodeInApp': true // This must be true.Dont know why.
         };
         firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings).then(function() {
           window.localStorage.setItem('emailForSignIn', email);
           alert('An email was sent to ' + email + '. Please use the link in the email to sign-in.');
         }).catch(function(error) {
           var errorCode = error.code;
           var errorMessage = error.message;
           console.log(errCode);
           console.log(errorMessage);
         });
  }
  else
  {
    console.log("Access Denied");
    alert("Only a valid iitk email id can be used for verification.")
  }
}
function hellonikhil()
{
  console.log("is_signed function is called");
  var address=window.location.href;
  console.log(address);
  console.log(typeof(address));
  var hash_start=address.indexOf("hash");
  var hash_end=address.indexOf("&",hash_start);
  var email_start=address.indexOf("user");
  var email_end=address.indexOf("&",email_start);
  if(hash_start == -1 || hash_end == -1 || email_start == -1 || email_end == -1)
  {
    document.write("Access Denied");
    console.log(hash_start);
    console.log(hash_end);
    console.log(email_start);
    console.log(email_end);
  }
  else
  {
    var hash_str_url=address.slice(hash_start+5,hash_end);
    var email=address.slice(email_start+5,email_end);
    var d = new Date();
    var hrs=d.getHours();
    var hashstr=email+hrs;
    var hash_str=md5(hashstr);
    console.log(email);
    console.log(hrs);
    console.log(hashstr);
    console.log(hash_str);
    console.log(hash_str_url);
    if(hash_str_url == hash_str)
    {
      console.log("user verified");
    }
    else
    {
      document.write("Access Denied");
    }
  }
}











function gotData(data) {


  window.obj={



  getdata:function(){
    var temp;
  window.all=[];
 // var depts=[];
  //  var coursecode=[];
   // var coursename=[];


    for(var dept in data){
     // depts.push(dept);
     // all.push(dept)

      for(code in data[dept]){
      //  coursecode.push(code)
        //all.push(code)

        name = data[dept][code]['coursename']
        code=data[dept][code]['coursecode']
        temp=code+' - '+name+'  ('+dept+')';
        all.push(temp);

      }
    }
    console.log(all);
  },

   /* addkeys:function(){
      console.log('inside addkeys');
      console.log(all.length);
      var tosearch=document.getElementById('search').value;
      tosearch=tosearch.replace(/^"(.*)"$/, '$1');
      tosearch=tosearch.toUpperCase();
      for(var i=0;i<all.length;i++){
        var counter=1;
        var temp=all[i].toUpperCase();
        if(temp.search(tosearch)){

          var searchobject=document.getElementById('data');
          for(var j=0;j<searchobject.children.length;j++){
            if(all[i]==searchobject.children[j].value){
              counter=0;
              break;
            }
          }
          if(counter){
            var opt=document.createElement('option');
          opt.value=all[i];
          opt.appendChild(document.createTextNode(all[i]));
          document.getElementById('data').appendChild(opt);
          }
        }
      }
    } */

    addkeys:function(){
      var counter=1;
      var searchobject=document.getElementById('data');
      for(var i=0;i<all.length;i++){
        counter=1;
        for(var j=0;j<searchobject.children.length;j++){
          if(all[i]==searchobject.children[j].value){
            counter=0;

            break;
          }
        }
          if(counter){
            console.log('adding values')

        var opt=document.createElement('option');
          opt.value=all[i];
          opt.appendChild(document.createTextNode(all[i]));
          document.getElementById('data').appendChild(opt);


        }
      }
    }

}

}


/*function input_call(){
  console.log('inside input call')
var textinput=document.getElementById('search');
document.getElementById('search').defaultValue='';
var timeout_input=null;
  clearTimeout(timeout_input);
  timeout_input=setTimeout(obj.addkeys,700)

}*/

function get_json(){
  var url="https://coursedbiitk.firebaseio.com/.json";
  var request=new XMLHttpRequest();
  request.open('GET',url);
  request.responseType='json';
  request.send();
  request.onload=function(){
    console.log('script loaded');
    var DATA=request.response;
    timeset(DATA);

  }
}

function redirect_course()
{
  var str=document.getElementById('search').value;
  var x=str.indexOf(' ');
  var y=str.indexOf('(');
  var z=str.indexOf(')');
  window.location='courses/@'+str.slice(y+1,z)+'@'+str.slice(0,x)

}
function home_redirect()
{
  window.location.assign("https://coursedbiitk.firebaseapp.com/home");
}
function download_files(file_type){
  var url=window.location.href;
  var temp=url.indexOf('files');
  var dep_end=url.indexOf("@",temp);
  var dep= decodeURIComponent(url.slice(temp+6,dep_end));
  var course= decodeURIComponent(url.slice(dep_end+1));
  var database = firebase.database();
  var newref=database.ref(dep+"/"+course);
  document.getElementById("info").innerHTML="Your files are Being processed . Downloading will begin shortly after.Processing may take time depending on your connection speed";

  newref.once('value').then(function(snap){
      console.log(snap.val());
      var data=snap.val();
      var storageref=firebase.storage().ref();
      var urls=[];
      var progressid="";
      if(file_type=="notes")
      {
        urls_name=data.notes;
        progressid="lecture_progress";
      }
      if(file_type=="assign")
      {
        urls_name=data.assign;
        progressid="assign_progress";
      }
      if(file_type=="others")
      {
        urls_name=data.others;
        progressid="others_progress";
      }
      var zip = new JSZip();
      var zipFilename = "zipFile.zip";
      var count=0;
      function down(x)
      {
        storageref.child(data.department+"/"+data.coursecode+"/"+x).getDownloadURL().then(function(url)
        {
          var filename=x;
          JSZipUtils.getBinaryContent(url, function (err, data)
          {
            if(err)
            {
              throw err; // or handle the error
            }
            zip.file(filename, data, {binary:true});
            count++;
            document.getElementById(progressid).innerHTML=count+" of "+urls_name.length+" files processed";
          })
        })
      }
      for(var f=0;f<urls_name.length;f++)
      {
        down(urls_name[f]);
      }
      function checked()
      {
        if(count==urls_name.length)
        {
          zip.generateAsync({type:"blob"}).then(function(blob){
          saveAs(blob,zipFilename);
        })
        }
        else
        {
          console.log("counr is     "+count);
          setTimeout(checked, 3000)
        }
      }
      checked();
    })
}
