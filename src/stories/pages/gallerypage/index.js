import { BasePage } from 'stories/templates/basepage';
import { html } from 'htm/preact';
import styled from 'styled-components';
import { GalleryReader } from 'stories/organisms/gallery-reader';
import { Gallery } from 'stories/organisms/gallery';
import { createRef, Component } from 'preact';
import { Overlay } from 'stories/molecules/overlay';


export class GalleryPage extends Component {

    constructor(props) {
        super(props);
        this.gallery = createRef();
        this.overlay = createRef();
    }

    handleKeyDown(evt) {
        console.log(evt.key)

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
            infoCard: {
                primaryText: 'And they talked',
                tags: [{ text: 'New' }, {text: 'bad add'}],
                tertiaryText: 'Hello world, i am content text',
                actions: [{ text: 'Favorite', onClick: () => alert('go!') }],
            },
            images: this.props.images.map(src => ({ mediaSrc: src })),
            onPick: (index) => {
                this.overlay.current.show()
                this.gallery.current.goto(index);
            }
        } 
        
        return html`
            <${BasePage}>
                <${Gallery} ...${galleryArgs} />
                <${Overlay} ref=${this.overlay}>    
                    <${GalleryReader} ref=${this.gallery} images=${this.props.images} />
                </${Overlay}>
            </${BasePage}>
        `;
    }
}