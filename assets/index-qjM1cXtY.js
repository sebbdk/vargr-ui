import{u as i,m as r}from"./styled-components.browser.esm-LOVPg310.js";import{b as o,_ as l}from"./preact.module-0A_VdQ5M.js";const n=i.div`
	position: absolute;
	cursor: pointer;
	box-shadow: 0 0 0.125em rgba(0,0,0, 0);
	transition: box-shadow 150ms;

	${({isDragging:e})=>e&&`
		box-shadow: 0 0 1em rgba(0,0,0, 0.125);
	`}
`;let a=0;class g extends o{constructor(t){super(t),this.state={isDragging:!1,translate:{x:t.x?t.x:0,y:t.y?t.y:0},startTranslate:{x:0,y:0},startTouches:[],zIndex:0},this.elmRef=l()}emitOnTranslationEnd(){this.props.onTranslationEnd&&this.props.onTranslationEnd(this.state.translate)}emitOnTranslationStart(){this.props.onTranslationStart&&this.props.onTranslationStart(this.state.translate)}emitOnTranslation(){this.props.onTranslation&&this.props.onTranslation(this.state.translate)}handleDragStart(t){t.preventDefault&&t.preventDefault(),a++,this.setState({zIndex:a,isDragging:!0,dragStart:{x:t.clientX,y:t.clientY},startTranslate:{...this.state.translate}}),this.emitOnTranslationStart()}handleDrag(t){if(!this.state.isDragging)return;const s={x:t.clientX-this.state.dragStart.x,y:t.clientY-this.state.dragStart.y};this.setState({translate:{x:this.state.startTranslate.x+s.x,y:this.state.startTranslate.y+s.y}}),this.emitOnTranslation()}handleDragOut(t){t.toElement==null&&t.relatedTarget==null&&this.setState({isDragging:!1})}handleDragEnd(t){t.preventDefault&&t.preventDefault(),this.state.isDragging&&(console.log("called twice?"),this.setState({isDragging:!1}),this.emitOnTranslation(),this.emitOnTranslationEnd())}componentDidMount(){console.log(),this.elmRef.current.addEventListener("mousedown",this.handleDragStart.bind(this)),document.addEventListener("mousemove",this.handleDrag.bind(this)),document.addEventListener("mouseup",this.handleDragEnd.bind(this)),document.addEventListener("mouseout",this.handleDragOut.bind(this))}componentWillUnmount(){this.elmRef.current.removeEventListener("mousedown",this.handleDragStart.bind(this)),document.removeEventListener("mousemove",this.handleDrag.bind(this)),document.removeEventListener("mouseup",this.handleDragEnd.bind(this)),document.removeEventListener("onmouseout",this.handleDragOut.bind(this))}render(){const t={transform:`translate(${this.state.translate.x}px, ${this.state.translate.y}px)`,zIndex:this.state.zIndex};return r`
            <${n} ref=${this.elmRef} style=${t} isDragging=${this.state.isDragging}>
                ${this.props.children}
            </${n}>
        `}}export{g as D};
