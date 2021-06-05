// Most of the logo's are sources from: https://www.vectorlogo.zone/
import mongodbLogo from './stories/assets/icons/mongodb.svg';
import nextcloudLogo from './stories/assets/icons/nextcloud.svg';
import nginxLogo from './stories/assets/icons/nginx.svg';
import octoprintLogo from './stories/assets/icons/octoprint.png';
import parseLogo from './stories/assets/icons/parse.svg';
import portainerLogo from './stories/assets/icons/portainer.svg';
import storybookLogo from './stories/assets/icons/storybook.svg';
import backgroundImage from './stories/assets/resizeme_hori.jpg';

export default {
    "intra": {
        "hub": {
            "backgroundImage": backgroundImage,
            "serviceList": [
                { "name": "Storybook", "link": "https://sebbdk.github.io/vargr-ui/", "logo": storybookLogo },
                { "name": "MongoDB", "link": "http://mongo.hopper.local", "logo": mongodbLogo },
                { "name": "NextCloud", "link": "http://next.hopper.local", "logo": nextcloudLogo},
                { "name": "Parse", "link": "http://parse.hopper.local", "logo": parseLogo },
                { "name": "Portainer", "link": "http://Portainer.hopper.local", "logo": portainerLogo },
                { "name": "Nginx", "link": "http://hopper.local:81", "logo": nginxLogo },
                { "name": "3D printer", "link": "http://octo.local", "logo": octoprintLogo }
            ]
        }
    }
}