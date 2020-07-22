const argv = process.argv.slice(2);

const la = argv;
const lb = [];

const sa = () => {
  if (la.length >= 2) {
    [la[0], la[1]] = [la[1], la[0]];
    console.log('sa');
  }
}

const sb = () => {
  if (lb.length >= 2) {
    [lb[0], lb[1]] = [lb[1], lb[0]];
    console.log('sb');
  }
}

const sc = () => {
  sa();
  sb();
  console.log('sc');
}

const pa = () => {
  if (lb.length >= 1) {
    la.unshift(lb.shift());
    console.log('pa');
  }
}

const pb = () => {
  if (la.length >= 1) {
    lb.unshift(la.shift());
    console.log('pb');
  }
}

const ra = () => {
  if (la.length >= 1) {
    la.push(la.shift());
    console.log('ra');
  }
}

const rb = () => {
  if (lb.length >= 1) {
    lb.push(lb.shift());
    console.log('rb');
  }
}

const rr = () => {
  ra();
  rb();
  console.log('rr');
}

const rra = () => {
  if (la.length >= 1) {
    la.unshift(la.pop());
    console.log('rra');
  }
}

const rrb = () => {
  if (lb.length >= 1) {
    lb.unshift(lb.pop());
    console.log('rrb');
  }
}

const rrr = () => {
  rra();
  rrb();
  console.log('rrr');
}

/**
 * sa : échange les positions des deux premiers éléments de la
 * sb : échange les positions des deux premiers éléments de lb
 * sc : sa et sb en même temps
 * 
 * pa : prend le premier élément de lb et le place à la première position de la
 * pb : prend le premier élément de la et le place à la première position de lb
 * 
 * ra : fait une rotation de la vers le début (le premier élément devient le dernier)
 * rb : fait une rotation de lb vers le début (le premier élément devient le dernier)
 * rr : ra et rb en même temps
 * 
 * rra : fait une rotation de la vers la fin (le dernier élément devient le premier)
 * rrb : fait une rotation de lb vers la fin (le dernier élément devient le premier)
 * rra : rra et rrb en même temps
 */
const pushswap = () => {
  // WIP...
}
pushswap()

console.table({ la, lb });
