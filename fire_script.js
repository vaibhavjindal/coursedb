// Initialize Firebase
var config = {
  apiKey: "AIzaSyDYoaAWQ7WiDbCmlBpcta82bcnZg-cECtw",
  authDomain: "coursedb-2000.firebaseapp.com",
  databaseURL: "https://coursedb-2000.firebaseio.com",
  projectId: "coursedb-2000",
  storageBucket: "coursedb-2000.appspot.com",
  messagingSenderId: "738547070183"
};
firebase.initializeApp(config);
function upload_data()
{
  var database = firebase.database();
  var insertdata={};
  insertdata.department=document.getElementById("department").value;
  try
  {
    var course=document.getElementById("course").value;
  }
  catch(err)
  {
    document.getElementById("err").innerHTML="You must provide a field values";
    return;
  }
  var ind=course.indexOf("-");
  insertdata.coursecode=course.slice(0,ind);
  insertdata.coursename=course.slice(ind+1,course.length);
  insertdata.year=document.getElementById("year").value;
  var temp='';
  for(var i=0;i<insertdata.year.length;i++)
  {
    if(insertdata.year[i]=='-')
      continue;
    else
      temp+=insertdata.year[i];
  }
  insertdata.year=temp;
  insertdata.sem=document.getElementById("sem").value;
  insertdata.upname=document.getElementById("upname").value;
  insertdata.des=document.getElementById("des").value;
  var notes=document.getElementById("notes").files;
  var assign=document.getElementById("assign").files;
  var others=document.getElementById("others").files;
  if(insertdata.department=="")
  {
    document.getElementById("err").innerHTML="You must provide a department name";
    return;
  }
  if(insertdata.coursecode=="")
  {
    document.getElementById("err").innerHTML="You must select a course";
    return;
  }
  if(insertdata.year=="")
  {
    document.getElementById("err").innerHTML="You must provide a year";
    return;
  }
  if(insertdata.sem=="")
  {
    document.getElementById("err").innerHTML="You must select a semester";
    return;
  }
  if(insertdata.upname=="")
  {
    document.getElementById("err").innerHTML="You must provide your name";
    return;
  }
  if(insertdata.des=="")
  {
    document.getElementById("err").innerHTML="You must provide your designation";
    return;
  }
  if(notes.length+assign.length+others.length==0)
  {
    document.getElementById("err").innerHTML="You must provide at least one file to upload";
    return;
  }
  document.getElementById("a").disabled = true;
  var n=[];
  for(var i=0;i<notes.length;i++)
  {
      var file = notes[i];
      n.push(file.name);
  }
  var a=[];
  for(var i=0;i<assign.length;i++)
  {
    var file = assign[i];
    a.push(file.name);
  }
  var o=[];
  for(var i=0;i<others.length;i++)
  {
    var file = others[i];
    o.push(file.name);
  }
  insertdata.notes=n;
  insertdata.assign=a;
  insertdata.others=o;
  var reference=insertdata.department+"/"+insertdata.coursecode+insertdata.year+insertdata.sem+insertdata.upname;
  var storageref = database.ref(reference);
  storageref.set(insertdata);
  var storageRef = firebase.storage().ref();
  var dept=insertdata.department;
  var c_code=insertdata.coursecode;
  var newref=storageRef.child(dept+"/"+c_code);
  for(var i=0;i<notes.length;i++)
  {
    var file = notes[i];
    document.getElementById("notesdisplay").innerHTML="uploading "+(i+1)+" of "+notes.length+" notes";
      var mountainsRef = newref.child(file.name);
      document.getElementById("notesBar").style.width="1px";
      var uptask=mountainsRef.put(file);
      uptask.on('state_changed', function(snapshot){
        progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        p=Math.floor(progress)*5;
        document.getElementById("notesBar").style.width=p+"px";
      })
  }
  for(var i=0;i<assign.length;i++)
  {
    var file = assign[i];
    document.getElementById("assigndisplay").innerHTML="uploading "+(i+1)+" of "+assign.length+" assignments";
      var mountainsRef = newref.child(file.name);
      document.getElementById("assignBar").style.width="1px";
      var uptask=mountainsRef.put(file);
      uptask.on('state_changed', function(snapshot){
        progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        p=Math.floor(progress)*5;
        document.getElementById("assignBar").style.width=p+"px";
      })
  }
  for(var i=0;i<others.length;i++)
  {
    var file = others[i];
    document.getElementById("othersdisplay").innerHTML="uploading "+(i+1)+" of "+others.length+" other files";
      var mountainsRef = newref.child(file.name);
      document.getElementById("othersBar").style.width="1px";
      var uptask=mountainsRef.put(file);
      uptask.on('state_changed', function(snapshot){
        progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        p=Math.floor(progress)*5;
        document.getElementById("othersBar").style.width=p+"px";
      })
  }
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
          'url':"https://coursedb-2000.firebaseapp.com/upload-data?user="+email+"&hash="+h, //Redirection Link
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
