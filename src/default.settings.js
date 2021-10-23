// Most of the logo's are sources from: https://www.vectorlogo.zone/
import mongodbLogo from './stories/assets/icons/mongodb.svg';
import nextcloudLogo from './stories/assets/icons/nextcloud.svg';
import nginxLogo from './stories/assets/icons/nginx.svg';
import octoprintLogo from './stories/assets/icons/octoprint.png';
import parseLogo from './stories/assets/icons/parse.svg';
import portainerLogo from './stories/assets/icons/portainer.svg';
import piHoleLogo from './stories/assets/icons/pihole.svg';
import storybookLogo from './stories/assets/icons/storybook.svg';
import backgroundImage from './stories/assets/resizeme_hori.jpg';
import { AtomicWar1, AtomicWar2 } from './stories/assets/atomic_war';

export default {
    "examples": {
        DemoPages1: AtomicWar1,
        DemoPages2: AtomicWar2,
        DemoPages3: AtomicWar2,
        zoombox: backgroundImage
    },
    "intra": {
        "hub": {
            "page": {
                "backgroundImage": backgroundImage,
                "backgroundPosition": 'center',
                "backgroundSize": 'cover'
            },
            "serviceList": [
                // @TODO, change to card interface, use primaryText instead of name
                { "name": "Storybook", "link": "https://sebbdk.github.io/vargr-ui/", "logo": storybookLogo },
                { "name": "MongoDB", "link": "http://mongo.hopper.local", "logo": mongodbLogo },
                { "name": "NextCloud", "link": "http://next.hopper.local", "logo": nextcloudLogo},
                { "name": "Parse", "link": "http://parse.hopper.local", "logo": parseLogo },
                { "name": "Portainer", "link": "http://Portainer.hopper.local", "logo": portainerLogo },
                { "name": "Nginx", "link": "http://hopper.local:81", "logo": nginxLogo },
                { "name": "3D printer", "link": "http://octo.local", "logo": octoprintLogo },
                { "name": "PiHole", "link": "http://pi.hopper.local/admin", "logo": piHoleLogo },
                { "name": "Router", "link": "http://192.168.1.1/" },
            ]
        }
    }
}