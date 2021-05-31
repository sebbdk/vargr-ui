import { html, Component } from "htm/preact"
import PropTypes from 'prop-types';
import styled from "styled-components"

const ImagePage = styled.img`
    object-fit: scale-down;
    object-position: top;
    display: block;
    max-height: 100vh;
    min-width: 0;

    ${({ isDualPage }) => isDualPage ? `
        &:first-of-type {
            object-position: top right;
        }
        
        &:last-of-type {
            object-position: top left;
        }
    ` : ''};
`;

const GalleryReaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const CurrentPageHint = styled.div`
    background-color: #999;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
`;

const Transformer = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    height: calc(100% - 2rem);
    user-select: none;
`;

export class GalleryReader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: props.index || 0,
            dragStart: {x:0, y:0},
            translate: {x:0, y:0},
            startTranslate: {x:0, y:0},
            isDragging: false,
        }
    }

    handleKeyDown(evt) {
        evt.preventDefault()

        if (evt.key === 'ArrowRight') {
            this.next();
        }

        if (evt.key === 'ArrowLeft') {
            this.prev();
        }
    }

    handleDragStart(evt) {
        document.hasFocus();
        evt.preventDefault()
        this.setState({
            isDragging: true,
            dragStart: {x:evt.clientX, y:evt.clientY},
            startTranslate: {
                ...this.state.translate
            }
        });
    }

    handleDrag(evt) {
        if(!this.state.isDragging) {
            return;
        }

        const translateDiff = {
            x:  evt.clientX - this.state.dragStart.x,
            y: evt.clientY - this.state.dragStart.y
        };

        this.setState({
            translate: {
                x: this.state.startTranslate.x + translateDiff.x,
                y: this.state.startTranslate.y + translateDiff.y
            }
        });
    }

    handleDragEnd(evt) {
        evt.preventDefault()
        this.setState({
            isDragging: false
        });
    }

    componentDidMount(){
        document.addEventListener("keyup", this.handleKeyDown.bind(this));
        
        document.addEventListener("mousedown", this.handleDragStart.bind(this));
        document.addEventListener("mousemove", this.handleDrag.bind(this));
        document.addEventListener("mouseup", this.handleDragEnd.bind(this));
    }
    
    
    componentWillUnmount() {
        document.removeEventListener("keyup", this.handleKeyDown.bind(this));
        document.removeEventListener("mousedown", this.handleDragStart.bind(this));
        document.removeEventListener("mousemove", this.handleDrag.bind(this));
        document.removeEventListener("mouseup", this.handleDragEnd.bind(this));
    }

    next() {
        const reachedEndOfList = this.state.index+1 === this.props.images.length;
        if (reachedEndOfList) {
            return this.setState({ index: 0 });
        }

        this.setState({ index: this.state.index+1 })  
    }

    prev() {
        const reachedStartOfList = this.state.index-1 === -1;
        if (reachedStartOfList) {
            return this.setState({ index: this.props.images.length-1 });
        }

        this.setState({ index: this.state.index-1 })  
    }

    render() {
        const offSet = this.props.dualPage ? 2:1;
        const imgElms = this.props.images.slice(this.state.index, this.state.index+offSet).map((src, index) => {
            return html`<${ImagePage} isDualPage=${this.props.dualPage} src="${src}"></${ImagePage}>`
        });

        const style = {
            transform: `translate(${this.state.translate.x}px, ${this.state.translate.y}px)`
        }
    
        return html`<${GalleryReaderContainer}>
            <${Transformer} style=${style}>
                ${imgElms}
            </${Transformer}>
            <${CurrentPageHint}>
                ${this.state.index+1}/${this.props.images.length}
            </${CurrentPageHint}>
        </${GalleryReaderContainer}>`;
    }
}

GalleryReader.propTypes = {
  //images: PropTypes.arrayOf.string.isRequired,
  dualPage: PropTypes.bool,
};

GalleryReader.defaultProps = {
  images: [],
  dualPage: false
};
