import { html } from 'htm/preact';
import styled from 'styled-components';
import {  Component, createRef } from 'preact';

const DraggableElm = styled.div`
	position: absolute;
	cursor: pointer;
	box-shadow: 0 0 0.125em rgba(0,0,0, 0);
	transition: box-shadow 150ms;

	${({ isDragging }) => isDragging && `
		box-shadow: 0 0 1em rgba(0,0,0, 0.125);
	`}
`;

let zIndexStack = 0;

export class Draggable extends Component {

    constructor(props) {
        super(props);

        this.state = {
			isDragging: false,
            translate: {
				x: props.x ? props.x : 0,
				y: props.y ? props.y : 0
			},
			startTranslate: {
				x:0,
				y:0
			},
			startTouches: [],
			zIndex: 0
        }

		this.elmRef = createRef();
    }

    emitOnTranslationEnd() {
        if(this.props.onTranslationEnd) {
            this.props.onTranslationEnd(this.state.translate);
        }
    }

    emitOnTranslationStart() {
        if(this.props.onTranslationStart) {
            this.props.onTranslationStart(this.state.translate);
        }
    }

    emitOnTranslation() {
        if(this.props.onTranslation) {
            this.props.onTranslation(this.state.translate);
        }
    }

	handleDragStart(evt) {
        evt.preventDefault && evt.preventDefault();

		zIndexStack++;
        this.setState({
			zIndex: zIndexStack,
            isDragging: true,
            dragStart: {
				x:evt.clientX,
				y:evt.clientY
			},
            startTranslate: {
                ...this.state.translate
            }
        });

        this.emitOnTranslationStart();
	}

	handleDrag(evt) {
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

        this.emitOnTranslation();
	}

	handleDragOut(evt) {
		if (evt.toElement == null && evt.relatedTarget == null) {
			this.setState({
				isDragging: false
			});
		}
	}

	handleDragEnd(evt) {
        evt.preventDefault && evt.preventDefault();
        if(this.state.isDragging) {
            console.log('called twice?')
            this.setState({
                isDragging: false
            });

            this.emitOnTranslation();
            this.emitOnTranslationEnd();
        }
	}

    componentDidMount(){
        console.log()
        this.elmRef.current.addEventListener("mousedown", this.handleDragStart.bind(this));
        document.addEventListener("mousemove", this.handleDrag.bind(this));
        document.addEventListener("mouseup", this.handleDragEnd.bind(this));
        document.addEventListener("mouseout", this.handleDragOut.bind(this));
    }

    componentWillUnmount() {
        this.elmRef.current.removeEventListener("mousedown", this.handleDragStart.bind(this));
        document.removeEventListener("mousemove", this.handleDrag.bind(this));
        document.removeEventListener("mouseup", this.handleDragEnd.bind(this));
        document.removeEventListener("onmouseout", this.handleDragOut.bind(this));
    }

    render() {
        const style = {
            transform: `translate(${this.state.translate.x}px, ${this.state.translate.y}px)`,
			zIndex: this.state.zIndex
        }

        return html`
            <${DraggableElm} ref=${this.elmRef} style=${style} isDragging=${this.state.isDragging}>
                ${this.props.children}
            </${DraggableElm}>
        `;
    }
}