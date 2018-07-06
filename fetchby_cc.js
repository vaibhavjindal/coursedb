class Fetchbycc{
  fetchby_cc(str,str2)
  {
    var database = firebase.database();
    var dep=decodeURIComponent(str);
    var url=window.location.href
    var ind=url.lastIndexOf('@');
    var course=url.slice(ind+1,url.length);
    document.getElementById('course').innerHTML=course;
    document.getElementById("dep").innerHTML=dep;
    var dataref=database.ref(dep);
    dataref.once('value').then(function(snapshot){
    //  console.log(snapshot);
      var refs=[];
      var y1718=[];
      var y1617=[];
      var y1516=[];
      var others=[];
  //    console.log("Hello");
      function recur_data(obj)
      {
      //    console.log("Hi recursion");
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
    //  console.log(snapshot.node_.children_.root_);

      refs.sort();
      document.getElementById('course').innerHTML=course;
      for (var i=0;i<refs.length;i++){
        if(refs[i].includes("20172018")){
          y1718.push(refs[i]);
        }
        if(refs[i].includes("20162017")){
          y1617.push(refs[i]);
        }
        if(refs[i].includes("20152016")){
          y1516.push(refs[i]);
        }
        if(refs[i].includes("Others")){
          others.push(refs[i]);
        }
      }

    if(y1718.length>0){
      document.getElementById("fetchbycc").innerHTML+='<br><h3>2017-2018</h3>';
      for (var i=0;i<y1718.length;i++){
        document.getElementById("fetchbycc").innerHTML+='<a href="http://coursedbiitk.firebaseapp.com/course-files/'+dep+'@'+y1718[i]+'"><h5>'+y1718[i]+'</h5></a>';
      }
    }

    if(y1617.length>0){
      document.getElementById("fetchbycc").innerHTML+='<br><h3>2016-2017</h3>';
      for (var i=0;i<y1617.length;i++){
        document.getElementById("fetchbycc").innerHTML+='<a href="http://coursedbiitk.firebaseapp.com/course-files/'+dep+'@'+y1617[i]+'"><h5>'+y1617[i]+'</h5></a>';
      }
    }

    if(y1516.length>0){
      document.getElementById("fetchbycc").innerHTML+='<br><h3>2015-2016</h3>';
      for (var i=0;i<y1516.length;i++){
        document.getElementById("fetchbycc").innerHTML+='<a href="http://coursedbiitk.firebaseapp.com/course-files/'+dep+'@'+y1516[i]+'"><h5>'+y1516[i]+'</h5></a>';
      }
    }

    if(others.length>0){
      document.getElementById("fetchbycc").innerHTML+='<br><h3>Others</h3>';
      for (var i=0;i<others.length;i++){
        document.getElementById("fetchbycc").innerHTML+='<a href="http://coursedbiitk.firebaseapp.com/course-files/'+dep+'@'+others[i]+'"><h5>'+others[i]+'</h5></a>';
      }
    }
    })
  }
}
export default Fetchbycc;
