function fetch_data(str)
{
  var database = firebase.database();
  var dep=str;
  var dataref=database.ref(dep);
//  console.log(dataref);
  dataref.once('value').then(function(snapshot){
//    console.log(snapshot);
    var refs=[];
    function recur_data(obj)
    {
    //    console.log("Hi recursion");
        refs.push(obj.key);
        if(obj.left.key)
        {
          recur_data(obj.left);
        }
        if(obj.right.key)
        {
          recur_data(obj.right);
        }
    }
    recur_data(snapshot.node_.children_.root_);
  //  console.log(snapshot.node_.children_.root_);
  //  console.log(refs);
    for (var i=0;i<refs.length;i++){
      document.getElementById("dis").innerHTML+=refs[i]+"<br>";
    }
    // for(var i=0;i<refs.length;i++)
    // {
    //   var newref=database.ref(dep+"/"+refs[i]);
    //   newref.once('value').then(function(snap){
    //     console.log(snap.val());
    //     var data=snap.val();
    //     var lecturelist=data.notes;
    //     var assignlist=data.assign;
    //     var otherslist=data.others;
    //     var storageref=firebase.storage().ref();
    //     for(var j=0;j<lecturelist.length;j++)
    //     {
    //     storageref.child(data.department+"/"+data.coursecode+"/"+lecturelist[j]).getDownloadURL().then(function(url){
    //       console.log("Hi urls");
    //       console.log(url);
    //       document.getElementById("dis").innerHTML+="<a href="+url+">"+lecturelist[j]+"</a><br>";
    //     })
    //   }
    //     for(var j=0;j<assignlist.length;j++)
    //     {
    //     storageref.child(data.department+"/"+data.coursecode+"/"+assignlist[j]).getDownloadURL().then(function(url){
    //       console.log("Hi urls");
    //       console.log(url);
    //       document.getElementById("dis").innerHTML+="<a href="+url+">"+assignlist[j]+"</a><br>";
    //     })
    //   }
    //   for(var j=0;j<otherslist.length;j++)
    //     {
    //     storageref.child(data.department+"/"+data.coursecode+"/"+otherslist[j]).getDownloadURL().then(function(url){
    //       console.log("Hi urls");
    //       console.log(url);
    //       document.getElementById("dis").innerHTML+="<a href="+url+">"+otherslist[j]+"</a><br>";
    //     })
    //   }
    //   })
    // }
  })
}
