"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3011],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,u=m["".concat(l,".").concat(f)]||m[f]||d[f]||i;return r?n.createElement(u,o(o({ref:t},c),{},{components:r})):n.createElement(u,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3923:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i=r.p+"assets/images/diverse-4d3dfbd2465ac181760c1ac7704ac7f5.png",o={sidebar_position:5},s="DiVeRSe",l={unversionedId:"reliability/diverse",id:"reliability/diverse",title:"DiVeRSe",description:'DiVeRSe(@li2022advance) ("Diverse Verifier on Reasoning Steps") is',source:"@site/docs/reliability/diverse.md",sourceDirName:"reliability",slug:"/reliability/diverse",permalink:"/docs/reliability/diverse",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v0.0.2/docs/reliability/diverse.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Calibration",permalink:"/docs/reliability/calibration"},next:{title:"\ud83d\uddbc\ufe0f Images",permalink:"/docs/category/\ufe0f-images"}},p={},c=[{value:"Diverse Prompts",id:"diverse-prompts",level:2},{value:"Voting Verifier",id:"voting-verifier",level:2},{value:"Example",id:"example",level:3},{value:"Takeaways",id:"takeaways",level:2}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"diverse"},"DiVeRSe"),(0,a.kt)("p",null,"DiVeRSe",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' ("',(0,a.kt)("strong",{parentName:"p"},"Di"),"verse ",(0,a.kt)("strong",{parentName:"p"},"Ve"),"rifier on ",(0,a.kt)("strong",{parentName:"p"},"R"),"easoning ",(0,a.kt)("strong",{parentName:"p"},"S"),"t",(0,a.kt)("strong",{parentName:"p"},"e"),'ps") is\na method that improves the reliability of answers in a threefold manner. It does this by\n1) using multiple prompts to generate diverse completions, 2) using a verifier to distinguish good answers from bad answers, and 3) using a verifier to check the correctness of reasoning steps.'),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:i,style:{width:"750px"}})),(0,a.kt)("h2",{id:"diverse-prompts"},"Diverse Prompts"),(0,a.kt)("p",null,"DiVeRSe uses 5 different prompts a given input. To construct each prompt, they randomly\nsample a few exemplars from the training set. Here is an example of one such few-shot\nprompt (k=2), with exemplars taken from the ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/openai/grade-school-math/master/grade_school_math/data/train.jsonl"},"GSM8K benchmark"),(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". In practice, DiVeRSe uses\n5 exemplars in prompts for this benchmark."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Q: Natalia sold clips to 48 of her friends in April, and then she sold half as many clips in May. How many clips did Natalia sell altogether in April and May?\nA: Natalia sold 48/2 = 24 clips in May.\nNatalia sold 48+24 = 72 clips altogether in April and May.\n#### 72\nQ: Weng earns $12 an hour for babysitting. Yesterday, she just did 50 minutes of babysitting. How much did she earn?\nA: Weng earns 12/60 = $0.2 per minute.\nWorking 50 minutes, she earned 0.2 x 50 = $10.\n#### 10\nQ: Betty is saving money for a new wallet which costs $100. Betty has only half of the money she needs. Her parents decided to give her $15 for that purpose, and her grandparents twice as much as her parents. How much more money does Betty need to buy the wallet?\nA:\n")),(0,a.kt)("p",null,"After generating 5 different prompts like above, DiVeRSe samples 20 reasoning paths\nfor each (temperature = 0.5). Here are a few example completions of the above prompt.\nNote that the answers are not always correct."),(0,a.kt)("pre",null,(0,a.kt)("div",{style:{backgroundColor:"#d2f4d3"}},(0,a.kt)("div",null,"Betty has 0.5*100 = $50."),(0,a.kt)("div",null,"Then she gets 15 more = $65."),(0,a.kt)("div",null,"Then she gets 2*15 = $90."),(0,a.kt)("div",null,"She needs 100-90 = $10 more."),"#### 10")),(0,a.kt)("pre",null,(0,a.kt)("div",{style:{backgroundColor:"#d2f4d3"}},(0,a.kt)("div",null,"A: Betty has 0.5*100 = $500."),(0,a.kt)("div",null,"Then she gets 15 more = $650."),(0,a.kt)("div",null,"Then she gets 2*15 = $900."),(0,a.kt)("div",null,"She needs 100-90 = $1000 more."),"#### 1000")),(0,a.kt)("p",null,"At this point, DiVeRSe has generated 100 different completions."),(0,a.kt)("h2",{id:"voting-verifier"},"Voting Verifier"),(0,a.kt)("p",null,"Now, we could just take the majority answer, like Self-Consistency",(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," does."),(0,a.kt)("p",null,"However, DiVeRSe proposes a much more complicated method, which they call a ",(0,a.kt)("em",{parentName:"p"},"voting verifier"),"."),(0,a.kt)("p",null,"At test time, using the voting verifier is a two step process. First, the verifier (a neural network)\nassigns a 0-1 score to each completion based on how likely it is to be correct. Then, the 'voting'\ncomponent sums all of the scores over different answers and yields the final answer."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Here is a small example. Say we have the following completions for the prompt ",(0,a.kt)("inlineCode",{parentName:"p"},"What is two plus two?"),":"),(0,a.kt)("pre",null,(0,a.kt)("div",{style:{backgroundColor:"#d2f4d3"}},(0,a.kt)("div",null,"4"))),(0,a.kt)("pre",null,(0,a.kt)("div",{style:{backgroundColor:"#d2f4d3"}},(0,a.kt)("div",null,"two + 2 = 5"))),(0,a.kt)("pre",null,(0,a.kt)("div",{style:{backgroundColor:"#d2f4d3"}},(0,a.kt)("div",null,"I think 2+2 = 6"))),(0,a.kt)("pre",null,(0,a.kt)("div",{style:{backgroundColor:"#d2f4d3"}},(0,a.kt)("div",null,"two plus two = 4"))),(0,a.kt)("pre",null,(0,a.kt)("div",{style:{backgroundColor:"#d2f4d3"}},(0,a.kt)("div",null,"It is 5"))),(0,a.kt)("p",null,"The verifier will read each completion and assign a score to it. For example, it might assign\nthe scores: 0.9, 0.1, 0.2, 0.8, 0.3 respectively. Then, the voting component will sum the scores for each\nanswer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"score(4) = 0.9 + 0.8 = 1.7\nscore(5) = 0.1 + 0.3 = 0.4\nscore(6) = 0.2\n")),(0,a.kt)("p",null,"The final answer is 4, since it has the highest score."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"But how is the verifier trained?")),(0,a.kt)("p",null,"The verifier is trained with a slightly complex loss function, which\nI will not cover here. Read section 3.3 of the paper for more details",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,a.kt)("h2",{id:"takeaways"},"Takeaways"),(0,a.kt)("p",null,"The main take away here is to use multiple prompts to generate diverse completions.\nIn practice, majority voting will likely work well compared to the voting verifier."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Li, Y., Lin, Z., Zhang, S., Fu, Q., Chen, B., Lou, J.-G., & Chen, W. (2022). On the Advance of Making Language Models Better Reasoners.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Mitchell, E., Noh, J. J., Li, S., Armstrong, W. S., Agarwal, A., Liu, P., Finn, C., & Manning, C. D. (2022). Enhancing Self-Consistency and Performance of Pre-Trained Language Models through Natural Language Inference.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);