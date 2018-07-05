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
    document.getElementById('dep').innerHTML=dep;
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
      if(ccodes.length==0)
      {
        document.getElementById("hide").style.display='none';
        document.getElementById("nf").innerHTML="Oops! No Course data found for the Course";
      }
      else
      {
        document.getElementById("hide").style.display='inline';
        document.getElementById("nf").innerHTML="";
        document.getElementById("dis").innerHTML+='<br>';
        for (var i=0;i<ccodes.length;i++)
        {
            document.getElementById("dis").innerHTML+='<a style="display:block" href="http://coursedbiitk.firebaseapp.com/courses/@'+dep+'@'+ccodes[i]+'"><h5>'+ccodes_name[i]+'</h5></a><hr>';
        }
      }
    }
  }
}
export default Fetch;
