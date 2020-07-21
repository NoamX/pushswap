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
  if (la.length >= 2 && lb.length >= 2) {
    [la[0], la[1]] = [la[1], la[0]];
    [lb[0], lb[1]] = [lb[1], lb[0]];
    console.log('sc');
  }
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
  if (la.length >= 1 && lb.length >= 1) {
    la.push(la.shift());
    lb.push(lb.shift());
    console.log('rr');
  }
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
  if (la.length >= 1 && lb.length >= 1) {
    la.unshift(la.pop());
    lb.unshift(lb.pop());
    console.log('rrr');
  }
}

const pushswap = () => {

}
pushswap();

console.table({ la, lb });
