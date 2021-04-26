import { html } from "htm/preact"
import styled from "styled-components"
import { LocalHub } from "/stories/organisms/local-hub"
import { CenterPage } from '/stories/templates/centerpage';

export const HomePage = ({ id }) => {

    return html`<${CenterPage}>
        <${LocalHub} />
    </${CenterPage}>`
}