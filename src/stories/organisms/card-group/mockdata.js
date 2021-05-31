
const defaultItem = {
    mediaSrc: require('stories/assets/resizeme_hori.jpg'),
    primaryText: 'Taxi drivers hate him',
    secondaryText: 'read here about why this is amazing!',
    tertiaryText: 'Hello world, i am content text',
    tags: [{ text: 'New' }, {text: 'bad add'}],
    actions: [{ text: 'Like', onClick:() => alert('Hello world!') }, { text: 'Comment' }],
    detailsLink: 'https://www.youtube.com/watch?v=ZLKZKmdZEjM&ab_channel=Gorillaz',
    detailsText: 'View details'
};


export const cardsMockData = [
    defaultItem,
    defaultItem,
    defaultItem,
    defaultItem,
    defaultItem,
    defaultItem,
    defaultItem,
    defaultItem,
    // 8
    defaultItem,
    defaultItem,
    defaultItem,
    defaultItem,
    defaultItem,
    defaultItem,
    defaultItem,
    defaultItem
    // 16
];
