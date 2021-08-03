var submitted = false;

function displaySuccessMessage(){
  setTimeout(function(){
    var messageElement = document.getElementById('successMessage')
    messageElement.classList.remove('hidden')
    // var inputs = document.getElementsByTagName('input');
    // for(var input of inputs){
    //     input.value = ''
    // }
  
    // document.getElementsByTagName('textarea')[0].value = '';
  }, 3000)
}
