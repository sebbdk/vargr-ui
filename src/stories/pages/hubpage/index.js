import { html } from "htm/preact";
import { CenterPage } from 'stories/common/templates/centerpage';
import AppSettings from "app.settings";
import { LocalHub } from "stories/common/organisms/local-hub";

export const HubPage = (args) => {
    return html`
        <${CenterPage} ...${AppSettings.intra.hub.page}>
            <${LocalHub} services=${AppSettings.intra.hub.serviceList} />
        </${CenterPage}>
    `;
};
