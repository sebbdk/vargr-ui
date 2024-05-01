import{u as h,m as l}from"./styled-components.browser.esm-LOVPg310.js";import{h as n}from"./compat.module-qtfPsa-n.js";const b=h.div`
	align-items: center;
    background-color: #000;
    color: blue;
    display: flex;
    font-size: 4rem;
    justify-content: center;
	height: 100vh;

	&:active, &:focus {
		outline: none;
		border: none;
	}
`,w=h.div`
	background-color: #15bb13;
	border-radius: .5rem;
	color: #fff;
	cursor: pointer;
	padding: 2rem;
`;function g(o){return o[Math.floor(Math.random()*o.length)]}function B({}){const[o,d]=n("green"),[a,f]=n("blue"),[e,c]=n(0),[i,u]=n(-2),[m,p]=n(0),s=50,$={blue:"#0095ff",red:"red",yellow:"yellow",green:"#3bca3b",white:"#fff"},k=r=>{if(i<0||!["r","g","b","y"].includes(r.key))return;m==0&&p(window.performance.now());const y=["red","green","blue","yellow"];if(r.key=="r"&&o!="red"&&c(e+1),r.key=="g"&&o!="green"&&c(e+1),r.key=="b"&&o!="blue"&&c(e+1),r.key=="y"&&o!="yellow"&&c(e+1),u(i-1),f(g(y.filter(t=>t!==a))),d(g(y.filter(t=>t!==o))),i-1==-1){console.log(e);const t=Math.floor(s/(s+e)*100),M=window.performance.now()-m,S=Math.round(M/s),x=l`
				<div>
					<div>Done: ${t}% accuracy</div>
					<div>Average reaction time: ${S}ms</div>
				</div<>
			`;f(x),d("white");return}};function v(){u(s)}const C=l`<${w} onClick=${v}>Click to begin</${w}>`,T=i==-2?C:a;return l`
		<${b}
			tabIndex="0"
			onKeyDown=${k}
			style="color: ${$[o]};">
			${T}
		</${b}>
	`}export{B as S};
