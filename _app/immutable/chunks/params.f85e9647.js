import{w as me,b as fe}from"./paths.e23659ec.js";const le="@riadh-adrani-theme",pe=e=>{localStorage.setItem(le,JSON.stringify(e))},ue=me(!1),ne=e=>ue.update(p=>{var g;const $=typeof e=="boolean"?e:!p;return pe($),(g=document.querySelector(":root"))==null||g.setAttribute("data-theme",$?"dark":"light"),$}),ke=()=>{const e=localStorage.getItem(le);e?ne(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ne(!0):ne(!1)},se=e=>`${fe}/logos/${e}`,t=(e,p)=>p?{dark:se(p),light:se(e)}:se(e),y={AWS:t("aws.svg"),Bootstrap:t("bootstrap.svg"),C:t("c.svg"),Cpp:t("cpp.svg"),Celery:t("celery.svg"),Django:t("django.svg"),FastApi:t("fastapi"),Flask:t("flask.png"),Go:t("go.svg"),Kafka:t("kafka.svg"),Neo4j:t("neo4j.svg"),Nginx:t("nginx.svg"),Numpy:t("numpy.svg"),Pandas:t("pandas.svg"),RabbitMQ:t("rabbitmq.svg"),Rust:t("rust.svg","rust-dark.png"),Scrapy:t("scrapy.png"),Selenium:t("selenium.svg"),Docker:t("docker.svg"),Kubernetes:t("kubernetees.svg"),Csharp:t("csharp.svg"),Xamarin:t("xamarin.svg"),TypeScript:t("ts.png"),VueJs:t("vue.png"),ReactNative:t("reactnative.svg"),Dart:t("dart.png"),Kotlin:t("kotlin.png"),Python:t("python.svg"),NodeJs:t("node.png"),Deno:t("deno.png","deno-dark.png"),Svelte:t("svelte.png"),ExpressJs:t("express.png"),JavaScript:t("js.png"),Fastify:t("fastify.svg","fastify-dark.png"),NestJs:t("nest.svg"),Quasar:t("quasar.svg"),SolidJs:t("solid.svg"),Electron:t("electron.png"),Flutter:t("flutter.svg"),Java:t("java.png"),AdonisJs:t("adonis.png"),Android:t("android.png"),Angular:t("angular.png"),PostgreSQL:t("postgres.png"),Firebase:t("firebase.png"),Sass:t("sass.png"),Unknown:t("no-img.svg"),MongoDB:t("mongodb.svg"),Redis:t("redis.svg"),Tailwind:t("tailwind.svg"),HTML:t("html.svg"),Premiere:t("premiere.svg"),Photoshop:t("photoshop.svg"),CSS:t("css.svg"),AfterEffects:t("after-effects.svg"),Illustrator:t("illustrator.svg"),Nuxt:t("nuxt.png"),Vite:t("vite.png"),Vitest:t("vitest.svg"),Jest:t("jest.png"),Unocss:t("unocss.svg"),Ruvy:t("ruvy.svg"),Postcss:t("postcss.svg"),SST:t("sst.png"),DHS:t("dhs.png"),SUTD:t("sutd.png"),SAP:t("sap.png"),Roboapex:t("roboapex.png"),SSTInc:t("sstinc.png"),SQL:t("sql.svg"),Swift:t("swift.svg"),Scipy:t("scipy.svg"),Recipely:t("recipely.png"),Micron:t("micron.png")};let de;ue.subscribe(e=>de=e);const De=e=>typeof e=="string"?e:de?e.dark:e.light,ve=[{degree:"A-Level",description:"",location:"Singapore",logo:y.DHS,name:"",organization:"Dunman High School",period:{from:new Date(2023,0,1),to:new Date(2024,11,31)},shortDescription:"",slug:"dummy-education-item",subjects:["H2 Computing","H2 Mathematics","H2 Physics","H2 Economics","H1 General Paper","H1 Project Work"]},{degree:"O-Level",description:"",location:"Singapore",logo:y.SST,name:"",organization:"School of Science and Technology",period:{from:new Date(2019,0,1),to:new Date(2022,11,31)},shortDescription:"",slug:"dummy-education-item-2",subjects:["Computing","Elementary Mathematics","Additional Mathematics","Physics","Chemistry","Humanities (Social Studies / History)","English Language","Chinese Language"]}],Y=e=>e,he=[Y({slug:"cpp",color:"cyan",description:"",logo:y.Cpp,name:"C++"}),Y({slug:"python",color:"cyan",description:"",logo:y.Python,name:"Python"}),Y({slug:"flutter",color:"cyan",description:"",logo:y.Flutter,name:"Flutter"}),Y({slug:"dart",color:"cyan",description:"",logo:y.Dart,name:"Dart"}),Y({slug:"swift",color:"cyan",description:"",logo:y.Swift,name:"Swift"}),Y({slug:"sql",color:"cyan",description:"",logo:y.SQL,name:"SQL"}),Y({slug:"scipy",color:"yellow",description:"",logo:y.Scipy,name:"SciPy"}),Y({slug:"numpy",color:"yellow",description:"",logo:y.Numpy,name:"NumPy"}),Y({slug:"flask",color:"yellow",description:"",logo:y.Flask,name:"Flask"}),Y({slug:"html",color:"orange",description:"",logo:y.HTML,name:"HTML"}),Y({slug:"css",color:"blue",description:"",logo:y.CSS,name:"CSS"}),Y({slug:"js",color:"yellow",description:"",logo:y.JavaScript,name:"Javascript"})],x=(...e)=>he.filter(p=>e.includes(p.slug));var B=(e=>(e.GitHub="github",e.StackOverflow="stackoverflow",e.Twitter="twitter",e.Linkedin="linkedin",e.Email="email",e.Facebook="facebook",e.Youtube="youtube",e))(B||{}),ie=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e))(ie||{});const ye=[{slug:"micron-intern",company:"Micron Technology",description:`- Collaborated with the Smart Manufacturing and Artificial Intelligence team to understand advanced AI-driven workflows, including developing machine learning models to identify defects in semiconductor wafers. These models analysed high-resolution imaging data to detect anomalies and classify defect types, significantly enhancing manufacturing quality and yield.
- Presented a business case solution to three technical directors, highlighting innovative approaches to improve efficiency in semiconductor manufacturing.`,contract:ie.Internship,type:"Engineering",location:"Singapore",period:{from:new Date(2024,11,2),to:new Date(2024,11,7)},skills:x("python"),name:"Intern",color:"blue",links:[],logo:y.Micron,shortDescription:"Developed ML models for detecting defects in semiconductor wafers, boosting quality and yield, and presented a business case to technical directors"},{slug:"student-researcher",company:"Singapore University of Technology and Design",description:`- Collaborated with Dr Cyrille Jegourel and Dr Oka Kurniawan from SUTD to develop an algorithm to distinguish between human and AI-generated code with up to 93% accuracy.
- Presented findings at the 24th Koli Calling International Conference on Computing Education Research.`,contract:ie.Internship,type:"Research",location:"Singapore",period:{from:new Date(2023,3,1),to:new Date(2024,10,30)},skills:x("python","scipy","numpy"),name:"Student Researcher",color:"red",links:[{to:"https://doi.org/10.1145/3699538.3699569",label:"Conference Paper"}],logo:y.SUTD,shortDescription:"Co-authored a paper on distinguishing human vs. AI-generated code (93% accuracy), presented findings at Koli Calling 2024"}],$e=[{slug:"unbiased-news",color:"red",description:`- Developed a Flask-based website integrating Gemini AI to generate balanced, unbiased news articles.
- Implemented features for political leaning, bias, and tone analysis.
- Enabled article conversion into unbiased, opposite political lean, opposite tone, and simplified versions.
- Integrated search functionality and dark mode for improved user experience.
- Built with HTML, CSS, JavaScript, Python with Flask, and SQL.`,shortDescription:"A Flask website with Gemini AI that aggregates diverse news sources to generate balanced, unbiased articles.",links:[{to:"https://news.mengshin.me",label:"Website"},{to:"https://github.com/LimMengShin/news",label:"GitHub"}],logo:y.Unknown,name:"Unbiased News",period:{from:new Date(2024,11,1),to:new Date(2025,0,31)},skills:x("python","flask","sql","html","css","js"),type:"Web Application / Artificial Intelligence"},{slug:"chess-website",color:"orange",description:"- Developed a web-based chess platform to play against Stockfish in Standard Chess and Chess960 modes.\n- Implemented adjustable engine strength to match player skill levels.\n- Integrated move history tracking, unlimited undo/redo functionality, and real-time position analysis.\n- Provided top move suggestions and evaluation displays for strategic insights.\n- Built with HTML, CSS, JavaScript, Python with Flask, `python-chess`, `stockfish`, `chessboard.js`, `chess.js`.",shortDescription:"Play standard chess or Chess960 against Stockfish with adjustable ELO, move history, undo/redo, best move suggestions, and real-time analysis.",links:[{to:"https://chess.mengshin.me",label:"Website"},{to:"https://github.com/LimMengShin/chess",label:"GitHub"}],logo:y.Unknown,name:"Chess(960) with Stockfish",period:{from:new Date(2025,0,1),to:new Date(2025,1,28)},skills:x("python","flask","html","css","js"),type:"Web Application / Artificial Intelligence"},{slug:"class-funds",color:"yellow",description:`- Co-created a website for classmates to manage and view class funds and transactions, improving transparency and efficiency.
- Implemented role-based access control to ensure secure updates by authorised users only.
- Streamlined fund management processes, enabling the class secretary to efficiently update and manage class funds for purchasing notes.`,shortDescription:"A website for our class to manage and view class funds and transactions",links:[{to:"https://github.com/LimMengShin/235c33",label:"GitHub"}],logo:y.Unknown,name:"Class Funds Management System",period:{from:new Date(2023,1,1),to:new Date(2023,2,31)},skills:x("python","flask","sql","html","css","js"),type:"Web Application"},{slug:"econs-chatbot",color:"green",description:`- Designed and implemented a chatbot to assist students in mastering A-Level Economics concepts.
- Incorporated Gemini AI to process user queries and provide accurate, contextual responses with improved efficiency and scalability.
- Gained over 200 active users during testing, receiving positive feedback for its intuitive interface and depth of content.`,shortDescription:"A chatbot that acts as a personal assistant to students taking the A-Level Economics subject",links:[],logo:y.Unknown,name:"Economics Chatbot",period:{from:new Date(2024,1,1),to:new Date(2024,5,30)},skills:x("python","flask","html","css","js"),type:"Web Application"},{slug:"damegue",color:"blue",description:`- Built a Python and Flask-based website that predicts dengue risk and cases using AI and machine learning techniques.
- Integrated real-time data from public health sources like NEA (National Environment Agency) to provide accurate and up-to-date predictions.`,shortDescription:"Damegue uses AI and ML to assess a user's dengue risk and predict local dengue case trends.",links:[],logo:y.Unknown,name:"Damegue",period:{from:new Date(2022,0,1),to:new Date(2022,9,31)},skills:x("python","flask","html","css","js"),type:"Web Application"},{slug:"task-habit-app",color:"indigo",description:`- Built a Flutter-based app to help users track habits and tasks, featuring a reward system for completed actions.
- Developed a unique analytics feature that visualises user progress using heat maps. This feature helped users identify trends in their habits and tasks over time.`,shortDescription:"A habit tracker and task app built with Flutter and Dart.",links:[],logo:y.Unknown,name:"Habit tracker + Task App",period:{from:new Date(2024,1,1),to:new Date(2024,3,30)},skills:x("flutter","dart"),type:"Mobile Application"},{slug:"recipely",color:"violet",description:`- Developed an iOS recipe app using Swift, providing a seamless solution for finding new recipes.
- Designed a unique search feature that allows users to filter recipes by food intolerances and dietary preferences, saving time and reducing food waste.
- Implemented features such as a healthiness score for recipes, estimated cooking time, an in-built timer, and integration with HealthKit, enhancing the ease and efficiency of following recipes.
- Published app on the Apple App Store, receiving multiple glowing reviews for its usefulness and ease of use.`,shortDescription:"Recipely is an all-in-one receipe app built with Swift.",links:[],logo:y.Recipely,name:"Recipely",period:{from:new Date(2020,9,1),to:new Date(2020,11,31)},skills:x("swift"),type:"Mobile Application"}];var ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},re={},we={get exports(){return re},set exports(e){re=e}};(function(e,p){(function($,g){e.exports=g()})(ge,function(){var $=1e3,g=6e4,L=36e5,w="millisecond",b="second",j="minute",I="hour",E="day",N="week",H="month",J="quarter",z="year",O="date",_="Invalid Date",K=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,te={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var i=["th","st","nd","rd"],n=a%100;return"["+a+(i[(n-20)%10]||i[n]||i[0])+"]"}},F=function(a,i,n){var o=String(a);return!o||o.length>=i?a:""+Array(i+1-o.length).join(n)+a},Z={s:F,z:function(a){var i=-a.utcOffset(),n=Math.abs(i),o=Math.floor(n/60),s=n%60;return(i<=0?"+":"-")+F(o,2,"0")+":"+F(s,2,"0")},m:function a(i,n){if(i.date()<n.date())return-a(n,i);var o=12*(n.year()-i.year())+(n.month()-i.month()),s=i.clone().add(o,H),u=n-s<0,d=i.clone().add(o+(u?-1:1),H);return+(-(o+(n-s)/(u?s-d:d-s))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:H,y:z,w:N,d:E,D:O,h:I,m:j,s:b,ms:w,Q:J}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},R="en",m={};m[R]=te;var c="$isDayjsObject",r=function(a){return a instanceof M||!(!a||!a[c])},f=function a(i,n,o){var s;if(!i)return R;if(typeof i=="string"){var u=i.toLowerCase();m[u]&&(s=u),n&&(m[u]=n,s=u);var d=i.split("-");if(!s&&d.length>1)return a(d[0])}else{var v=i.name;m[v]=i,s=v}return!o&&s&&(R=s),s||!o&&R},h=function(a,i){if(r(a))return a.clone();var n=typeof i=="object"?i:{};return n.date=a,n.args=arguments,new M(n)},l=Z;l.l=f,l.i=r,l.w=function(a,i){return h(a,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var M=function(){function a(n){this.$L=f(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[c]=!0}var i=a.prototype;return i.parse=function(n){this.$d=function(o){var s=o.date,u=o.utc;if(s===null)return new Date(NaN);if(l.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var d=s.match(K);if(d){var v=d[2]-1||0,S=(d[7]||"0").substring(0,3);return u?new Date(Date.UTC(d[1],v,d[3]||1,d[4]||0,d[5]||0,d[6]||0,S)):new Date(d[1],v,d[3]||1,d[4]||0,d[5]||0,d[6]||0,S)}}return new Date(s)}(n),this.init()},i.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},i.$utils=function(){return l},i.isValid=function(){return this.$d.toString()!==_},i.isSame=function(n,o){var s=h(n);return this.startOf(o)<=s&&s<=this.endOf(o)},i.isAfter=function(n,o){return h(n)<this.startOf(o)},i.isBefore=function(n,o){return this.endOf(o)<h(n)},i.$g=function(n,o,s){return l.u(n)?this[o]:this.set(s,n)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(n,o){var s=this,u=!!l.u(o)||o,d=l.p(n),v=function(W,A){var U=l.w(s.$u?Date.UTC(s.$y,A,W):new Date(s.$y,A,W),s);return u?U:U.endOf(E)},S=function(W,A){return l.w(s.toDate()[W].apply(s.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(A)),s)},k=this.$W,C=this.$M,T=this.$D,G="set"+(this.$u?"UTC":"");switch(d){case z:return u?v(1,0):v(31,11);case H:return u?v(1,C):v(0,C+1);case N:var V=this.$locale().weekStart||0,Q=(k<V?k+7:k)-V;return v(u?T-Q:T+(6-Q),C);case E:case O:return S(G+"Hours",0);case I:return S(G+"Minutes",1);case j:return S(G+"Seconds",2);case b:return S(G+"Milliseconds",3);default:return this.clone()}},i.endOf=function(n){return this.startOf(n,!1)},i.$set=function(n,o){var s,u=l.p(n),d="set"+(this.$u?"UTC":""),v=(s={},s[E]=d+"Date",s[O]=d+"Date",s[H]=d+"Month",s[z]=d+"FullYear",s[I]=d+"Hours",s[j]=d+"Minutes",s[b]=d+"Seconds",s[w]=d+"Milliseconds",s)[u],S=u===E?this.$D+(o-this.$W):o;if(u===H||u===z){var k=this.clone().set(O,1);k.$d[v](S),k.init(),this.$d=k.set(O,Math.min(this.$D,k.daysInMonth())).$d}else v&&this.$d[v](S);return this.init(),this},i.set=function(n,o){return this.clone().$set(n,o)},i.get=function(n){return this[l.p(n)]()},i.add=function(n,o){var s,u=this;n=Number(n);var d=l.p(o),v=function(C){var T=h(u);return l.w(T.date(T.date()+Math.round(C*n)),u)};if(d===H)return this.set(H,this.$M+n);if(d===z)return this.set(z,this.$y+n);if(d===E)return v(1);if(d===N)return v(7);var S=(s={},s[j]=g,s[I]=L,s[b]=$,s)[d]||1,k=this.$d.getTime()+n*S;return l.w(k,this)},i.subtract=function(n,o){return this.add(-1*n,o)},i.format=function(n){var o=this,s=this.$locale();if(!this.isValid())return s.invalidDate||_;var u=n||"YYYY-MM-DDTHH:mm:ssZ",d=l.z(this),v=this.$H,S=this.$m,k=this.$M,C=s.weekdays,T=s.months,G=s.meridiem,V=function(A,U,q,X){return A&&(A[U]||A(o,u))||q[U].slice(0,X)},Q=function(A){return l.s(v%12||12,A,"0")},W=G||function(A,U,q){var X=A<12?"AM":"PM";return q?X.toLowerCase():X};return u.replace(P,function(A,U){return U||function(q){switch(q){case"YY":return String(o.$y).slice(-2);case"YYYY":return l.s(o.$y,4,"0");case"M":return k+1;case"MM":return l.s(k+1,2,"0");case"MMM":return V(s.monthsShort,k,T,3);case"MMMM":return V(T,k);case"D":return o.$D;case"DD":return l.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return V(s.weekdaysMin,o.$W,C,2);case"ddd":return V(s.weekdaysShort,o.$W,C,3);case"dddd":return C[o.$W];case"H":return String(v);case"HH":return l.s(v,2,"0");case"h":return Q(1);case"hh":return Q(2);case"a":return W(v,S,!0);case"A":return W(v,S,!1);case"m":return String(S);case"mm":return l.s(S,2,"0");case"s":return String(o.$s);case"ss":return l.s(o.$s,2,"0");case"SSS":return l.s(o.$ms,3,"0");case"Z":return d}return null}(A)||d.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(n,o,s){var u,d=this,v=l.p(o),S=h(n),k=(S.utcOffset()-this.utcOffset())*g,C=this-S,T=function(){return l.m(d,S)};switch(v){case z:u=T()/12;break;case H:u=T();break;case J:u=T()/3;break;case N:u=(C-k)/6048e5;break;case E:u=(C-k)/864e5;break;case I:u=C/L;break;case j:u=C/g;break;case b:u=C/$;break;default:u=C}return s?u:l.a(u)},i.daysInMonth=function(){return this.endOf(H).$D},i.$locale=function(){return m[this.$L]},i.locale=function(n,o){if(!n)return this.$L;var s=this.clone(),u=f(n,o,!0);return u&&(s.$L=u),s},i.clone=function(){return l.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},a}(),D=M.prototype;return h.prototype=D,[["$ms",w],["$s",b],["$m",j],["$H",I],["$W",E],["$M",H],["$y",z],["$D",O]].forEach(function(a){D[a[1]]=function(i){return this.$g(i,a[0],a[1])}}),h.extend=function(a,i){return a.$i||(a(i,M,h),a.$i=!0),h},h.locale=f,h.isDayjs=r,h.unix=function(a){return h(1e3*a)},h.en=m[R],h.Ls=m,h.p={},h})})(we);const ee=re;var ae={},Se={get exports(){return ae},set exports(e){ae=e}};(function(e,p){(function($,g){e.exports=g()})(ge,function(){var $,g,L=1e3,w=6e4,b=36e5,j=864e5,I=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E=31536e6,N=2628e6,H=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,J={years:E,months:N,days:j,hours:b,minutes:w,seconds:L,milliseconds:1,weeks:6048e5},z=function(m){return m instanceof Z},O=function(m,c,r){return new Z(m,r,c.$l)},_=function(m){return g.p(m)+"s"},K=function(m){return m<0},P=function(m){return K(m)?Math.ceil(m):Math.floor(m)},te=function(m){return Math.abs(m)},F=function(m,c){return m?K(m)?{negative:!0,format:""+te(m)+c}:{negative:!1,format:""+m+c}:{negative:!1,format:""}},Z=function(){function m(r,f,h){var l=this;if(this.$d={},this.$l=h,r===void 0&&(this.$ms=0,this.parseFromMilliseconds()),f)return O(r*J[_(f)],this);if(typeof r=="number")return this.$ms=r,this.parseFromMilliseconds(),this;if(typeof r=="object")return Object.keys(r).forEach(function(a){l.$d[_(a)]=r[a]}),this.calMilliseconds(),this;if(typeof r=="string"){var M=r.match(H);if(M){var D=M.slice(2).map(function(a){return a!=null?Number(a):0});return this.$d.years=D[0],this.$d.months=D[1],this.$d.weeks=D[2],this.$d.days=D[3],this.$d.hours=D[4],this.$d.minutes=D[5],this.$d.seconds=D[6],this.calMilliseconds(),this}}return this}var c=m.prototype;return c.calMilliseconds=function(){var r=this;this.$ms=Object.keys(this.$d).reduce(function(f,h){return f+(r.$d[h]||0)*J[h]},0)},c.parseFromMilliseconds=function(){var r=this.$ms;this.$d.years=P(r/E),r%=E,this.$d.months=P(r/N),r%=N,this.$d.days=P(r/j),r%=j,this.$d.hours=P(r/b),r%=b,this.$d.minutes=P(r/w),r%=w,this.$d.seconds=P(r/L),r%=L,this.$d.milliseconds=r},c.toISOString=function(){var r=F(this.$d.years,"Y"),f=F(this.$d.months,"M"),h=+this.$d.days||0;this.$d.weeks&&(h+=7*this.$d.weeks);var l=F(h,"D"),M=F(this.$d.hours,"H"),D=F(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3,a=Math.round(1e3*a)/1e3);var i=F(a,"S"),n=r.negative||f.negative||l.negative||M.negative||D.negative||i.negative,o=M.format||D.format||i.format?"T":"",s=(n?"-":"")+"P"+r.format+f.format+l.format+o+M.format+D.format+i.format;return s==="P"||s==="-P"?"P0D":s},c.toJSON=function(){return this.toISOString()},c.format=function(r){var f=r||"YYYY-MM-DDTHH:mm:ss",h={Y:this.$d.years,YY:g.s(this.$d.years,2,"0"),YYYY:g.s(this.$d.years,4,"0"),M:this.$d.months,MM:g.s(this.$d.months,2,"0"),D:this.$d.days,DD:g.s(this.$d.days,2,"0"),H:this.$d.hours,HH:g.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:g.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:g.s(this.$d.seconds,2,"0"),SSS:g.s(this.$d.milliseconds,3,"0")};return f.replace(I,function(l,M){return M||String(h[l])})},c.as=function(r){return this.$ms/J[_(r)]},c.get=function(r){var f=this.$ms,h=_(r);return h==="milliseconds"?f%=1e3:f=h==="weeks"?P(f/J[h]):this.$d[h],f||0},c.add=function(r,f,h){var l;return l=f?r*J[_(f)]:z(r)?r.$ms:O(r,this).$ms,O(this.$ms+l*(h?-1:1),this)},c.subtract=function(r,f){return this.add(r,f,!0)},c.locale=function(r){var f=this.clone();return f.$l=r,f},c.clone=function(){return O(this.$ms,this)},c.humanize=function(r){return $().add(this.$ms,"ms").locale(this.$l).fromNow(!r)},c.valueOf=function(){return this.asMilliseconds()},c.milliseconds=function(){return this.get("milliseconds")},c.asMilliseconds=function(){return this.as("milliseconds")},c.seconds=function(){return this.get("seconds")},c.asSeconds=function(){return this.as("seconds")},c.minutes=function(){return this.get("minutes")},c.asMinutes=function(){return this.as("minutes")},c.hours=function(){return this.get("hours")},c.asHours=function(){return this.as("hours")},c.days=function(){return this.get("days")},c.asDays=function(){return this.as("days")},c.weeks=function(){return this.get("weeks")},c.asWeeks=function(){return this.as("weeks")},c.months=function(){return this.get("months")},c.asMonths=function(){return this.as("months")},c.years=function(){return this.get("years")},c.asYears=function(){return this.as("years")},m}(),R=function(m,c,r){return m.add(c.years()*r,"y").add(c.months()*r,"M").add(c.days()*r,"d").add(c.hours()*r,"h").add(c.minutes()*r,"m").add(c.seconds()*r,"s").add(c.milliseconds()*r,"ms")};return function(m,c,r){$=r,g=r().$utils(),r.duration=function(l,M){var D=r.locale();return O(l,{$l:D},M)},r.isDuration=z;var f=c.prototype.add,h=c.prototype.subtract;c.prototype.add=function(l,M){return z(l)?R(this,l,1):f.bind(this)(l,M)},c.prototype.subtract=function(l,M){return z(l)?R(this,l,-1):h.bind(this)(l,M)}}})})(Se);const Me=ae;ee.extend(Me);const Ce=(e,p=new Date)=>{let $=0,g=0,L=0;return p.getFullYear()!==e.getFullYear()?(L=p.getMonth(),g=(p.getFullYear()-e.getFullYear()-1)*12,$=12-e.getMonth()):$=p.getMonth()-e.getMonth(),$+g+L+1},Le=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],Ae=(e,p)=>`${e} | ${p}`;function He(e,p=new Date(Date.now()+1e3*60*60*24)){const $=ee(e),g=ee(p),L=ee.duration(g.diff($));let w=L.as("months");if(w=Math.round(w),w<12)return w=w||1,`${w} month${w>1?"s":""}`;{let b=L.as("years");return b=Math.trunc(b),w=w-b*12,w==0?`${b} year${b>1?"s":""}`:`${b} year${b>1?"s":""} ${w} month${w>1?"s":""}`}}function ze(e,p){const $=["logo","links","color","screenshots"];return p=p.toLowerCase(),e.filter(g=>oe(g,p,$))}function oe(e,p,$=[]){return Array.isArray(e)?e.some(g=>oe(g,p)):typeof e=="object"&&e!==null?e instanceof Date?[e.toString().toLowerCase(),e.toLocaleDateString("default",{month:"long",year:"numeric"}).toLowerCase(),e.toLocaleDateString("default",{day:"numeric",month:"long",year:"numeric"}).toLowerCase(),e.toLocaleDateString("en-US").toLowerCase(),e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}).toLowerCase()].some(L=>L.includes(p)):Object.keys(e).some(g=>!$.includes(g)&&oe(e[g],p)):e.toString().toLowerCase().includes(p)}var ce=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(ce||{});const Ee="Lim Meng Shin",Oe={home:"Home",personal:"Projects",career:"Experiences",resume:"Resumé",skills:"Skills",Education:"Education"},Te=e=>{switch(e){case B.Linkedin:return ce.LinkedIn;case B.GitHub:return ce.GitHub}},Ye={title:"Home",name:"Lim Meng Shin",description:"A driven tech enthusiast with a passion for turning ideas into reality. I love building projects to explore new technologies and hone my coding skills.",links:[{platform:B.Linkedin,link:"https://www.linkedin.com/in/limmengshin/"},{platform:B.GitHub,link:"https://github.com/LimMengShin"}]},je={title:"Projects",items:$e},Fe={title:"Experiences",items:ye},Pe={title:"Skills",items:he},xe={title:"Resumé",item:"resumé.pdf"},Ie={title:"Search"},Ne={items:ve,title:"Education"};export{Ne as E,Ye as H,ce as I,he as M,Oe as N,je as P,xe as R,Ie as S,Ee as T,ne as a,Te as b,He as c,Le as d,Fe as e,ye as f,De as g,ge as h,Ce as i,$e as j,ze as k,Pe as l,ke as o,ue as t,Ae as u};
