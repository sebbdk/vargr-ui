import{u as s,m as o}from"./styled-components.browser.esm-LOVPg310.js";import{b as r}from"./preact.module-0A_VdQ5M.js";const e=s.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    top: 0;
    bottom: 0;
    opacity: 0;
    pointer-events: none;
    background-color: var(--main-bg-color, #fff);

    ${({visible:t})=>t&&`
            opacity: 1;
            pointer-events: all;
        `}
`;class n extends r{constructor(i){super(i),this.state={visible:!1}}show(){this.setState({visible:!0})}hide(){this.setState({visible:!1})}toggle(){this.setState({visible:!this.state.visible})}render(){return o`
            <${e} visible=${this.state.visible}>
                ${this.props.children}
            </${e}>
        `}}export{n as O};
