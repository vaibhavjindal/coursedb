class Fetch{
  fetch_data(str)
  {

var url="https://coursedbiitk.firebaseio.com/"+str+".json";
  var request=new XMLHttpRequest();
  var objdata;
  request.open('GET',url);
  request.responseType='json';
  request.send();
  request.onload=function(){
    objdata=request.response;
  }




    var database = firebase.database();
    var dep=str;
   // console.log(dep);
    var dataref=database.ref(dep);
   // console.log(dataref);
    dataref.once('value').then(function(snapshot){
      console.log(snapshot.key);
      var refs=[];
      var cname='';
      function recur_data(obj)
      {
       //   console.log("Hi recursion");
          cname=objdata[obj.key]['coursename'];
          console.log(cname)
          refs.push(obj.key+'@'+cname);

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
     // console.log(snapshot.node_.children_.root_);
     // console.log(refs);
      var ccodes=[];
      var ccodes_name=[];
      for (var i=0;i<refs.length;i++){
        if(refs[i].search(/\d/)==3){
          var ccode=refs[i].slice(0,7);
        }
        else{
          var ccode=refs[i].slice(0,6);
        }
        if(ccodes.indexOf(ccode)<0){
          ccodes.push(ccode);
          ccodes_name.push(ccode);
        }

        var n=refs[i].indexOf('@');
        var temp=refs[i].slice(n+1,refs[i].length)

        ccodes_name[i]=ccodes_name[i]+'     '+temp;
      }
      ccodes.sort();
      ccodes_name.sort();

      for (var i=0;i<ccodes.length;i++){
          document.getElementById("dis").innerHTML+='<a href="http://coursedbiitk.firebaseapp.com/courses/@'+dep+'@'+ccodes[i]+'">'+ccodes_name[i]+'</a><br>';
      }

    })
  }
}
export default Fetch;
