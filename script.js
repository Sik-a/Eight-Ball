const btn = document.querySelector( '#btn' ); 

btn.addEventListener( 'click', function(){ 
  let userName = document.querySelector( '#name' ).value; 
  let userQuestion = document.querySelector( '#question' ).value; 
  let ballAnswer = document.querySelector( '#answer' ); 
  let randomNumber = Math.floor( Math.random() * 8 ); 
  let eightBall = '';

  //Código para verificar el funcionamiento de los inputs y el número aleatorio 
  userName ? console.log( `Hello ${userName}` ) : console.log ( 'Hello!' ); 
  console.log( `The user ${userName} asked, ${userQuestion}` ); 
  console.log( randomNumber );

  switch( randomNumber ) 
  { 
  case 0: 
    eightBall = 'Sí, definitivamente';
    ballAnswer.innerText = eightBall;
    console.log( eightBall );
  break; 
  case 1: 
    eightBall = 'Es decididamente así';
    ballAnswer.innerText = eightBall;
    console.log( eightBall );
  break; 
  case 2: 
    eightBall = 'Respuesta vaga, vuelve a intentarlo';
    ballAnswer.innerText = eightBall;
    console.log( eightBall );
  break; 
  case 3: 
    eightBall = 'No puedo predecirlo ahora';
    ballAnswer.innerText = eightBall;
    console.log( eightBall );
  break; 
  case 4: 
    eightBall = 'No cuentes con ello';
    ballAnswer.innerText = eightBall;
    console.log( eightBall );
  break; 
  case 5: 
    eightBall = 'Mis fuentes me dicen que no';
    ballAnswer.innerText = eightBall;
    console.log( eightBall );
  break; 
  case 6: 
    eightBall = 'Concéntrate y vuelve a preguntar';
    ballAnswer.innerText = eightBall;
    console.log( eightBall );
  break; 
  case 7: 
    eightBall = 'Hay un buen pronóstico';
    ballAnswer.innerText = eightBall;
    console.log( eightBall );
  break; 
  default: 
    eightBall = 'Desconocido';
    ballAnswer.innerText = eightBall;
    console.log( eightBall );
  break; 
  }
});