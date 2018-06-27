class Fetchbycc{
  fetchby_cc(str,str2)
  {
    var database = firebase.database();
    var dep=decodeURIComponent(str);
    console.log(dep);
    var dataref=database.ref(dep);
    console.log(dataref);
    dataref.once('value').then(function(snapshot){
      console.log(snapshot);
      var refs=[];
      function recur_data(obj)
      {
          console.log("Hi recursion");
          if(obj.key.includes(str2)){
            refs.push(obj.key);
          }
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
      console.log(snapshot.node_.children_.root_);
      console.log(refs);
      for (var i=0;i<refs.length;i++){
        document.getElementById("fetchbycc").innerHTML+='<a href="http://coursedb-2000.firebaseapp.com/course-files/'+dep+'@'+refs[i]+'">'+refs[i]+'</a><br>';
      }
    })
  }
}
export default Fetchbycc;
