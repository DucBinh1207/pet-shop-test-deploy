(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{383:function(e,t,r){Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,2538))},2538:function(e,t,r){"use strict";r.d(t,{default:function(){return g}});var n=r(7437),a=r(3236),o=r(7138),i=r(9343),l=r(9772),s=r(1014),c=r(5109),p=r(6843),x=r(776),u=r(2311),d=r(4021),m=r(5714);let f=l.z.object({email:l.z.string().email("Invalid email format")});function g(){var e;let{register:t,handleSubmit:r,formState:{errors:l}}=(0,i.cI)({defaultValues:{email:""},mode:"onSubmit",resolver:(0,s.F)(f)}),{mutate:g,isMutating:h}=(0,x.Z)({fetcher:c.pk,options:{onSuccess:async e=>{let t=e.token;(0,m.xx)(t),window.location.href="/verify-email"},onError:e=>{(0,d._)(e.message)},onFinally:()=>{}}}),y=r(e=>{g({data:e})});return(0,n.jsx)("div",{className:"mx-auto flex rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:mb-[40px] large-screen:mt-[15px] large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[30px] smallest-screen:mb-[20px] smallest-screen:mt-[10px]",children:(0,n.jsx)("div",{className:"flex w-full justify-center",children:(0,n.jsx)("div",{className:"w-[380px] max-w-full px-[20px] pb-[50px] pt-[40px]",children:(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("h2",{className:"mb-[35px] text-center font-quicksand text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary",children:"Register"}),(0,n.jsx)("form",{onSubmit:y,children:(0,n.jsxs)("ul",{className:"flex flex-col",children:[(0,n.jsxs)("li",{className:"flex flex-col",children:[(0,n.jsx)("label",{className:"pb-[10px] text-[13px] font-normal leading-[18px] tracking-[0.02em] text-primary",htmlFor:"username",children:"Email address *"}),(0,n.jsx)(p.Z,{id:"email",placeholder:"example@gmail.com",...t("email"),error:null===(e=l.email)||void 0===e?void 0:e.message})]}),(0,n.jsx)("li",{className:"mb-[25px] mt-[10px] flex text-[14px] leading-[1.5] tracking-[0.02em] text-text_color",children:"A link to set a new password will be sent to your email address."}),(0,n.jsxs)("li",{className:"text-[14px] leading-[1.5] tracking-[0.02em] text-text_color",children:["Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our",(0,n.jsx)(o.default,{href:"/privacy",className:"inline text-primary hover:text-secondary",children:"privacy policy"})]}),(0,n.jsx)("li",{className:"mt-[20px] flex flex-col",children:(0,n.jsx)(a.Z,{size:"xsm",variant:"secondary",className:(0,u.Z)("text-center text-[13px] font-bold leading-[16px]",{"opacity-30":h}),disabled:h,children:"Register"})}),(0,n.jsx)("li",{className:"mt-[32px] flex flex-col",children:(0,n.jsxs)("div",{className:"flex justify-center gap-[20px] text-[14px] font-normal leading-[1.5] tracking-[0.02em] text-text_color",children:["You A Member ?",(0,n.jsx)(o.default,{href:"/login",className:"text-[14px] font-normal leading-[1.5] tracking-[0.02em] text-primary hover:text-secondary",children:"Login"})]})})]})})]})})})})}},3236:function(e,t,r){"use strict";var n=r(7437),a=r(2218),o=r(2265);let i=(0,a.j)("inline-block outline-none border-solid border-[2px] cursor-pointer rounded-[25px] text-center uppercase hover_animate ",{variants:{size:{xsm:"px-[25px] py-[15px]",sm:"px-[28px] py-[6px] text-[11px] leading-[14px] font-bold tracking-wider",md:"px-[30px] py-[8px] text-[13px] leading-[16px] font-bold tracking-wider",lg:"px-[34px] py-[15.5px] text-[12px] leading-[15px] font-bold tracking-[0.03em]",circle_xsm:"p-[3px] text-[7px] leading-[1]",circle_sm:"p-[7px] text-[11px] leading-[1]",circle_md:"p-[11px] text-[16px] leading-[1]",circle_lg:"p-[12px]",circle_xlg:"p-[15px] text-[21px] leading-[1]",circle_xxl:"p-[33px]",none:"p-0"},variant:{primary:"bg-white text-primary border-primary hover:bg-primary hover:text-white",secondary:"bg-primary text-white border-primary hover:bg-white hover:text-primary",tertiary:"bg-white text-primary border-white hover:bg-primary hover:border-primary hover:text-white",discovery:"bg-dark_orange_color text-white border-dark_orange_color hover:bg-white hover:text-dark_orange_color",none:"bg-transparent border-transparent text-black hover:opacity-[0.85]",icon:"text-primary hover:text-secondary border-none"}},defaultVariants:{size:"md",variant:"primary"}}),l=(0,o.forwardRef)((e,t)=>{let{size:r,variant:a,children:l,startIcon:s,endIcon:c,className:p,onClick:x,...u}=e,d=(0,o.useMemo)(()=>i({size:r,variant:a}),[r,a]);p&&(d+=" "+p);let m=s&&(0,n.jsxs)("span",{children:[" ",s," "]}),f=c&&(0,n.jsxs)("span",{children:[" ",c," "]});return(0,n.jsxs)("button",{className:d,ref:t,...u,onClick:x&&x,children:[m,l,f]})});l.displayName="Button",t.Z=l},587:function(e,t,r){"use strict";var n=r(7437),a=r(2218),o=r(2265);let i=(0,a.j)("font-medium border-solid border rounded-[3px] outline-none tracking-[0.01em]",{variants:{inputSize:{small:"px-[10px] py-[8px] text-[11px] leading-[14px]",medium:"px-[12px] py-[9px] text-[13px] leading-[16px]",large:"px-[14px] py-[10px] text-[15px] leading-[18px]",quantity:"w-[50px]",medium_full_width:"px-[12px] py-[9px] text-[13px] leading-[16px] w-full font-quicksand ",form_controls:"w-[18px]  h-[18px] "},variant:{primary:"text-primary border-input_border_color bg-background_color ",secondary:"bg-green-500 text-white",third:"bg-red-500 text-white",quantity:"text-center text-[18px] font-medium leading-[1] tracking-[0.015em] text-primary bg-white border-none outline-none appearance-none"}},compoundVariants:[{variant:"primary",class:"focus:outline-none focus:border-primary"},{variant:"secondary",class:"focus:bg-green-600 focus:border-green-600"},{variant:"third",class:"focus:bg-red-600 focus:border-red-600"}],defaultVariants:{inputSize:"medium",variant:"primary"}}),l=(0,o.forwardRef)((e,t)=>{let{inputSize:r,variant:a,type:l,className:s,...c}=e,p=(0,o.useMemo)(()=>i({inputSize:r,variant:a}),[r,a]);return s&&(p+=" "+s),(0,n.jsx)("input",{ref:t,type:l,autoComplete:"off",className:p,...c})});l.displayName="Input",t.default=l},6843:function(e,t,r){"use strict";var n=r(7437),a=r(2265),o=r(587);let i=(0,a.forwardRef)((e,t)=>{let{error:r,...a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{ref:t,...a}),r&&(0,n.jsx)("span",{className:"ml-[5px] mt-[5px] text-[13px] leading-[18px] text-red-500",children:r})]})});i.displayName="FormInput",t.Z=i},776:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(2265),a=()=>{let e=(0,n.useRef)(!1);return(0,n.useEffect)(()=>{e.current=!0},[]),()=>e.current},o=function(e){let[t,r]=(0,n.useState)(null),[o,i]=(0,n.useState)({data:null,error:null,isMutating:!1}),l=a();return{mutate:async t=>{var n,a,s,c,p,x;i({...o,isMutating:!0});try{let o=await e.fetcher(null!=t?t:null);l()&&(r(o),null===(a=e.options)||void 0===a||null===(n=a.onSuccess)||void 0===n||n.call(a,o))}catch(t){null===(c=e.options)||void 0===c||null===(s=c.onError)||void 0===s||s.call(c,t),i({...o,error:t})}finally{null===(x=e.options)||void 0===x||null===(p=x.onFinally)||void 0===p||p.call(x),i({...o,isMutating:!1})}},...o,data:t}}},5109:function(e,t,r){"use strict";r.d(t,{d6:function(){return x},Ig:function(){return s},pk:function(){return c},df:function(){return p}});var n=r(8472);let a={BAD_REQUEST:400,NOT_FOUND:404,UNAUTHORIZED:401,SERVER_ERROR:500};var o=r(5714);let i=n.Z.create({baseURL:"https://pet-shop-api-2zab.onrender.com/api",headers:{"Content-Type":"application/json"},timeout:3e3});i.interceptors.request.use(e=>{let t=(0,o.N0)();return t&&(e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e)),i.interceptors.response.use(e=>e.data,e=>{if(e.response&&e.response.data)switch(e.response.status){case a.BAD_REQUEST:throw Error(e.response.data.message);case a.UNAUTHORIZED:throw(0,o.jg)(),Error(e.response.data.message);case a.NOT_FOUND:window.location.href="/not_found";break;case a.SERVER_ERROR:window.location.href="/error"}if(e.request)throw console.log(e),console.log(e.request),Error("Could not connect")});let l=e=>{let{url:t,data:r,config:n}=e;return i.post(t,r,n)};async function s(e){let{data:t}=e;return await l({url:"/auth/login",data:t})}async function c(e){let{data:t}=e;return await l({url:"/auth/register",data:t})}async function p(e){let{data:t}=e;return await l({url:"/auth/verify-token",data:t})}async function x(){return await l({url:"/auth/logout"})}},5714:function(e,t,r){"use strict";r.d(t,{N0:function(){return o},jg:function(){return i},xx:function(){return a}});var n=r(8472);async function a(e){await n.Z.post("/api/auth/token",{token:e})}async function o(){try{return(await n.Z.get("/api/auth/token")).data}catch(e){}}async function i(){await n.Z.delete("/api/auth/token")}},2311:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4839);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.Z)(t)}},4021:function(e,t,r){"use strict";r.d(t,{_:function(){return a}});var n=r(5956);function a(e){return function(e){let{type:t,message:r}=e;return n.Am[t](r,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"light",progress:void 0})}({type:"error",message:e})}}},function(e){e.O(0,[231,472,618,239,14,971,23,744],function(){return e(e.s=383)}),_N_E=e.O()}]);