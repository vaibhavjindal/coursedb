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
  var course=document.getElementById("course").value;
  var ind=course.indexOf("-");
  insertdata.coursecode=course.slice(0,ind);
  insertdata.coursename=course.slice(ind+1,course.length);
  insertdata.year=document.getElementById("year").value;
  insertdata.sem=document.getElementById("sem").value;
  insertdata.upname=document.getElementById("upname").value;
  insertdata.des=document.getElementById("des").value;
  var reference=insertdata.department+"/"+insertdata.coursecode+insertdata.year+insertdata.sem;
  var storageref = database.ref(reference);
  storageref.set(insertdata);
  document.getElementById("hello").innerHTML="Data Inserted";
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
