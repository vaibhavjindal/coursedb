function upload_files()
{
  var auth = firebase.auth();
  var storageRef = firebase.storage().ref();
  var department=document.getElementById("department").value;
  var course=document.getElementById("course").value;
  var ind=course.indexOf("-");
  var coursecode=course.slice(0,ind);
  var newref=storageRef.child(department+"/"+coursecode);
  var notes=document.getElementById("notes").files;
  var assign=document.getElementById("assign").files;
  var others=document.getElementById("others").files;
  for(var i=0;i<notes.length;i++)
  {
    var file = notes[i];
      var mountainsRef = newref.child(file.name);
      mountainsRef.put(file).then(function(snapshot)
      {
        console.log('Uploaded'+file.name);
      }).catch(function(error) {
        console.error('Upload failed:', error);
      });
  }
  for(var i=0;i<assign.length;i++)
  {
    var file = assign[i];
      var mountainsRef = newref.child(file.name);
      mountainsRef.put(file).then(function(snapshot)
      {
        console.log('Uploaded'+file.name);
      }).catch(function(error) {
        console.error('Upload failed:', error);
      });
  }
  for(var i=0;i<others.length;i++)
  {
    var file = others[i];
      var mountainsRef = newref.child(file.name);
      mountainsRef.put(file).then(function(snapshot)
      {
        console.log('Uploaded'+file.name);
      }).catch(function(error) {
        console.error('Upload failed:', error);
      });
  }
}
