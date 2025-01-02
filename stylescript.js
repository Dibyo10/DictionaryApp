const dictionary = (word) => {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '6836099e3dmsh71e2c492b12da9dp10cb2fjsn09008bf7a49b',
        'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        wordheading.innerHTML = "Meaning of : " + response.word;
        definition.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.");
      })
      .catch(err => console.error(err));
  };
  
  searchbtn.addEventListener('click', (e) => {
    e.preventDefault();
    dictionary(searchinput.value);
  });
  
  
  const aboutbtn = document.getElementById('aboutbtn');
  const aboutModal = new bootstrap.Modal(document.getElementById('aboutModal'));
  
  aboutbtn.addEventListener('click', () => {
    aboutModal.show();
  });
  
  
  const homebtn = document.getElementById('homebtn');
  homebtn.addEventListener('click', () => {
    window.location.href = 'index.html'; 
  });
  
