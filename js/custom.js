// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){
   
   $('.owl-carousel').owlCarousel();
   
   let titulos = $('h4') // tag
   
   let itens = $('.featured-item') // class
   
   let destaques = $('#featured') // id
   
   // console.log(titulos.first());
   
   // Configuração de produtos
   
   $('.featured-item a').addClass('btn btn-dark stretch-link');
   
   $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').addClass('active')
   // $('.featured-item:first h4').removeClass('active')
   // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide()
   // $('.featured-item:first h4').show()
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
   //  $('.featured-item:first h4').css('color', '#f00')

   
   $('.featured-item h4').dblclick( function(){
      
      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
      });
      
   });
   
   /*
    * Manipulação de eventos
    */
   $('.featured-item a').on('blur', function(event){
      
      event.preventDefault();
      
      alert('Produto esgotado');
      
   })

   /* 
    * Callback
    * entendendo ações que começam ao termino de outra
    */
   $('.featured-item:nth(1)')
      .hide(500, function(){
         // este é o callback
         console.log( $(this).find('h4').text() + ' esgotado')
      })
      .show(500, function(){
         console.log( $(this).find('h4').text() + ' em estoque')
      })
 

   /*
    * Animações
    */
   const duracao = 1000 // equivalenta a 1 segundo

   $('.featured-item:nth(0)')
      .hide(duracao)
      .show(duracao)
      .fadeOut(duracao)
      .fadeIn(duracao)
      .toggle(duracao)
      .toggle(duracao)

   $('#form-submit').on('click', function(e){

      e.preventDefault()

      if( $('#email').val() != '' ){

         $('#email').animate({
            opacity: "toggle",
            top: "-50"
         }, 500, function(){
            console.log($(this).val())
         })

      }


   });


   /*
    * Ouvinte de eventos .nav-modal-open
    */
   $('.nav-modal-open').on('click', function(e){

      e.preventDefault();

      let elem = $(this).attr('rel')

      $('.modal-body').html($('#'+elem).html())
      
      $('.modal-header h5.modal-title').html($(this).text())

      let myModal = new bootstrap.Modal($('#modelId'))

      myModal.show()


   })


   /*
    * TODO: incrementar a validação
    * - checar se o nome é válido (mais de 2 caracteres)
    * - checar se o email é válido com ao menos um "@" e "."
    * - checar se o cpf é válido com regex
    */
   function validate( elem ){
      if( elem.val() == '') {

         console.log('o campo de '+ elem.attr('name') + ' é obrigatório')

         elem.parent().find('.text-muted').show()

         elem.addClass('invalid')

         return false
      } else {
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }
 

   $('body').on('submit', '.modal-body .form', function(e){

      e.preventDefault()

      const inputName = $('#nome')
      const inputEmail = $('#email')

      validate(inputName)
      validate(inputEmail)

      if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
         console.log('verificar campos obrigatórios')
         return false
      } else {
         $(this).submit()  
      }

   })

   function validarNome(nome) {
      return nome.length > 2;
  }
  
  function validarEmail(email) {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regexEmail.test(email);
  }
  
  function validarCPF(cpf) {
      const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      return regexCPF.test(cpf);
  }
  
  // Exemplos de uso:
  const nome = "João";
  const email = "joao@example.com";
  const cpf = "123.456.789-10";
  
  if (validarNome(nome)) {
      console.log("Nome válido");
  } else {
      console.log("Nome inválido");
  }
  
  if (validarEmail(email)) {
      console.log("E-mail válido");
  } else {
      console.log("E-mail inválido");
  }
  
  if (validarCPF(cpf)) {
      console.log("CPF válido");
  } else {
      console.log("CPF inválido");
  }
  
})
