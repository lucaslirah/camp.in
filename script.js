// <!-- fazer o olhinho do input password mudar quando mostrar e ocultar o que for digitado -->
  const passWord = document.querySelector('.password');
  const passEye =document.querySelector('.passEye');

  passEye.onclick = ()  =>
  {
    if (passWord.type == 'password')
    {
      passWord.type = 'text'
      passEye.src = 'assets/eye-yellow.svg'
    }
    else{
      passWord.type = 'password'
      passEye.src = 'assets/eye.svg'
    }
  }