import{u,m as l}from"./styled-components.browser.esm-LOVPg310.js";import{h as c}from"./compat.module-qtfPsa-n.js";import{G as M}from"./index-g-2SN6mO.js";const w=u.div`
	align-items: center;
    background-color: #000;
    color: blue;
    display: flex;
    font-size: 4rem;
    justify-content: center;
	height: 100vh;
	font-size: 128px;

	&:active, &:focus {
		outline: none;
		border: none;
	}
`,$=u.div`
	background-color: #15bb13;
	border-radius: .5rem;
	color: #fff;
	cursor: pointer;
	padding: 4rem;
`,h=u.span`
	text-transform:capitalize;
`;function k(o){return o[Math.floor(Math.random()*o.length)]}function K({}){const[o,a]=c("green"),[m,f]=c("green"),[r,t]=c(0),[n,d]=c(-2),[y,g]=c(0),s=50,C={blue:"#0095ff",red:"red",yellow:"yellow",green:"#3bca3b",white:"#fff"};function v(){a("green"),f("green"),t(0),d(-2),g(0)}function b(){d(s)}const x=e=>{if(e.key==" "){if(e.preventDefault(),n==-2){b();return}v();return}if(n<0||!["r","g","b","y"," "].includes(e.key))return;y==0&&g(window.performance.now());const p=["red","green","blue","yellow"];if(e.key=="r"&&o!="red"&&t(r+1),e.key=="g"&&o!="green"&&t(r+1),e.key=="b"&&o!="blue"&&t(r+1),e.key=="y"&&o!="yellow"&&t(r+1),d(n-1),f(k(p.filter(i=>i!==m))),a(k(p.filter(i=>i!==o))),n-1==-1){const i=Math.floor(s/(s+r)*100),z=window.performance.now()-y,D=Math.round(z/s),G=l`
				<div style="font-size: 32px;">
					<div>Done: ${i}% accuracy</div>
					<div>Average reaction time: ${D}ms</div>
				</div<>
			`;f(G),a("white");return}},T=l`<${$} onClick=${b}>Click to begin</${$}>`,S=n==-2?T:l`<${h}>${m}</${h}>`;return l`
		<${M} />

		<${w}
			tabIndex="0"
			onKeyDown=${x}
			style="color: ${C[o]};">
			${S}
		</${w}>
	`}export{K as S};
