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
`;

export class GalleryReader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: props.index || 0
        }
    }

    handleKeyDown(evt) {
        if (evt.key === 'ArrowRight') {
            this.next();
        }

        if (evt.key === 'ArrowLeft') {
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
            return html`<${ImagePage} isDualPage=${this.props.dualPage} onClick="${this.next.bind(this)}" src="${src}"></${ImagePage}>`
        });
    
        return html`<${GalleryReaderContainer}>
            <${Transformer}>
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
