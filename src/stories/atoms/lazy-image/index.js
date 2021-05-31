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
        queued: [],
        waitTime: 50,
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

    getGroup(group).observer.observe(loadRef.current.base);

    return promise
}

function load(loadRefCurrent, group) {
    getGroup(group).observer.unobserve(loadRefCurrent);
    const next = getGroup(group).queued.find(i => i.loadRef.current.base === loadRefCurrent);
    if (next !== undefined) {
        next.resolve();
    }
}

function stopLoad(loadRef, group) {
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
            this.img = new Image();
            this.img.onload = () => {
                this.setState({
                    ...this.state,
                    src: this.props.src
                });

                stopLoad(this.elmRef, this.state.loadGroup);
            }
            this.img.src = this.props.src;
        });
    }

    componentWillUnmount() {
        stopLoad(this.elmRef, this.state.loadGroup);
    }

    render() {
        return html`<${PerfImage} ref=${this.elmRef} img=${this.img} src=${this.state.src} />`
    }
}