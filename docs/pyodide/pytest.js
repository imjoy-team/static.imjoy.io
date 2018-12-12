var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="pytest.data";var REMOTE_PACKAGE_BASE="pytest.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","pytest-3.6.3-py3.7.egg-info",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","_pytest",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/_pytest","mark",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/_pytest","assertion",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/_pytest","_code",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/_pytest","config",true,true);Module["FS_createPath"]("/","bin",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:376250,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1297,2215,2662,3548,4480,5616,6764,8001,8998,10217,11073,12065,13035,14092,15193,16313,17457,18880,20175,21430,22620,23821,25008,26271,27631,28738,29668,30734,31825,33103,34197,35347,36425,37819,39298,40638,41824,42953,44234,45344,46449,47637,48938,50248,51398,52411,53602,54854,56016,57195,58333,59513,60747,62093,63094,64226,65483,66667,67613,68788,69984,71409,72714,74113,75174,76470,77766,79015,80214,81357,82543,83672,84727,85829,87050,88212,89428,90690,91750,92851,94202,95393,96620,97705,98986,100182,101269,102465,103515,104657,105829,107003,108282,109336,110707,111781,112899,114139,115391,116601,117777,118959,120069,121196,122451,123814,125088,126294,127557,128758,129712,130923,132202,133457,134481,135745,136763,137951,139163,140563,141727,143080,144311,145663,147007,148248,149340,150509,151803,153180,154579,155937,157200,158628,159938,161045,162297,163373,164322,165511,166600,167751,168911,170028,171245,172199,173258,174390,175551,176705,177840,178720,180057,181568,182665,183441,184514,185763,187066,188094,188890,190007,191283,192421,193723,194950,195945,197058,198282,199651,200865,202041,203300,204493,205945,207086,208182,209358,210400,211677,212994,214153,215529,216870,218118,219428,220741,222054,223385,224488,225760,227037,228147,229059,230249,231396,232745,233805,234723,235705,236866,238139,239522,240868,242081,243286,244444,245664,246752,248034,249230,250417,251572,252698,253971,255132,256305,257498,258785,260081,261428,262692,263786,264813,265894,267164,268349,269585,270666,271934,273214,274561,275801,277057,278280,279650,280936,282038,283465,284631,285797,286969,287990,289213,290381,291712,292996,294193,295418,296765,298242,299409,300724,301999,303367,304546,305651,306877,308058,309289,310443,311545,312660,313983,315304,316539,317604,318848,320081,321307,322690,324047,325224,326460,327603,328840,330094,331291,332403,333657,334750,335875,337086,338030,339069,339989,341099,342532,343831,345121,346295,347642,348719,349754,350961,352158,353341,354475,355736,357058,358385,359705,360834,362090,363228,364316,365577,366839,368014,369272,370449,371646,372838,374078,375253],sizes:[1297,918,447,886,932,1136,1148,1237,997,1219,856,992,970,1057,1101,1120,1144,1423,1295,1255,1190,1201,1187,1263,1360,1107,930,1066,1091,1278,1094,1150,1078,1394,1479,1340,1186,1129,1281,1110,1105,1188,1301,1310,1150,1013,1191,1252,1162,1179,1138,1180,1234,1346,1001,1132,1257,1184,946,1175,1196,1425,1305,1399,1061,1296,1296,1249,1199,1143,1186,1129,1055,1102,1221,1162,1216,1262,1060,1101,1351,1191,1227,1085,1281,1196,1087,1196,1050,1142,1172,1174,1279,1054,1371,1074,1118,1240,1252,1210,1176,1182,1110,1127,1255,1363,1274,1206,1263,1201,954,1211,1279,1255,1024,1264,1018,1188,1212,1400,1164,1353,1231,1352,1344,1241,1092,1169,1294,1377,1399,1358,1263,1428,1310,1107,1252,1076,949,1189,1089,1151,1160,1117,1217,954,1059,1132,1161,1154,1135,880,1337,1511,1097,776,1073,1249,1303,1028,796,1117,1276,1138,1302,1227,995,1113,1224,1369,1214,1176,1259,1193,1452,1141,1096,1176,1042,1277,1317,1159,1376,1341,1248,1310,1313,1313,1331,1103,1272,1277,1110,912,1190,1147,1349,1060,918,982,1161,1273,1383,1346,1213,1205,1158,1220,1088,1282,1196,1187,1155,1126,1273,1161,1173,1193,1287,1296,1347,1264,1094,1027,1081,1270,1185,1236,1081,1268,1280,1347,1240,1256,1223,1370,1286,1102,1427,1166,1166,1172,1021,1223,1168,1331,1284,1197,1225,1347,1477,1167,1315,1275,1368,1179,1105,1226,1181,1231,1154,1102,1115,1323,1321,1235,1065,1244,1233,1226,1383,1357,1177,1236,1143,1237,1254,1197,1112,1254,1093,1125,1211,944,1039,920,1110,1433,1299,1290,1174,1347,1077,1035,1207,1197,1183,1134,1261,1322,1327,1320,1129,1256,1138,1088,1261,1262,1175,1258,1177,1197,1192,1240,1175,997],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_pytest.data")}Module["addRunDependency"]("datafile_pytest.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/pytest.py",start:0,end:1712,audio:0},{filename:"/lib/python3.7/site-packages/pytest-3.6.3-py3.7.egg-info/top_level.txt",start:1712,end:1727,audio:0},{filename:"/lib/python3.7/site-packages/pytest-3.6.3-py3.7.egg-info/SOURCES.txt",start:1727,end:10707,audio:0},{filename:"/lib/python3.7/site-packages/pytest-3.6.3-py3.7.egg-info/dependency_links.txt",start:10707,end:10708,audio:0},{filename:"/lib/python3.7/site-packages/pytest-3.6.3-py3.7.egg-info/not-zip-safe",start:10708,end:10709,audio:0},{filename:"/lib/python3.7/site-packages/pytest-3.6.3-py3.7.egg-info/requires.txt",start:10709,end:10886,audio:0},{filename:"/lib/python3.7/site-packages/pytest-3.6.3-py3.7.egg-info/entry_points.txt",start:10886,end:10948,audio:0},{filename:"/lib/python3.7/site-packages/pytest-3.6.3-py3.7.egg-info/PKG-INFO",start:10948,end:16877,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/hookspec.py",start:16877,end:35211,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/nodes.py",start:35211,end:49138,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/capture.py",start:49138,end:72510,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/pytester.py",start:72510,end:115145,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/unittest.py",start:115145,end:123718,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/freeze_support.py",start:123718,end:124913,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/_argcomplete.py",start:124913,end:128593,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/python.py",start:128593,end:176179,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/doctest.py",start:176179,end:193126,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/main.py",start:193126,end:213531,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/outcomes.py",start:213531,end:218340,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/runner.py",start:218340,end:235865,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/resultlog.py",start:235865,end:239589,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/debugging.py",start:239589,end:244642,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/tmpdir.py",start:244642,end:248908,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/setuponly.py",start:248908,end:251531,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/deprecated.py",start:251531,end:254143,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/_version.py",start:254143,end:254259,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/skipping.py",start:254259,end:264339,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/compat.py",start:264339,end:275101,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/setupplan.py",start:275101,end:275924,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/recwarn.py",start:275924,end:284533,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/terminal.py",start:284533,end:313338,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/junitxml.py",start:313338,end:332360,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/warnings.py",start:332360,end:335690,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/cacheprovider.py",start:335690,end:347661,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/helpconfig.py",start:347661,end:354356,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/nose.py",start:354356,end:356945,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/python_api.py",start:356945,end:381598,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/monkeypatch.py",start:381598,end:391404,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/logging.py",start:391404,end:411034,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/pastebin.py",start:411034,end:414670,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/fixtures.py",start:414670,end:461588,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/__init__.py",start:461588,end:461827,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/mark/evaluate.py",start:461827,end:465597,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/mark/structures.py",start:465597,end:479113,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/mark/legacy.py",start:479113,end:482159,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/mark/__init__.py",start:482159,end:487324,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/assertion/util.py",start:487324,end:498817,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/assertion/truncate.py",start:498817,end:502148,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/assertion/rewrite.py",start:502148,end:538220,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/assertion/__init__.py",start:538220,end:543345,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/_code/source.py",start:543345,end:555515,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/_code/code.py",start:555515,end:587970,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/_code/_py2traceback.py",start:587970,end:590975,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/_code/__init__.py",start:590975,end:591385,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/config/argparsing.py",start:591385,end:606503,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/config/findpaths.py",start:606503,end:611512,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/config/exceptions.py",start:611512,end:611741,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/config/__init__.py",start:611741,end:645972,audio:0},{filename:"/bin/py.test",start:645972,end:646391,audio:0},{filename:"/bin/pytest",start:646391,end:646808,audio:0}],remote_package_size:380346,package_uuid:"34577ddf-1931-4aa0-bd7c-519c1d767bf2"})})();