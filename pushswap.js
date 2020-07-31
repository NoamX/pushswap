const argv = process.argv.slice(2);

/**
 * sa : échange les positions des deux premiers éléments de la
 * 
 * sb : échange les positions des deux premiers éléments de lb
 * 
 * sc : sa et sb en même temps
 * 
 * pa : prend le premier élément de lb et le place à la première position de la
 * 
 * pb : prend le premier élément de la et le place à la première position de lb
 * 
 * ra : fait une rotation de la vers le début (le premier élément devient le dernier)
 * 
 * rb : fait une rotation de lb vers le début (le premier élément devient le dernier)
 * 
 * rr : ra et rb en même temps
 * 
 * rra : fait une rotation de la vers la fin (le dernier élément devient le premier)
 * 
 * rrb : fait une rotation de lb vers la fin (le dernier élément devient le premier)
 * 
 * rra : rra et rrb en même temps
 */
const pushswap = (la, lb = []) => {
  let called = '';
  const sa = () => {
    if (la.length >= 2) {
      [la[0], la[1]] = [la[1], la[0]];
      return 'sa';
    }
  }

  const sb = () => {
    if (lb.length >= 2) {
      [lb[0], lb[1]] = [lb[1], lb[0]];
      return 'sb';
    }
  }

  const sc = () => {
    if (la.length >= 2 && lb.length >= 2) {
      [la[0], la[1]] = [la[1], la[0]];
      [lb[0], lb[1]] = [lb[1], lb[0]];
      return 'sc';
    }
  }

  const pa = () => {
    if (lb.length >= 1) {
      la.unshift(lb.shift());
      return 'pa';
    }
  }

  const pb = () => {
    if (la.length >= 1) {
      lb.unshift(la.shift());
      return 'pb';
    }
  }

  const ra = () => {
    if (la.length >= 1) {
      la.push(la.shift());
      return 'ra';
    }
  }

  const rb = () => {
    if (lb.length >= 1) {
      lb.push(lb.shift());
      return 'rb';
    }
  }

  const rr = () => {
    if (la.length >= 1 && lb.length >= 1) {
      la.push(la.shift());
      lb.push(lb.shift());
      return 'rr';
    }
  }

  const rra = () => {
    if (la.length >= 1) {
      la.unshift(la.pop());
      return 'rra';
    }
  }

  const rrb = () => {
    if (lb.length >= 1) {
      lb.unshift(lb.pop());
      return 'rrb';
    }
  }

  const rrr = () => {
    if (la.length >= 1 && lb.length >= 1) {
      la.unshift(la.pop());
      lb.unshift(lb.pop());
      return 'rrr';
    }
  }

  let corrected = false;
  while (corrected === false) {
    let nbr = Number(...la);
    let min = Math.min(...la);
    if (nbr > min) {
      called += ra() + ' ';
    } else if (nbr === min) {
      called += pb() + ' ';
    }
    if (!la.length) {
      corrected = true;
    }
  }

  if (corrected === true) {
    while (lb.length) {
      called += pa() + ' ';
    }
  }

  console.log(called)
  console.table({ la, lb });
}
pushswap(argv);