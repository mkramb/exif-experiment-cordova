(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(22)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),c=n.n(i),o=n(3),f=n(4),s=n(9),u=n(5),l=n(10),d=n(6),p=n.n(d),h=n(7),m=n.n(h),v=n(8),g=n.n(v),w=(n(20),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={exif:[]},n.onFileChange=function(e){var t=e.target.files;return n.setState({exif:[]}),Array.from(t).forEach(function(e){var t=new FileReader;t.onloadend=function(e){var t=e.target.result;n.setState({exif:n.state.exif.concat(p.a.readFromBinaryFile(t))})},t.readAsArrayBuffer(e)})},n}return Object(l.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("input",{accept:"image/jpeg",type:"file",onChange:this.onFileChange}),this.state.exif.length>0&&r.a.createElement(m.a,{data:this.state.exif,theme:g.a}))}}]),t}(r.a.Component)),y=(n(21),function(){c.a.render(r.a.createElement(w,null),document.getElementById("root"))});window.cordova?document.addEventListener("deviceready",y,!1):y()}},[[11,1,2]]]);
//# sourceMappingURL=main.10d3a573.chunk.js.map