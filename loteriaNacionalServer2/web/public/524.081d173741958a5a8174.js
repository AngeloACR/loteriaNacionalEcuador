"use strict";(self.webpackChunkloteria_nacional_front=self.webpackChunkloteria_nacional_front||[]).push([[524],{7524:(v,a,o)=>{o.r(a),o.d(a,{PublicModule:()=>L});var c=o(8583),s=o(8741),n=o(3018),u=o(4481),g=o(7403),p=o(3772);function d(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"app-error",13),n.NdJ("closeError",function(){return n.CHM(e),n.oxw().closeError()}),n.qZA()}if(2&t){const e=n.oxw();n.Q6J("msg",e.errorMessage)("title",e.errorTitle)}}let l=(()=>{class t{constructor(e){this.actRoute=e,this.ventasLink="/compra_tus_juegos",this.consultasLink="/consultas/loteria",this.juegosLink="https://www.loteria.com.ec/#/juegos",this.puntosDeLaSuerteLink="https://www.loteria.com.ec/#/contenido/puntos-suerte",this.isError=!1,this.actRoute.params.subscribe(r=>{this.token=r.token})}ngOnInit(){this.ventasLink=`${this.ventasLink}/${this.token}`}checkToken(e){if(!this.token)return e.stopPropagation(),e.preventDefault(),void this.authError()}authError(){this.openError("Por favor, para poder comprar tu boleto preferido, deber\xe1s iniciar sesi\xf3n en tu cuenta","Aviso")}openError(e,r){this.errorTitle=r.toUpperCase(),this.errorMessage=e,this.isError=!0}closeError(){this.isError=!1}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(s.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-public"]],decls:19,vars:6,consts:[["id","desktopLanding"],[1,"separador"],[3,"home"],["id","mobileLanding"],["target","_parent",1,"landingButton","compras",3,"href","click"],["src","assets/img/webicon01.png","alt",""],["target","_parent",1,"landingButton","consulta",3,"href"],["src","assets/img/webicon02.png","alt",""],["target","_parent",1,"landingButton","juegos",3,"href"],["src","assets/img/webicon03.png","alt",""],["target","_parent",1,"landingButton","suerte",3,"href"],["src","assets/img/webicon04.png","alt",""],[3,"msg","title","closeError",4,"ngIf"],[3,"msg","title","closeError"]],template:function(e,r){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"h1"),n._uU(3,"COMPRAR BOLETO"),n.qZA(),n.qZA(),n._UZ(4,"ventas-menu-header",2),n.TgZ(5,"div",1),n.TgZ(6,"h1"),n._uU(7,"CONSULTAR RESULTADOS"),n.qZA(),n.qZA(),n._UZ(8,"consultas-ultimos-resultados"),n.qZA(),n.TgZ(9,"div",3),n.TgZ(10,"a",4),n.NdJ("click",function(Z){return r.checkToken(Z)}),n._UZ(11,"img",5),n.qZA(),n.TgZ(12,"a",6),n._UZ(13,"img",7),n.qZA(),n.TgZ(14,"a",8),n._UZ(15,"img",9),n.qZA(),n.TgZ(16,"a",10),n._UZ(17,"img",11),n.qZA(),n.qZA(),n.YNc(18,d,1,2,"app-error",12)),2&e&&(n.xp6(4),n.Q6J("home",!0),n.xp6(6),n.Q6J("href",r.ventasLink,n.LSH),n.xp6(2),n.Q6J("href",r.consultasLink,n.LSH),n.xp6(2),n.Q6J("href",r.juegosLink,n.LSH),n.xp6(2),n.Q6J("href",r.puntosDeLaSuerteLink,n.LSH),n.xp6(2),n.Q6J("ngIf",r.isError))},directives:[u.O,g.H,c.O5,p.q],styles:["#desktopLanding[_ngcontent-%COMP%]{width:100%;height:100%}#desktopLanding[_ngcontent-%COMP%]   .separador[_ngcontent-%COMP%]{margin:auto;border-bottom:1px solid #021151;width:92%}#desktopLanding[_ngcontent-%COMP%]   .separador[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#021151;margin:0}#mobileLanding[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 778px){#desktopLanding[_ngcontent-%COMP%]{display:none}#mobileLanding[_ngcontent-%COMP%]{padding:20px 0;width:100%;height:100%;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-around}#mobileLanding[_ngcontent-%COMP%]   .landingButton[_ngcontent-%COMP%]{width:45vw;height:45vw;margin:20px 0;border-radius:15px;display:flex;align-items:center;flex-direction:column;justify-content:center}#mobileLanding[_ngcontent-%COMP%]   .landingButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}#mobileLanding[_ngcontent-%COMP%]   .landingButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}}"]}),t})();const m=[{path:"",component:l},{path:":token",component:l}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.Bz.forChild(m)],s.Bz]}),t})();var f=o(4841),P=o(2953),C=o(2541);let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[h,c.ez,C.m,f.ConsultasModule,P.VentasModule]]}),t})()}}]);