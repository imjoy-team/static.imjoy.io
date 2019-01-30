var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="python-dateutil.data";var REMOTE_PACKAGE_BASE="python-dateutil.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","python_dateutil-2.7.2-py3.7.egg-info",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","dateutil",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/dateutil","tz",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/dateutil","parser",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/dateutil","zoneinfo",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:279072,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,999,2382,3503,4712,5773,7013,8434,9744,10723,11769,12623,13688,14282,15238,15995,16604,17402,18253,19633,20808,21767,22631,23771,25132,26129,27243,28462,29277,30192,30906,31918,32990,33947,34909,35646,36433,37311,38632,39985,40902,41732,42733,43824,44744,45712,46745,47732,48497,49330,50125,51563,53005,54127,55303,56566,57623,59002,60354,61554,62799,63800,64982,65998,67344,68585,69711,70809,71700,73025,74121,75268,76438,77516,78610,79786,80882,82054,83047,84254,85715,86717,87836,89132,90279,91062,91827,92954,93632,94698,96067,97403,98418,99890,101313,102342,103174,104302,105433,106301,107270,108069,109286,110468,111597,112557,113529,114538,115583,116422,117539,118741,119883,121024,122365,123506,124745,125503,126455,127100,128398,129708,130882,131995,133084,134238,135450,136790,138086,139203,140984,143032,145080,147128,149176,151228,153276,155331,157379,159427,161475,163523,165571,167619,169672,171719,173767,175815,177863,179916,181964,184012,186051,188099,190156,192204,194252,196300,198357,200405,202453,204501,206549,208603,210651,212699,214747,216795,218843,220891,222939,224991,227047,229095,231143,233191,235239,237287,239335,241383,243431,245476,247524,249572,251620,253668,255716,257764,259821,261869,263917,265965,268013,270061,272109,274157,276205,278253],sizes:[999,1383,1121,1209,1061,1240,1421,1310,979,1046,854,1065,594,956,757,609,798,851,1380,1175,959,864,1140,1361,997,1114,1219,815,915,714,1012,1072,957,962,737,787,878,1321,1353,917,830,1001,1091,920,968,1033,987,765,833,795,1438,1442,1122,1176,1263,1057,1379,1352,1200,1245,1001,1182,1016,1346,1241,1126,1098,891,1325,1096,1147,1170,1078,1094,1176,1096,1172,993,1207,1461,1002,1119,1296,1147,783,765,1127,678,1066,1369,1336,1015,1472,1423,1029,832,1128,1131,868,969,799,1217,1182,1129,960,972,1009,1045,839,1117,1202,1142,1141,1341,1141,1239,758,952,645,1298,1310,1174,1113,1089,1154,1212,1340,1296,1117,1781,2048,2048,2048,2048,2052,2048,2055,2048,2048,2048,2048,2048,2048,2053,2047,2048,2048,2048,2053,2048,2048,2039,2048,2057,2048,2048,2048,2057,2048,2048,2048,2048,2054,2048,2048,2048,2048,2048,2048,2048,2052,2056,2048,2048,2048,2048,2048,2048,2048,2048,2045,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,819],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_python-dateutil.data")}Module["addRunDependency"]("datafile_python-dateutil.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/zip-safe",start:0,end:1,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/PKG-INFO",start:1,end:7924,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/SOURCES.txt",start:7924,end:9509,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/top_level.txt",start:9509,end:9518,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/dependency_links.txt",start:9518,end:9519,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/requires.txt",start:9519,end:9528,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/__init__.py",start:9528,end:9750,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/_common.py",start:9750,end:10682,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/utils.py",start:10682,end:12523,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/relativedelta.py",start:12523,end:37016,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tzwin.py",start:37016,end:37075,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/rrule.py",start:37075,end:101942,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/easter.py",start:101942,end:104626,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/_version.py",start:104626,end:104742,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/__init__.py",start:104742,end:105245,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/win.py",start:105245,end:116563,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/_common.py",start:116563,end:129455,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/tz.py",start:129455,end:185835,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/_factories.py",start:185835,end:187269,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/parser/__init__.py",start:187269,end:188996,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/parser/_parser.py",start:188996,end:244754,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/parser/isoparser.py",start:244754,end:257599,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/zoneinfo/__init__.py",start:257599,end:263488,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/zoneinfo/rebuild.py",start:263488,end:265207,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/zoneinfo/dateutil-zoneinfo.tar.gz",start:265207,end:404287,audio:0}],remote_package_size:283168,package_uuid:"73da6094-0c38-4300-bbfe-46e9e82d70e2"})})();