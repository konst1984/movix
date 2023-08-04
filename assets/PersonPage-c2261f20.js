import{m as e,x,k as b,y as B,r as a,u as v,E as $,z as Q,A as D,V as I,B as Y,C as F,D as T,l as U,I as y,q as w,L as S,N as V}from"./index-6d8ecf0d.js";import{B as C}from"./index-d98d5432.js";import{B as W,a as G}from"./avatar-26fbfa6a.js";const J="data:image/webp;base64,UklGRpYAAABXRUJQVlA4WAoAAAAQAAAAFwAAFwAAQUxQSEYAAAABLyAQSPEomR4REQNWkWQ1WpIDBOR/6iSchrf+zZAxENH/CcCLdsoBQtIMJo8IaUaTR4RmYnKmKfeNgq8VYjr4qTEOBc8CVlA4ICoAAADwAgCdASoYABgAPpE6mEeloyKhMAgAsBIJaQAAe8jIAAD+9/D6/v1gAAA=",H="data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAAFwAAFwAAQUxQSEgAAAABLyAQSPEomR4REQMGsW1FecMrQARQA1hBE7C9/mk+a4GI/k8ATvxdR9CDJokASvkczDt5WkjoTUCTaHUuaWJH55LGns63a3NWUDggLAAAAPACAJ0BKhgAGAA+kTqXR6WjIiEwCACwEglpAAB7yMgAAP730+FQ3/7qaAAA",u=({toggleDirection:o,name:s,direction:l})=>e.jsx("div",{className:x["btn-wrapper"],children:e.jsxs(C,{classname:`${x["sort-btn"]} ${l[s]?"":x["sort-btn_inactive"]}`,name:s,onClick:o,children:[e.jsx("span",{children:s}),e.jsx("img",{alt:"Sort",className:x["sort-btn__img"],src:l[s]==="up"||l[s]===""?H:J})]})}),O=({clearSort:o})=>e.jsx(C,{classname:`${x["sort-btn"]} ${x["sort-btn_clear"]}`,onClick:()=>o(),children:e.jsx("span",{children:"Clear sort"})}),q="_profile_dx9nm_15",z="_profile__content_dx9nm_19",K="_profile__content__photo_dx9nm_33",X="_profile__content__info_dx9nm_62",Z="_name_dx9nm_72",ee="_text_dx9nm_77",se="_biography_short_dx9nm_84",ne="_more__btn_dx9nm_96",oe="_svg_dx9nm_115",te="_profile__content__info_skeleton_dx9nm_126",ie="_biography_skeleton_dx9nm_151",le="_modal_dx9nm_184",re="_modal__content_dx9nm_193",ae="_modal__text_dx9nm_221",ce="_heading_dx9nm_236",_e="_link_pink_dx9nm_259",n={"opacity-backdrop":"_opacity-backdrop_dx9nm_1",profile:q,profile__content:z,profile__content__photo:K,profile__content__info:X,"info-item":"_info-item_dx9nm_67","info-span":"_info-span_dx9nm_68",name:Z,text:ee,biography_short:se,more__btn:ne,svg:oe,profile__content__info_skeleton:te,"info-item_skeleton":"_info-item_skeleton_dx9nm_130",biography_skeleton:ie,"btn__group-skeleton":"_btn__group-skeleton_dx9nm_156","btn__sort-skeleton":"_btn__sort-skeleton_dx9nm_162",modal:le,modal__content:re,modal__text:ae,heading:ce,"container-sort":"_container-sort_dx9nm_251",link_pink:_e,"grid_person-movies":"_grid_person-movies_dx9nm_264"},me=({endpoints:o,media_type:s})=>{const{id:l}=b(),{endpoint:r,onTabChange:m}=B(o),[_,d]=a.useState([]),[t,p]=a.useState({title:"",date:"",rating:""}),{data:i,isLoading:h,isError:f,error:E,isFetching:M}=v().useVideoCreditsPerson(l,r[0],{onSuccess:c=>{c!=null&&c.cast&&d(c.cast)}}),j=c=>{const A=t[c.target.name]==="down"||t[c.target.name]===""?"up":"down";p(g=>({...g,[c.target.name]:A}))},P=()=>{p({title:"",date:"",rating:""})};return a.useEffect(()=>()=>p(t),[r]),a.useEffect(()=>{(()=>{const A=r[0]==="movie"?"title":"name",g=r[0]==="movie"?"release_date":"first_air_date",R="vote_average",L=i==null?void 0:i.cast.toSorted((N,k)=>Y(N,k,A,t.title)||F(N,k,g,t.date)||T(N,k,R,t.rating));d(L)})()},[t,r,i==null?void 0:i.cast]),e.jsxs($,{error:E,isError:f,title:"Profile",children:[e.jsx(Q,{isLoading:h,tabsNames:o}),e.jsxs("div",{className:"wrapper",children:[e.jsxs("div",{className:n["container-sort"],children:[e.jsx(u,{direction:t,name:"title",toggleDirection:j}),e.jsx(u,{direction:t,name:"date",toggleDirection:j}),e.jsx(u,{direction:t,name:"rating",toggleDirection:j}),e.jsx(O,{clearSort:P})]}),e.jsxs("div",{className:n.heading,children:[e.jsx("h2",{className:"title-article",children:r[0]==="movie"?"Movies":"TV Show"}),e.jsx(D,{data:s,onTabChange:m})]}),e.jsx("div",{className:`grid ${n["grid_person-movies"]}`,children:e.jsx(I,{classname:"skeletons__item_grid",classnameCard:"card_grid",dataList:_,endpointCard:r[0],isFetching:M,loading:h})})]})]})},de=a.memo(({data:o})=>{const s=a.useRef(null),l=a.useRef(null),[r,m]=a.useState(!1),[_,d]=a.useState(!1),t=()=>{m(!0),document.body.classList.add("overflow-hidden")},p=i=>{i.target.id!=="modal-biography"&&(m(!1),document.body.classList.remove("overflow-hidden"))};return a.useEffect(()=>{var h,f;const i=(h=s==null?void 0:s.current)==null?void 0:h.getBoundingClientRect();d(((f=s==null?void 0:s.current)==null?void 0:f.scrollHeight)>(i==null?void 0:i.height))},[_]),e.jsxs(e.Fragment,{children:[o?e.jsx("div",{className:n.biography,children:e.jsxs("p",{ref:s,className:`${n["info-item"]} ${n.biography_short}`,children:[e.jsx("span",{className:`${n["info-span"]}`,children:e.jsx("span",{className:n.name,children:"Biography: "})})," ",e.jsx("span",{ref:l,className:`${n.text} ${n.biography_content}`,children:o}),_?e.jsx("button",{className:n.more__btn,title:"Read more",onClick:t,children:e.jsxs("svg",{viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M0 0h256v256H0z",fill:"none"}),e.jsx("path",{d:"m96 48 80 80-80 80",fill:"none",stroke:"#ec5f2b",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})}):null]})}):null,r?e.jsx("div",{className:n.modal,id:"modal",onClick:p,children:e.jsxs("div",{className:n.modal__content,children:[e.jsx(W,{close:p}),e.jsx("pre",{className:n.modal__text,id:"modal-biography",children:o})]})}):null]})}),pe=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:n.profile__content,children:[e.jsx("div",{className:`${n.profile__content__photo} skeleton`}),e.jsxs("div",{className:`${n.profile__content__info} ${n.profile__content__info_skeleton}`,children:[Array(6).fill("skeleton").map((o,s)=>e.jsx("p",{className:`${n["info-item"]} ${n["info-item_skeleton"]} skeleton`},s)),e.jsx("p",{className:`${n.biography_skeleton} skeleton`}),e.jsx("p",{className:`${n["info-item"]} ${n["info-item_skeleton"]} skeleton`})]})]}),e.jsxs("div",{className:n["btn__group-skeleton"],children:[e.jsx("div",{className:`${n["btn__sort-skeleton"]} skeleton`}),e.jsx("div",{className:`${n["btn__sort-skeleton"]} skeleton`}),e.jsx("div",{className:`${n["btn__sort-skeleton"]} skeleton`}),e.jsx("div",{className:`${n["btn__sort-skeleton"]} skeleton`})]})]}),xe=()=>{const{id:o}=b(),{data:s,isLoading:l,isError:r,error:m}=v().usePerson(o),_=U(d=>{var t;return(t=d.urlBaseForImages.url)==null?void 0:t.profile});return e.jsx($,{classname:"main",error:m,isError:r,title:"Profile",children:e.jsxs("div",{className:`${n.profile} wrapper`,children:[e.jsx("div",{className:n["opacity-backdrop"],children:e.jsx(y,{src:s!=null&&s.profile_path?_+(s==null?void 0:s.profile_path):null})}),e.jsx("h1",{className:"title-article",children:"Profile"}),l?e.jsx(pe,{}):e.jsxs("div",{className:n.profile__content,children:[e.jsx("div",{className:n.profile__content__photo,children:e.jsx(y,{src:s!=null&&s.profile_path?_+(s==null?void 0:s.profile_path):G})}),e.jsxs("div",{className:n.profile__content__info,children:[e.jsxs("p",{className:n["info-item"],children:[e.jsx("span",{className:n.name,children:"Name:"}),e.jsx("span",{className:n.text,children:s==null?void 0:s.name})]}),e.jsxs("p",{className:n["info-item"],children:[e.jsx("span",{className:n.name,children:"Gender:"}),e.jsx("span",{className:n.text,children:(s==null?void 0:s.gender)===1?"Female":"Male"})]}),s!=null&&s.birthday?e.jsxs("p",{className:n["info-item"],children:[e.jsx("span",{className:n.name,children:"Birthday: "}),e.jsx("span",{className:n.text,children:w(s==null?void 0:s.birthday).format("MMM D, YYYY")})]}):null,s!=null&&s.deathday?e.jsxs("p",{className:n["info-item"],children:[e.jsx("span",{className:n.name,children:"Deathday: "}),e.jsx("span",{className:n.text,children:w(s==null?void 0:s.deathday).format("MMM D, YYYY")})]}):null,s!=null&&s.imdb_id?e.jsxs("p",{className:n["info-item"],children:[e.jsx("span",{className:n.name,children:"Imdb_id : "}),e.jsx("span",{className:n.text,children:e.jsxs(S,{to:`https://www.imdb.com/name/${s.imdb_id}`,className:n.link_pink,title:"Go to imdb.com",children:["ID ",s.imdb_id]})})]}):null,s!=null&&s.place_of_birth?e.jsxs("p",{className:n["info-item"],children:[e.jsx("span",{className:n.name,children:"Place of birth: "}),e.jsx("span",{className:n.text,children:s==null?void 0:s.place_of_birth})]}):null,s!=null&&s.homepage?e.jsxs("p",{className:n["info-item"],children:[e.jsx("span",{className:n.name,children:"Homepage: "}),e.jsx("span",{className:n.text,children:e.jsx(S,{className:n.link_pink,to:s==null?void 0:s.homepage,title:"Go to the actor's home page",children:s==null?void 0:s.homepage})})]}):null,e.jsx(de,{data:s==null?void 0:s.biography}),s!=null&&s.popularity?e.jsxs("p",{className:n["info-item"],children:[e.jsx("span",{className:n.name,children:"Popularity:"}),e.jsx("span",{className:n.text,children:s==null?void 0:s.popularity})]}):null]})]})]})})},he=()=>{const{id:o}=b(),{endpoint:s}=B(["movie","tv"]),{error:l}=v().useVideoCreditsPerson(o,s[0]);return e.jsx(V,{error:l,children:e.jsxs("div",{className:"main",children:[e.jsx(xe,{}),e.jsx(me,{endpoints:["movie","tv"],media_type:["Movies","TV Shows"]})]})})},ge=()=>e.jsx(he,{});export{ge as default};
