import { html, Component } from "htm/preact"
import { createRef } from "preact";
import PropTypes from 'prop-types';
import styled from "styled-components"
import { ZoomBox } from "../../molecules/zoombox";

// @TODO, somehwo focus the current frame so keyboard events will work

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
        this.elmRef = createRef();
    }

    handleKeyDown(evt) {    
        if (evt.key === 'ArrowRight' || evt.key === 'd') {
            this.next();
        }

        if (evt.key === 'ArrowLeft' || evt.key === 'a') {
            this.prev();
        }
    }

    componentDidMount(){
        document.addEventListener("keyup", this.handleKeyDown.bind(this));
    }
    
    
    componentWillUnmount() {
        document.removeEventListener("keyup", this.handleKeyDown.bind(this));
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
    
        return html`
            <${GalleryReaderContainer} ref=${this.elmRef}>
                <${ZoomBox}>
                    ${imgElms}
                </${ZoomBox}>
                <${CurrentPageHint}>
                    ${this.state.index+1}/${this.props.images.length}
                </${CurrentPageHint}>
            </${GalleryReaderContainer}>
        `;
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
