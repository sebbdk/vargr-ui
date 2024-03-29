import { html, Component } from "htm/preact"
import { createRef } from "preact";
import styled from "styled-components"
import { ConsoleComponent } from "../../organisms/log";

// @TODO, somehwo focus the current frame so keyboard events will work
const ZoomBoxContainer = styled.div`
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
`;

const Transformer = styled.div`
    transform-origin: 0 0;
    display: flex;
    justify-content: center;
    user-select: none;
    width: 100%;
    height: 100%;
`;

export function scaleFromPoint(currentPos, pointerPos, originalScale, newScale, offset) {
    const pos = { ...currentPos };
    const zoom_target = {x:0,y:0}
    const zoom_point = {x:0,y:0}
    
    zoom_point.x = pointerPos.x - offset.x
    zoom_point.y = pointerPos.y - offset.y

    // determine the point on where the slide is zoomed in
    zoom_target.x = (zoom_point.x - pos.x)/originalScale
    zoom_target.y = (zoom_point.y - pos.y)/originalScale


    // calculate x and y based on zoom
    pos.x = -zoom_target.x * newScale + zoom_point.x
    pos.y = -zoom_target.y * newScale + zoom_point.y

    return pos;
}

export class ZoomBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dragStart: {x:0, y:0},
            translate: {x:0, y:0},
            scale: 1,
            startTranslate: {x:0, y:0},
            startTouches: [],
            isDragging: false,
            debug: false,
            messages: [[' ']]
        }
        this.elmRef = createRef();
        this.transformRef = createRef();

        // @TODO, add 100% sticky zoom option
        // @TODO, add contain option, that keeps the transformer from begin less thatn 100% height/width when scaled.
        // @TODO, add a set set tranform method to set translation & scale
    }

    reset() {
        this.setState({
            scale: 1,
            translate: { x: 0, y:0 }
        });
    }

    handleDragStart(evt = {}) {
        evt.preventDefault && evt.preventDefault();

        this.setState({
            isDragging: true,
            dragStart: {x:evt.clientX, y:evt.clientY},
            startTranslate: {
                ...this.state.translate
            }
        });
    }

    handleDrag(evt = {}) {
        if(!this.state.isDragging) {
            return;
        }

        const translateDiff = {
            x: evt.clientX - this.state.dragStart.x,
            y: evt.clientY - this.state.dragStart.y
        };

        this.setState({
            translate: {
                x: this.state.startTranslate.x + translateDiff.x,
                y: this.state.startTranslate.y + translateDiff.y
            }
        });
    }

    handleDragEnd(evt = {}) {
        evt.preventDefault && evt.preventDefault()
        this.setState({
            isDragging: false
        });
    }

    handleWheel(e) {
        e.preventDefault();

        const currentPosition = this.state.translate;
        const currentScale = this.state.scale;
        const pointerPosition = {x: e.pageX, y: e.pageY};
        const boundingRect = this.elmRef.current.getBoundingClientRect();

        // Calculate new scale
        const max_scale = 10;
        const min_scale = 0.25;
        const factor = 0.25;
        let newScale = this.state.scale;
        let delta = e.delta || e.wheelDelta;
        if (delta === undefined) {
            delta = e.detail;
        }
        delta = Math.max(-1,Math.min(1,delta)) // cap the delta to [-1,1] for cross browser consistency
        newScale += delta*factor * newScale
        newScale = Math.max(min_scale,Math.min(max_scale,newScale))

        const scalePoint = scaleFromPoint(
            currentPosition,
            pointerPosition,
            currentScale,
            newScale,
            boundingRect
        );

        this.setState({
            scale: newScale,
            translate: scalePoint
        });
    }

    handleTouchStart(evt) {
        this.setState({
            startTouches: evt.touches,
            startScale: this.state.scale
        });

        this.handleDragStart({
            clientX: evt.touches[0].clientX,
            clientY: evt.touches[0].clientY,
        });
    }

    handleTouchMove(evt) {
        evt.preventDefault();

        const handlePinchZoom = evt.touches.length > 1;
        if (handlePinchZoom) {
            const ogP1 = { x: this.state.startTouches[0].clientX, y: this.state.startTouches[0].clientY };
            const ogP2 = { x: this.state.startTouches[1].clientX, y: this.state.startTouches[1].clientY };
            const p1 = { x: evt.touches[0].clientX, y: evt.touches[0].clientY };
            const p2 = { x: evt.touches[1].clientX, y: evt.touches[1].clientY };

            // calculate new scale
            const ogDistance = Math.hypot(ogP2.x-ogP1.x, ogP2.y-ogP1.y);
            const distance = Math.hypot(p2.x-p1.x, p2.y-p1.y);
            const newScale = this.state.startScale * (distance / ogDistance);

            // calculate pointer position / center of pinch
            const currentPointerPosition = {
                x: (p1.x+p2.x)/2,
                y: (p1.y+p2.y)/2
            };

            const currentPosition = this.state.translate;
            const currentScale = this.state.scale;
            const boundingRect = this.elmRef.current.getBoundingClientRect();

            const scalePoint = scaleFromPoint(
                currentPosition,
                currentPointerPosition,
                currentScale,
                newScale,
                boundingRect
            );

            // @TODO, handle multitouch translate
            // I would like to be able to pinch & translate at the same time

            // To do this, translate first, then zoom
            // also, ensure state.translate is up to date...

            this.setState({
                scale: newScale,
                translate: scalePoint,
                messages: [
                    [newScale],
                    [p1, p2]
                ]
            });
            return;
        }

        this.handleDrag({
            clientX: evt.touches[0].clientX,
            clientY: evt.touches[0].clientY
        });
    }

    handleTouchEnd(evt) {
        const stoppedPinching = evt.touches.length === 1;
        if (stoppedPinching) {
            this.setState({
                dragStart: {x:evt.touches[0].clientX, y:evt.touches[0].clientY},
                startTranslate: {
                    ...this.state.translate
                }
            });
        }

        const stoppedDragging = evt.touches.length === 0;
        if (stoppedDragging) {
            this.handleDragEnd();
            this.setState({
                startTouches: []
            });
        }
    }

    componentDidMount(){
        this.elmRef.current.addEventListener("mousedown", this.handleDragStart.bind(this));
        this.elmRef.current.addEventListener("mousemove", this.handleDrag.bind(this));
        this.elmRef.current.addEventListener("mouseup", this.handleDragEnd.bind(this));
        this.elmRef.current.addEventListener("mouseout", this.handleDragEnd.bind(this));
        this.elmRef.current.addEventListener("wheel", this.handleWheel.bind(this));

        this.elmRef.current.addEventListener("touchstart", this.handleTouchStart.bind(this));
        this.elmRef.current.addEventListener("touchmove", this.handleTouchMove.bind(this));
        this.elmRef.current.addEventListener("touchend", this.handleTouchEnd.bind(this));

        window.test = this.transformRef.current;

        this.setState({
            size: {
                w:this.transformRef.current.offsetWidth,
                h:this.transformRef.current.offsetHeight
            }
        });
    }

    componentWillUnmount() {
        this.elmRef.current.removeEventListener("mousedown", this.handleDragStart.bind(this));
        this.elmRef.current.removeEventListener("mousemove", this.handleDrag.bind(this));
        this.elmRef.current.removeEventListener("mouseup", this.handleDragEnd.bind(this));
        this.elmRef.current.removeEventListener("onmouseout", this.handleDragEnd.bind(this));
        this.elmRef.current.removeEventListener("wheel", this.handleWheel.bind(this));

        this.elmRef.current.removeEventListener("touchstart", this.handleTouchStart.bind(this));
        this.elmRef.current.removeEventListener("touchmove", this.handleTouchMove.bind(this));
        this.elmRef.current.removeEventListener("touchend", this.handleTouchEnd.bind(this));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.onTransform && ((prevState.translate.x !== this.state.translate.x) || (this.state.scale !== prevState.scale))) {
            this.props.onTransform(this.state.translate, this.state.scale);
        }
    }

    render() {
        const style = {
            transform: `translate(${this.state.translate.x}px, ${this.state.translate.y}px) scale(${this.state.scale}, ${this.state.scale})`
        };

        const debugConsole = this.props.debug ? html`<${ConsoleComponent} messages=${this.state.messages} />`:'';

        return html`
            <${ZoomBoxContainer} ref=${this.elmRef}>
                <${Transformer} style=${style} ref=${this.transformRef}>
                    ${this.props.children}
                </${Transformer}>
            </${ZoomBoxContainer}>
            <br />
            ${debugConsole}
        `;
    }
}