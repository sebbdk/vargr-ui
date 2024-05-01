import{A as u}from"./app.settings-F8tE5Jn1.js";import{u as $,m as d}from"./styled-components.browser.esm-LOVPg310.js";import{B as a}from"./index-dEpx--bd.js";import{G as s}from"./index-FhKT-VhP.js";import{G as f}from"./index-wY5AaHYL.js";import{b as x,_ as i}from"./preact.module-0A_VdQ5M.js";import{O as n}from"./index-JBK8NEN7.js";import"./resizeme_hori-UWGMonJr.js";import"./compat.module-qtfPsa-n.js";import"./index-zxhsOKIp.js";import"./index-hnMjDxAq.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-jB53dnq0.js";import"./index-_zOAlo6o.js";import"./index-VbPnqsui.js";import"./index-z2x4bosm.js";import"./index-o7u4YWM9.js";import"./index-YL57stmL.js";const m=$.a`
    display: block;
    background-color: #999;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    cursor: pointer;
`;class y extends x{constructor(r){super(r),this.gallery=i(),this.overlay=i()}handleKeyDown(r){r.key==="Escape"&&this.overlay.current.hide()}componentDidMount(){document.addEventListener("keyup",this.handleKeyDown.bind(this))}componentWillUnmount(){document.removeEventListener("keyup",this.handleKeyDown.bind(this))}render(){const r={infoCard:this.props.infoCard,cards:this.props.cards,onPick:o=>{this.overlay.current.show(),this.gallery.current.goto(o)}},g=this.props.cards.map(o=>o.mediaSrc),h=()=>this.overlay.current.hide();return d`
            <${a}>
                <${f} ...${r} />
                <${n} ref=${this.overlay}>    
                <${s} ref=${this.gallery} images=${g}>
                    <${m} onClick=${h}>Close</${m}>
                </${s}>
                </${n}>
            </${a}>
        `}}const v=u.examples.DemoPages1,M={title:"Pages/Gallery",component:y,argTypes:{}},k=t=>d`<${y} ...${t} />`,e=k.bind({});e.args={cards:v.map(t=>({mediaSrc:t})),infoCard:{primaryText:"And they talked",tags:[{text:"New"},{text:"bad add"}],tertiaryText:"Hello world, i am content text",actions:[{text:"Favorite",onClick:()=>alert("go!")}]}};var l,p,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"args => html`<${GalleryPage} ...${args} />`",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const N=["Primary"];export{e as Primary,N as __namedExportsOrder,M as default};
