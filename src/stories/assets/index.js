const folder = process.env.ASSETS_OVERRIDE || 'atomic_war';

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

//export const DemoPages1 = (new Array(22)).fill(undefined).map((i, index) => require(`stories/assets/${folder}/1/${index+1}.jpg`));
export const DemoPages1 = (new Array(201)).fill(undefined).map((i, index) => require(`stories/assets/local_examples/maidens_of_steel/${pad(index+1, 3)}.png`));
export const DemoPages2 = DemoPages1;//(new Array(20)).fill(undefined).map((i, index) => require(`stories/assets/${folder}/2/${index+1}.jpg`));