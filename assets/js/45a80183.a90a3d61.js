"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},o="Prompt Debiasing",s={unversionedId:"reliability/debiasing",id:"reliability/debiasing",title:"Prompt Debiasing",description:"This page covers a few simple techniques to debias your prompts.",source:"@site/docs/reliability/debiasing.md",sourceDirName:"reliability",slug:"/reliability/debiasing",permalink:"/docs/reliability/debiasing",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v0.0.2/docs/reliability/debiasing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/reliability/intro"},next:{title:"Calibration",permalink:"/docs/reliability/calibration"}},l={},p=[{value:"Exemplar Debiasing",id:"exemplar-debiasing",level:2},{value:"Distribution",id:"distribution",level:3},{value:"Worse:",id:"worse",level:4},{value:"Better:",id:"better",level:4},{value:"Order",id:"order",level:3},{value:"Best:",id:"best",level:4},{value:"Instruction Debiasing",id:"instruction-debiasing",level:2},{value:"Notes",id:"notes",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prompt-debiasing"},"Prompt Debiasing"),(0,r.kt)("p",null,"This page covers a few simple techniques to debias your prompts."),(0,r.kt)("h2",{id:"exemplar-debiasing"},"Exemplar Debiasing"),(0,r.kt)("p",null,"Depending on their distribution and order within the prompt, exemplars may bias LLM outputs",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". This is discussed to some extent in the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/intermediate/whats_in_a_prompt"},"What's in a Prompt")," page."),(0,r.kt)("h3",{id:"distribution"},"Distribution"),(0,r.kt)("p",null,"When discussing the distribution of exemplars within a prompt, we are referring to\nhow many exemplars from different classes are present. For example, if you are\nperforming binary sentiment analysis (positive or negative) on tweets, and you\nprovide 3 positive tweets and 1 negative tweet as exemplars, then you have a\ndistribution of 3:1. Since the distribution is skewed towards positive tweets,\nthe model will be biased towards predicting positive tweets."),(0,r.kt)("h4",{id:"worse"},"Worse:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Q: Tweet: "What a beautiful day!"\nA: positive\n\nQ: Tweet: "I love pockets on jeans"\nA: positive\n\nQ: Tweet: "I love hotpockets"\nA: positive\n\nQ: Tweet: "I hate this class"\nA: negative\n')),(0,r.kt)("h4",{id:"better"},"Better:"),(0,r.kt)("p",null,"Having an even exemplar distribution is better."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Q: Tweet: "What a beautiful day!"\nA: positive\n\nQ: Tweet: "I love pockets on jeans"\nA: positive\n\nQ: Tweet: "I don\'t like pizza"\nA: negative\n\nQ: Tweet: "I hate this class"\nA: negative\n')),(0,r.kt)("h3",{id:"order"},"Order"),(0,r.kt)("p",null,"The order of exemplars can also cause bias. For example, a prompt that has randomly ordered exemplars\nwill often perform better than the above prompt, which contains positive tweets first,\nfollowed by negative tweets."),(0,r.kt)("h4",{id:"best"},"Best:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Q: Tweet: "I hate this class"\nA: negative\n\nQ: Tweet: "What a beautiful day!"\nA: positive\n\nQ: Tweet: "I don\'t like pizza"\nA: negative\n\nQ: Tweet: "I love pockets on jeans"\nA: positive\n')),(0,r.kt)("h2",{id:"instruction-debiasing"},"Instruction Debiasing"),(0,r.kt)("p",null,"We can explicitly prompt GPT-3 to be unbiased, by including an instruction\nto do so in the prompt. In particular, Si et al.",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," use the following\ninstruction when experimenting with BBQ",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", a bias benchmark."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"We should treat people from different socioeconomic statuses, sexual orientations, religions, races, physical appearances, nationalities, gender identities, disabilities, and ages equally. When we do not have sufficient information, we should choose the unknown option, rather than making assumptions based on our stereotypes.\n")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("p",null,"See more on debiasing in the Calibration section."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Si, C., Gan, Z., Yang, Z., Wang, S., Wang, J., Boyd-Graber, J., & Wang, L. (2022). Prompting GPT-3 To Be Reliable.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Parrish, A., Chen, A., Nangia, N., Padmakumar, V., Phang, J., Thompson, J., Htut, P. M., & Bowman, S. R. (2021). BBQ: A Hand-Built Bias Benchmark for Question Answering.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);