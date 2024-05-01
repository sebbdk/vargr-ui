import{b as o,_ as h}from"./preact.module-0A_VdQ5M.js";import{u as d,m as l}from"./styled-components.browser.esm-LOVPg310.js";const m=d.img.attrs(e=>({src:e.src}))`
    opacity: ${({loaded:e})=>e?1:0};
    transition: opacity 300ms;
    max-width: 100%;
    max-height: 100%;
`,c=document.createElement("canvas"),a=c.getContext("2d");function i(e,s,n){try{a.drawImage(e,0,0);let t=e.width,r=e.height;return t<n&&r<s?e.src:(t>r?t>n&&(r*=n/t,t=n):r>s&&(t*=s/r,r=s),c.width=t,c.height=r,a.drawImage(e,0,0,t,r),c.toDataURL("image/png"))}catch(t){return console.info(t),e.src}}class u extends o{constructor(s){super(s),this.state={src:"",loaded:!1},this.elmRef=h()}componentDidMount(){this.componentDidUpdate({src:""})}componentDidUpdate(s={}){s.src!==this.props.src&&this.scaleImage()}scaleImage(){const s=this.elmRef.current.parentElement.clientHeight*4,n=this.elmRef.current.parentElement.clientWidth*4;if(this.props.img){this.setState({loaded:!0,src:i(this.props.img,s,n)});return}const t=new Image;t.onload=()=>{this.setState({loaded:!0,src:i(t,s,n)})},t.src=this.props.src}render(){return l`<${m} ref=${this.elmRef} loaded=${this.state.loaded} src=${this.state.src} />`}}export{u as P};
