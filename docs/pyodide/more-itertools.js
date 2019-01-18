var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="more-itertools.data";var REMOTE_PACKAGE_BASE="more-itertools.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","more_itertools-4.3.0-py3.7.egg-info",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","more_itertools",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/more_itertools","tests",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:104925,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,788,1091,1373,1703,2013,2301,2605,2903,3264,3623,3937,4623,5748,7035,8160,9313,10528,11641,12998,14255,15491,16825,17961,19273,20317,21613,23019,24243,25406,26560,27989,29370,30409,31731,33059,34420,35569,36772,38083,39331,40324,41630,42809,44089,45286,46612,47866,49273,50343,51691,52726,53968,55319,56557,57752,59018,60079,61443,62609,63884,64821,65754,66741,67710,68721,69562,70736,71884,72886,74092,75249,76286,77356,78430,79424,80315,81281,82245,83132,84213,85274,86121,87037,88043,88873,89590,90495,91371,92103,93093,93854,94724,95781,96796,97601,98482,99331,100081,101084,101912,102848,103652,104378],sizes:[788,303,282,330,310,288,304,298,361,359,314,686,1125,1287,1125,1153,1215,1113,1357,1257,1236,1334,1136,1312,1044,1296,1406,1224,1163,1154,1429,1381,1039,1322,1328,1361,1149,1203,1311,1248,993,1306,1179,1280,1197,1326,1254,1407,1070,1348,1035,1242,1351,1238,1195,1266,1061,1364,1166,1275,937,933,987,969,1011,841,1174,1148,1002,1206,1157,1037,1070,1074,994,891,966,964,887,1081,1061,847,916,1006,830,717,905,876,732,990,761,870,1057,1015,805,881,849,750,1003,828,936,804,726,547],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_more-itertools.data")}Module["addRunDependency"]("datafile_more-itertools.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/dependency_links.txt",start:0,end:1,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/PKG-INFO",start:1,end:36140,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/top_level.txt",start:36140,end:36155,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/SOURCES.txt",start:36155,end:36735,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/requires.txt",start:36735,end:36753,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/recipes.py",start:36753,end:51713,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/__init__.py",start:51713,end:51800,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/more.py",start:51800,end:121820,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/tests/test_recipes.py",start:121820,end:141657,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/tests/__init__.py",start:141657,end:141657,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/tests/test_more.py",start:141657,end:212329,audio:0}],remote_package_size:109021,package_uuid:"ed02f55e-36b5-4b2c-be84-f6057c6a89ea"})})();