import { html, Component } from "htm/preact"
import { createRef } from "preact";
import PropTypes from 'prop-types';
import styled from "styled-components"
import { ZoomBox } from "stories/molecules/zoombox";
import { Icon } from "stories/atoms/icon";

const ImagePage = styled.img`
    //object-fit: scale-down;
    object-position: center;
    display: block;
    height: 100%;
    //width: 100%;
    min-width: 0;
    flex-shrink: 0;

    ${({ isDualPage }) => isDualPage ? `
        &:first-of-type {
            object-position: center right;
        }
        
        &:last-of-type {
            object-position: center left;
        }
    ` : ''};
`;

const ImagePageGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
`;

const GalleryReaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #333;
    font-size: 0.75em;
`;

const GalleryContentArea = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 2em;
`;

const CurrentPageHint = styled.div`
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
            index: props.index || 0,
            scrollPct: 0
        }
        this.zoombox = createRef();
        this.imageElms = [];

        // @TODO, ensure viewport is set so doupletap zoom is disabled
        // @TODO, add transitions
        // @TODO, add a touch gesture for next/previous page
        // @TODO, add douple tab/click to zoom
        // @TODO, move next button to left corner for easier press
        // @TODO, on desktop the footer wastes vertical screenspace


        // i changed it to show all images at once
        // @TODO darken all but the X(default 1) item in the center
        // use a smooth transition

        this.imgGroupRef = createRef();

        this.imageElms = this.props.images.map((src, index) => {
            return html`<${ImagePage} isDualPage=${this.props.dualPage} src="${src}"></${ImagePage}>`
        });
    }

    handleKeyDown(evt) {    
        if (evt.key === 'ArrowRight' || evt.key === 'd') {
            this.next();
        }

        if (evt.key === 'ArrowLeft' || evt.key === 'a') {
            this.prev();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.images !== this.props.images) {
            this.imageElms = this.props.images.map((src, index) => {
                return html`<${ImagePage} isDualPage=${this.props.dualPage} src="${src}"></${ImagePage}>`
            });
        }
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

    onTransform(translate, scale) {
        const rightPos = ((translate.x-this.imgGroupRef.current.offsetWidth*0.5)/scale) * -1;
        const totalWidth = this.imgGroupRef.current.scrollWidth;
        const scrollPct = rightPos / totalWidth;

        this.setState({
            scrollPct
        });
    }

    render() {
        let pagePct = this.state.scrollPct * (this.props.images.length);
        if (pagePct > this.props.images.length) {
            pagePct = this.props.images.length;
        }

        if (pagePct < 0) {
            pagePct = 0;
        }
    
        return html`
            <${GalleryReaderContainer}>
                <${GalleryContentArea}>
                    <${ZoomBox} ref=${this.zoombox} onTransform=${this.onTransform.bind(this)}>
                        <${ImagePageGroup} ref=${this.imgGroupRef}>
                            ${this.imageElms}
                        </${ImagePageGroup}>
                    </${ZoomBox}>
                </${GalleryContentArea}>
                <!--
                <${NavigationArrow} direction="left" onClick=${this.prev.bind(this)}><${Icon}>arrow_back_ios</${Icon}></${NavigationArrow}>
                <${NavigationArrow} direction="right" onClick=${this.next.bind(this)}><${Icon}>arrow_forward_ios</${Icon}></${NavigationArrow}>
                -->
                ${this.props.children}
                <${CurrentPageHint}>
                    <div class="hint" style=${ { width: this.state.scrollPct* 100 + '%'} }></div>
                    ${Math.ceil(pagePct)} / ${this.props.images.length}
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
