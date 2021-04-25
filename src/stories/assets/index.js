const folder = process.env.ASSETS_OVERRIDE || 'atomic_war';

export const DemoPages1 = (new Array(22)).fill(undefined).map((i, index) => require(`stories/assets/${folder}/1/${index+1}.jpg`));
export const DemoPages2 = (new Array(20)).fill(undefined).map((i, index) => require(`stories/assets/${folder}/2/${index+1}.jpg`));