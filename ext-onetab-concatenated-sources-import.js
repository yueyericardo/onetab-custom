var d=false;var G1='1.35';var Hj='https://www.one-tab.com';var Xj=false;var vj=false;var zK="onmousemove";var T="onmousedown";var LX="onmouseover";var rX="onmouseup";var zX="onmouseout";var jK="onclick";var BK="ondblclick";var sX="onmouseleave";var yX="mousemove";var o1="mousedown";var UK="mouseover";var nX="mouseup";var eX="mouseout";var Fj="click";var Vj="dblclick";var cX=false;var iX=100006;function mK(){return document.body};var u1='aaa';var SK='NEW_TRANSACTION';MVS=false;GVS=true;var H1=function(){window['_gaq']=window['_gaq']||[];window['_gaq'].push(['_setAccount','UA-38573374-2']);window['_gaq'].push(['_trackPageview']);var OE=document.createElement('script');OE['type']='text/javascript';OE['async']=true;OE['src']='https://ssl.google-analytics.com/ga.js';var qE=document.getElementsByTagName('script')[0];qE.parentNode.insertBefore(OE,qE)};H1();function SX(kE,dE,hE){if(!dE)dE={};var sE={};sE.type=kE;sE.lW=l1.Zn(dE);window['chrome']['runtime']['sendMessage'](undefined,sE,undefined,function(C6){var j6={};if(C6&&C6.lW){j6=l1.parse(C6.lW)}else {}if(hE)hE(j6)})};function lj(GE,ME){window['chrome']['runtime']['onMessage']['addListener'](function(y6,a6,L6){if(GE==y6.HW){var U6={};if(y6&&y6.lW)U6=l1.parse(y6.lW);ME(U6);L6()}})};function Cj(WE){document.addEventListener('DOMContentLoaded',function(){WE()})};function Z1(_E){var JE=document.createElement('div');JE.style.paddingTop='40px';JE.style.paddingBottom='24px';CX(JE,'268px');JE.style.fontSize='18px';JE.style.color='#777';JE.style.fontWeight='300';JE.style.borderBottom='1px dashed #ddd';JE.style.marginBottom='10px';JE.appendChild(document.createTextNode(_E));return JE};function k1(){var Bi=document.createElement('img');Bi.style.height=114/2+'px';Bi.style.width=414/2+'px';Bi.style.position='absolute';Bi.style.top='16px';C1(Bi,'22px');Bi.src='images/top-left-logo'+(GK()?'':'-rtl')+'.png';return Bi};function MK(ei,Vi,$i){var ni=document.createElement('div');var Yi=document.createElement('div');CX(Yi,'30px');Yi.style.position='relative';Yi.style.color='#777';var li=document.createElement('img');li.src=ei?'images/twister-open.png':('images/twister-closed'+(GK()?'':'-rtl')+'.png');li.style.width=48/2+'px';li.style.height=50/2+'px';li.style.position='absolute';C1(li,'0px');li.style.top='0px';Yi.appendChild(document.createTextNode(Vi));Yi.style.fontSize='16px';Yi.style.cursor='pointer';ni.appendChild(Yi);Yi.appendChild(li);var Di=document.createElement('div');CX(Di,'30px');Di.style.paddingTop='10px';Di.appendChild($i);Di.style.display=ei?'block':'none';ni.appendChild(Di);Yi.onclick=function(){ei=!ei;li.src=ei?'images/twister-open.png':('images/twister-closed'+(GK()?'':'-rtl')+'.png');Di.style.display=ei?'block':'none'};return ni};function qK(Zi,Hi,Ri,Ti){var fi=document.createElement('div');fi.style.fontSize=Hi+'px';fi.className='clickable';var ri=document.createElement('span');if(Ti){var Qi=document.createElement('span');Qi.style.color='#f00';Qi.appendChild(document.createTextNode(aK('newExclamation')+' '));ri.appendChild(Qi)}if(typeof Zi=='string'){ri.appendChild(document.createTextNode(Zi))}else {ri.appendChild(Zi)}ri.style.verticalAlign='middle';ri.onclick=function(){Ri(ri)};fi.appendChild(ri);return fi};var l1={Zn:function(pi){var Ki,Ii,mi,xi='',Fi;switch(typeof pi){case 'object':;if(pi){if(pi instanceof Array){for(Ii=0;Ii<pi.length;++Ii){Fi=this.Zn(pi[Ii]);if(xi){xi+=','}xi+=Fi}return '['+xi+']'}else if(typeof pi.toString!='undefined'){for(Ii in pi){Fi=pi[Ii];if(typeof Fi!='undefined'&&typeof Fi!='function'){Fi=this.Zn(Fi);if(xi){xi+=','}xi+=this.Zn(Ii)+':'+Fi}}return '{'+xi+'}'}}return 'null';case 'number':;return isFinite(pi)?String(pi):'null';case 'string':;mi=pi.length;xi='\"';for(Ii=0;Ii<mi;Ii+=1){Ki=pi.charAt(Ii);if(Ki>=' '){if(Ki=='\\'||Ki=='\"'){xi+='\\'}xi+=Ki}else {switch(Ki){case '\b':;xi+='\\b';break;case '\f':;xi+='\\f';break;case '\n':;xi+='\\n';break;case '\r':;xi+='\\r';break;case '\t':;xi+='\\t';break;default:; Ki=Ki.charCodeAt();xi+='\\u00'+Math.floor(Ki/16).toString(16)+(Ki%16).toString(16)}}}return xi+'\"';case 'boolean':;return String(pi);default:; return 'null'}},parse:function(Si){var Li=0;var oi=' ';function Pi(o6){throw {name:'JSONError',message:o6,mW:Li-1,text:Si}};function Ci(){oi=Si.charAt(Li);Li+=1;return oi};function Ui(){while(oi!==''&&oi<=' '){Ci()}};function ji(){var P6,z6='',u6,S6;if(oi=='\"'){d:while(Ci()){if(oi=='\"'){Ci();return z6}else if(oi=='\\'){switch(Ci()){case 'b':;z6+='\b';break;case 'f':;z6+='\f';break;case 'n':;z6+='\n';break;case 'r':;z6+='\r';break;case 't':;z6+='\t';break;case 'u':;S6=0;for(P6=0;P6<4;P6+=1){u6=parseInt(Ci(),16);if(!isFinite(u6)){break d}S6=S6*16+u6}z6+=String.fromCharCode(S6);break;default:; z6+=oi}}else {z6+=oi}}}Pi("Bad string")};function yi(){var c6=[];if(oi=='['){Ci();Ui();if(oi==']'){Ci();return c6}while(oi){c6.push(ai());Ui();if(oi==']'){Ci();return c6}else if(oi!=','){break}Ci();Ui()}}Pi("Bad array")};function zi(){var g6,w6={};if(oi=='{'){Ci();Ui();if(oi=='}'){Ci();return w6}while(oi){g6=ji();Ui();if(oi!=':'){break}Ci();w6[g6]=ai();Ui();if(oi=='}'){Ci();return w6}else if(oi!=','){break}Ci();Ui()}}Pi("Bad object")};function ui(){var v6='',N6;if(oi=='-'){v6='-';Ci()}while(oi>='0'&&oi<='9'){v6+=oi;Ci()}if(oi=='.'){v6+='.';while(Ci()&&oi>='0'&&oi<='9'){v6+=oi}}if(oi=='e'||oi=='E'){v6+='e';Ci();if(oi=='-'||oi=='+'){v6+=oi;Ci()}while(oi>='0'&&oi<='9'){v6+=oi;Ci()}}N6=+v6;if(!isFinite(N6)){Pi("Bad number")}else {return N6}};function ci(){switch(oi){case 't':;if(Ci()=='r'&&Ci()=='u'&&Ci()=='e'){Ci();return true}break;case 'f':;if(Ci()=='a'&&Ci()=='l'&&Ci()=='s'&&Ci()=='e'){Ci();return false}break;case 'n':;if(Ci()=='u'&&Ci()=='l'&&Ci()=='l'){Ci();return null}break}Pi("Syntax error")};function ai(){Ui();switch(oi){case '{':;return zi();case '[':;return yi();case '\"':;return ji();case '-':;return ui();default:; return oi>='0'&&oi<='9'?ui():ci()}};return ai()}};function YX(){this.Dn=null;this._W=null;this.JW=null;this.GW=null;this.WW=null;this.eW=null;this.CW=false;this.UW=new Array();this.qj=null;this.Qn=null};YX.gW=3;YX.prototype.EW=function(Ai,gi,qi,ii,vi,wi,Ei,Xi,Ni){var bi=this;Ai.onmousedown=function(i6){var E6=false;LK(i6,Ai,null,function(jN,aN,yN,CN){if(Ni){E6=Ni()}},function(zN,cN,UN,oN,uN,LN,PN,SN){if(!bi.CW&&!E6){if((Math.abs(UN)>YX.gW)||(Math.abs(oN)>YX.gW)){bi.CW=true;bi.UW=new Array();bi.Dn=gi;bi.JW=qi.offsetWidth;bi.GW=qi.offsetHeight;bi.qj=qi.parentNode;bi.Qn=qi.nextSibling;qi.parentNode.removeChild(qi);bi._W=qi;bi.WW=ii;bi.eW=document.createElement('div');bi.eW.style.zIndex=iX;bi.eW.style.position='absolute';bi.eW.style.width=bi.JW+'px';bi.eW.style.height=bi.GW+'px';bi.eW.appendChild(bi._W);mK().appendChild(bi.eW);vi()}}if(bi.CW){bi.eW.style.left=PN+7+'px';bi.eW.style.top=SN-16+'px'}},function(vN,XN,NN,wN,iN,gN){if(!bi.CW){wi()}else {bi.CW=false;mK().removeChild(bi.eW);if(bi.bW){bi.bW(bi.Dn)}else {Ei()}for(var AN in bi.UW){var EN=bi.UW[AN];EN.style.display='none'}bi.UW=new Array();Xi()}})};};YX.prototype.$n=function(hi,ki,si,Oi){var di=this;aj(hi,function(A6){A6.event.cancelBubble=true;if(di.CW){if(hi!=di._W){si.style.display='block';si.style.width=di.JW-(Xj?0:2)+'px';si.style.height=di.GW-(Xj?0:2)+'px';si.style.border='1px dashed #'+u1;di.bW=Oi;for(var b6 in di.UW){var X6=di.UW[b6];if(kK(X6.parentNode,si)&&si!=X6)X6.style.display='none'}if(!HK(di.UW,si))di.UW.push(si)}}});I1(hi,function(q6){q6.event.cancelBubble=true;if(di.CW){if(hi!=di._W){si.style.display='none';di.bW=null;hK(si,di.UW)}}})};YX.prototype.aW=function(Gi){var Mi=document.createElement('div');Gi.appendChild(Mi);return Mi};function xK(Wi){if(Wi.indexOf('://')==-1)Wi='http://'+Wi;Wi=Wi.substring(Wi.indexOf('://')+'://'.length);if(Wi.indexOf('/')!=-1)Wi=Wi.substring(0,Wi.indexOf('/'));return Wi.toLowerCase()};function Q1(_i){if(_i.indexOf('://')==-1)return 'https://';_i=_i.substring(0,_i.indexOf('://')+'://'.length);return _i.toLowerCase()};function HK(Ji,n4){for(var B4 in Ji)if(Ji[B4]==n4)return true;return false};function _K(e4){if(typeof e4=='string')e4=document.getElementById(e4);if(!e4)return; while(e4.childNodes.length>0)e4.removeChild(e4.childNodes[0])};function zj(D4){var l4=document.createElement('div');l4.style.fontSize='1px';l4.style.height=D4+'px';l4.style.width=1+'px';return l4};function hK(V4,Y4){for(var Q4=0;Q4<Y4.length;Q4++){if(Y4[Q4]==V4){Y4.splice(Q4,1);Q4--}}};function Lj(f4){var T4=f4?f4:window.event;var R4=0;var r4=0;var H4=0;var Z4=0;if(T4!=null){if(Xj){H4=T4.shiftKey;r4=T4.altKey;R4=T4.ctrlKey}else {H4=T4.shiftKey;R4=T4.ctrlKey;r4=T4.altKey;Z4=T4.metaKey}}return (R4||Z4||H4)};function Y1(m4){var p4=m4?m4:window.event;var I4=0;var K4=0;var x4=0;var F4=0;if(p4!=null){if(Xj){x4=p4.shiftKey;K4=p4.altKey;I4=p4.ctrlKey}else {x4=p4.shiftKey;I4=p4.ctrlKey;K4=p4.altKey;F4=p4.metaKey}}return (I4||F4)};function g(U4){var a4=U4?U4:window.event;var L4=0;var C4=0;var j4=0;var y4=0;if(a4!=null){if(Xj){j4=a4.shiftKey;C4=a4.altKey;L4=a4.ctrlKey}else {j4=a4.shiftKey;L4=a4.ctrlKey;C4=a4.altKey;y4=a4.metaKey}}return (j4)};function lK(o4){o4['noCacheRandom']=EX()};function EX(){return new Date().getTime()+Math.round(Math.random()*10000)+''};function O1(P4,S4,u4){lK(S4);var z4=l1.Zn(S4);W1(P4,z4,function(O6){if(u4)u4(l1.parse((O6)))})};function W1(N4,w4,g4){var c4=c1();c4.open(w4==null?"GET":"POST",N4,true);c4.setRequestHeader("Content-Type","text/json");c4.onreadystatechange=function(){var s6=false;s6=(c4.readyState==4);if(s6){var d6=c4.responseText;g4(d6)}};c4.send(w4)};function c1(){var v4=new XMLHttpRequest();return v4};function fX(){return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(k6){var h6=Math.random()*16|0,M6=k6=='x'?h6:(h6&0x3|0x8);return M6.toString(16)})};var Yj='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('');function y1(E4,i4){var b4=Yj,A4=[],X4=0;i4=i4||b4.length;E4=E4||22;for(X4=0;X4<E4;X4++)A4[X4]=b4[0|Math.random()*i4];return A4.join('')};function wj(){return y1()};function I(q4){if(!q4==null||q4==undefined)return '';return q4.replace(/^\s+/,'').replace(/\s+$/,'')};function DX(O4){var h4=document.createElement('span');var s4=O4.indexOf('OneTab');var d4=s4+'OneTab'.length;if(s4==0){h4.appendChild(P());h4.appendChild(document.createTextNode(O4.substring(d4)))}else {h4.appendChild(document.createTextNode(O4.substring(0,s4)));h4.appendChild(P());if(d4!=O4.length)h4.appendChild(document.createTextNode(O4.substring(d4)))}return h4};function P(){var k4=document.createElement('span');var M4=document.createElement('span');M4.style.fontStyle='italic';M4.appendChild(document.createTextNode('One'));k4.appendChild(M4);k4.appendChild(document.createTextNode('Tab'));return k4};function h(W4){var G4=W4.split('OneTab');var J4=document.createElement('span');for(var _4 in G4){if(G4[_4]=='')J4.appendChild(P());else J4.appendChild(document.createTextNode(G4[_4]))}return J4};function Dj(BD){var lD=new Date(BD.valueOf()),nD=(BD.getUTCDay()+6)%7,eD;lD.setUTCDate(lD.getUTCDate()-nD+3);eD=lD.valueOf();lD.setUTCMonth(0,1);if(lD.getUTCDay()!==4){lD.setUTCMonth(0,1+((4-lD.getUTCDay())+7)%7)}return Math.ceil((eD-lD)/(7*24*3600*1000))+1};function uj(DD,VD){while(DD.length<VD)DD='0'+DD;return DD};function P1($D){return ($D.getUTCFullYear()+'').substr(2)+uj(Dj($D)+'',2)};function Qj(YD){if(YD==0)return aK('total0Tabs');if(YD==1)return aK('total1Tab');return aK('total2Tabs').replace('2',YD+'')};function AX(QD){var rD=(QD==1?aK('1tab'):(aK('2tabs').replace('2',QD+'')));return rD};function Bj(HD,RD){var ZD='';for(var TD=0;TD<RD;TD++)ZD+=HD;return ZD};function $K(fD){fD.sort(function(G6,W6){if(G6['starred']||W6['starred']){if(!W6['starred'])return -1;else if(!G6['starred'])return 1;else {if(G6['starredDate']>W6['starredDate'])return 1;if(G6['starredDate']<W6['starredDate'])return -1;return 0}}else {if(G6['createDate']>W6['createDate'])return -1;if(G6['createDate']<W6['createDate'])return 1;return 0}})};function e1(KD){if(!KD)KD='';return KD.replace(/[\x00-\x1F\x7F-\x9F]/g,"")};var f1,JX,XK,dX,xX;var v1,S1;var Ij,pj;var V1=!!('ontouchstart' in window);function LK(ID,CD,xD,FD,mD,pD){f1=CD;JX=xD;XK=FD;dX=mD;xX=pD;Ij=0;pj=0;if(V1&&(ID instanceof TouchEvent)){if(ID.touches.length>1){return }v1=ID.touches.item(0).pageX;S1=ID.touches.item(0).pageY;document.addEventListener("touchmove",GX,false);document.addEventListener("touchend",V,false);ID.preventDefault()}else {if(Xj||vj){v1=window.event.clientX+(vj?0:document.documentElement.scrollLeft)+document.body.scrollLeft;S1=window.event.clientY+(vj?0:document.documentElement.scrollTop)+document.body.scrollTop}else {v1=ID.clientX+window.scrollX;S1=ID.clientY+window.scrollY}if(Xj){document.attachEvent(zK,GX);document.attachEvent(rX,V);window.event.cancelBubble=true;window.event.returnValue=false}else {document.addEventListener(yX,GX,false);document.addEventListener(nX,V,false);ID.preventDefault()}}XK(f1,JX,v1,S1)};function GX(oD){var aD,UD,jD,yD;if(V1&&(oD instanceof TouchEvent)){if(oD.touches.length>1){jD=0;yD=0;dX(f1,JX,jD,yD,v1,S1,aD,UD);return V(oD)}aD=oD.touches.item(0).pageX;UD=oD.touches.item(0).pageY}else {if(Xj||vj){aD=window.event.clientX+(vj?0:document.documentElement.scrollLeft)+document.body.scrollLeft;UD=window.event.clientY+(vj?0:document.documentElement.scrollTop)+document.body.scrollTop}else {aD=oD.clientX+window.scrollX;UD=oD.clientY+window.scrollY}}jD=aD-v1;yD=UD-S1;var LD=false;if(Ij!=jD||pj!=yD)LD=true;Ij=jD;pj=yD;if(LD){dX(f1,JX,jD,yD,v1,S1,aD,UD)}if(Xj){window.event.cancelBubble=true;window.event.returnValue=false}else {oD.preventDefault()}};function V(zD){if(V1&&(zD instanceof TouchEvent)){document.removeEventListener("touchmove",GX,false);document.removeEventListener("touchend",V,false)}else {if(Xj){document.detachEvent(zK,GX);document.detachEvent(rX,V)}else {document.removeEventListener(yX,GX,false);document.removeEventListener(nX,V,false)}}xX(f1,JX,Ij,pj,v1,S1)};function F1(uD,cD,PD,SD){this.SW=uD;this.type=cD;this.sj=PD;this.Vn=SD};F1.prototype.remove=function(){if(Xj){this.SW.detachEvent(this.type,this.sj)}else {this.SW.removeEventListener(this.type,this.sj,this.Vn)}};function d1(wD,gD){wD.onmousemove=function(_6){gD(new z1(wD,_6))};};function wX(vD,ND){vD.onmousedown=function(J6){ND(new z1(vD,J6))};};function w1(ED,iD){ED.onmouseover=function(Be){iD(new z1(ED,Be))};};function K(XD,AD){XD.onmouseup=function(ne){AD(new z1(XD,ne))};};function S(qD,bD){qD.onmouseout=function(ee){bD(new z1(qD,ee))};};function WK(sD,OD){sD.onclick=function(le){OD(new z1(sD,le))};};function _X(hD,dD){hD.ondblclick=function(De){dD(new z1(hD,De))};};function NK(MD,kD){C(MD,Fj,jK,kD)};function PK(Mu,GD){C(Mu,Vj,BK,GD)};function aj(Wu,Gu){return C(Wu,UK,LX,Gu)};function H(Ju,_u){return C(Ju,nX,rX,_u)};function I1(e_,n_){var B_;if(Xj){B_=function(Ve){n_(new z1(e_,Ve))};e_.attachEvent(sX,B_);return new F1(e_,sX,B_,false)}else {B_=function(Qe){var $e,Ye;$e=Qe.currentTarget;Ye=Qe.relatedTarget;if($e==e_&&$e!=Ye&&!kK($e,Ye)){n_(new z1(e_,Qe))}};e_.addEventListener(eX,B_,false);return new F1(e_,eX,B_,false)}};function aX(D_,l_){if(Xj){D_.onmouseleave=function(re){l_(new z1(D_,re))};}else {D_.onmouseout=function(Te){var He,Ze;He=Te.currentTarget;Ze=Te.relatedTarget;if(He==D_&&He!=Ze&&!kK(He,Ze)){l_(new z1(D_,Te))}};}};function HX(V_,Y_){if(Xj){for(var $_ in V_){var Q_=V_[$_];Q_.onmouseleave=hX(Q_,V_,Y_)}}else {for(var $_ in V_){var Q_=V_[$_];Q_.onmouseout=ZX(Q_,V_,Y_)}}};function ZX(Z_,r_,H_){return function(xe){var Re,fe;Re=xe.currentTarget;fe=xe.relatedTarget;if(Re==Z_&&Re!=fe&&!kK(Re,fe)){for(var Ke in r_)if(fe==r_[Ke])return; H_(new z1(Z_,xe))}};};function hX(f_,T_,R_){return function(){for(var Fe in T_)if(window.event.toElement==T_[Fe])return; R_(new z1(f_,window.event))};};function kK(K_,F_){try{if(!F_)return false;while(F_.parentNode)if((F_=F_.parentNode)==K_)return true;return false}catch(x_){return false}};function z1(I_,p_){this.nW=I_;this.event=p_;this.en=null;this.OW=null;this.RW=function(){if(this.en==null){var pe=JK(I_,p_);this.en=pe.x;this.OW=pe.y}return this.en};this.KW=function(){if(this.en==null){this.RW()}return this.OW};};function C(a_,m_,j_,y_){var C_=function(me){var Ie=new z1(a_,me);y_(Ie)};if(Xj){a_.attachEvent(j_,C_);return new F1(a_,j_,C_,false)}else {a_.addEventListener(m_,C_,false);return new F1(a_,m_,C_,false)}};function TX(u_,L_,o_,U_,z_){wX(u_,function(Ce){LK(Ce.event,u_,L_,o_,U_,z_)})};function Tj(S_){return M1(S_)};function JK(c_,P_){if(Xj||JVS){return new WVS(window.event.offsetX,window.event.offsetY)}return M1(P_).dj(QX(c_))};function M1(N_){if(Xj||vj){var g_=window.event.clientX+(vj?0:document.documentElement.scrollLeft)+document.body.scrollLeft;var w_=window.event.clientY+(vj?0:document.documentElement.scrollTop)+document.body.scrollTop}else {var g_=N_.clientX+window.scrollX;var w_=N_.clientY+window.scrollY}return new WVS(g_,w_)};function QX(X_){var i_=X_;var E_=0;var A_=0;while(true){var v_=i_.offsetParent;if(v_==undefined)break;E_+=i_.offsetLeft;A_+=i_.offsetTop;i_=v_}return new WVS(E_,A_)};function U1(b_,O_,q_){if(!q_)if(!_VS())return; try{if(O_==100){b_.style.filter='';b_.style.VW='';b_.style.opacity=''}else {b_.style.filter='alpha(opacity='+O_+')';b_.style.VW=O_/100;b_.style.opacity=O_/100}}catch(s_){}};function vX(){if(Xj||vj)return (vj?0:document.documentElement.scrollTop)+document.body.scrollTop;else return window.scrollY};function A(){if(Xj||vj)return (vj?0:document.documentElement.scrollLeft)+document.body.scrollLeft;else return window.scrollX};var uX={};function FK(d_){$X(function(je){uX=je;d_()})};function aK(h_){return uX[h_]};function QK(){i1();FK(function(){j1()})};var qX=navigator['language']||navigator['userLanguage'];function oj(){var k_=['ar','he','fa','ps','ur'];var M_=qX.split('-',1)[0];return (k_.indexOf(M_)>=0)?'rtl':'ltr'};var DK=oj();function GK(){return DK!='rtl'};function i1(){document.getElementsByTagName('html')[0]['dir']=DK};function C1(W_,G_){if(GK())W_.style.left=G_;else W_.style.right=G_};function xj(J_,__){if(GK())J_.style.right=__;else J_.style.left=__};function CX(np,Bp){if(GK())np.style.paddingLeft=Bp;else np.style.paddingRight=Bp};function oK(lp,ep){if(GK())lp.style.paddingRight=ep;else lp.style.paddingLeft=ep};function WX(Vp,Dp){if(GK())Vp.style.marginLeft=Dp;else Vp.style.marginRight=Dp};var OK=[{fontFamily:'Open Sans',fontStyle:'normal',fontWeight:'300'},{fontFamily:'Open Sans',fontStyle:'normal',fontWeight:'400'},{fontFamily:'Open Sans',fontStyle:'italic',fontWeight:'400'},{fontFamily:'Open Sans',fontStyle:'normal',fontWeight:'600'},{fontFamily:'Open Sans',fontStyle:'normal',fontWeight:'700'}];function R1(Hp,Zp){var $p=250;var Qp=0;var Tp=50;var Kp=false;var Yp=0;var rp=false;setTimeout(function(){rp=true},$p);for(var Rp=0,fp=Hp.length;Rp<fp;++Rp){(function(oe){var ye=document.createElement('span');ye.innerHTML='giItT1WQy@!-/#';ye.style.position='absolute';C1(ye,'-10000px');ye.style.top='-10000px';ye.style.fontSize='300px';ye.style.fontFamily='sans-serif';ye.style.fontVariant='normal';ye.style.fontStyle=oe.fontStyle;ye.style.fontWeight=oe.fontWeight;ye.style.letterSpacing='0';document.body.appendChild(ye);var ae=ye.offsetWidth;ye.style.fontFamily=oe.fontFamily;var Le;function Ue(){if(ye&&ye.offsetWidth!=ae){++Yp;ye.parentNode.removeChild(ye);ye=null}if((Yp>=Hp.length)||rp){if(Le){clearInterval(Le)}if((Yp==Hp.length)||rp){if(!Kp){Kp=true;Zp()}return true}}};if(!Ue()){Le=setInterval(Ue,Tp)}})(Hp[Rp])}};function n1(xp){SX('getState',{},function(ze){if(xp)xp(ze)})};function VK(pp,Fp){SX('storeState',{oW:pp},function(ue){if(Fp)Fp(ue)})};function A1(mp,Ip){SX('getSetting',{TW:mp},function(Se){if(Ip)Ip(Se.value)})};function rK(Cp){SX('getSettings',{},function(Pe){if(Cp)Cp(Pe)})};function J(jp,yp){SX('storeSettings',{Oj:jp},function(ce){if(yp)yp(ce)})};function oX(Lp,Up,ap){SX('restoreTabsMeta',{MW:Lp,AW:Up},function(ge){if(ap)ap(ge)})};function vK(op){SX('upgradeAvailable',{},function(we){if(op)op(we.value)})};function $X(zp){SX('getAllMessages',{},function(Ne){if(zp)zp(Ne)})};Cj(function(){QK()});function j1(){n1(function(ve){EK(ve)})};function EK(Pp){var Sp=document.getElementById('contentAreaDiv');_K(Sp);Sp.style.paddingTop='0px';Sp.style.paddingLeft='0px';Sp.appendChild(k1());Sp.appendChild(Z1(aK('import')+' / '+aK('export')));var up=document.createElement('div');Sp.appendChild(up);up.style.paddingTop='14px';CX(up,'36px');up.appendChild(MK(false,aK('importUrls'),function(){var ie=document.createElement('div');var Ae=document.createElement('div');Ae.appendChild(document.createTextNode(aK('pasteInUrlsInstructions')));Ae.style.color='#777';Ae.style.paddingBottom='10px';ie.appendChild(Ae);var be=document.createElement('textArea');be.style.width='800px';be.style.height='200px';ie.appendChild(be);if(!Pp['tabGroups'])Pp['tabGroups']=[];var Ee=Pp['tabGroups'];var Xe=qK(aK('import'),16,function(){SX('importTabsFromText',{text:be.value},function(){setTimeout(function(){window['close']()},100)})});ie.appendChild(Xe);ie.style.paddingBottom='30px';return ie}()));up.appendChild(zj(16));up.appendChild(MK(true,aK('exportUrls'),function(){var qe=document.createElement('div');var de=document.createElement('div');de.appendChild(document.createTextNode(aK('exportThenImportNote')));de.style.color='#777';de.style.paddingBottom='10px';qe.appendChild(de);var We=document.createElement('textArea');We.style.width='800px';We.style.height='500px';var Oe=Pp['tabGroups'];if(!Oe)Oe=[];$K(Oe);for(var Ge=0;Ge<Oe.length;Ge++){var he=Oe[Ge];for(var Me in he['tabsMeta']){var ke=he['tabsMeta'][Me];var se=ke['url'];if(xK(se)!=ke['title'])se=se+' | '+e1(ke['title']);We.value=We.value+se+'\n'}if(Ge!=Oe.length-1)We.value=We.value+'\n'}qe.appendChild(We);qe.style.paddingBottom='30px';return qe}()));Sp.appendChild(function(){var _e=document.createElement('div');_e.style.paddingTop='30px';return _e}())}