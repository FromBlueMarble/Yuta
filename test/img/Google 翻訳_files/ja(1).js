var a=a||{};a.global=this;a.isDef=function(b){return void 0!==b};a.exportPath_=function(b,c,d){b=b.split(".");d=d||a.global;b[0]in d||!d.execScript||d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)!b.length&&a.isDef(c)?d[e]=c:d=d[e]?d[e]:d[e]={}};a.define=function(b,c){a.exportPath_(b,c)};a.DEBUG=!0;a.LOCALE="ja";a.TRUSTED_SITE=!0;a.STRICT_MODE_COMPATIBLE=!1;a.DISALLOW_TEST_ONLY_CODE=!a.DEBUG;a.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING=!1;
a.provide=function(b){if(a.isInModuleLoader_())throw Error("goog.provide can not be used within a goog.module.");a.constructNamespace_(b)};a.constructNamespace_=function(b,c){a.exportPath_(b,c)};a.VALID_MODULE_RE_=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
a.module=function(b){if(!a.isString(b)||!b||-1==b.search(a.VALID_MODULE_RE_))throw Error("Invalid module identifier");if(!a.isInModuleLoader_())throw Error("Module "+b+" has been loaded incorrectly.");if(a.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");a.moduleLoaderState_.moduleName=b};a.module.get=function(){return a.module.getInternal_()};a.module.getInternal_=function(){};a.moduleLoaderState_=null;a.isInModuleLoader_=function(){return null!=a.moduleLoaderState_};
a.module.declareLegacyNamespace=function(){a.moduleLoaderState_.declareLegacyNamespace=!0};a.setTestOnly=function(b){if(a.DISALLOW_TEST_ONLY_CODE)throw b=b||"",Error("Importing test-only code into non-debug environment"+(b?": "+b:"."));};a.forwardDeclare=function(){};a.getObjectByName=function(b,c){for(var d=b.split("."),e=c||a.global,h;h=d.shift();)if(a.isDefAndNotNull(e[h]))e=e[h];else return null;return e};a.globalize=function(b,c){var d=c||a.global,e;for(e in b)d[e]=b[e]};
a.addDependency=function(b,c,d,e){if(a.DEPENDENCIES_ENABLED){var h;b=b.replace(/\\/g,"/");var f=a.dependencies_;e&&"boolean"!==typeof e||(e=e?{module:"goog"}:{});for(var k=0;h=c[k];k++)f.nameToPath[h]=b,f.pathIsModule[b]="goog"==e.module;for(e=0;c=d[e];e++)b in f.requires||(f.requires[b]={}),f.requires[b][c]=!0}};a.useStrictRequires=!1;a.ENABLE_DEBUG_LOADER=!0;a.logToConsole_=function(b){a.global.console&&a.global.console.error(b)};a.require=function(){};a.basePath="";a.nullFunction=function(){};
a.abstractMethod=function(){throw Error("unimplemented abstract method");};a.addSingletonGetter=function(b){b.getInstance=function(){if(b.instance_)return b.instance_;a.DEBUG&&(a.instantiatedSingletons_[a.instantiatedSingletons_.length]=b);return b.instance_=new b}};a.instantiatedSingletons_=[];a.LOAD_MODULE_USING_EVAL=!0;a.SEAL_MODULE_EXPORTS=a.DEBUG;a.loadedModules_={};a.DEPENDENCIES_ENABLED=!1;
a.DEPENDENCIES_ENABLED&&(a.dependencies_={pathIsModule:{},nameToPath:{},requires:{},visited:{},written:{},deferred:{}},a.inHtmlDocument_=function(){var b=a.global.document;return null!=b&&"write"in b},a.findBasePath_=function(){if(a.isDef(a.global.CLOSURE_BASE_PATH))a.basePath=a.global.CLOSURE_BASE_PATH;else if(a.inHtmlDocument_())for(var b=a.global.document.getElementsByTagName("SCRIPT"),c=b.length-1;0<=c;--c){var d=b[c].src,e=d.lastIndexOf("?"),e=-1==e?d.length:e;if("base.js"==d.substr(e-7,7)){a.basePath=
d.substr(0,e-7);break}}},a.importScript_=function(b,c){(a.global.CLOSURE_IMPORT_SCRIPT||a.writeScriptTag_)(b,c)&&(a.dependencies_.written[b]=!0)},a.IS_OLD_IE_=!(a.global.atob||!a.global.document||!a.global.document.all),a.importModule_=function(b){a.importScript_("",'goog.retrieveAndExecModule_("'+b+'");')},a.queuedModules_=[],a.wrapModule_=function(b,c){return a.LOAD_MODULE_USING_EVAL&&a.isDef(a.global.JSON)?"goog.loadModule("+a.global.JSON.stringify(c+"\n//# sourceURL="+b+"\n")+");":'goog.loadModule(function(exports) {"use strict";'+
c+"\n;return exports});\n//# sourceURL="+b+"\n"},a.loadQueuedModules_=function(){var b=a.queuedModules_.length;if(0<b){var c=a.queuedModules_;a.queuedModules_=[];for(var d=0;d<b;d++)a.maybeProcessDeferredPath_(c[d])}},a.maybeProcessDeferredDep_=function(b){a.isDeferredModule_(b)&&a.allDepsAreAvailable_(b)&&a.maybeProcessDeferredPath_(a.basePath+a.getPathFromDeps_(b))},a.isDeferredModule_=function(b){return(b=a.getPathFromDeps_(b))&&a.dependencies_.pathIsModule[b]?a.basePath+b in a.dependencies_.deferred:
!1},a.allDepsAreAvailable_=function(b){if((b=a.getPathFromDeps_(b))&&b in a.dependencies_.requires)for(var c in a.dependencies_.requires[b])if(!a.isProvided_(c)&&!a.isDeferredModule_(c))return!1;return!0},a.maybeProcessDeferredPath_=function(b){if(b in a.dependencies_.deferred){var c=a.dependencies_.deferred[b];delete a.dependencies_.deferred[b];a.globalEval(c)}},a.loadModuleFromUrl=function(){a.retrieveAndExecModule_()},a.loadModule=function(b){var c=a.moduleLoaderState_;try{a.moduleLoaderState_=
{moduleName:void 0,declareLegacyNamespace:!1};var d;if(a.isFunction(b))d=b.call(a.global,{});else if(a.isString(b))d=a.loadModuleFromSource_.call(a.global,b);else throw Error("Invalid module definition");var e=a.moduleLoaderState_.moduleName;if(!a.isString(e)||!e)throw Error('Invalid module name "'+e+'"');a.moduleLoaderState_.declareLegacyNamespace?a.constructNamespace_(e,d):a.SEAL_MODULE_EXPORTS&&Object.seal&&Object.seal(d);a.loadedModules_[e]=d}finally{a.moduleLoaderState_=c}},a.loadModuleFromSource_=
function(b){eval(b);return{}},a.writeScriptSrcNode_=function(b){a.global.document.write('<script type="text/javascript" src="'+b+'">\x3c/script>')},a.appendScriptSrcNode_=function(b){var c=a.global.document,d=c.createElement("script");d.type="text/javascript";d.src=b;d.defer=!1;d.async=!1;c.head.appendChild(d)},a.writeScriptTag_=function(b,c){if(a.inHtmlDocument_()){var d=a.global.document;if(!a.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING&&"complete"==d.readyState){if(/\bdeps.js$/.test(b))return!1;throw Error('Cannot write "'+
b+'" after document load');}var e=a.IS_OLD_IE_;void 0===c?e?(e=" onreadystatechange='goog.onScriptLoad_(this, "+ ++a.lastNonModuleScriptIndex_+")' ",d.write('<script type="text/javascript" src="'+b+'"'+e+">\x3c/script>")):a.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING?a.appendScriptSrcNode_(b):a.writeScriptSrcNode_(b):d.write('<script type="text/javascript">'+c+"\x3c/script>");return!0}return!1},a.lastNonModuleScriptIndex_=0,a.onScriptLoad_=function(b,c){"complete"==b.readyState&&a.lastNonModuleScriptIndex_==
c&&a.loadQueuedModules_();return!0},a.writeScripts_=function(b){function c(b){if(!(b in h.written||b in h.visited)){h.visited[b]=!0;if(b in h.requires)for(var f in h.requires[b])if(!a.isProvided_(f))if(f in h.nameToPath)c(h.nameToPath[f]);else throw Error("Undefined nameToPath for "+f);b in e||(e[b]=!0,d.push(b))}}var d=[],e={},h=a.dependencies_;c(b);for(b=0;b<d.length;b++){var f=d[b];a.dependencies_.written[f]=!0}var k=a.moduleLoaderState_;a.moduleLoaderState_=null;for(b=0;b<d.length;b++)if(f=d[b])h.pathIsModule[f]?
a.importModule_(a.basePath+f):a.importScript_(a.basePath+f);else throw a.moduleLoaderState_=k,Error("Undefined script input");a.moduleLoaderState_=k},a.getPathFromDeps_=function(b){return b in a.dependencies_.nameToPath?a.dependencies_.nameToPath[b]:null},a.findBasePath_(),a.global.CLOSURE_NO_DEPS||a.importScript_(a.basePath+"deps.js"));a.normalizePath_=function(b){b=b.split("/");for(var c=0;c<b.length;)"."==b[c]?b.splice(c,1):c&&".."==b[c]&&b[c-1]&&".."!=b[c-1]?b.splice(--c,2):c++;return b.join("/")};
a.loadFileSync_=function(b){if(a.global.CLOSURE_LOAD_FILE_SYNC)return a.global.CLOSURE_LOAD_FILE_SYNC(b);var c=new a.global.XMLHttpRequest;c.open("get",b,!1);c.send();return c.responseText};a.retrieveAndExecModule_=function(){};
a.typeOf=function(b){var c=typeof b;if("object"==c)if(b){if(b instanceof Array)return"array";if(b instanceof Object)return c;var d=Object.prototype.toString.call(b);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof b.length&&"undefined"!=typeof b.splice&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof b.call&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof b.call)return"object";return c};a.isNull=function(b){return null===b};a.isDefAndNotNull=function(b){return null!=b};a.isArray=function(b){return"array"==a.typeOf(b)};a.isArrayLike=function(b){var c=a.typeOf(b);return"array"==c||"object"==c&&"number"==typeof b.length};a.isDateLike=function(b){return a.isObject(b)&&"function"==typeof b.getFullYear};a.isString=function(b){return"string"==typeof b};a.isBoolean=function(b){return"boolean"==typeof b};
a.isNumber=function(b){return"number"==typeof b};a.isFunction=function(b){return"function"==a.typeOf(b)};a.isObject=function(b){var c=typeof b;return"object"==c&&null!=b||"function"==c};a.getUid=function(b){return b[a.UID_PROPERTY_]||(b[a.UID_PROPERTY_]=++a.uidCounter_)};a.hasUid=function(b){return!!b[a.UID_PROPERTY_]};a.removeUid=function(b){null!==b&&"removeAttribute"in b&&b.removeAttribute(a.UID_PROPERTY_);try{delete b[a.UID_PROPERTY_]}catch(c){}};
a.UID_PROPERTY_="closure_uid_"+(1E9*Math.random()>>>0);a.uidCounter_=0;a.getHashCode=a.getUid;a.removeHashCode=a.removeUid;a.cloneObject=function(b){var c=a.typeOf(b);if("object"==c||"array"==c){if(b.clone)return b.clone();var c="array"==c?[]:{},d;for(d in b)c[d]=a.cloneObject(b[d]);return c}return b};a.bindNative_=function(b,c,d){return b.call.apply(b.bind,arguments)};
a.bindJs_=function(b,c,d){if(!b)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return b.apply(c,d)}}return function(){return b.apply(c,arguments)}};a.bind=function(b,c,d){a.bind=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a.bindNative_:a.bindJs_;return a.bind.apply(null,arguments)};
a.partial=function(b,c){var d=Array.prototype.slice.call(arguments,1);return function(){var c=d.slice();c.push.apply(c,arguments);return b.apply(this,c)}};a.mixin=function(b,c){for(var d in c)b[d]=c[d]};a.now=a.TRUSTED_SITE&&Date.now||function(){return+new Date};
a.globalEval=function(b){if(a.global.execScript)a.global.execScript(b,"JavaScript");else if(a.global.eval){if(null==a.evalWorksForGlobals_)if(a.global.eval("var _evalTest_ = 1;"),"undefined"!=typeof a.global._evalTest_){try{delete a.global._evalTest_}catch(e){}a.evalWorksForGlobals_=!0}else a.evalWorksForGlobals_=!1;if(a.evalWorksForGlobals_)a.global.eval(b);else{var c=a.global.document,d=c.createElement("SCRIPT");d.type="text/javascript";d.defer=!1;d.appendChild(c.createTextNode(b));c.body.appendChild(d);
c.body.removeChild(d)}}else throw Error("goog.globalEval not available");};a.evalWorksForGlobals_=null;a.getCssName=function(b,c){var d=function(b){return a.cssNameMapping_[b]||b},e=function(b){b=b.split("-");for(var c=[],e=0;e<b.length;e++)c.push(d(b[e]));return c.join("-")},e=a.cssNameMapping_?"BY_WHOLE"==a.cssNameMappingStyle_?d:e:function(b){return b};return c?b+"-"+e(c):e(b)};a.setCssNameMapping=function(b,c){a.cssNameMapping_=b;a.cssNameMappingStyle_=c};
a.getMsg=function(b,c){c&&(b=b.replace(/\{\$([^}]+)}/g,function(b,e){return null!=c&&e in c?c[e]:b}));return b};a.getMsgWithFallback=function(b){return b};a.exportSymbol=function(){a.exportPath_("google.ime.l10n.Messages",g.input.l10n.Messages,void 0)};a.exportProperty=function(b,c,d){b[c]=d};
a.inherits=function(b,c){function d(){}d.prototype=c.prototype;b.superClass_=c.prototype;b.prototype=new d;b.prototype.constructor=b;b.base=function(b,d,f){for(var k=Array(arguments.length-2),l=2;l<arguments.length;l++)k[l-2]=arguments[l];return c.prototype[d].apply(b,k)}};
a.base=function(b,c,d){var e=arguments.callee.caller;if(a.STRICT_MODE_COMPATIBLE||a.DEBUG&&!e)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");if(e.superClass_){for(var h=Array(arguments.length-1),f=1;f<arguments.length;f++)h[f-1]=arguments[f];return e.superClass_.constructor.apply(b,h)}h=Array(arguments.length-2);for(f=2;f<arguments.length;f++)h[f-2]=arguments[f];for(var f=!1,k=b.constructor;k;k=
k.superClass_&&k.superClass_.constructor)if(k.prototype[c]===e)f=!0;else if(f)return k.prototype[c].apply(b,h);if(b[c]===e)return b.constructor.prototype[c].apply(b,h);throw Error("goog.base called from a method of one name to a method of a different name");};a.scope=function(b){if(a.isInModuleLoader_())throw Error("goog.scope is not supported within a goog.module.");b.call(a.global)};
a.defineClass=function(b,c){var d=c.constructor,e=c.statics;d&&d!=Object.prototype.constructor||(d=function(){throw Error("cannot instantiate an interface (no constructor defined).");});d=a.defineClass.createSealingConstructor_(d,b);b&&a.inherits(d,b);delete c.constructor;delete c.statics;a.defineClass.applyProperties_(d.prototype,c);null!=e&&(e instanceof Function?e(d):a.defineClass.applyProperties_(d,e));return d};a.defineClass.SEAL_CLASS_INSTANCES=a.DEBUG;
a.defineClass.createSealingConstructor_=function(b,c){if(!a.defineClass.SEAL_CLASS_INSTANCES)return b;var d=!a.defineClass.isUnsealable_(c),e=function(){var c=b.apply(this,arguments)||this;c[a.UID_PROPERTY_]=c[a.UID_PROPERTY_];this.constructor===e&&d&&Object.seal instanceof Function&&Object.seal(c);return c};return e};a.defineClass.isUnsealable_=function(b){return b&&b.prototype&&b.prototype[a.UNSEALABLE_CONSTRUCTOR_PROPERTY_]};a.defineClass.OBJECT_PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
a.defineClass.applyProperties_=function(b,c){for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(b[d]=c[d]);for(var e=0;e<a.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;e++)d=a.defineClass.OBJECT_PROTOTYPE_FIELDS_[e],Object.prototype.hasOwnProperty.call(c,d)&&(b[d]=c[d])};a.tagUnsealableClass=function(){};a.UNSEALABLE_CONSTRUCTOR_PROPERTY_="goog_defineClass_legacy_unsealable";var g={input:{}};g.input.l10n={};g.input.l10n.Messages={};g.input.l10n.Messages.MSG_SWISS_GERMAN="\u30b9\u30a4\u30b9\u30c9\u30a4\u30c4\u8a9e";g.input.l10n.Messages.MSG_PHONETIC="\u8868\u97f3";g.input.l10n.Messages.MSG_EASTERN="\u6771\u90e8";g.input.l10n.Messages.MSG_WESTERN="\u897f\u90e8";g.input.l10n.Messages.MSG_LATIN="\u30ed\u30fc\u30de\u5b57";g.input.l10n.Messages.MSG_BRAZILIAN="\u30d6\u30e9\u30b8\u30eb\u914d\u5217";g.input.l10n.Messages.MSG_EUROPEAN="\u30e8\u30fc\u30ed\u30c3\u30d1\u914d\u5217";
g.input.l10n.Messages.MSG_PRIMARY="\u30d7\u30e9\u30a4\u30de\u30ea";g.input.l10n.Messages.MSG_SECONDARY="\u30bb\u30ab\u30f3\u30c0\u30ea";g.input.l10n.Messages.MSG_CYRILLIC="\u30ad\u30ea\u30eb\u6587\u5b57";g.input.l10n.Messages.MSG_SIMPLIFIED="\u7c21\u4f53";g.input.l10n.Messages.MSG_TRADITIONAL="\u7e41\u4f53";g.input.l10n.Messages.MSG_WUBI="Wubi";g.input.l10n.Messages.MSG_ZHUYIN="Zhuyin";g.input.l10n.Messages.MSG_CANGJIE="\u5009\u9821";g.input.l10n.Messages.MSG_CANTONESE="\u5e83\u6771\u8a9e";
g.input.l10n.Messages.MSG_PINYIN="Pinyin";g.input.l10n.Messages.MSG_HANDWRITE="\u624b\u66f8\u304d\u5165\u529b";g.input.l10n.Messages.MSG_US_I18N="\u82f1\u8a9e\uff08\u4e16\u754c\u5171\u901a\uff09";g.input.l10n.Messages.MSG_INPUT_TOOLS_SETTINGS="\u5165\u529b\u30c4\u30fc\u30eb\u306e\u8a2d\u5b9a";g.input.l10n.Messages.MSG_SHOW_KEYBOARD="\u30ad\u30fc\u30dc\u30fc\u30c9\u3092\u8868\u793a\u3059\u308b";g.input.l10n.Messages.MSG_HIDE_KEYBOARD="\u30ad\u30fc\u30dc\u30fc\u30c9\u3092\u975e\u8868\u793a\u306b\u3059\u308b";
g.input.l10n.Messages.MSG_ENABLE_PERSONAL_DICTIONARY="\u5358\u8a9e\u30ea\u30b9\u30c8\u3092\u6709\u52b9\u306b\u3059\u308b";g.input.l10n.Messages.MSG_DISABLE_PERSONAL_DICTIONARY="\u5358\u8a9e\u30ea\u30b9\u30c8\u3092\u7121\u52b9\u306b\u3059\u308b";a.exportSymbol();
