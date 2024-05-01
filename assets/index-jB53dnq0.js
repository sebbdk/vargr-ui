import{u as x,m as u}from"./styled-components.browser.esm-LOVPg310.js";import{b,_ as m}from"./preact.module-0A_VdQ5M.js";import{C as E}from"./index-_zOAlo6o.js";const f=x.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    
    &:after {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        box-shadow: inset 0 0rem 1rem 0.25rem rgba(0,0,0, 0.25);
    }
`,g=x.div`
    transform-origin: 0 0;
    display: flex;
    justify-content: center;
    user-select: none;
    width: 100%;
    height: 100%;
`;function p(d,t,e,r,h){const s={...d},n={x:0,y:0},a={x:0,y:0};return a.x=t.x-h.x,a.y=t.y-h.y,n.x=(a.x-s.x)/e,n.y=(a.y-s.y)/e,s.x=-n.x*r+a.x,s.y=-n.y*r+a.y,s}class L extends b{constructor(t){super(t),this.state={dragStart:{x:0,y:0},translate:{x:0,y:0},scale:1,startTranslate:{x:0,y:0},startTouches:[],isDragging:!1,debug:!1,messages:[[" "]]},this.elmRef=m(),this.transformRef=m()}reset(){this.setState({scale:1,translate:{x:0,y:0}})}handleDragStart(t={}){t.preventDefault&&t.preventDefault(),this.setState({isDragging:!0,dragStart:{x:t.clientX,y:t.clientY},startTranslate:{...this.state.translate}})}handleDrag(t={}){if(!this.state.isDragging)return;const e={x:t.clientX-this.state.dragStart.x,y:t.clientY-this.state.dragStart.y};this.setState({translate:{x:this.state.startTranslate.x+e.x,y:this.state.startTranslate.y+e.y}})}handleDragEnd(t={}){t.preventDefault&&t.preventDefault(),this.setState({isDragging:!1})}handleWheel(t){t.preventDefault();const e=this.state.translate,r=this.state.scale,h={x:t.pageX,y:t.pageY},s=this.elmRef.current.getBoundingClientRect(),n=10,a=.25,c=.25;let i=this.state.scale,o=t.delta||t.wheelDelta;o===void 0&&(o=t.detail),o=Math.max(-1,Math.min(1,o)),i+=o*c*i,i=Math.max(a,Math.min(n,i));const l=p(e,h,r,i,s);this.setState({scale:i,translate:l})}handleTouchStart(t){this.setState({startTouches:t.touches,startScale:this.state.scale}),this.handleDragStart({clientX:t.touches[0].clientX,clientY:t.touches[0].clientY})}handleTouchMove(t){if(t.preventDefault(),t.touches.length>1){const r={x:this.state.startTouches[0].clientX,y:this.state.startTouches[0].clientY},h={x:this.state.startTouches[1].clientX,y:this.state.startTouches[1].clientY},s={x:t.touches[0].clientX,y:t.touches[0].clientY},n={x:t.touches[1].clientX,y:t.touches[1].clientY},a=Math.hypot(h.x-r.x,h.y-r.y),c=Math.hypot(n.x-s.x,n.y-s.y),i=this.state.startScale*(c/a),o={x:(s.x+n.x)/2,y:(s.y+n.y)/2},l=this.state.translate,y=this.state.scale,D=this.elmRef.current.getBoundingClientRect(),R=p(l,o,y,i,D);this.setState({scale:i,translate:R,messages:[[i],[s,n]]});return}this.handleDrag({clientX:t.touches[0].clientX,clientY:t.touches[0].clientY})}handleTouchEnd(t){t.touches.length===1&&this.setState({dragStart:{x:t.touches[0].clientX,y:t.touches[0].clientY},startTranslate:{...this.state.translate}}),t.touches.length===0&&(this.handleDragEnd(),this.setState({startTouches:[]}))}componentDidMount(){this.elmRef.current.addEventListener("mousedown",this.handleDragStart.bind(this)),this.elmRef.current.addEventListener("mousemove",this.handleDrag.bind(this)),this.elmRef.current.addEventListener("mouseup",this.handleDragEnd.bind(this)),this.elmRef.current.addEventListener("mouseout",this.handleDragEnd.bind(this)),this.elmRef.current.addEventListener("wheel",this.handleWheel.bind(this)),this.elmRef.current.addEventListener("touchstart",this.handleTouchStart.bind(this)),this.elmRef.current.addEventListener("touchmove",this.handleTouchMove.bind(this)),this.elmRef.current.addEventListener("touchend",this.handleTouchEnd.bind(this)),window.test=this.transformRef.current,this.setState({size:{w:this.transformRef.current.offsetWidth,h:this.transformRef.current.offsetHeight}})}componentWillUnmount(){this.elmRef.current.removeEventListener("mousedown",this.handleDragStart.bind(this)),this.elmRef.current.removeEventListener("mousemove",this.handleDrag.bind(this)),this.elmRef.current.removeEventListener("mouseup",this.handleDragEnd.bind(this)),this.elmRef.current.removeEventListener("onmouseout",this.handleDragEnd.bind(this)),this.elmRef.current.removeEventListener("wheel",this.handleWheel.bind(this)),this.elmRef.current.removeEventListener("touchstart",this.handleTouchStart.bind(this)),this.elmRef.current.removeEventListener("touchmove",this.handleTouchMove.bind(this)),this.elmRef.current.removeEventListener("touchend",this.handleTouchEnd.bind(this))}componentDidUpdate(t,e){this.props.onTransform&&(e.translate.x!==this.state.translate.x||this.state.scale!==e.scale)&&this.props.onTransform(this.state.translate,this.state.scale)}render(){const t={transform:`translate(${this.state.translate.x}px, ${this.state.translate.y}px) scale(${this.state.scale}, ${this.state.scale})`},e=this.props.debug?u`<${E} messages=${this.state.messages} />`:"";return u`
            <${f} ref=${this.elmRef}>
                <${g} style=${t} ref=${this.transformRef}>
                    ${this.props.children}
                </${g}>
            </${f}>
            <br />
            ${e}
        `}}export{L as Z};
