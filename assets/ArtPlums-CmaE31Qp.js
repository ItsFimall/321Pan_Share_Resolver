import{r as m,Z as R}from"./index-DbFejQx_.js";const q=()=>{const S=Math.PI,x=Math.PI/2,f=Math.PI/12,b="#88888825",w=m.useRef(null),[e]=m.useState({width:window.innerWidth,height:window.innerHeight}),[A,M]=m.useState(!1),v=30,I=6,p=()=>Math.random()*.6+.2,y=(i,n=400,r=400,c)=>{const t=i.getContext("2d"),o=window.devicePixelRatio||1,s=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,a=o/s;return i.style.width=`${n}px`,i.style.height=`${r}px`,i.width=a*n,i.height=a*r,t.scale(a,a),{ctx:t,dpi:a}},B=(i=0,n=0,r=0,c=0)=>{const t=r*Math.cos(c),o=r*Math.sin(c);return[i+t,n+o]};return m.useEffect(()=>{const i=w.current,{ctx:n}=y(i,e.width,e.height),{width:r,height:c}=i;let t=[],o=[];const s=(h,k,u,g={value:0})=>{const C=Math.random()*I;g.value+=1;const[d,l]=B(h,k,C,u);n.beginPath(),n.moveTo(h,k),n.lineTo(d,l),n.stroke();const E=u+Math.random()*f,j=u-Math.random()*f;if(d<-100||d>e.width+100||l<-100||l>e.height+100)return;const P=g.value<=v?.8:.5;Math.random()<P&&t.push(()=>s(d,l,E,g)),Math.random()<P&&t.push(()=>s(d,l,j,g))},a=()=>{if(o=t,t=[],!o.length){M(!0);return}o.forEach(h=>{Math.random()<.5?t.push(h):h()}),requestAnimationFrame(a)};(()=>{n.clearRect(0,0,r,c),n.lineWidth=1,n.strokeStyle=b,o=[],t=[()=>s(p()*e.width,-5,x),()=>s(p()*e.width,e.height+5,-x),()=>s(-5,p()*e.height,0),()=>s(e.width+5,p()*e.height,S)],e.width<500&&(t=t.slice(0,2)),M(!1),requestAnimationFrame(a)})()},[e]),R.jsx("div",{style:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",pointerEvents:"none",maskImage:"radial-gradient(circle, transparent, black)",WebkitMaskImage:"radial-gradient(circle, transparent, black)"},children:R.jsx("canvas",{ref:w,width:"400",height:"400"})})};export{q as default};
