//define functions here

$(document).ready(function(){

  function getIt() {
    $('p').on('click', function() {
      alert('Hey!');
    })
  }
  
  function frameIt() {
    $('img').on('load', function() {
      addClass('tasty');
    })
  }
  
  function pressIt() {
    $('input').on('keydown', function(key) {
      if (key.which === 71) {
        alert('g was pressed');
      }
    })
  }

});
