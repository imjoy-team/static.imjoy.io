var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="more-itertools.data";var REMOTE_PACKAGE_BASE="more-itertools.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","more_itertools",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/more_itertools","tests",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","more_itertools-4.3.0-py3.7.egg-info",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:104526,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1304,2585,3797,4900,6167,7566,9045,10303,11476,12844,14177,15372,16569,17847,19035,20216,21524,22863,24172,25361,26699,27967,29338,30238,31561,32668,33935,35303,36440,37721,38928,39993,41348,42538,43879,45213,46497,47866,49148,50378,51322,52738,53681,54764,55809,56728,57865,58758,59546,60420,61328,62393,63445,64405,65192,66207,67276,68013,68891,69705,70308,71300,72146,72873,73922,74874,75743,76495,77477,78232,79194,80124,81130,82027,82773,83352,84379,85333,86303,87250,88179,89139,90180,91313,92272,93389,93916,94228,94543,94875,95198,95483,95794,96100,96436,96774,97072,97959,99034,100382,101541,102615,103835],sizes:[1304,1281,1212,1103,1267,1399,1479,1258,1173,1368,1333,1195,1197,1278,1188,1181,1308,1339,1309,1189,1338,1268,1371,900,1323,1107,1267,1368,1137,1281,1207,1065,1355,1190,1341,1334,1284,1369,1282,1230,944,1416,943,1083,1045,919,1137,893,788,874,908,1065,1052,960,787,1015,1069,737,878,814,603,992,846,727,1049,952,869,752,982,755,962,930,1006,897,746,579,1027,954,970,947,929,960,1041,1133,959,1117,527,312,315,332,323,285,311,306,336,338,298,887,1075,1348,1159,1074,1220,691],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_more-itertools.data")}Module["addRunDependency"]("datafile_more-itertools.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/more_itertools/more.py",start:0,end:70020,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/recipes.py",start:70020,end:84980,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/__init__.py",start:84980,end:85067,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/tests/test_more.py",start:85067,end:155739,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/tests/test_recipes.py",start:155739,end:175576,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/tests/__init__.py",start:175576,end:175576,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/requires.txt",start:175576,end:175594,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/top_level.txt",start:175594,end:175609,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/dependency_links.txt",start:175609,end:175610,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/PKG-INFO",start:175610,end:211749,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/SOURCES.txt",start:211749,end:212329,audio:0}],remote_package_size:108622,package_uuid:"d55ffc38-5226-4d4f-adc9-c210110b0f83"})})();