// Initialize Firebase
var config = {
  apiKey: "AIzaSyA80g9xgSC2UveR6GjNC5jIAOZF19bKKKM",
  authDomain: "course-3aa9f.firebaseapp.com",
  databaseURL: "https://course-3aa9f.firebaseio.com",
  projectId: "course-3aa9f",
  storageBucket: "course-3aa9f.appspot.com",
  messagingSenderId: "856132855121"
};
firebase.initializeApp(config);
function upload_data()
{
  var database = firebase.database();
  var insertdata={};
  insertdata.department=document.getElementById("department").value;
  insertdata.coursecode=document.getElementById("coursecode").value;
  insertdata.coursename=document.getElementById("coursename").value;
  insertdata.year=document.getElementById("year").value;
  insertdata.sem=document.getElementById("sem").value;
  insertdata.upname=document.getElementById("upname").value;
  insertdata.des=document.getElementById("des").value;
  var reference=insertdata.department+"/"+insertdata.coursecode+insertdata.year+insertdata.sem;
  var storageref = database.ref(reference);
  storageref.set(insertdata);
  document.getElementById("hello").innerHTML="Data Inserted";
}
