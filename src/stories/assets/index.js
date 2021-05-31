const folder = process.env.ASSETS_OVERRIDE || 'atomic_war';

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

export const DemoPages1 = (new Array(22)).fill(undefined).map((i, index) => require(`stories/assets/atomic_war/1/${index+1}.jpg`));
export const DemoPages2 = DemoPages1;
export const DemoPages3 = DemoPages1;