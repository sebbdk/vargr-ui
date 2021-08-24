import { BasePage } from 'stories/common/templates/basepage';
import { html } from 'htm/preact';
import styled from 'styled-components';
import { GalleryReader } from 'stories/common/organisms/gallery-reader';
import { Gallery } from 'stories/common/organisms/gallery';
import { createRef, Component } from 'preact';
import { Overlay } from 'stories/common/molecules/overlay';

const CloseButton = styled.a`
    display: block;
    background-color: #999;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    cursor: pointer;
`;

export class GalleryPage extends Component {

    constructor(props) {
        super(props);
        this.gallery = createRef();
        this.overlay = createRef();
    }

    handleKeyDown(evt) {
        if (evt.key === 'Escape') {
            this.overlay.current.hide()
        }
    }

    componentDidMount(){
        document.addEventListener("keyup", this.handleKeyDown.bind(this));
    }
    
    componentWillUnmount() {
        document.removeEventListener("keyup", this.handleKeyDown.bind(this));
    }

    render() {    
        const galleryArgs = {
            infoCard: this.props.infoCard,
            cards: this.props.cards,
            onPick: (index) => {
                this.overlay.current.show()
                this.gallery.current.goto(index);
            }
        } ;

        const readerImages = this.props.cards.map(i => i.mediaSrc);

        const close = () => this.overlay.current.hide()
        
        return html`
            <${BasePage}>
                <${Gallery} ...${galleryArgs} />
                <${Overlay} ref=${this.overlay}>    
                <${GalleryReader} ref=${this.gallery} images=${readerImages}>
                    <${CloseButton} onClick=${close}>Close</${CloseButton}>
                </${GalleryReader}>
                </${Overlay}>
            </${BasePage}>
        `;
    }
}