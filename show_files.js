class Show{
  show_files(){
  	var url=window.location.href;
  	var temp=url.indexOf('files');
  	var dep_end=url.indexOf("@",temp);
  	var dep= decodeURIComponent(url.slice(temp+6,dep_end));
  	var course= decodeURIComponent(url.slice(dep_end+1));
  	var database = firebase.database();
  	var newref=database.ref(dep+"/"+course);

  	// document.getElementById("cf").innerHTML+=dep+">"+course+"<br>";
  	//document.getElementById("cf").innerHTML+=dep+">"+course+"<br>";
  
    var l=document.getElementById("l_notes");
    var a=document.getElementById("l_assign");
    var o=document.getElementById("l_others");

  	newref.once('value').then(function(snap){
      //  console.log(snap.val());
        var data=snap.val();
        var lecturelist=data.notes;
        var assignlist=data.assign;
        var otherslist=data.others;
        var storageref=firebase.storage().ref();
       // console.log(typeof(lecturelist));
       // console.log(typeof(assignlist));
       // console.log(typeof(otherslist));

        //printing lectures
        function load_lectures(x)
        {
          storageref.child(data.department+"/"+data.coursecode+"/"+lecturelist[x]).getDownloadURL().then(function(url){
         //   console.log("i is "+x);
              
            l.innerHTML+="<button id='lec"+x+"' style='padding-right:5%;white-space:normal;background:orange;' class='w3-button w3-block' onclick=disp_iframe('"+url+"','"+"lec"+x+"')>"+lecturelist[x]+"</button>";
          //  console.log(lecturelist+"       "+x);
          })
        }
        if(typeof(lecturelist) != "undefined")
        {
          for(var i=0;i<lecturelist.length;i++)
          {
          //  console.log("i is "+i);
            load_lectures(i);
          }
        }
        else
        {
          document.getElementById("l_notes").style.display='none';
          document.getElementById("notes_download").style.display='none';
        }
        //printing assignments
        function load_assign(y)
        {
          storageref.child(data.department+"/"+data.coursecode+"/"+assignlist[y]).getDownloadURL().then(function(url){
          //  console.log("j is "+y);
            a.innerHTML+="<button id='assign"+y+"' style='padding-right:5%;white-space:normal;background:orange;' class='w3-button w3-block' onclick=disp_iframe('"+url+"','"+"assign"+y+"')>"+assignlist[y]+"</button>";
          })
        }
        if(typeof(assignlist) != "undefined")
        {
          for(var j=0;j<assignlist.length;j++)
          {
          //  console.log("j is "+j);
            load_assign(j);
          }
        }
        else
        {
          document.getElementById("l_assign").style.display='none';
          document.getElementById("assign_download").style.display='none';
        }
        //printing others
        function load_others(z)
        {
          storageref.child(data.department+"/"+data.coursecode+"/"+otherslist[z]).getDownloadURL().then(function(url){
         //   console.log("k is "+z);
            o.innerHTML+="<button id='oth"+z+"' style='padding-right:5%;background:orange;' class='w3-button w3-block' onclick=disp_iframe('"+url+"','"+"oth"+z+"')>"+otherslist[z]+"</button>";;
         //   console.log(otherslist+ "       "+z);
          })
        }
        if(typeof(otherslist) != "undefined")
        {
          for(var k=0;k<otherslist.length;k++)
          {
         //   console.log("k is "+k);
            load_others(k);
          }
        }
        else
        {
          document.getElementById("l_others").style.display='none';
          document.getElementById("others_download").style.display='none';
        }
      })
  }

}
export default Show;


