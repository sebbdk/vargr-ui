import { Component, createRef } from "preact"
import { html } from "htm/preact"
import styled from "styled-components"

const LazyImageElm = styled.img.attrs(props => ({ src: props.src, OnLoad: props.OnLoad }))`
    opacity: ${({loaded}) => (loaded ? 1 : 0)};
    transition: opacity 300ms;
`;

const loadingGroups = {};

function getGroup(group) {
    if(!loadingGroups[group]) {
        addGroup(group);
    }

    return loadingGroups[group];
}

function addGroup(group) {
    loadingGroups[group] = {
        limit: 5,
        loading: [],
        queued: [],
        waitTime: 250,
        observer: new IntersectionObserver((items) => {
            items.forEach(entry => {
                if (entry.isIntersecting) {
                    load(entry.target, group)
                } 
            });
        })
    }
}

function queueLoad(loadRef, group) {
    const promise = new Promise(resolve => {
        getGroup(group).queued.push({
            loadRef,
            resolve,
            visible: false
        });
    });

    getGroup(group).observer.observe(loadRef.current);

    return promise
}

function load(loadRefCurrent, group) {
    getGroup(group).observer.unobserve(loadRefCurrent);
    const next = getGroup(group).queued.find(i => i.loadRef.current === loadRefCurrent);
    if (next !== undefined) {
        getGroup(group).loading.push(next);
        next.resolve();
    }
}

function stopLoad(loadRef, group) {
    
    getGroup(group).loading = getGroup(group).loading.filter(i => i.loadRef !== loadRef);
    getGroup(group).queued = getGroup(group).queued.filter(i => i.loadRef !== loadRef);
}

export class LazyImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            src: '',
            loadGroup: 'default'
        }
        this.elmRef = createRef();
    }

    componentDidMount() {
        this.componentDidUpdate({});
        
    }


    componentDidUpdate(prevProps = {}) {
        if (prevProps.src === this.props.src) {
            return;
        }

        this.loadMe();
    }

    loadMe() {
        stopLoad(this.elmRef, this.state.loadGroup);

        queueLoad(this.elmRef, this.state.loadGroup).then(() => {
            const img = new Image();
            img.onload = () => {
                this.setState({
                    ...this.state,
                    loaded: true,
                    src: this.props.src
                });

                stopLoad(this.elmRef, this.state.loadGroup);
            }
            img.src = this.props.src;
        });
    }

    componentWillUnmount() {
        stopLoad(this.elmRef, this.state.loadGroup);
    }

    render() {
        return html`<${LazyImageElm} ref=${this.elmRef} loaded=${this.state.loaded} src=${this.state.src}>Hello</${LazyImageElm}>`
    }
}