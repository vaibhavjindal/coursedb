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
      var y1718=[];
      var y1617=[];
      var y1516=[];
      var others=[];
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

      refs.sort();
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
      document.getElementById("fetchbycc").innerHTML+='2017-2018<br>';
      for (var i=0;i<y1718.length;i++){
        document.getElementById("fetchbycc").innerHTML+='<a href="http://localhost:4200/course-files/'+dep+'@'+y1718[i]+'">'+y1718[i]+'</a><br>';
      }
    }

    if(y1617.length>0){
      document.getElementById("fetchbycc").innerHTML+='2016-2017<br>';
      for (var i=0;i<y1617.length;i++){
        document.getElementById("fetchbycc").innerHTML+='<a href="http://localhost:4200/course-files/'+dep+'@'+y1617[i]+'">'+y1617[i]+'</a><br>';
      }
    }

    if(y1516.length>0){
      document.getElementById("fetchbycc").innerHTML+='2015-2016<br>';
      for (var i=0;i<y1516.length;i++){
        document.getElementById("fetchbycc").innerHTML+='<a href="http://localhost:4200/course-files/'+dep+'@'+y1516[i]+'">'+y1516[i]+'</a><br>';
      }
    }

    if(others.length>0){
      document.getElementById("fetchbycc").innerHTML+='Others<br>';
      for (var i=0;i<others.length;i++){
        document.getElementById("fetchbycc").innerHTML+='<a href="http://localhost:4200/course-files/'+dep+'@'+others[i]+'">'+others[i]+'</a><br>';
      }
    }
    })
  }
}
export default Fetchbycc;
