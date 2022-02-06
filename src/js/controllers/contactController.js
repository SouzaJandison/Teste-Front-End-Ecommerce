const $form = document.querySelector('#form');
const $userName = document.querySelector('#userName');
const $userEmail = document.querySelector('#userEmail');
const $userPhone = document.querySelector('#userPhone');
const $userSubject = document.querySelector('#userSubject');
const $userMessage = document.querySelector('#userMessage');

$userPhone.addEventListener('input', event => {
  var text = event.target.value
    .replace(/\D/g, '')
    .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);

  event.target.value = !text[2] ? text[1] : 
    `(${text[1]}) ${text[2]}${(text[3] ? `-${text[3]}` : '')}`;
});

$form.addEventListener('submit', (event) => {
  event.preventDefault();

  errClassRemove();

  try {
    let err = {
      inputs : []
    };

    if ($userName.value === '') {
      $userName.classList.add('err');
      err.inputs.push('Nome');
    }

    if ($userEmail.value === '') {
      $userEmail.classList.add('err');
      err.inputs.push('E-mail');
    }

    if ($userSubject.value === '') {
      $userSubject.classList.add('err');
      err.inputs.push('Assunto');
    }

    if ($userMessage.value === '') {
      $userMessage.classList.add('err');
      err.inputs.push('Mensagem');
    }

    if (err.inputs.length > 0) {
      const message = err.inputs.join();
      throw new Error(message);
    }

    const userData = {
      name: $userName.value,
      email: $userEmail.value,
      phone: $userPhone.value,
      subject: $userSubject.value,
      message: $userMessage.value
    }
 
    console.log(userData);

    swal('Mensagem Enviada com Sucesso!', 'Em Breve Entraremos em Contato!', 'success');

    cleanInputValue();
  } catch (error) {
    swal(
      'Não foi Possível Enviar Mensagem', 
      `Os Seguintes Campos Não Foram Informado: ${error.message}`,
      'warning'
    )
  }
});

function errClassRemove() {
  $userName.classList.remove('err');
  $userEmail.classList.remove('err');
  $userSubject.classList.remove('err');
  $userMessage.classList.remove('err');
}

function cleanInputValue() {
  $userName.value = '';
  $userEmail.value = '';
  $userPhone.value = '';
  $userSubject.value = '';
  $userMessage.value = '';
}
