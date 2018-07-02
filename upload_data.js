class Upload{
  upload_data(str1,str2,str3,str4,str5)
  { 
    console.log('1')
    var database = firebase.database();
    var insertdata={};
    insertdata.department=str1;
    try
    {
      var course=str2;

    }
    catch(err)
    { 
      document.getElementById("err").innerHTML="You must provide a field values";
      return;
    }
    var ind=course.indexOf("-");
    insertdata.coursecode=course.slice(0,ind);
    insertdata.coursename=course.slice(ind+1,course.length);
    insertdata.year=str3;
    var temp='';
    for(var i=0;i<insertdata.year.length;i++)
    {
      if(insertdata.year[i]=='-')
        continue;
      else
        temp+=insertdata.year[i];
    }
    insertdata.year=temp;
    insertdata.sem=str4;
    console.log(str4);
    insertdata.upname=document.getElementById("upname").value;
    console.log(document.getElementById("upname").value);
    insertdata.des=str5;
    console.log(str5);
    var notes=document.getElementById("notes").files;
    var assign=document.getElementById("assign").files;
    var others=document.getElementById("others").files;
    if(insertdata.department=="")
    {
      document.getElementById("err").innerHTML="You must provide a department name";
      return;
    }
    if(insertdata.coursecode=="")
    {
      document.getElementById("err").innerHTML="You must select a course";
      return;
    }
    if(insertdata.year=="")
    {
      document.getElementById("err").innerHTML="You must provide a year";
      return;
    }
    if(insertdata.sem=="")
    {
      document.getElementById("err").innerHTML="You must select a semester";
      return;
    }
    if(insertdata.upname=="")
    {
      document.getElementById("err").innerHTML="You must provide your name";
      return;
    }
    if(insertdata.des=="")
    {
      document.getElementById("err").innerHTML="You must provide your designation";
      return;
    }
    if(notes.length+assign.length+others.length==0)
    {
      document.getElementById("err").innerHTML="You must provide at least one file to upload";
      return;
    }
    var profs=['akg@iitk.ac.in', 'akushari@iitk.ac.in', 'abhish@iitk.ac.in', 'ajayvs@iitk.ac.in', 'alakeshm@iitk.ac.in', 'ashtew@iitk.ac.in', 'ashoke@iitk.ac.in', 'shekhar@iitk.ac.in', 'mishra@iitk.ac.in', 'das@iitk.ac.in', 'erath@iitk.ac.in', 'gmkamath@iitk.ac.in', 'kamal@iitk.ac.in', 'mangal@iitk.ac.in', 'ibrahim@iitk.ac.in', 'cpritam@iitk.ac.in', 'mohite@iitk.ac.in', 'raghavpk@iitk.ac.in', 'kitey@iitk.ac.in', 'rkm@iitk.ac.in', 'kamle@iitk.ac.in', '@iitk.ac.in', 'smittal@iitk.ac.in', 'sathesh@iitk.ac.in', 'saderlas@iitk.ac.in', 'tksen@iitk.ac.in', 'varghode@iitk.ac.in', 'abandopa@iitk.ac.in', 'arshukla@iitk.ac.in', 'ashokkum@iitk.ac.in', 'akthakur@iitk.ac.in', 'bushra@iitk.ac.in', 'dsk@iitk.ac.in', 'jayrao@iitk.ac.in', 'jonaki@iitk.ac.in', 'mainakd@iitk.ac.in', 'guptan@iitk.ac.in', 'pradips@iitk.ac.in', 'rsankar@iitk.ac.in', 'sganesh@iitk.ac.in', 'saran@iitk.ac.in', 'aghatak@iitk.ac.in', 'anuragt@iitk.ac.in', 'ashutos@iitk.ac.in', 'goutam@iitk.ac.in', 'indrasd@iitk.ac.in', 'jayantks@iitk.ac.in', 'naveent@iitk.ac.in', 'nishith@iitk.ac.in', 'nkaistha@iitk.ac.in', 'papte@iitk.ac.in', 'raghvend@iitk.ac.in', 'mangalr@iitk.ac.in', 'rpala@iitk.ac.in', 'guptark@iitk.ac.in', 'sgarg@iitk.ac.in', 'spanda@iitk.ac.in', 'srisiva@iitk.ac.in', 'vagarwal@iitk.ac.in', 'vshankar@iitk.ac.in', 'joshi@iitk.ac.in', 'abhas@iitk.ac.in', 'adas@iitk.ac.in', 'anubha@iitk.ac.in', 'arghya@iitk.ac.in', 'ashujain@iitk.ac.in', 'blohani@iitk.ac.in', 'ckolay@iitk.ac.in', 'dcrai@iitk.ac.in', 'kvharish@iitk.ac.in', 'mukesh@iitk.ac.in', 'nrpatra@iitk.ac.in', 'onkar@iitk.ac.in', 'partha@iitk.ac.in', 'prishati@iitk.ac.in', 'priyog@iitk.ac.in', 'hsrajesh@iitk.ac.in', 'rajeshs@iitk.ac.in', 'richao@iitk.ac.in', 'snt@iitk.ac.in', 'samitrc@iitk.ac.in', 'sguha@iitk.ac.in', 'shiva@iitk.ac.in', 'skjain@iitk.ac.in', 'sud@iitk.ac.in', 'smishra@iitk.ac.in', 'suparno@iitk.ac.in', 'syamnair@iitk.ac.in', 'tarun@iitk.ac.in', 'vinaykg@iitk.ac.in', 'vinod@iitk.ac.in', 'vinodv@iitk.ac.in', 'amit@iitk.ac.in', 'arnabb@iitk.ac.in', 'ajain@iitk.ac.in', 'karkare@iitk.ac.in', 'seth@cse.iitk.ac.in', 'dheeraj@iitk.ac.in', 'hk@iitk.ac.in', 'isaha@iitk.ac.in', 'mainakc@cse.iitk.ac.in', 'manindra@iitk.ac.in', 'nitin@cse.iitk.ac.in', 'nsrivast@cse.iitk.ac.in', 'pg@iitk.ac.in', 'ppk@iitk.ac.in', 'piyush@cse.iitk.ac.in', 'purushot@cse.iitk.ac.in', 'rkg@cse.iitk.ac.in', 'rtewari@cse.iitk.ac.in', 'rmittal@iitk.ac.in', 'moona@iitk.ac.in', 'sandeeps@iitk.ac.in', 'ssax@iitk.ac.in', 'satyadev@cse.iitk.ac.in', 'skmehta@iitk.ac.in', 'subhajit@iitk.ac.in', 'sganguly@cse.iitk.ac.in', 'simon@cse.iitk.ac.in', 'sbaswana@cse.iitk.ac.in', 'tvp@iitk.ac.in', 'vinaypn@iitk.ac.in', 'arh@iitk.ac.in', 'abheem@iitk.ac.in', 'gkrabhi@iitk.ac.in', 'adityaj@iitk.ac.in', 'adrish@iitk.ac.in', 'akc@iitk.ac.in', 'aloke@iitk.ac.in', 'amitkver@iitk.ac.in', 'abiswas@iitk.ac.in', '<span>baquer@iitk.ac.in</span>', 'gshekhar@iitk.ac.in', 'govind@iitk.ac.in', 'vasu@iitk.ac.in', 'venkats@iitk.ac.in', 'kvs@iitk.ac.in', 'ketan@iitk.ac.in', 'lbehera@iitk.ac.in', 'mjakhtar@iitk.ac.in', 'ngupta@iitk.ac.in', 'nnaik@iitk.ac.in', 'nishchal@iitk.ac.in', 'sensarma@iitk.ac.in', 'pradeepk@iitk.ac.in', 'sircar@iitk.ac.in', 'rkb@iitk.ac.in', 'rhegde@iitk.ac.in', 'potluri@iitk.ac.in', 'rohitbr@iitk.ac.in', 'scs@iitk.ac.in', 'asandeep@iitk.ac.in', 'santanum@iitk.ac.in', 'saikatc@iitk.ac.in', 'qureshi@iitk.ac.in', 'shilpig@iitk.ac.in', 'spdas@iitk.ac.in', 'srsahoo@iitk.ac.in', 'snsingh@iitk.ac.in', 'sskiyer@iitk.ac.in', 'utpal@iitk.ac.in', 'ynsingh@iitk.ac.in', 'chauhan@iitk.ac.in', 'skamit@iitk.ac.in', 'anoops@iitk.ac.in', 'kavijit@iitk.ac.in', 'bvphani@iitk.ac.in', 'dphilip@iitk.ac.in', 'devlina@iitk.ac.in', 'fhamid@iitk.ac.in', 'raghus@iitk.ac.in', 'rahulv@iitk.ac.in', 'rrks@iitk.ac.in', 'sprawesh@iitk.ac.in', 'subhasm@iitk.ac.in', 'veena@iitk.ac.in', 'vipin@iitk.ac.in', 'amarendra@iitk.ac.in', 'anandh@iitk.ac.in', 'anishu@iitk.ac.in', 'agaur@iitk.ac.in', 'ashishg@iitk.ac.in', 'saboo@iitk.ac.in', 'dipak@iitk.ac.in', 'gouthama@iitk.ac.in', 'kallol@iitk.ac.in', 'kbalani@iitk.ac.in', 'kkaustub@iitk.ac.in', 'kbiswas@iitk.ac.in', 'mk@iitk.ac.in', 'npgurao@iitk.ac.in', 'rajdipm@iitk.ac.in', 'vidtan@iitk.ac.in', 'sangals@iitk.ac.in', 'sarang@iitk.ac.in', 'shashank@iitk.ac.in', 'somar@iitk.ac.in', 'bsomnath@iitk.ac.in', 'sudhanss@iitk.ac.in', 'tmaiti@iitk.ac.in', 'vverma@iitk.ac.in', 'anindya@iitk.ac.in', 'aguha@iitk.ac.in', 'anupams@iitk.ac.in', 'ag@iitk.ac.in', 'aksaha@iitk.ac.in', 'arvindkr@iitk.ac.in', 'adutta@iitk.ac.in', 'akag@iitk.ac.in', 'bls@iitk.ac.in', 'dasgupta@iitk.ac.in', 'bishakh@iitk.ac.in', 'ishans@iitk.ac.in', 'jrkumar@iitk.ac.in', 'jishnu@iitk.ac.in', 'kmurli@iitk.ac.in', 'kamalkk@iitk.ac.in', 'mkdas@iitk.ac.in', 'mlaw@iitk.ac.in', 'ntiwari@iitk.ac.in', 'vyas@iitk.ac.in', 'nsinha@iitk.ac.in', 'venkit@iitk.ac.in', 'panig@iitk.ac.in', 'psg@iitk.ac.in', 'wahi@iitk.ac.in', 'pmunshi@iitk.ac.in', 'sachin@iitk.ac.in', 'samkhan@iitk.ac.in', 'ssgupta@iitk.ac.in', 'bhattacs@iitk.ac.in', 'shikhap@iitk.ac.in', 'choudhry@iitk.ac.in', 'subra@iitk.ac.in', 'sbasu@iitk.ac.in', 'anands@iitk.ac.in', 'akpatra@iitk.ac.in', 'basker@iitk.ac.in', 'ddethe@iitk.ac.in', 'dprasad@iitk.ac.in', 'dgoswami@iitk.ac.in', 'garaman@iitk.ac.in', 'gurunath@iitk.ac.in', 'moorthy@iitk.ac.in', 'jbera@iitk.ac.in', 'srihari@iitk.ac.in', 'maddali@iitk.ac.in', 'madhavr@iitk.ac.in', 'mchandra@iitk.ac.in', 'mkghorai@iitk.ac.in', 'nsg@iitk.ac.in', 'nnair@iitk.ac.in', 'psen@iitk.ac.in', 'rnm@iitk.ac.in', 'raja@iitk.ac.in', 'rameshr@iitk.ac.in', 'sabuj@iitk.ac.in', 'sm@iitk.ac.in', 'sverma@iitk.ac.in', 'sprath@iitk.ac.in', 'gopan@iitk.ac.in', 'vc@iitk.ac.in', 'vijendra@iitk.ac.in', 'vinodks@iitk.ac.in', 'animeshm@iitk.ac.in', 'dpaul@iitk.ac.in', 'ddhingra@iitk.ac.in', 'dghosal@iitk.ac.in', 'isen@iitk.ac.in', 'javed@iitk.ac.in', 'rsinha@iitk.ac.in', 'smisra@iitk.ac.in', 'abhipal@iitk.ac.in', 'asthakur@iitk.ac.in', 'akasha@iitk.ac.in', 'akmaloo@iitk.ac.in', 'askuber@iitk.ac.in', 'amitra@iitk.ac.in', 'adar@iitk.ac.in', 'arlal@iitk.ac.in', 'amandal@iitk.ac.in', 'bvrk@iitk.ac.in', 'kundu@iitk.ac.in', 'debasis@iitk.ac.in', 'dhiren@iitk.ac.in', 'santhana@iitk.ac.in', 'kaushik@iitk.ac.in', 'malayb@iitk.ac.in', 'mohua@iitk.ac.in', 'tmk@iitk.ac.in', 'nandini@iitk.ac.in', 'neeraj@iitk.ac.in', 'parasar@iitk.ac.in', 'pravir@iitk.ac.in', 'preena@iitk.ac.in', 'psraj@iitk.ac.in', 'rrawat@iitk.ac.in', 'sachinsh@iitk.ac.in', 'chavan@iitk.ac.in', 'sasmita@iitk.ac.in', 'sghorai@iitk.ac.in', 'smitra@iitk.ac.in', 'shalab@iitk.ac.in', 'jhasom@iitk.ac.in', 'duttas@iitk.ac.in', 'subhra@iitk.ac.in', 'sudhansh@iitk.ac.in', 'suprio@iitk.ac.in', 'akelkar@iitk.ac.in', 'amitag@iitk.ac.in', 'dutta@iitk.ac.in', 'akjha@iitk.ac.in', 'anjankg@iitk.ac.in', 'a.bagchi@iitk.ac.in', 'kundua@iitk.ac.in', 'asima@iitk.ac.in', 'avinas@iitk.ac.in', 'debch@iitk.ac.in', 'dipankar@iitk.ac.in', 'sengupta@iitk.ac.in', 'hwanare@iitk.ac.in', 'joydeep@iitk.ac.in', 'kpraj@iitk.ac.in', 'kaushikb@iitk.ac.in', 'kcharya@iitk.ac.in', 'mkv@iitk.ac.in', 'mkhan@iitk.ac.in', 'mkh@iitk.ac.in', 'pkjain@iitk.ac.in', 'rvijaya@iitk.ac.in', 'guptaraj@iitk.ac.in', 'sar@iitk.ac.in', 'sagarc@iitk.ac.in', 'gsaikat@iitk.ac.in', 'satyajit@iitk.ac.in', 'smt@iitk.ac.in', 'snandi@iitk.ac.in', 'soumikm@iitk.ac.in', 'sudeepb@iitk.ac.in', 'sbanerjee@iitk.ac.in', 'tapo@iitk.ac.in', 'tkghosh@iitk.ac.in', 'vmani@iitk.ac.in', 'ynm@iitk.ac.in', 'zakir@iitk.ac.in', 'achla@iitk.ac.in', 'chai@iitk.ac.in', 'gn@iitk.ac.in', 'minic@iitk.ac.in', 'sudh@iitk.ac.in', 'sayanc@iitk.ac.in', 'suchitra@iitk.ac.in', 'trc@iitk.ac.in', 'kppatil@iitk.ac.in', 'ritwij@iitk.ac.in', 'satyaki@iitk.ac.in', 'avrs@iitk.ac.in', 'pbagad@iitk.ac.in', 'vineet@iitk.ac.in', 'arkverma@iitk.ac.in', 'brajb@iitk.ac.in', 'devpriya@iitk.ac.in', 'krp@iitk.ac.in', 'shikha@iitk.ac.in', 'arunk@iitk.ac.in', 'aninditac@iitk.ac.in', 'binay@iitk.ac.in', 'jssam@iitk.ac.in', 'mjha@iitk.ac.in', 'pakrashi@iitk.ac.in', 'deepm@iitk.ac.in', 'jdutta@iitk.ac.in', 'marshad@iitk.ac.in', 'pravk@iitk.ac.in', 'pmprasad@iitk.ac.in', 'sarani@iitk.ac.in', 'ssahu@iitk.ac.in', 'skmathur@iitk.ac.in', 'suraji@iitk.ac.in', 'tanika@iitk.ac.in', 'vk@iitk.ac.in', 'wasimad@iitk.ac.in', 'achla@iitk.ac.in', 'arkverma@iitk.ac.in', 'bishakh@iitk.ac.in', 'dgoswami@iitk.ac.in', 'devpriya@iitk.ac.in', 'hk@iitk.ac.in', 'jonaki@iitk.ac.in', 'nishchal@iitk.ac.in', 'guptan@iitk.ac.in', 'nsrivast@cse.iitk.ac.in', 'avrs@iitk.ac.in', 'tanaya@iitk.ac.in', 'vineet@iitk.ac.in', 'asima@iitk.ac.in', 'utpal@iitk.ac.in', 'kppatil@iitk.ac.in', 'satyaki@iitk.ac.in', 'kamalkk@iitk.ac.in', 'guptaraj@iitk.ac.in', 'ynm@iitk.ac.in']
    var address=window.location.href;
    var email_start=address.indexOf("user");
    var email_end=address.indexOf("&",email_start);
    var claim_email=address.slice(email_start+5,email_end);
    if(profs.includes(claim_email))
    {
      if(insertdata.des=='Professor')
      {
        console.log("Professor Verified");
      }
      else
      {
        document.getElementById("err").innerHTML="You do not appear to be who you claim you are!";
        return;
      }
    }
    else
    {
      if(insertdata.des=='Student')
      {
        console.log("Student Verified");
      }
      else
      {
        document.getElementById("err").innerHTML="You do not appear to be who you claim you are!";
        return;
      }
    }
    document.getElementById("a").disabled = true;
    var n=[];
    for(var i=0;i<notes.length;i++)
    {
        var file = notes[i];
        n.push(file.name);
    }
    var a=[];
    for(var i=0;i<assign.length;i++)
    {
      var file = assign[i];
      a.push(file.name);
    }
    var o=[];
    for(var i=0;i<others.length;i++)
    {
      var file = others[i];
      o.push(file.name);
    }
    insertdata.notes=n;
    insertdata.assign=a;
    insertdata.others=o;
    function uploader()
    {
    var reference=insertdata.department+"/"+insertdata.coursecode+"-"+insertdata.year+"-"+insertdata.sem+"-"+insertdata.upname;
    var storageref = database.ref(reference);
    storageref.set(insertdata);
    var storageRef = firebase.storage().ref();
    var dept=insertdata.department;
    var c_code=insertdata.coursecode;
    var newref=storageRef.child(dept+"/"+c_code);
    var uploaded=0;
    for(var i=0;i<notes.length;i++)
    {
      var file = notes[i];
      document.getElementById("notesdisplay").innerHTML="uploading "+(i+1)+" of "+notes.length+" notes";
        var mountainsRef = newref.child(file.name);
        //document.getElementById("notesBar").style.width="1px";
        var uptask=mountainsRef.put(file);
        uptask.on('state_changed', function(snapshot){
          //progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //p=Math.floor(progress)*5;
          //document.getElementById("notesBar").style.width=p+"px";
        })
        uptask.then(function(snapshot1){
          uploaded++;
        })
    }
    for(var i=0;i<assign.length;i++)
    {
      var file = assign[i];
      document.getElementById("assigndisplay").innerHTML="uploading "+(i+1)+" of "+assign.length+" assignments";
        var mountainsRef = newref.child(file.name);
        //document.getElementById("assignBar").style.width="1px";
        var uptask=mountainsRef.put(file);
        uptask.on('state_changed', function(snapshot){
          //progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //p=Math.floor(progress)*5;
          //document.getElementById("assignBar").style.width=p+"px";
        })
        uptask.then(function(snapshot1){
          uploaded++;
        })
    }
    for(var i=0;i<others.length;i++)
    {
      var file = others[i];
      document.getElementById("othersdisplay").innerHTML="uploading "+(i+1)+" of "+others.length+" other files";
        var mountainsRef = newref.child(file.name);
        //document.getElementById("othersBar").style.width="1px";
        var uptask=mountainsRef.put(file);
        uptask.on('state_changed', function(snapshot){
          //progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //p=Math.floor(progress)*5;
          //document.getElementById("othersBar").style.width=p+"px";
        })
        uptask.then(function(snapshot1){
          uploaded++;
        })
    }
    function redirecter()
    {
      if(uploaded==(notes.length+assign.length+others.length))
      {
      window.location.assign("https://coursedbiitk.firebaseapp.com/thanks");
    }
    else {
      console.log("Uploaded is     "+uploaded);
      setTimeout(redirecter, 3000);
    }
    }
    redirecter();
    /*return new Promise(function (fulfill, reject){
      //do stuff
      fulfill(); //if the action succeeded
      reject(); //if the action did not succeed
  });*/
  }
  uploader();
  }
}

export default Upload;