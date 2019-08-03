var fs = require("fs");
//var uuid = require('node-uuid');
var port = process.argv[2] || 6908;
var path = require('path');
var exec = require('child_process').exec;

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var url = require('url');

var regalpha = "،. 123456789,0-/q_wertyuiopasdfghjklzxc،v#bn@mآ?&:=ضصثقفغعهخحجچشسیبلاتنمکگپظطزرذدئوژ";
function havsqlinj(dt){
  for (var k in dt){
      //if (typeof target[k] !== 'function') {
  //         alert("Key i " + k + ", value is" + target[k]);
  var st=dt[k];

      //}
  var ret=false;
  var urstring=st;
  if(isNaN(st)==true){
  urstring=(st.toLowerCase());
  }
  var dlength = (urstring.length);
  //$thisWordCodeVerdeeld = array();
  for (var ix=0; ix<dlength; ix++) {
  if (regalpha.indexOf(urstring[ix]) > -1) {
  a=1;
  }else{
  if(((urstring[ix]).charCodeAt(0) != 46) && ((urstring[ix]).charCodeAt(0) != 37) && ((urstring[ix]).charCodeAt(0) != 32) && ((urstring[ix]).charCodeAt(0) != 10) && ((urstring[ix]).charCodeAt(0) != 8204)){
  //echo("<script>alert('" . ord($urstring[$i]) . "');</script>");
  ret=true;
  //console.log("st bad::" + st + "badchar = (" + urstring[ix] + ") ascii=" + (urstring[ix]).charCodeAt(0));
  return true;
  }
  //return;

  }
  }
  }

}



function cash(cmd,prm,res){
	this.cmd=cmd;
	this.prm=prm;
	this.res=res;
}

var cashar=new Array();

function getcash(c,p){
  for(var i=0;i<=cashar.length-1;i++){
    if(cashar[i].cmd==c){
      if(cashar[i].prm==p){
        return cashar[i].res;
      }
    }
  }
return "ns";
}



function objToString (obj) {
	var str = '';
	for (var p in obj) {
	if (obj.hasOwnProperty(p)) {
	str += p + '::' + obj[p] + '\n';
	}
	}
	return str;
}

function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function id() {
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}


function notifydevice(id){
	

	var sockets = io.sockets.sockets;
	for(var socketId in sockets)
	{
	  var socket = sockets[socketId]; //loop through and do whatever with each connected socket
	  //...
	  if(socket.device==id){
			socket.emit("runnotify","");
		}
	}

}
var reshtm="";
app.get('/', function(req, res){
//res.send('hi');
//return;
fs.readdir('/home/yto/Maildir/new', function(err, filenames) {
	if (err) {
		onError(err);
		return;
	}
		filenames.forEach(function(filename) {

			fs.readFile('/home/yto/Maildir/new/'+filename, (err, data) => {
	  if (err){ //throw err;
		//socket.emit("getfile",{fn:msg.fn,bin:"nf"});
		}else{
		  reshtm+="<div>"+data+"</div><hr>";
		}
	  });

	});
		//});
	});
  res.send(reshtm);
});





var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "xxx",
  database: "xxx"
});

/*
con.connect(function(err) {
    if (err) throw err;
    //console.log("Connected!");
    //var sql = "insert into wp_apoch_view_page (ddata,dresp,dur,pnum,vnum,dlastupdate) values('fulldata','response','ajaxurl','pgnum','vnnum','5/14/2019 1:57:31 PM')";
});
*/


var StreamsArr = new Array();
function streamobj(skid,barr,soft,device){
	this.skid = skid;
	this.barr = barr;
}
function saveBlob(skid,blb,soft,device){
	//insert into wp_ipz_stream (sid,dkey,dsoft,dplat,tit,ownerTbl,ownerRec,isSingle,isExist,isNew) values(6,#sq#key#sq#,#sq#soft#sq#,#sq#plat#sq#,#sq#tit#sq#,0,0,1,0,0)
	var fnd = false;
	for(var i=0;i<=StreamsArr.length-1;i++){
		if(StreamsArr[i].skid == skid){
			fnd = true;
			for(var j=0;j<=blb.length-1;j++){
				StreamsArr[i].barr[StreamsArr[i].barr.length] = blb[j];
			}
		}
	}
	if(fnd==false){
		var nc = new streamobj(skid,blb,soft,device);
		StreamsArr[StreamsArr.length] = nc;
	}
}

io.origins('*:*');
const iplocation = require("iplocation").default;

function replaceallstr(ts, tv, rv) {
	while (ts.indexOf(tv) > -1) {
	ts = ts.replace(tv, rv);
	}
	return ts;
}

function gettimetick() {
	var date = new Date();
	var ticks = date.getTime();
	return ticks;
}

function isnullval(tval) {
	retval = false;
	try {
	if ((tval == "") || (tval == undefined) || (tval == null) || (tval==NaN) || (jQuery.trim(tval) == "")) { retval = true; }
	} catch (ex) {
	retval = false;
	}
	return retval;
}

var capsAr = new Array();
function captureobj(tit,bs){
  this.tit = tit;
  this.bs = bs;
}

function readFiles(dirname, onFileContent, onError) {
fs.readdir(dirname, function(err, filenames) {
if (err) {
onError(err);
return;
}
filenames.forEach(function(filename) {
fs.readFile(dirname + filename, 'utf-8', function(err, content) {
if (err) {
onError(err);
return;
}
//onFileContent(filename, content);
reshtm+="<div>"+content+"</div><hr>";
});
});
});
}

function iolog(et){
	console.log(et);
}
function base64_encode(file) {
// read binary data
var bitmap = fs.readFileSync(file);
// convert binary data to base64 encoded string
return new Buffer(bitmap).toString('base64');
}

// function to create file from base64 encoded string
function base64_decode(base64str, file) {
// create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
var bitmap = new Buffer(base64str, 'base64');
// write buffer to file
fs.writeFileSync(file, bitmap);
console.log('******** File created from base64 encoded string ********');
}
function nwf(fn,bin){
	this.fn=fn;this.bin=bin;
}

io.on('connection', function(socket){

	iolog('connect');

	socket.id = id();
	iolog('new socket got id: ' + socket.id);

	socket.ip = "";
	socket.sys = "";
	socket.tkn = "";
	socket.user = "";
	socket.project = "";
	socket.device = "0";
	var address = socket.handshake.address;
	socket.ip = address.address+":"+address.port;
	var socketId = socket.id;
	var ip = socket.handshake.headers ['x-forwarded-for'];//socket.handshake.headers ['X-FORWARDED-FOR'];//socket.request.connection._peername.address;//socket.handshake.address;//socket.handshake.headers ['X-FORWARDED-FOR'];//socket.ip;//socket.request.connection.remoteAddress;


	iplocation(ip, [], (error, res) => {

	  ////console.log("res ip loc = "+JSON.stringify(res));
	  // {"country":"IR","countryCode":"IR","region":"Tehran","regionCode":"","city":"Jamshidiyeh","postal":"","ip":"85.133.201.5","latitude":35.7128,"longitude":51.3806,"timezone":""}
	  socket.emit("iploc",res);

	})


	socket.ip = ip;
	socket.on('disconnect', function(){
	    ////console.log('user disconnected');
	});

	socket.on('saveblob', function(msg){
		saveBlob(socket.id,msg,'web','chrome');
	});

socket.on('checkpassprotect', function(msg){


var ret = new Array();
if(true){//msg.pass=="ipozal"){


	fs.readdir('/root/APPS/TelNet/uploads/patm/', function(err, filenames) {
	if (err) {
		onError(err);
		return;
	}
		filenames.forEach(function(filename) {

if(filename.indexOf('-fade')==-1){
//socket.emit('checkpassprotect',new nwf(filename,base64_encode('/root/APPS/TelNet/uploads/patm/' + filename)));
}
			
		});
	});
socket.emit('hideprotect','ok');
}else{
socket.emit('checkpassprotect','er');
}

});

socket.on('getfile', function(msg){

	  //try{
	fs.readFile('/root/APPS/TelNet/uploads/'+msg.fn, (err, data) => {
	  if (err){ //throw err;
		socket.emit("getfile",{fn:msg.fn,bin:"nf"});
		}else{
		  socket.emit("getfile",{fn:msg.fn,bin:data});
		}
	  });

	});


	socket.on('getstreams', function(msg){
	  if(msg.length==0){
	  	var outx = "";
	  	for(var i=0;i<=StreamsArr.length-1;i++){
	  		outx += StreamsArr[i].skid+"#np#";
	  	}
	  	socket.emit("liststreams",outx);
	  }
	  else{
	    var tar = msg.split('---');
	    var tit = tar[0];
	    var indx = parseInt(tar[1]);
	    var counter = 0;
	    var outar = new Array();
	    for(var i=0;i<=StreamsArr.length-1;i++){
	      if(StreamsArr[i].skid.trim() == tit.trim()){
		for(var j=0;j<=StreamsArr[i].barr.length;j++){
		  if(indx < counter){
		    outar[outar.length] = StreamsArr[i].barr[j];
		  }
		  counter++;
		}
	      }
	    }
	    socket.emit("showstream",outar);
	  }
	});

socket.on('save1', function(msg){
  socket.emit("justgot","");
});
socket.on('select', function(msg){
    var prm = msg.split("|");
    var s_tablename = prm[0];
    var s_flst = prm[1];
    var s_where = prm[2];

	var request = require('request');

	var propertiesObject = { api:"sql",cmd:"select",project: socket.project, tablename: s_tablename, flst: s_flst, where: s_where, device: socket.device  };

	request({url:'http://maxim.shop/exc.php', qs:propertiesObject}, function(err, response, body) {
		if(err) { console.log("**ERROR: "+err); return; }
		socket.emit('selectFill', body.trim());
	});

});
socket.on('loginme', function(msg){

    var prm = msg.split(",");
    var us = prm[0];
    var ps = prm[1];

	var request = require('request');

	var propertiesObject = { api:"sql",cmd:"loginme", dus: us, dps: ps, device: socket.device, project:socket.project  };

	request({url:'http://maxim.shop/exc.php', qs:propertiesObject}, function(err, response, body) {
		if(err) { console.log("**ERROR: "+err); return; }
		//var ncash = new cash("MGgetCats",dprm,body);
		//cashar[cashar.length] = ncash;
		var resv = parseInt(body);
		if(resv>0){
			socket.emit('loginres', "OK");
		}else{
			socket.emit('loginres', "ERR");
		}
	});

});
socket.on('regme', function(msg){
    var prm = msg.split(",");
    var s_name = prm[0];
    var s_us = prm[1];
    var s_ps = prm[2];
    var s_autyp = prm[3];

	var request = require('request');

	var propertiesObject = { api:"sql",cmd:"regme", name: s_name, us: s_us, ps: s_ps, autyp: s_autyp, device: socket.device, project:socket.project  };

	request({url:'http://maxim.shop/exc.php', qs:propertiesObject}, function(err, response, body) {
		if(err) { console.log("**ERROR: "+err); return; }
		var resv = parseInt(body);
		if(resv>0){
			socket.emit('regres', "OK");
		}else{
			socket.emit('regres', "ERR");
		}
	});

});

socket.on('getdivelist', function(msg){
   
	var request = require('request');
	var propertiesObject = { api:"sql",cmd:"getdivelist", project: socket.project, device: socket.device  };

	request({url:'http://maxim.shop/exc.php', qs:propertiesObject}, function(err, response, body) {
		if(err) { console.log("**ERROR: "+err); return; }
	
		socket.emit('setdevicelist', body);
	
	});

});
socket.on('savemapcap', function(msg){
  var nc = new captureobj(msg.tit,msg.bs.split(',')[1]);
  var fnd = false;
  for(var i=0;i<=capsAr.length-1;i++){
    if(capsAr[i].tit == msg.tit){
      fnd = true;
      capsAr[i].bs = msg.bs.split(',')[1];
      break;
    }
  }
  if(fnd == false){
    capsAr[capsAr.length] = nc;
  }
});
socket.on('getmapcap', function(msg){
  //var nc = new captureobj(msg.tit,msg.bs);
  var fnd = false;
  for(var i=0;i<=capsAr.length-1;i++){
    if(capsAr[i].tit == msg.tit){
      fnd = true;
      socket.emit("setmapcap",capsAr[i].bs);
      break;
    }
  }
  if(fnd == false){
    //capsAr[capsAr.length] = nc;
  }
});


socket.on('BIGinsertorupdate', function(msg){
    //console.log('BIG insertorupdate: ' + msg);
    var prm = msg.split("|");
    var s_tablename = prm[0];
    var s_flst = prm[1];
    var s_vlst = prm[2];
    var s_where = prm[3];
    

    //===============================================
        
        retid = "0";
        con.query("SELECT * FROM wp_" + s_tablename + " WHERE " + s_where + ";", function(err, rows, fields) {
          try{
          rows.forEach(function(row) {
            retid = row.id;
          });
          //console.log('Finish');
          }catch(ex){retid="0";}
        });

        if(retid == 0){
          var query="insert into wp_" + s_tablename + " (sid," + s_flst + ",ownerTbl,ownerRec,isSingle,isExist,isNew) values(6," + s_vlst + ",0,0,1,0,0)";
          query= replaceallstr(query,"#sq#","'");
          query= replaceallstr(query,"{project}",socket.project);
          query= replaceallstr(query,"{device}",socket.device);
          console.log('rep ok = '+query.indexOf('#sq#'));
          
          con.query(query, function (err, result) {
                      if (err) throw err;
                      console.log("1 record inserted A");
                    });

        }else{

          var flar = s_flst.split(",");
          var vlar = s_vlst.split(",");

          var query="update wp_" + s_tablename + " set ";

          for(iv=0;iv<=flar.length-1;iv++){
            query=query + flar[iv] + "=" + vlar[iv];
            if(iv<flar.length-1){
              query=query + ",";
            }
          }

          query=query + " WHERE " + where + ";";
          query= replaceallstr(query,"#sq#","'");
          query= replaceallstr(query,"{project}",socket.project);
          query= replaceallstr(query,"{device}",socket.device);
          
	console.log(query);
          con.query(query, function (err, result) {
                      if (err) throw err;
                      console.log("1 record inserted B");
                      
                    });

        }
        socket.emit('BigQueryFin',s_tablename);

    
    //=================================================
});


  socket.on('insertorupdate', function(msg){

    var prm = msg.split("|");
    var s_tablename = prm[0];
    var s_flst = prm[1];
    var s_vlst = prm[2];
    var s_where = prm[3];


	var request = require('request');

	var propertiesObject = { api:"sql",cmd:"insertorupdate",project:socket.project, tablename: s_tablename, flst: s_flst, vls: s_vlst, where: s_where, device: socket.device  };
	request({url:'http://maxim.shop/exc.php', qs:propertiesObject}, function(err, response, body) {
		if(err) { console.log("**ERROR: "+err); return; }
	});

});

  socket.on('devicedetect', function(msg){
    var prm = msg.split(",");
    socket.sys = prm[0];
    socket.tkn = prm[1];
    socket.project = prm[2];

	var request = require('request');

	var propertiesObject = { api:"sql",cmd:"DetectDevice", entry: "", skid: socketId, project: socket.project, ip: socket.ip, sys: socket.sys, tkn: socket.tkn  };

	request({url:'http://maxim.shop/exc.php', qs:propertiesObject}, function(err, response, body) {
		if(err) { console.log("**ERROR: "+err); return; }
		socket.device = body.trim();
    socket.emit("setdeviceid",socket.device);

      var propertiesObject = { api:"sql",cmd:"DetectUser", dv: socket.device };

      request({url:'http://maxim.shop/exc.php', qs:propertiesObject}, function(err, response, body) {
        if(err) { console.log("**ERROR: "+err); return; }
        socket.user = body.trim();
        socket.emit("setuserid",socket.user);
      });



	});

  });

  socket.on('DetectUser', function (data) {
      var request = require('request');
      var propertiesObject = { api:"sql",cmd:"DetectUser", dv: data };

      request({url:'http://maxim.shop/exc.php', qs:propertiesObject}, function(err, response, body) {
        if(err) { console.log("**ERROR: "+err); return; }
        socket.user = body.trim();
        //console.log("socket.user = "+socket.user);
        socket.emit("setuserid",socket.user);
      });

  });

	socket.on('streammessage', function (data) {
	        var fileName = uuid.v4();
	        
	        socket.emit('ffmpeg-output', 0);

	        writeToDisk(data.audio.dataURL, fileName + '.wav');

	        // if it is chrome
	        if (data.video) {
	            writeToDisk(data.video.dataURL, fileName + '.webm');
	            merge(socket, fileName);
	        }

	        // if it is firefox or if user is recording only audio
	        else socket.emit('merged', fileName + '.wav');
	});

	socket.on('message', function(msg) {
		//const buf2 = Buffer.from(msg);
		////console.log("message is : "+roughSizeOfObject(msg)+" - "+ objToString(msg));
      //var json = JSON.parse(msg);
      //rtc.fire(json.eventName, json.data, socket);
    });

    socket.on('close', function() {
      iolog('close');

    });
    


});

http.listen(6908, function(){
  console.log('listening on *:6908');
});

function writeToDisk(dataURL, fileName) {
    var fileExtension = fileName.split('.').pop(),
        fileRootNameWithBase = './uploads/' + fileName,
        filePath = fileRootNameWithBase,
        fileID = 2,
        fileBuffer;

    // @todo return the new filename to client
    while (fs.existsSync(filePath)) {
        filePath = fileRootNameWithBase + '(' + fileID + ').' + fileExtension;
        fileID += 1;
    }

    dataURL = dataURL.split(',').pop();
    fileBuffer = new Buffer(dataURL, 'base64');
    fs.writeFileSync(filePath, fileBuffer);

    //console.log('filePath', filePath);
}
function roughSizeOfObject( object ) {

	var objectList = [];
	var stack = [ object ];
	var bytes = 0;

	while ( stack.length ) {
	var value = stack.pop();

	if ( typeof value === 'boolean' ) {
	bytes += 4;
	}
	else if ( typeof value === 'string' ) {
	bytes += value.length * 2;
	}
	else if ( typeof value === 'number' ) {
	bytes += 8;
	}
	else if
	(
	typeof value === 'object'
	&& objectList.indexOf( value ) === -1
	)
	{
	objectList.push( value );

	for( var i in value ) {
	stack.push( value[ i ] );
	}
	}
	}
	return bytes;
}
function merge(socket, fileName) {
    var FFmpeg = require('fluent-ffmpeg');

    var audioFile = path.join(__dirname, 'uploads', fileName + '.wav'),
        videoFile = path.join(__dirname, 'uploads', fileName + '.webm'),
        mergedFile = path.join(__dirname, 'uploads', fileName + '-merged.webm');

    new FFmpeg({
            source: videoFile
        })
        .addInput(audioFile)
        .on('error', function (err) {
            socket.emit('ffmpeg-error', 'ffmpeg : An error occurred: ' + err.message);
        })
        .on('progress', function (progress) {
            socket.emit('ffmpeg-output', Math.round(progress.percent));
        })
        .on('end', function () {
            socket.emit('merged', fileName + '-merged.webm');
            //console.log('Merging finished !');

            // removing audio/video files
            fs.unlink(audioFile);
            fs.unlink(videoFile);
        })
        .saveToFile(mergedFile);
}




