import { Component, createRef } from "preact"
import { html } from "htm/preact"
import styled from "styled-components"

const PerfImageElm = styled.img.attrs(props => ({ src: props.src }))`
    opacity: ${({loaded}) => (loaded ? 1 : 0)};
    transition: opacity 300ms;
    max-width: 100%;
    max-height: 100%;
`;

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
function resizeImage(img, maxHeight, maxWidth) {
    ctx.drawImage(img, 0, 0);

    let width = img.width;
    let height = img.height;
    
    // do not images that are smaller then the parent box already
    if (width < maxWidth && height < maxHeight) {
        return img.src;
    }

    if (width > height) {
        if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
        }
    } else {
        if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
        }
    }
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);

    return canvas.toDataURL("image/png");
}

export class PerfImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            src: '',
            loaded: false,
        }
        this.elmRef = createRef();
    }

    componentDidMount() {
        this.componentDidUpdate({ src: '' });
    }

    componentDidUpdate(prevProps = {}) {
        if (prevProps.src === this.props.src) {
            return;
        }

        this.scaleImage();
    }

    scaleImage() {
        const maxHeight = this.elmRef.current.parentElement.clientHeight * 1.5;
        const maxWidth = this.elmRef.current.parentElement.clientWidth * 1.5;

        // Re-use the img context if passed
        if (this.props.img) {
            this.setState({
                loaded: true,
                src: resizeImage(this.props.img, maxHeight, maxWidth)
            });
            return;
        }

        // Otherwise load first
        const img = new Image();
        img.onload = () => {
            this.setState({
                loaded: true,
                src: resizeImage(img, maxHeight, maxWidth)
            });
        }
        img.src = this.props.src;
    }

    render() {
        return html`<${PerfImageElm} ref=${this.elmRef} loaded=${this.state.loaded} src=${this.state.src} />`;
    }
}