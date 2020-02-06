(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{164:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));t(58),t(31),t(22),t(23),t(59),t(0);var a=t(228);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o={id:"adding-images-fonts-and-files",title:"\u6dfb\u52a0\u56fe\u7247\u3001\u5b57\u4f53\u53ca\u6587\u4ef6\u652f\u6301"},c=[{value:"\u6dfb\u52a0 SVG",id:"\u6dfb\u52a0-svg",children:[]}],p={rightToc:c},l="wrapper";function b(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(l,r({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u901a\u8fc7 Webpack\uff0c\u8c03\u7528\u9759\u6001\u8d44\u6e90\uff08\u4f8b\u5982\u56fe\u7247\u548c\u5b57\u4f53\uff09\u7684\u5de5\u4f5c\u65b9\u5f0f\u4e0e CSS \u7c7b\u4f3c\u3002"),Object(a.b)("p",null,"\u4f60\u53ef\u4ee5",Object(a.b)("strong",{parentName:"p"},"\u5728 JavaScript \u6a21\u5757\u4e2d",Object(a.b)("inlineCode",{parentName:"strong"},"\u5bfc\u5165"),"\u6587\u4ef6"),"\u3002\u8fd9\u4f1a\u544a\u77e5 Webpack \u5c06\u6587\u4ef6\u5305\u542b\u5728\u6253\u5305\u6587\u4ef6\u4e2d\u3002\u4e0e CSS \u5bfc\u5165\u4e0d\u540c\uff0c\u5bfc\u5165\u6587\u4ef6\u4f1a\u4e3a\u4f60\u63d0\u4f9b\u4e00\u4e2a\u5b57\u7b26\u4e32\u503c\u3002\u8fd9\u4e2a\u503c\u662f\u4f60\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u5f15\u7528\u5230\u7684\u6700\u7ec8\u8def\u5f84\u3002\u4f8b\u5982\uff1a\u4f5c\u4e3a\u56fe\u7247\u5c5e\u6027\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"src")," \u6216\u4f5c\u4e3a PDF \u94fe\u63a5\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"href"),"\u3002"),Object(a.b)("p",null,"\u4e3a\u4e86\u51cf\u5c11\u5bf9\u670d\u52a1\u5668\u7684\u8bf7\u6c42\u91cf\uff0c\u5bfc\u5165\u5c0f\u4e8e 10,000 \u5b57\u8282\u7684\u56fe\u50cf\u4f1a\u8fd4\u56de ",Object(a.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"}),"data URI")," \u4ee5\u66ff\u4ee3\u8def\u5f84\u3002\u8fd9\u9002\u7528\u4e8e\u4ee5\u4e0b\u6587\u4ef6\u6269\u5c55\u540d\uff1abmp\uff0cgif\uff0cjpg\uff0cjpeg \u548c png\u3002SVG \u7531\u4e8e ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/1153"}),"#1153")," \u88ab\u6392\u9664\u5728\u5916\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf ",Object(a.b)("inlineCode",{parentName:"p"},"IMAGE_INLINE_SIZE_LIMIT")," \u6765\u63a7\u5236 10,000 \u5b57\u8282\u7684\u9608\u503c\uff0c\u5982\u6211\u4eec\u5728",Object(a.b)("a",r({parentName:"p"},{href:"/docs/advanced-configuration"}),"\u9ad8\u7ea7\u914d\u7f6e"),"\u4e2d\u6240\u8bf4\u7684\u90a3\u6837\u3002"),Object(a.b)("p",null,"\u4e0b\u9762\u662f\u4e00\u6761\u8303\u4f8b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport logo from './logo.png'; // \u544a\u77e5 Webpack \u8be5 JS \u6587\u4ef6\u5f15\u7528\u4e86\u8fd9\u5f20\u56fe\u7247\n\nconsole.log(logo); // /logo.84287d09.png\n\nfunction Header() {\n  // \u5bfc\u5165\u7ed3\u679c\u662f\u56fe\u7247\u7684 URL\n  return <img src={logo} alt=\"Logo\" />;\n}\n\nexport default Header;\n")),Object(a.b)("p",null,"\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u5728\u6784\u5efa\u9879\u76ee\u65f6\uff0cWebpack \u53ef\u4ee5\u5c06\u56fe\u7247\u6b63\u786e\u79fb\u52a8\u5230 build \u6587\u4ef6\u5939\u4e2d\uff0c\u5e76\u4e3a\u6211\u4eec\u63d0\u4f9b\u6b63\u786e\u7684\u8def\u5f84\u3002"),Object(a.b)("p",null,"\u8fd9\u540c\u6837\u4e5f\u9002\u7528\u4e8e CSS\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-css"}),".Logo {\n  background-image: url(./logo.png);\n}\n")),Object(a.b)("p",null,"Webpack \u5728 CSS \u4e2d\u627e\u5230\u6240\u6709\u76f8\u5173\u7684\u6a21\u5757\u5f15\u7528\uff08\u4ee5 ",Object(a.b)("inlineCode",{parentName:"p"},"./")," \u5f00\u5934\uff09\uff0c\u5e76\u5c06\u5176\u66ff\u6362\u4e3a\u5df2\u7f16\u8bd1\u5305\u4e2d\u7684\u6700\u7ec8\u8def\u5f84\u3002\u5982\u679c\u5b58\u5728\u62fc\u5199\u9519\u8bef\u6216\u610f\u5916\u5220\u9664\u4e86\u91cd\u8981\u6587\u4ef6\uff0c\u5219\u4f1a\u770b\u5230\u7f16\u8bd1\u9519\u8bef\uff0c\u5c31\u50cf\u5bfc\u5165\u4e0d\u5b58\u5728\u7684 JavaScript \u6a21\u5757\u65f6\u4e00\u6837\u3002Webpack \u901a\u8fc7\u5185\u5bb9\u54c8\u5e0c\u503c\u751f\u6210\u5df2\u7f16\u8bd1\u5305\u4e2d\u7684\u6700\u7ec8\u6587\u4ef6\u540d\u3002\u5982\u679c\u6587\u4ef6\u5185\u5bb9\u5c06\u6765\u8fdb\u884c\u4e86\u4fee\u6539\uff0cWebpack \u5c06\u4f1a\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\u5176\u4ed6\u540d\u79f0\uff0c\u56e0\u6b64\u4f60\u65e0\u9700\u62c5\u5fc3 asset \u7684\u957f\u671f\u7f13\u5b58\u3002"),Object(a.b)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e5f\u662f Webpack \u7684\u81ea\u5b9a\u4e49\u7279\u6027\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u5bf9 React \u6765\u8bf4\u5e76\u4e0d\u662f\u5fc5\u987b\u9879"),"\uff0c\u4f46\u662f\u5f88\u591a\u4eba\u559c\u6b22\u5b83\uff08React Natice \u5bf9\u56fe\u50cf\u4e5f\u91c7\u7528\u4e86\u7c7b\u4f3c\u673a\u5236\uff09\u3002"),Object(a.b)("p",null,"\u4e0b\u4e00\u8282\u5c06\u4f1a\u4ecb\u7ecd\u4f7f\u7528\u9759\u6001\u8d44\u6e90\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u3002"),Object(a.b)("h2",{id:"\u6dfb\u52a0-svg"},"\u6dfb\u52a0 SVG"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8be5\u7279\u6027\u4ec5\u9002\u7528\u4e8e ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," \u53ca\u4ee5\u4e0a\u7248\u672c\u548c ",Object(a.b)("inlineCode",{parentName:"p"},"react@16.3.0")," \u53ca\u4ee5\u4e0a\u7248\u672c\u3002")),Object(a.b)("p",null,"\u4e0a\u4e00\u8282\u4e2d\u4ecb\u7ecd\u4e86\u6dfb\u52a0 SVG \u6587\u4ef6\u7684\u4e00\u79cd\u65b9\u6cd5\u3002\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5c06 SVG \u6587\u4ef6\u4f5c\u4e3a React \u7ec4\u4ef6\u5f15\u5165\u3002\u4f60\u53ef\u4ee5\u4ece\u4e24\u79cd\u65b9\u6cd5\u4e2d\u4efb\u9009\u5176\u4e00\u3002\u5b83\u5199\u8d77\u6765\u662f\u8fd9\u6837\u7684\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"import { ReactComponent as Logo } from './logo.svg';\nconst App = () => (\n  <div>\n    {/* Logo is an actual React component */}\n    <Logo />\n  </div>\n);\n")),Object(a.b)("p",null,"\u8fd9\u5bf9\u4e8e\u4e0d\u5e0c\u671b\u5c06 SVG \u4f5c\u4e3a\u5355\u72ec\u6587\u4ef6\u8fdb\u884c\u52a0\u8f7d\u7684\u573a\u666f\u6765\u8bf4\u5f88\u65b9\u4fbf\u3002\u4e0d\u8981\u6f0f\u4e86 import \u4e2d\u7684\u82b1\u62ec\u53f7\uff01",Object(a.b)("inlineCode",{parentName:"p"},"ReactComponent")," \u5f15\u5165\u522b\u540d\u975e\u5e38\u91cd\u8981\uff0c\u5b83\u544a\u8bc9 Create React App \u4f60\u5e0c\u671b\u5c06 SVG \u4f5c\u4e3a\u53ef\u6e32\u67d3 React \u7ec4\u4ef6\u5f15\u5165\uff0c\u800c\u4e0d\u662f\u5f15\u5165\u5176\u6587\u4ef6\u672c\u8eab\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a"),"\u5bfc\u5165\u7684 SVG React \u7ec4\u4ef6\u63a5\u6536 ",Object(a.b)("inlineCode",{parentName:"p"},"title")," \u5c5e\u6027\u4e0e ",Object(a.b)("inlineCode",{parentName:"p"},"svg")," \u5143\u7d20\u63a5\u6536\u7684\u5176\u4ed6\u5c5e\u6027\u3002\u4f7f\u7528\u8be5\u5c5e\u6027\u4ee5\u6dfb\u52a0\u8f85\u52a9\u8bbf\u95ee\u6807\u9898\u81f3 svg \u7ec4\u4ef6\u3002")))}b.isMDXComponent=!0},228:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a),o=r.a.createContext({}),c=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},p=function(e){var n=c(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var l="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},i=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),i=c(t),u=a,s=i[p+"."+u]||i[u]||b[u]||o;return t?r.a.createElement(s,Object.assign({},{ref:n},l,{components:t})):r.a.createElement(s,Object.assign({},{ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=i;var p={};for(var b in n)hasOwnProperty.call(n,b)&&(p[b]=n[b]);p.originalType=e,p[l]="string"==typeof e?e:a,c[1]=p;for(var u=2;u<o;u++)c[u]=t[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}i.displayName="MDXCreateElement"}}]);