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
    var refs=[];
    var ccodes_name=[];
    var dep=str;
    for(var key in objdata){
      refs.push(objdata[key]['coursecode']+'@'+objdata[key]['coursename'])
    }
     // console.log(snapshot.node_.children_.root_);
     // console.log(refs);
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

    }
  }
}
export default Fetch;
