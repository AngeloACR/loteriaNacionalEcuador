(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"4RlZ":function(o,a,s){"use strict";var t=s("8Y7J");s("UyyX"),s.d(a,"a",(function(){return e})),s.d(a,"b",(function(){return n}));var e=t.pb({encapsulation:0,styles:[[".logBox[_ngcontent-%COMP%]{background-color:#fff;border-radius:3px;max-height:80%;z-index:100000;align-self:center;display:flex;flex-direction:column;position:fixed;overflow:hidden;width:50%;top:50%;left:50%;transform:translate(-50%,-50%)}.blackBox[_ngcontent-%COMP%]{position:fixed;z-index:8000;top:0;left:0;width:100%;height:100%;transition:height .2s ease-out;overflow:hidden;background-color:rgba(155,155,155,.5);border:none}.formButton[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;height:52px;color:#fff;background-color:red;margin:5px auto 23px;border-radius:8px;cursor:pointer;border:3px solid red}.formButton[_ngcontent-%COMP%]:active, .formButton[_ngcontent-%COMP%]:hover{color:red;background-color:#fff}.formButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;margin:0;font-size:23px;font-weight:700;width:100%;text-decoration:none!important}.formButton[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:red}.buttonBox[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;width:100%;margin-bottom:10px}.closeButton[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;width:23px;height:23px}.closeButton[_ngcontent-%COMP%]   .closeB[_ngcontent-%COMP%]{background:0 0;width:100%;height:100%;z-index:2000;color:#fff;font-weight:700;margin:0 auto;text-align:center;border:2px solid #fff;border-radius:3px;cursor:pointer;padding:0}.closeButton[_ngcontent-%COMP%]   .closeB[_ngcontent-%COMP%]:hover{background-color:#fff;color:red}.errorHeader[_ngcontent-%COMP%]{width:100%;padding-top:10px;padding-bottom:10px;font-size:23px;font-weight:700;color:#fff;background-color:red;margin:0;text-align:center}.errorContent[_ngcontent-%COMP%]{font-size:18px;color:#000;padding-top:42px;padding-bottom:42px;margin:0;text-align:center}@media screen and (max-width:1000px){.logBox[_ngcontent-%COMP%]{width:80%}}"]],data:{}});function n(o){return t.Mb(0,[(o()(),t.rb(0,0,null,null,0,"div",[["class","blackBox"]],null,[[null,"click"]],(function(o,a,s){var t=!0;return"click"===a&&(t=!1!==o.component.close()&&t),t}),null,null)),(o()(),t.rb(1,0,null,null,10,"div",[["class","logBox"]],null,null,null,null,null)),(o()(),t.rb(2,0,null,null,2,"div",[["class","closeButton"]],null,null,null,null,null)),(o()(),t.rb(3,0,null,null,1,"button",[["class","closeB"]],null,[[null,"click"]],(function(o,a,s){var t=!0;return"click"===a&&(t=!1!==o.component.close()&&t),t}),null,null)),(o()(),t.Kb(-1,null,["X"])),(o()(),t.rb(5,0,null,null,1,"p",[["class","errorHeader"]],null,null,null,null,null)),(o()(),t.Kb(6,null,["",""])),(o()(),t.rb(7,0,null,null,1,"p",[["class","errorContent"]],null,null,null,null,null)),(o()(),t.Kb(8,null,["",""])),(o()(),t.rb(9,0,null,null,2,"button",[["class","formButton"],["type","button"]],null,[[null,"click"]],(function(o,a,s){var t=!0;return"click"===a&&(t=!1!==o.component.close()&&t),t}),null,null)),(o()(),t.rb(10,0,null,null,1,"p",[],null,null,null,null,null)),(o()(),t.Kb(-1,null,["CERRAR"]))],null,(function(o,a){var s=a.component;o(a,6,0,s.title),o(a,8,0,s.msg)}))}},"668k":function(o,a,s){"use strict";s.d(a,"a",(function(){return t}));class t{constructor(){this.loaderPath="assets/loader.gif"}ngOnInit(){switch(this.loader){case"lotto":this.logoPath="assets/img/lotto-sombra-2.png";break;case"pozo":this.logoPath="assets/img/pozo-sombra.png";break;case"millonaria":this.logoPath="assets/img/millonaria-consulta.png";break;default:this.logoPath="assets/img/loteria-sombra.png"}}}},PCNd:function(o,a,s){"use strict";s.d(a,"a",(function(){return t}));class t{}},UyyX:function(o,a,s){"use strict";s.d(a,"a",(function(){return e}));var t=s("8Y7J");class e{constructor(){this.title="ERROR",this.closeError=new t.m}ngOnInit(){this.msg=this.msg.replace(/^\:/,"")}close(){this.closeError.emit("Cerrando error")}}},gy6J:function(o,a,s){"use strict";s.d(a,"a",(function(){return n}));var t=s("IheW"),e=s("8Y7J");let n=(()=>{class o{constructor(o){this.http=o,this.localSource="http://localhost:100",this.testSource="https://ventas-api-prueba.loteria.com.ec",this.productionSource="https://ventas-api.loteria.com.ec",this.mySource=this.testSource,this.obtenerAnimalesSelecionados(),this.obtenerAnimalesTabs()}formatNumber(o){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(o)}getAuthData(){let o=JSON.parse(localStorage.getItem("userData")),a={user:"",lotteryToken:""};if(o){let s=o.playerDocument;"italtronicprep"==o.user_&&(s=o.user_),a={lotteryToken:o.lotteryToken,user:s}}return a}obtenerDescuentos(){}obtenerSorteo(o,a){let s=new t.g;s=s.append("Content-Type","application/json");let e="",n=this.getAuthData();switch(a){case 1:e="/loteria";break;case 2:e="/lotto";break;case 5:e="/pozo";break;case 14:e="/millonaria"}return e=this.mySource+e+"/cache/sorteosDisponibles",new Promise((o,a)=>{this.http.get(e,{params:{lotteryToken:n.lotteryToken,user:n.user},headers:s}).subscribe(a=>{let s=a;s.sort(this.ordenaSorteos),o(s)},o=>{a(new Error(o.error.message))})})}obtenerSeries(o){let a=new t.g;a=a.append("Content-Type","application/json");let s="/millonaria",e=this.getAuthData();return s=this.mySource+s+"/getSeries",new Promise((t,n)=>{this.http.get(s,{params:{lotteryToken:e.lotteryToken,user:e.user,sorteo:o},headers:a}).subscribe(o=>{let a=o.map(o=>({serie:o,status:!1}));t(a)},o=>{n(new Error(o.error.message))})})}ordenaSorteos(o,a){return o.sorteo-a.sorteo}obtenerTickets(o,a,s,e,n,r){let i=new t.g;i=i.append("Content-Type","application/json");let l="",c="",m=this.getAuthData(),u={sorteo:s,lotteryToken:m.lotteryToken,user:m.user,combinacion:e,combinacionFigura:n,tipoSeleccion:r};switch(c+="/combinacionesDisponibles",a){case 1:return l="/loteria",l=this.mySource+l+c,new Promise((o,a)=>{this.http.post(l,u,{headers:i}).subscribe(a=>{o(a.combinaciones)},o=>{a(new Error(o.error.message))})});case 2:return l="/lotto",l=this.mySource+l+c,new Promise((o,a)=>{this.http.post(l,u,{headers:i}).subscribe(a=>{o(a.combinaciones)},o=>{a(new Error(o.error.message))})});case 5:return l="/pozo",l=this.mySource+l+c,new Promise((o,a)=>{this.http.post(l,u,{headers:i}).subscribe(a=>{o(a.combinaciones)},o=>{a(new Error(o.error.message))})});case 14:return l="/millonaria",l=this.mySource+l+c,new Promise((o,a)=>{this.http.post(l,u,{headers:i}).subscribe(a=>{o(a.combinaciones)},o=>{a(new Error(o.error.message))})})}}obtenerImagenBoleto(o,a){let s=this.mySource+"/uploads/boletos/";return new Promise((t,e)=>{t(`${s}B${o}${a}.png`)})}authUser(o){let a=new t.g;a=a.append("Content-Type","application/json");let s="/auth",e={token:o};return s=this.mySource+s+"/",new Promise((o,t)=>{this.http.post(s,e,{headers:a}).subscribe(a=>{localStorage.setItem("userData",JSON.stringify(a)),o(a)},o=>{t(new Error(o.error.message))})})}obtenerMascota(o){let a;switch(o){case"01":a="assets/mascotas/mascotas pozo millonario-Camaron.png";break;case"02":a="assets/mascotas/mascotas pozo millonario-Delfin.png";break;case"03":a="assets/mascotas/mascotas pozo millonario-Perro.png";break;case"04":a="assets/mascotas/mascotas pozo millonario-Llama.png";break;case"05":a="assets/mascotas/mascotas pozo millonario-Papagayo.png";break;case"06":a="assets/mascotas/mascotas pozo millonario-Conejo.png";break;case"07":a="assets/mascotas/mascotas pozo millonario-Mono.png";break;case"08":a="assets/mascotas/mascotas pozo millonario-Galapago.png";break;case"09":a="assets/mascotas/mascotas pozo millonario-Tucan.png";break;case"10":a="assets/mascotas/mascotas pozo millonario-Ballena.png";break;case"11":a="assets/mascotas/mascotas pozo millonario-Oso.png";break;case"12":a="assets/mascotas/mascotas pozo millonario-Foca.png";break;case"13":a="assets/mascotas/mascotas pozo millonario-Cangrejo.png";break;case"14":a="assets/mascotas/mascotas pozo millonario-Condor.png";break;case"15":a="assets/mascotas/mascotas pozo millonario-Iguana.png";break;case"16":a="assets/mascotas/mascotas pozo millonario-Caballo.png";break;case"17":a="assets/mascotas/mascotas pozo millonario-Rana.png";break;case"18":a="assets/mascotas/mascotas pozo millonario-Tiburon.png";break;case"19":a="assets/mascotas/mascotas pozo millonario-Caracol.png";break;case"20":a="assets/mascotas/mascotas pozo millonario-Oveja.png";break;case"21":a="assets/mascotas/mascotas pozo millonario-Gallo.png";break;case"22":a="assets/mascotas/mascotas pozo millonario-Abeja.png";break;case"23":a="assets/mascotas/mascotas pozo millonario-Mariposa.png";break;case"24":a="assets/mascotas/mascotas pozo millonario-Pez.png";break;case"25":a="assets/mascotas/mascotas pozo millonario-Pinguino.png";break;case"26":a="assets/mascotas/mascotas pozo millonario-Cocodrilo.png";break;case"27":a="assets/mascotas/mascotas pozo millonario-Vaca.png";break;case"28":a="assets/mascotas/mascotas pozo millonario-Chanchito.png";break;case"29":a="assets/mascotas/mascotas pozo millonario-Tigre.png";break;case"30":a="assets/mascotas/mascotas pozo millonario-Gato.png"}return a}obtenerAnimalesSelecionados(){this.animales=[{ruta:"assets/mascotas/mascotas pozo millonario-Camaron.png",identificador:"01",nombre:"Camar\xf3n",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Cangrejo.png",identificador:"13",nombre:"Cangrejo",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Ballena.png",identificador:"10",nombre:"Ballena",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Condor.png",identificador:"14",nombre:"C\xf3ndor",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Conejo.png",identificador:"06",nombre:"Conejo",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Delfin.png",identificador:"02",nombre:"Delf\xedn",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Foca.png",identificador:"12",nombre:"Foca",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Galapago.png",identificador:"08",nombre:"Gal\xe1pago",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Iguana.png",identificador:"15",nombre:"Iguana",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Llama.png",identificador:"04",nombre:"Llama",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Mono.png",identificador:"07",nombre:"Mono",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Oso.png",identificador:"11",nombre:"Oso",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Papagayo.png",identificador:"05",nombre:"Papagayo",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Perro.png",identificador:"03",nombre:"Perro",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Tucan.png",identificador:"09",nombre:"Tuc\xe1n",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Caballo.png",identificador:"16",nombre:"Caballo",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Rana.png",identificador:"17",nombre:"Rana",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Tiburon.png",identificador:"18",nombre:"Tibur\xf3n",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Caracol.png",identificador:"19",nombre:"Caracol",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Oveja.png",identificador:"20",nombre:"Oveja",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Gallo.png",identificador:"21",nombre:"Gallo",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Abeja.png",identificador:"22",nombre:"Abeja",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Mariposa.png",identificador:"23",nombre:"Mariposa",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Pez.png",identificador:"24",nombre:"Pez",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Pinguino.png",identificador:"25",nombre:"Ping\xfcino",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Cocodrilo.png",identificador:"26",nombre:"Cocodrilo",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Vaca.png",identificador:"27",nombre:"Vaca",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Chanchito.png",identificador:"28",nombre:"Chanchito",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Tigre.png",identificador:"29",nombre:"Tigre",status:!1},{ruta:"assets/mascotas/mascotas pozo millonario-Gato.png",identificador:"30",nombre:"Gato",status:!1}],localStorage.setItem("animalesSeleccionados",JSON.stringify(this.animales))}obtenerCaracteristicasDeMascota(o){return[{ruta:"assets/mascotas/mascotas pozo millonario-Camaron.png",identificador:"01",nombre:"Camar\xf3n"},{ruta:"assets/mascotas/mascotas pozo millonario-Cangrejo.png",identificador:"13",nombre:"Cangrejo"},{ruta:"assets/mascotas/mascotas pozo millonario-Ballena.png",identificador:"10",nombre:"Ballena"},{ruta:"assets/mascotas/mascotas pozo millonario-Condor.png",identificador:"14",nombre:"C\xf3ndor"},{ruta:"assets/mascotas/mascotas pozo millonario-Conejo.png",identificador:"06",nombre:"Conejo"},{ruta:"assets/mascotas/mascotas pozo millonario-Delfin.png",identificador:"02",nombre:"Delf\xedn"},{ruta:"assets/mascotas/mascotas pozo millonario-Foca.png",identificador:"12",nombre:"Foca"},{ruta:"assets/mascotas/mascotas pozo millonario-Galapago.png",identificador:"08",nombre:"Gal\xe1pago"},{ruta:"assets/mascotas/mascotas pozo millonario-Iguana.png",identificador:"15",nombre:"Iguana"},{ruta:"assets/mascotas/mascotas pozo millonario-Llama.png",identificador:"04",nombre:"Llama"},{ruta:"assets/mascotas/mascotas pozo millonario-Mono.png",identificador:"07",nombre:"Mono"},{ruta:"assets/mascotas/mascotas pozo millonario-Oso.png",identificador:"11",nombre:"Oso"},{ruta:"assets/mascotas/mascotas pozo millonario-Papagayo.png",identificador:"05",nombre:"Papagayo"},{ruta:"assets/mascotas/mascotas pozo millonario-Perro.png",identificador:"03",nombre:"Perro"},{ruta:"assets/mascotas/mascotas pozo millonario-Tucan.png",identificador:"09",nombre:"Tuc\xe1n"},{ruta:"assets/mascotas/mascotas pozo millonario-Caballo.png",identificador:"16",nombre:"Caballo"},{ruta:"assets/mascotas/mascotas pozo millonario-Rana.png",identificador:"17",nombre:"Rana"},{ruta:"assets/mascotas/mascotas pozo millonario-Tiburon.png",identificador:"18",nombre:"Tibur\xf3n"},{ruta:"assets/mascotas/mascotas pozo millonario-Caracol.png",identificador:"19",nombre:"Caracol"},{ruta:"assets/mascotas/mascotas pozo millonario-Oveja.png",identificador:"20",nombre:"Oveja"},{ruta:"assets/mascotas/mascotas pozo millonario-Gallo.png",identificador:"21",nombre:"Gallo"},{ruta:"assets/mascotas/mascotas pozo millonario-Abeja.png",identificador:"22",nombre:"Abeja"},{ruta:"assets/mascotas/mascotas pozo millonario-Mariposa.png",identificador:"23",nombre:"Mariposa"},{ruta:"assets/mascotas/mascotas pozo millonario-Pez.png",identificador:"24",nombre:"Pez"},{ruta:"assets/mascotas/mascotas pozo millonario-Pinguino.png",identificador:"25",nombre:"Ping\xfcino"},{ruta:"assets/mascotas/mascotas pozo millonario-Cocodrilo.png",identificador:"26",nombre:"Cocodrilo"},{ruta:"assets/mascotas/mascotas pozo millonario-Vaca.png",identificador:"27",nombre:"Vaca"},{ruta:"assets/mascotas/mascotas pozo millonario-Chanchito.png",identificador:"28",nombre:"Chanchito"},{ruta:"assets/mascotas/mascotas pozo millonario-Tigre.png",identificador:"29",nombre:"Tigre"},{ruta:"assets/mascotas/mascotas pozo millonario-Gato.png",identificador:"30",nombre:"Gato"}].find(a=>a.identificador===o)}obtenerCaracteristicasDeAntojito(o){return[{ruta:"assets/antojitos/1.jpg",identificador:"01",nombre:"Choclo con queso"},{ruta:"assets/antojitos/13.jpg",identificador:"13",nombre:"Cangrejo criollo"},{ruta:"assets/antojitos/10.jpg",identificador:"10",nombre:"Quimbolitos"},{ruta:"assets/antojitos/14.jpg",identificador:"14",nombre:"Carne en palito"},{ruta:"assets/antojitos/6.jpg",identificador:"06",nombre:"Caldo de bola"},{ruta:"assets/antojitos/2.jpg",identificador:"02",nombre:"Much\xedn con miel"},{ruta:"assets/antojitos/12.jpg",identificador:"12",nombre:"Higos con queso"},{ruta:"assets/antojitos/8.jpg",identificador:"08",nombre:"Patacones con queso"},{ruta:"assets/antojitos/15.jpg",identificador:"15",nombre:"Hayaca"},{ruta:"assets/antojitos/4.jpg",identificador:"04",nombre:"Pescado frito"},{ruta:"assets/antojitos/7.jpg",identificador:"07",nombre:"Llapingacho"},{ruta:"assets/antojitos/11.jpg",identificador:"11",nombre:"Coco helado"},{ruta:"assets/antojitos/5.jpg",identificador:"05",nombre:"Cuy"},{ruta:"assets/antojitos/3.jpg",identificador:"03",nombre:"Humitas"},{ruta:"assets/antojitos/9.jpg",identificador:"09",nombre:"Melcocha"},{ruta:"assets/antojitos/16.jpg",identificador:"16",nombre:"Empanadas de morocho"}].find(a=>parseInt(a.identificador)===parseInt(o))}obtenerAnimalesTabs(){this.animalesTabs=[],localStorage.setItem("animalesTabs",JSON.stringify(this.animalesTabs))}getReservaId(){return JSON.parse(localStorage.getItem("reservaId"))&&""!=JSON.parse(localStorage.getItem("reservaId"))?JSON.parse(localStorage.getItem("reservaId")):0}setReservaId(o){localStorage.setItem("reservaId",JSON.stringify(o))}reservarBoletos(o,a,s,e){let n=new t.g;n=n.append("Content-Type","application/json");let r="/reservas";r=this.mySource+r+"/reservarBoletos";let i,l=this.getAuthData(),c={lotteryToken:l.lotteryToken,user:l.user,reservaId:e};switch(s){case 1:i=[{combinacion:a.ticket.combinacion,fracciones:a.fracciones,sorteo:a.sorteo}],c.loteria=i;break;case 2:i=[{combinacion:a.ticket.combinacion1,sorteo:a.sorteo}],c.lotto=i;break;case 5:i=[{combinacion:a.ticket.combinacion1,sorteo:a.sorteo}],c.pozo=i;break;case 14:i=[{combinacion:a.ticket.combinacion1,combinacion2:a.ticket.combinacion2,fracciones:a.fracciones,sorteo:a.sorteo}],c.millonaria=i}return new Promise((o,a)=>{this.http.post(r,c,{headers:n}).subscribe(a=>{o(a)},o=>{a(new Error(o.error.message))})})}eliminarBoletosDeReserva(o,a,s,e,n,r){let i=new t.g;i=i.append("Content-Type","application/json");let l="/reservas";l=this.mySource+l+"/eliminarBoletosDeReserva";let c,m=this.getAuthData(),u={lotteryToken:m.lotteryToken,user:m.user,reservaId:r};switch(n){case 1:c=[{combinacion:a.combinacion,fracciones:e,sorteo:s}],u.loteria=c;break;case 2:c=[{combinacion:a.combinacion1,sorteo:s}],u.lotto=c;break;case 5:c=[{combinacion:a.combinacion1,sorteo:s}],u.pozo=c;break;case 14:c=[{combinacion:a.combinacion1,combinacion2:a.combinacion2,fracciones:e,sorteo:s}],u.millonaria=c}return new Promise((o,a)=>{this.http.post(l,u,{headers:i}).subscribe(a=>{o(a)},o=>{a(new Error(o.error.message))})})}eliminarTodosLosBoletosDeReserva(o,a,s,e,n,r){let i=new t.g;i=i.append("Content-Type","application/json");let l="/reservas";l=this.mySource+l+"/eliminarBoletosDeReserva";let c=this.getAuthData(),m={lotteryToken:c.lotteryToken,user:c.user,reservaId:r},u=[],p=[],d=[],g=[];return a.forEach(o=>{u.push({combinacion:o.ticket.combinacion,fracciones:o.ticket.seleccionados,sorteo:o.sorteo}),m.loteria=u}),s.forEach(o=>{p.push({combinacion:o.ticket.combinacion1,sorteo:o.sorteo}),m.lotto=p}),e.forEach(o=>{d.push({combinacion:o.ticket.combinacion1,sorteo:o.sorteo}),m.pozo=d}),n.forEach(o=>{g.push({combinacion:o.ticket.combinacion1,sorteo:o.sorteo}),m.millonaria=g}),new Promise((o,a)=>{this.http.post(l,m,{headers:i}).subscribe(a=>{o(a)},o=>{a(new Error(o.error.message))})})}}return o.ngInjectableDef=e.Qb({factory:function(){return new o(e.Rb(t.c))},token:o,providedIn:"root"}),o})()},"npC/":function(o,a,s){"use strict";var t=s("8Y7J"),e=s("668k");s.d(a,"b",(function(){return n})),s.d(a,"c",(function(){return r})),s.d(a,"a",(function(){return l}));var n=t.pb({encapsulation:0,styles:[[".loadBox[_ngcontent-%COMP%]{position:fixed;z-index:100000;left:50%;top:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;background-color:rgba(255,255,255,.8)}.loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;height:400px;display:flex;flex-direction:column;align-items:center;justify-content:center}.loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .loadIcon[_ngcontent-%COMP%], .loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .loadLogo[_ngcontent-%COMP%]{height:50%}.loadBox[_ngcontent-%COMP%]   .loadText[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#29352f;text-align:center;width:100%;white-space:nowrap;background-color:rgba(255,255,255,.5);padding:20px}.blackBox[_ngcontent-%COMP%]{position:fixed;z-index:8000;top:0;left:0;width:100%;height:100%;transition:height .2s ease-out;overflow:hidden;background-color:rgba(155,155,155,.5);border:none}@media screen and (max-width:1000px){.loadBox[_ngcontent-%COMP%]{width:75%}.loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:auto}.loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .loadIcon[_ngcontent-%COMP%]{width:50%;height:auto}.loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .loadLogo[_ngcontent-%COMP%]{width:100%;height:auto}.loadBox[_ngcontent-%COMP%]   .loadText[_ngcontent-%COMP%]{white-space:normal}}"]],data:{}});function r(o){return t.Mb(0,[(o()(),t.rb(0,0,null,null,0,"div",[["class","blackBox"]],null,null,null,null,null)),(o()(),t.rb(1,0,null,null,5,"div",[["class","loadBox"]],null,null,null,null,null)),(o()(),t.rb(2,0,null,null,2,"div",[],null,null,null,null,null)),(o()(),t.rb(3,0,null,null,0,"img",[["alt",""],["class","loadLogo"]],[[8,"src",4]],null,null,null,null)),(o()(),t.rb(4,0,null,null,0,"img",[["alt",""],["class","loadIcon"]],[[8,"src",4]],null,null,null,null)),(o()(),t.rb(5,0,null,null,1,"p",[["class","loadText"]],null,null,null,null,null)),(o()(),t.Kb(6,null,["",""]))],null,(function(o,a){var s=a.component;o(a,3,0,s.logoPath),o(a,4,0,s.loaderPath),o(a,6,0,s.message)}))}function i(o){return t.Mb(0,[(o()(),t.rb(0,0,null,null,1,"app-loader",[],null,null,null,r,n)),t.qb(1,114688,null,0,e.a,[],null,null)],(function(o,a){o(a,1,0)}),null)}var l=t.nb("app-loader",e.a,i,{message:"message",loader:"loader"},{},[])}}]);