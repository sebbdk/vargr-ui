import{u as e,m as h}from"./styled-components.browser.esm-LOVPg310.js";import{b as $,_ as l}from"./preact.module-0A_VdQ5M.js";import{P as x}from"./index-hnMjDxAq.js";import{Z as d}from"./index-jB53dnq0.js";import{I as s}from"./index-VbPnqsui.js";const r=e.img`
    //object-fit: scale-down;
    object-position: center;
    display: block;
    height: 100%;
    //width: 100%;
    min-width: 0;
    flex-shrink: 0;

    ${({isDualPage:o})=>o?`
        &:first-of-type {
            object-position: center right;
        }
        
        &:last-of-type {
            object-position: center left;
        }
    `:""};
`,c=e.div`
    display: flex;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
`,m=e.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #333;
    font-size: 0.75em;
`,p=e.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 2em;
`,g=e.div`
    background-color: #999;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1em;
    line-height: 1em;
    z-index: 0;
    text-align: center;
    box-sizing: border-box;

    &:after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.25rem;
        background-color: rgba(0,0,0, 0.2);
    }

    .hint {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 0.25rem;
        background-color: tomato;

        
    }
`,n=e.div`
    background-color: #999;
    color: #fff;
    position: absolute;
    bottom: 0%;
    right: 0;
    padding: 1rem;
    line-height: 2rem;
    width: 2rem;
    text-align: center;
    font-size: 1em;
    z-index: 1;

	border: none;
	cursor: pointer;
    user-select:none;

    box-shadow: 0rem 0rem 0.5rem 0.15rem rgba(0,0,0, 0.25);

    ${o=>{if(o.direction==="left")return`
                right: initial;
                left: 0;
            `}};
`;class f extends ${constructor(t){super(t),this.state={index:t.index||0,scrollPct:0},this.zoombox=l(),this.imageElms=[],this.imgGroupRef=l(),this.imageElms=this.props.images.map((i,a)=>h`<${r} isDualPage=${this.props.dualPage} src="${i}"></${r}>`)}handleKeyDown(t){(t.key==="ArrowRight"||t.key==="d")&&this.next(),(t.key==="ArrowLeft"||t.key==="a")&&this.prev()}componentDidUpdate(t){t.images!==this.props.images&&(this.imageElms=this.props.images.map((i,a)=>h`<${r} isDualPage=${this.props.dualPage} src="${i}"></${r}>`))}componentWillUnmount(){document.removeEventListener("keyup",this.handleKeyDown.bind(this))}goto(t){this.setState({index:t}),this.zoombox.current.reset()}next(){if(this.zoombox.current.reset(),this.state.index+1===this.props.images.length)return this.setState({index:0});this.setState({index:this.state.index+1})}prev(){if(this.zoombox.current.reset(),this.state.index-1===-1)return this.setState({index:this.props.images.length-1});this.setState({index:this.state.index-1})}onTransform(t,i){const a=(t.x-this.imgGroupRef.current.offsetWidth*.5)/i*-1,u=this.imgGroupRef.current.scrollWidth,b=a/u;this.setState({scrollPct:b})}render(){let t=this.state.scrollPct*this.props.images.length;return t>this.props.images.length&&(t=this.props.images.length),t<0&&(t=0),h`
            <${m}>
                <${p}>
                    <${d} ref=${this.zoombox} onTransform=${this.onTransform.bind(this)}>
                        <${c} ref=${this.imgGroupRef}>
                            ${this.imageElms}
                        </${c}>
                    </${d}>
                </${p}>
                <!--
                <${n} direction="left" onClick=${this.prev.bind(this)}><${s}>arrow_back_ios</${s}></${n}>
                <${n} direction="right" onClick=${this.next.bind(this)}><${s}>arrow_forward_ios</${s}></${n}>
                -->
                ${this.props.children}
                <${g}>
                    <div class="hint" style=${{width:this.state.scrollPct*100+"%"}}></div>
                    ${Math.ceil(t)} / ${this.props.images.length}
                </${g}>
            </${m}>
        `}}f.propTypes={dualPage:x.bool};f.defaultProps={images:[],dualPage:!1};export{f as G};
