import{_ as t,R as s,e as n,o as r,f as c}from"./index-0c2ccb49.js";const a={components:{RouterView:s},methods:{blockNotAdmin(){document.cookie.replace(/(?:(?:^|.*;\s*)role\s*=\s*([^;]*).*$)|^.*$/,"$1")!=="admin"&&(alert("您沒有權限進入"),this.$router.push("/"))}},mounted(){this.blockNotAdmin()}};function i(o,m,p,d,l,u){const e=n("RouterView");return r(),c(e)}const f=t(a,[["render",i]]);export{f as default};
