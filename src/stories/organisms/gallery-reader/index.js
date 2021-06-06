import { html, Component } from "htm/preact"
import { createRef } from "preact";
import PropTypes from 'prop-types';
import styled from "styled-components"
import { ZoomBox } from "stories/molecules/zoombox";
import { Icon } from "stories/atoms/icon";

const ImagePage = styled.img`
    object-fit: scale-down;
    object-position: center;
    display: block;
    max-height: 100vh;
    min-width: 0;

    ${({ isDualPage }) => isDualPage ? `
        &:first-of-type {
            object-position: center right;
        }
        
        &:last-of-type {
            object-position: center left;
        }
    ` : ''};
`;

const GalleryReaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #333;
`;

const GalleryContentArea = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 3rem;
`;

const CurrentPageHint = styled.div`
    background-color: #999;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    line-height: 1rem;
    z-index: 0;
    text-align: center;
    box-sizing: border-box;
`;

const NavigationArrow = styled.div`
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

    ${(props) => {
        if (props.direction === 'left') {
            return `
                right: initial;
                left: 0;
            `;
        }
    }};
`;

export class GalleryReader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: props.index || 0
        }
        this.zoombox = createRef();

        // @TODO, ensure viewport is set so doupletap zoom is disabled
        // @TODO, add transitions
        // @TODO, add a touch gesture for next/previous page
        // @TODO, add douple tab/click to zoom
        // @TODO, move next button to left corner for easier press
        // @TODO, on desktop the footer wastes vertical screenspace
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

    goto(index) {
        this.setState({ index: index });
        this.zoombox.current.reset();
    }

    next() {
        this.zoombox.current.reset();
        const reachedEndOfList = this.state.index+1 === this.props.images.length;
        if (reachedEndOfList) {
            return this.setState({ index: 0 });
        }

        this.setState({ index: this.state.index+1 })  
    }

    prev() {
        this.zoombox.current.reset();
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
    
        return html`
            <${GalleryReaderContainer}>
                <${GalleryContentArea}>
                    <${ZoomBox} ref=${this.zoombox}>
                        ${imgElms}
                    </${ZoomBox}>
                </${GalleryContentArea}>
                <${NavigationArrow} direction="left" onClick=${this.prev.bind(this)}><${Icon}>arrow_back_ios</${Icon}></${NavigationArrow}>
                <${NavigationArrow} direction="right" onClick=${this.next.bind(this)}><${Icon}>arrow_forward_ios</${Icon}></${NavigationArrow}>
                ${this.props.children}
                <${CurrentPageHint}>
                    ${this.state.index+1}/${this.props.images.length}
                </${CurrentPageHint}>
            </${GalleryReaderContainer}>
        `;
    }
}

GalleryReader.propTypes = {
  dualPage: PropTypes.bool,
};

GalleryReader.defaultProps = {
  images: [],
  dualPage: false
};
