(() => {
  const display = document.getElementById('display');
  const keys = document.querySelector('.keys');

  let state = {
    expr: '',
    lastKey: null
  };

  function updateDisplay(v) {
    display.textContent = v || '0';
  }

  function sanitizeExpression(s) {
    
    return s.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
  }

  function calculate() {
    const toEval = sanitizeExpression(state.expr);
    if (!toEval) return;
    try {
      if (!/^[0-9.+\-*/() %]+$/.test(toEval)) throw new Error('Invalid input');
      
      const result = eval(toEval);
      state.expr = String(result);
      updateDisplay(state.expr);
    } catch (e) {
      updateDisplay('Error');
      state.expr = '';
    }
  }

  keys.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const action = btn.dataset.action;
    const value = btn.dataset.value;

    if (action === 'clear') {
      state.expr = '';
      updateDisplay('0');
      return;
    }

    if (action === 'backspace') {
      state.expr = state.expr.slice(0, -1);
      updateDisplay(state.expr || '0');
      return;
    }

    if (action === 'equals') {
      calculate();
      return;
    }

    
    state.expr += value;
    updateDisplay(state.expr);
  });

 
  window.addEventListener('keydown', (e) => {
    const key = e.key;
    if (/^[0-9]$/.test(key)) {
      state.expr += key; updateDisplay(state.expr); return;
    }
    if (key === '.') { state.expr += '.'; updateDisplay(state.expr); return; }
    if (key === 'Enter') { e.preventDefault(); calculate(); return; }
    if (key === 'Backspace') { state.expr = state.expr.slice(0, -1); updateDisplay(state.expr || '0'); return; }
    if (key === 'Escape') { state.expr = ''; updateDisplay('0'); return; }
    if (key === '+' || key === '-' || key === '*' || key === '/') { state.expr += key; updateDisplay(state.expr); return; }
  });

  
  updateDisplay('0');
})();
