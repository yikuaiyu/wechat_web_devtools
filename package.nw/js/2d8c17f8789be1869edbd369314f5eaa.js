'use strict';!function(require,directRequire){const a=require('./15ba1827c7f6564a45df6bd44da3a977.js'),b=require('./f171257bbcaef547a3cf27266ccb0db2.js'),c=require('./29552ee79b3c130ddd9b6e8c13c40be9.js'),d=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js');var e={},f={};module.exports={getCode:async(g,h)=>{const i=`${g}_${h}`;return e[i]?e[i]:new Promise((j,k)=>{if(!f[i])f[i]=[{resolve:j,reject:k}];else return void f[i].push({resolve:j,reject:k});a({url:`${b.getplugincode}`,method:'post',needAppID:1,needToken:1,needParse:-1,encoding:null,body:JSON.stringify({plugin_id:g,plugin_version:h})}).then(({body:a,resp:b})=>{let e='';try{let b=JSON.parse(a.toString('utf8')),c=b.baseresponse||{},f=c.errcode;f!==void 0&&0!==f&&(e=d.parseCgiErrorCode(f,c.errmsg))}catch(a){e=''}if(e)throw e;return c(a)}).then((a)=>{let b=0;for(const c in a)b+=a[c].length,a[c]=a[c].toString().replace(/gwx_devplugin/g,`gwx_${g}`);e[i]=a,e[`${i}_size`]=b,f[i].forEach((b)=>{b.resolve(a)}),delete f[i]}).catch((a)=>{f[i].forEach((b)=>{b.reject(a)}),delete f[i]})})},getSize:(a,b)=>{return e[`${a}_${b}_size`]}}}(require('lazyload'),require);