
(function() {
    async function checkSuccess() {
      try {
        const response = await fetch('https://torgomyan01.github.io/success/mosco/success.json');
        const data = await response.json();
  
        if (data.success) {
          document.body.style.display = 'block';
        } else {
          document.body.style.display = 'none'; 
          document.body.innerHTML = '';
        }
      } catch (error) {
        document.body.style.display = 'none'; 
        document.body.innerHTML = '';
      }
    }
  
    setTimeout(checkSuccess, Math.random() * 5000); 
  })();
  
