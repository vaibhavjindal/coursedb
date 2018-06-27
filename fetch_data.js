class Fetch{
  fetch_data(str)
  {
    var database = firebase.database();
    var dep=str;
    console.log(dep);
    var dataref=database.ref(dep);
    console.log(dataref);
    dataref.once('value').then(function(snapshot){
      console.log(snapshot);
      var refs=[];
      function recur_data(obj)
      {
          console.log("Hi recursion");
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
      console.log(snapshot.node_.children_.root_);
      console.log(refs);
      var ccodes=[];
      for (var i=0;i<refs.length;i++){
        if(refs[i].search(/\d/)==3){
          var ccode=refs[i].slice(0,7);
        }
        else{
          var ccode=refs[i].slice(0,6);
        }
        if(ccodes.indexOf(ccode)<0){
          ccodes.push(ccode);
        }
      }
      ccodes.sort();

      for (var i=0;i<ccodes.length;i++){
          document.getElementById("dis").innerHTML+='<a href="http://coursedbiitk.firebaseapp.com/courses/@'+dep+'@'+ccodes[i]+'">'+ccodes[i]+'</a><br>';
      }

    })
  }
}
export default Fetch;
