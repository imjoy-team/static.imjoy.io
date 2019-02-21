var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="python-dateutil.data";var REMOTE_PACKAGE_BASE="python-dateutil.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","dateutil",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/dateutil","zoneinfo",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/dateutil","parser",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/dateutil","tz",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","python_dateutil-2.7.2-py3.7.egg-info",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:279057,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1300,2676,3896,4954,5995,6936,7999,8653,9496,10376,10976,11608,12427,13733,15043,15932,16798,17848,19229,20406,21407,22581,23465,24265,25099,25787,26872,27953,28883,29603,30415,31211,32353,33641,34744,35543,36493,37435,38516,39526,40476,41465,42282,43147,43844,45245,47007,49055,51103,53151,55199,57252,59300,61355,63403,65451,67499,69547,71595,73651,75705,77752,79800,81848,83901,85954,88002,90050,92090,94138,96186,98234,100282,102330,104378,106435,108483,110540,112588,114643,116691,118739,120787,122835,124883,126931,128979,131027,133075,135127,137175,139223,141271,143319,145367,147415,149463,151511,153559,155616,157664,159712,161760,163808,165856,167904,169952,172e3,174048,176096,178144,180192,182240,184288,185972,187299,188570,189889,191478,192906,193786,194648,195840,196900,197818,198763,199632,200809,202042,203219,204071,205e3,206070,207054,207942,209130,210357,211456,212588,213940,215116,216282,217079,218002,218596,219787,221119,222322,223421,224384,225470,226619,227936,229171,230403,231678,233049,234136,235243,236450,237660,238801,239905,240890,242053,243333,244409,245690,246912,247916,249109,250271,251510,252667,253653,254976,256250,257329,258481,259725,260733,261533,262296,263314,264147,265167,266507,267907,269068,270226,271403,272462,273926,275006,276279,277488,278669],sizes:[1300,1376,1220,1058,1041,941,1063,654,843,880,600,632,819,1306,1310,889,866,1050,1381,1177,1001,1174,884,800,834,688,1085,1081,930,720,812,796,1142,1288,1103,799,950,942,1081,1010,950,989,817,865,697,1401,1762,2048,2048,2048,2048,2053,2048,2055,2048,2048,2048,2048,2048,2056,2054,2047,2048,2048,2053,2053,2048,2048,2040,2048,2048,2048,2048,2048,2048,2057,2048,2057,2048,2055,2048,2048,2048,2048,2048,2048,2048,2048,2048,2052,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,1684,1327,1271,1319,1589,1428,880,862,1192,1060,918,945,869,1177,1233,1177,852,929,1070,984,888,1188,1227,1099,1132,1352,1176,1166,797,923,594,1191,1332,1203,1099,963,1086,1149,1317,1235,1232,1275,1371,1087,1107,1207,1210,1141,1104,985,1163,1280,1076,1281,1222,1004,1193,1162,1239,1157,986,1323,1274,1079,1152,1244,1008,800,763,1018,833,1020,1340,1400,1161,1158,1177,1059,1464,1080,1273,1209,1181,388],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_python-dateutil.data")}Module["addRunDependency"]("datafile_python-dateutil.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/dateutil/tzwin.py",start:0,end:59,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/utils.py",start:59,end:1900,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/_common.py",start:1900,end:2832,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/_version.py",start:2832,end:2948,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/relativedelta.py",start:2948,end:27441,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/__init__.py",start:27441,end:27663,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/rrule.py",start:27663,end:92530,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/easter.py",start:92530,end:95214,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/zoneinfo/dateutil-zoneinfo.tar.gz",start:95214,end:234294,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/zoneinfo/__init__.py",start:234294,end:240183,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/zoneinfo/rebuild.py",start:240183,end:241902,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/parser/_parser.py",start:241902,end:297660,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/parser/__init__.py",start:297660,end:299387,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/parser/isoparser.py",start:299387,end:312232,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/_common.py",start:312232,end:325124,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/_factories.py",start:325124,end:326558,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/__init__.py",start:326558,end:327061,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/tz.py",start:327061,end:383441,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/win.py",start:383441,end:394759,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/requires.txt",start:394759,end:394768,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/top_level.txt",start:394768,end:394777,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/zip-safe",start:394777,end:394778,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/dependency_links.txt",start:394778,end:394779,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/PKG-INFO",start:394779,end:402702,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/SOURCES.txt",start:402702,end:404287,audio:0}],remote_package_size:283153,package_uuid:"96331f9e-ef20-4666-a63b-c6927586bbda"})})();