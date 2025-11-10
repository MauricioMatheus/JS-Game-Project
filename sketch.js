//http://www.colabeduc.org/descricao/show/495

//https://www.youtube.com/watch?v=M3ZtEKQyAwQ&ab_channel=Maur%C3%ADcioMatheus

//https://www.youtube.com/watch?v=ld8882jS3hY&ab_channel=Maur%C3%ADcioMatheus

//https://www.youtube.com/watch?v=LsdzcN8j0uQ&ab_channel=Maur%C3%ADcioMatheus

//https://www.youtube.com/watch?v=mcA80I9FzH0&ab_channel=Maur%C3%ADcioMatheus

//https://www.youtube.com/watch?v=WpmsqQh3nY4&ab_channel=Maur%C3%ADcioMatheus

//Menu
var tela = 1;
var largura = 200;
var largura2 = 100;
var altura = 50;
var xMenu = 90;
var yMenu1 = 135;
var yMenu2 = 225;
var yMenu3 = 315;
var xEscolha1_Tela_de_continue = 200;
var yEscolha_Tela_de_continue = 315;
var xEscolha2_Tela_de_continue = 375;

//Gameplay
var Y_fireball = 70
var Y_fireball_2 = 285
var X_fireball = 295
var X_fireball_2 = 415
var X_fireball_3 = 535
var X_fireball_4 = 175
var Raio_fireball = 100
var velocidadeY = 0.6
var velocidadeY_2 = 0.6
var contador = 0
var contador2 = 0
var contador3 = 0
var contador4 = 0
var contador5 = 0
var cont_objetivo = 0
var cont_objetivo2 = 0
var cont_objetivo3 = 0
var tempo = 0
var tempo2 = 0
var tempo3 = 0
var X_personagem = 30
var Y_personagem = 255
var Raio_personagem = 80
var X_orbe = 200;
var myBoolean = false
var myBoolean = false

//Tempo
var time_cont = 0
var time_cont2 = 0
var time_cont3 = 0
var seconds_cont = 0
var seconds_cont2 = 0
var seconds_cont3 = 0

//Diálogo
var texto = 'Saudações aventureiro(a)! Neste jogo você provará suas habilidades de raciocínio lógico e também os seus reflexos! Clique em continuar!'

var texto2 = 'Você precisa passar por três fases! Cada uma delas é um percurso criado a muito tempo atrás por grandes heróis ancestrais. Será que você é capaz de superá-los? Clique em continuar!'

var texto3 = 'Para se movimentar, pressione a setinha → para ir para a direita, e ← para esquerda. Seu objetivo é evitar os obstáculos e pegar o grande orbe de luz, com um tempo marcado! Tente pegá-lo 10 vezes! '

var texto4 = 'Você sabe o que é um minuto? É uma unidade de tempo que possui 60 segundos! Ele está presente no seu vocabulário do dia a dia, então tenho certeza que você já ouviu falar dele!'

var texto5 = 'Você sabe como determinar minutos através dos segundos? É bem simples! O que você precisa fazer é apenas dividir os segundos por 60! Na próxima explicação faremos um pequeno teste para te ajudar a entender melhor!'

var texto7 = 'Incrível! Você superou todos os desafios e se mostrou um(a) grande aventureiro(a)!'

var texto8 = 'Obrigado por jogar!'

var texto9 = 'Deseja jogar novamente?'

var contador_texto = 0
var contador_texto2 = 0
var contador_texto3 = 0
var contador_texto4 = 0
var contador_texto5 = 0
var contador_texto6 = 0
var contador_texto7 = 0
var contador_texto8 = 0
var contador_texto9 = 0
var tempo_texto = 0
var tempo_texto2 = 0
var tempo_texto3 = 0
var tempo_texto4 = 0
var tempo_texto5 = 0
var tempo_texto6 = 0
var tempo_texto7 = 0
var tempo_texto8 = 0
var tempo_texto9 = 0

function preload(){
  //Imagens
  img = loadImage('Jungle_Background.jpg')
  img2 = loadImage('2D_Knight.png');
  img3 = loadImage('Old_Wise_Wizard.png')
  img4 = loadImage('Desenvolvedor.jpg')
  img5 = loadImage('Jungle_Background_600x600.jpg')
  img6 = loadImage('Orientador.jpg')
  img7 = loadImage('Old_Wise_Wizard_Ampliado.png')
  img8 = loadImage('Jungle_Stages_Background.jpg');
  img9 = loadImage('Borda esquerda.png');
  img10 = loadImage('Meio.png');
  img11 = loadImage('Borda direita.png');
  img12 = loadImage('Upper ground.png');
  img13 = loadImage("Red flower (Invertida).png")
  //A IMAGEM 14 FOI RETIRADA DO CÓDIGO, NO ENTANTO OPTEI POR DEIXÁ-LA NA FUNÇÃO PRELOAD!
  img14 = loadImage("fireball.png")
  img15 = loadImage("Plataforma superior.png")
  img16 = loadImage("Brilho.png")
  img17 = loadImage("Red flower.png")
  
  img18 = [];
  img18[0] = loadImage('Warrior Knight__Idle (Right Side)/2D_KNIGHT__Idle_000.png'
);
  img18[1] = loadImage('Warrior Knight__Idle (Right Side)/2D_KNIGHT__Idle_001.png'
);
  img18[2] = loadImage('Warrior Knight__Idle (Right Side)/2D_KNIGHT__Idle_002.png'
);
  img18[3] = loadImage('Warrior Knight__Idle (Right Side)/2D_KNIGHT__Idle_003.png'
);
  img18[4] = loadImage('Warrior Knight__Idle (Right Side)/2D_KNIGHT__Idle_004.png'
);
  img18[5] = loadImage('Warrior Knight__Idle (Right Side)/2D_KNIGHT__Idle_005.png'
);
  img18[6] = loadImage('Warrior Knight__Idle (Right Side)/2D_KNIGHT__Idle_006.png'
);
  img18[7] = loadImage('Warrior Knight__Idle (Right Side)/2D_KNIGHT__Idle_007.png'
);
  
  img19 = [];
  img19[0] = loadImage('Warrior Knight_Running (To the right)/2D_KNIGHT__Run_000.png');
  img19[1] = loadImage('Warrior Knight_Running (To the right)/2D_KNIGHT__Run_001.png');
  img19[2] = loadImage('Warrior Knight_Running (To the right)/2D_KNIGHT__Run_002.png');
  img19[3] = loadImage('Warrior Knight_Running (To the right)/2D_KNIGHT__Run_003.png');
  img19[4] = loadImage('Warrior Knight_Running (To the right)/2D_KNIGHT__Run_004.png');
  img19[5] = loadImage('Warrior Knight_Running (To the right)/2D_KNIGHT__Run_005.png');
  img19[6] = loadImage('Warrior Knight_Running (To the right)/2D_KNIGHT__Run_006.png');
  img19[7] = loadImage('Warrior Knight_Running (To the right)/2D_KNIGHT__Run_007.png');
  
  img20 = [];
  img20[0] = loadImage('Warrior Knight_Running (To the left)/2D_KNIGHT__Run_000.png');
  img20[1] = loadImage('Warrior Knight_Running (To the left)/2D_KNIGHT__Run_001.png');
  img20[2] = loadImage('Warrior Knight_Running (To the left)/2D_KNIGHT__Run_002.png');
  img20[3] = loadImage('Warrior Knight_Running (To the left)/2D_KNIGHT__Run_003.png');
  img20[4] = loadImage('Warrior Knight_Running (To the left)/2D_KNIGHT__Run_004.png');
  img20[5] = loadImage('Warrior Knight_Running (To the left)/2D_KNIGHT__Run_005.png');
  img20[6] = loadImage('Warrior Knight_Running (To the left)/2D_KNIGHT__Run_006.png');
  img20[7] = loadImage('Warrior Knight_Running (To the left)/2D_KNIGHT__Run_007.png');
  
  img21 = [];
  img21[0] = loadImage('Warrior Knight__Idle (Left Side)/2D_KNIGHT__Idle_000.png'
);
  img21[1] = loadImage('Warrior Knight__Idle (Left Side)/2D_KNIGHT__Idle_001.png'
);
  img21[2] = loadImage('Warrior Knight__Idle (Left Side)/2D_KNIGHT__Idle_002.png'
);
  img21[3] = loadImage('Warrior Knight__Idle (Left Side)/2D_KNIGHT__Idle_003.png'
);
  img21[4] = loadImage('Warrior Knight__Idle (Left Side)/2D_KNIGHT__Idle_004.png'
);
  img21[5] = loadImage('Warrior Knight__Idle (Left Side)/2D_KNIGHT__Idle_005.png'
);
  img21[6] = loadImage('Warrior Knight__Idle (Left Side)/2D_KNIGHT__Idle_006.png'
);
  img21[7] = loadImage('Warrior Knight__Idle (Left Side)/2D_KNIGHT__Idle_007.png'
);
  
  img22 = [];
  img22[0] = loadImage('Warrior Knight Death/2D_KNIGHT__Die_000.png');
  img22[1] = loadImage('Warrior Knight Death/2D_KNIGHT__Die_001.png');
   img22[2] = loadImage('Warrior Knight Death/2D_KNIGHT__Die_002.png');
  img22[3] = loadImage('Warrior Knight Death/2D_KNIGHT__Die_003.png');
  img22[4] = loadImage('Warrior Knight Death/2D_KNIGHT__Die_004.png');
   img22[5] = loadImage('Warrior Knight Death/2D_KNIGHT__Die_005.png');
   img22[6] = loadImage('Warrior Knight Death/2D_KNIGHT__Die_006.png');
  
  
  //Sons
  song = loadSound("Final Fantasy VII World Map Theme.mp3");
  song2 = loadSound("Final Fantasy VII Cursor Sound Effect.mp3");
  song3 = loadSound("Laugh.mp3");
  song4 = loadSound("Kingdom Hearts II OST Sinister Sundown.mp3");
  song5 = loadSound("Kingdom Hearts II OST - The Escapade.mp3");
  song6 = loadSound("Final Fantasy VII Sound Effects - Save and Load.mp3");
  song7 = loadSound("Kingdom Hearts II OST - The Afternoon Streets.mp3");

}
  
function setup(){
  
  createCanvas(400,400);
  if(tela == 1){
   song.loop()

  }
    if(song2.isPlaying()) {
song2.stop();
    }else
  
    if(song6.isPlaying()){
      song6.stop();
    }
  if(myBoolean == false){
    loop();
  }else
    noLoop();
  frameRate(30)
}

function mouseClicked(){
  // Opção "Voltar"
  if(tela == 2 || tela == 2.1 || tela == 2.2){
    if(mouseX > 0 && mouseX < 0 + 100 && mouseY > 0 && mouseY < 0 + altura){
      noStroke();   
      fill('rgba(0,255,0, 0.40)')
      rect(0, 0, 100, altura, 15);
      if (tela == 2){
        song4.stop()
        song.loop();
        tela = 1
      }else
      if (tela == 2.1 || tela == 2.2){
        tela -= 0.1
      }
    }
  }
  
  //Opção "Continuar"
  if(tela == 2 || tela == 2.1){
    if(mouseX > 300 && mouseX < 300 + 100 && mouseY > 300 && mouseY < 300 + altura){
      noStroke();   
      fill('rgba(0,255,0, 0.40)')
      rect(300, 300, 100, altura, 15);
        song2.play();
        tela = tela + 0.1;
    }
  }
   //Tela de continue (Tela 2.4)
  if(tela == 2.4){
    if(mouseX > 300 && mouseX < xEscolha1_Tela_de_continue + largura2 && mouseY > yEscolha1_Tela_de_continue && mouseY < yEscolha_Tela_de_continue + altura){
      song2.play();
      tela = 2.3;
      
    }
    if(mouseX > xEscolha2_Tela_de_continue && mouseX < xEscolha2_Tela_de_continue + largura2 && mouseY > yEscolha_Tela_de_continue && mouseY < yEscolha_Tela_de_continue + altura){
      song2.play();
      tela = 1
    }
  }
}
      
 
  
function draw() {
  
  // Tela do menu
  if (tela == 1){
    createCanvas(400,400);
    image(img,0,0);
    image(img2,0,300);
    image(img3,310,280)
    textAlign(CENTER);
    textSize(30);
    textStyle(BOLDITALIC);
  
    noStroke();
    fill('rgba(0,255,0, 0.10)');
    rect(2, 30, 380, altura, 15)
  
    fill(400);
    noStroke();
    text("Warrior Knight - Time Run", 190, 65);
  
    // Menu com três opções
    // Iniciar o Jogo
    textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
  
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect(xMenu, yMenu1, largura, altura, 15)
    fill(400);
    noStroke();
    text("Iniciar", 190, 160)
  
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
      stroke('rgb(0,255,0)');
      strokeWeight(4);    
      fill('rgba(0,255,0, 0.45)');
      rect(xMenu, yMenu1, largura, altura, 15);
      if (mouseIsPressed) {
        song2.play();
        song4.loop();
        tela = 2;
    }
  }
  
  // Informaçõe sobre o jogo
    noStroke();
    fill('rgba(0,255,0, 0.35)');
    rect(xMenu, yMenu2, largura, altura, 15)
    fill(400);
    noStroke();
    text("Instruções", 190, 250)
  
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
      stroke('rgb(0,255,0)');
      strokeWeight(4);    
      fill('rgba(0,255,0, 0.40)');
      rect(xMenu, yMenu2, largura, altura, 15);
      if (mouseIsPressed) {
        song2.play();
        song3.play();
        tela = 3;
    }
  }
  
    // Créditos do jogo
    noStroke();
    fill('rgba(0,255,0, 0.35)');
    rect(xMenu, yMenu3, largura, altura, 15)
    fill(400);
    noStroke();
    text("Créditos", 190, 340)
  
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
      stroke('rgb(0,255,0)');
      strokeWeight(4);    
      fill('rgba(0,255,0, 0.40)');
      rect(xMenu, yMenu3, largura, altura, 15);
  
      fill(400);
      noStroke();
      text("Créditos", 190, 340)
      if (mouseIsPressed) {
        song2.play();
        tela = 4;
    }
  }
    
    fill(400);
    rect(297, 230, 100, altura, 15)
  
    textSize(18);
    fill(20);
    strokeWeight(0.5);
  
    textAlign(CENTER, TOP);
    text('Clique com', 147, 235, width);

    textAlign(CENTER, CENTER);
    text('o mouse!', 147, 265, width)
  }else
   
    //Introdução (parte 1)
  if(tela == 2){
    song.stop();
    image(img,0,0);
    image(img7,0,130);
      
    fill(400);
    rect(95, 53, 300, 110, 15)
  
    textSize(17)
    fill(20)
    text(texto.substring(0,contador_texto), 100, -44, 290, 300);
    if(tempo_texto > 2.5){
      contador_texto++
      tempo_texto = 0
    }
    tempo_texto++
   
     //Comando "Voltar"
    noStroke();
    fill('rgba(0,255,0, 0.25)');
    rect(0, 0, 100, altura, 15)
    
    textAlign(CENTER);
    textSize(20);
    textStyle(NORMAL)
    fill(400);
    text("Voltar", 50, 30)
    
    // Comando Continuar
    noStroke();
    fill('rgba(0,255,0, 0.25)');
    rect(300, 300, 100, altura, 15)
    
      textAlign(CENTER);
      textSize(20);
      textStyle(NORMAL)
      fill(400);
      text("Continuar", 348, 325) 
    
  }else
    
    //Introdução (parte 2)
  if(tela == 2.1){
      image(img,0,0);
      image(img7,0,130);
      
      fill(400);
      rect(95, 53, 300, 110, 15)
  
      textSize(16)
      fill(20)
      text(texto2.substring(0,contador_texto2), 100, -44, 290, 300);
      if(tempo_texto2 > 2.5){
        contador_texto2++
        tempo_texto2 = 0
    }
    tempo_texto2++ 
   
     //Comando "Voltar"
      noStroke();
      fill('rgba(0,255,0, 0.25)');
      rect(0, 0, 100, altura, 15)
    
      textAlign(CENTER);
      textSize(20);
      textStyle(NORMAL)
      fill(400);
      text("Voltar", 50, 30)  
      
    
    // Comando Continuar
     
    noStroke();
    fill('rgba(0,255,0, 0.25)');
    rect(300, 300, 100, altura, 15)
    
    textAlign(CENTER);
    textSize(20);
    textStyle(NORMAL)
    fill(400);
    text("Continuar", 348, 325) 
    
    }else
  
    //Introdução (parte 3)
  if(tela == 2.2){
    image(img,0,0);
      image(img7,0,130);
      
      fill(400);
      rect(95, 53, 300, 110, 15)
  
      textSize(16)
      fill(20)
      text(texto3.substring(0,contador_texto3), 100, -44, 290, 300);
      if(tempo_texto3 > 2.5){
        contador_texto3++
        tempo_texto3 = 0
    }
    tempo_texto3++ 
   
     //Comando "Voltar"
      noStroke();
      fill('rgba(0,255,0, 0.25)');
      rect(0, 0, 100, altura, 15)
    
      textAlign(CENTER);
      textSize(20);
      textStyle(NORMAL)
      fill(400);
      text("Voltar", 50, 30)  
      
    
    // Comando Continuar
     
    noStroke();
    fill('rgba(0,255,0, 0.25)');
    rect(300, 300, 100, altura, 15)
    
    textAlign(CENTER);
    textSize(20);
    textStyle(NORMAL)
    fill(400);
    text("Continuar", 348, 325) 
  
  }else
     
    //Fase 1 (Gameplay)
  if(tela == 2.3){
    tempo++
    tempo2++
    tempo3++
    time_cont++
    let d = dist(X_personagem+35,Y_personagem+35,X_fireball,Y_fireball);
    let d2 = dist(X_personagem+35,Y_personagem+35,X_orbe,280);
    //Cenário fase 1
    createCanvas(790,450);
    background('rgba(0,255,0, 0.25)');
    image(img8,0,0);
    image(img9,30,300);
    var xBloco_Stage = 155;
    for(let cont = 0;cont < 1;cont++){
        image(img10,xBloco_Stage,300);
        xBloco_Stage = xBloco_Stage + 125;
      
    }
    Y_fireball_inicial = 70
    image(img11,280,300);
    image(img12,230,0);
    image(img13,230,60);
    fill(255, 204, 0);
    stroke('red');
    strokeWeight(4);
    ellipse(X_fireball,Y_fireball,20,20);
    Y_fireball = Y_fireball + velocidadeY 
      if(Y_fireball > 285){
      velocidadeY = -2
    }
    if(Y_fireball < 70){
      velocidadeY = 2
    }
    image(img9,405,300);
    image(img15,530,300);
    image(img16,X_orbe-95,180,200,200);
    image(img17,230,200)
    if(keyIsDown(RIGHT_ARROW)){
     myBoolean = false;
      image(img19[contador2%8],X_personagem,Y_personagem,Raio_personagem,Raio_personagem);
      contador2++
      X_personagem += 2.5;
    }else
      if(myBoolean == false){
    
          image(img18[contador%8],X_personagem,Y_personagem,Raio_personagem,Raio_personagem);
        if(tempo > 6){
          contador++
          tempo = 0
    }
      }
    if(keyIsDown(LEFT_ARROW)){
      myBoolean = true;
      if(myBoolean == true){
        image(img20[contador3%8],X_personagem,Y_personagem,Raio_personagem,Raio_personagem);
        contador3++
        X_personagem -= 2.5;
    }
  }
    if(myBoolean == true){
    image(img21[contador4%8],X_personagem,Y_personagem,Raio_personagem,Raio_personagem);
    if(tempo2 > 6){
       contador4++
       tempo2 = 0
    }
    }

    //Condição de queda
    if(X_personagem >= 630 || X_personagem <= -16){
      Y_personagem += 2
    }
    //Condição de colisão (Obstáculo)
    noStroke();
    fill(255); 
    ellipse(X_orbe,280,2,2);
    if(d <= 25){
      image(img22[contador5%7],X_personagem,Y_personagem,Raio_personagem,Raio_personagem)
      contador5++
    }
        
     //Condição de colisão (Objetivo)
    var cont_objtv = 0   
   if(d2 <= 15){
    for(cont_objtv = 0; cont_objtv < 10; cont_objtv++){
        
      X_orbe = random(35,580)
  }      
     }
    if(cont_objtv > 9){
       cont_objetivo++
       song6.play();
    }

    if(cont_objetivo > 9){
      tela = 2.5
      song5.stop();
      cont_objetivo = 0
      X_personagem = 30;
      Y_personagem = 255;
      Y_fireball = 70
      contador = 0
      contador2 = 0
      contador3 = 0
      contador4 = 0
      contador5 = 0
    }
   
    //Condições de morte
      if(contador5 == 3){
        song5.stop()
        tela = 2.4
        X_personagem = 30;
        Y_personagem = 255;
        contador = 0
        contador2 = 0
        contador3 = 0
        contador4 = 0
        contador5 = 0
        cont_objetivo = 0
        time_cont = 0
        seconds_cont = 0
    }
   if(Y_personagem > 270){
     song5.stop(); 
     tela = 2.4;
     X_personagem = 30;
     Y_personagem = 255;
      contador = 0
      contador2 = 0
      contador3 = 0
      contador4 = 0
      contador5 = 0
      cont_objetivo = 0
      time_cont = 0
      seconds_cont = 0
  
   }
    
    //Tempo
   textSize(50);
    fill(51);
    seconds_cont = parseInt(time_cont/30)
    text(seconds_cont, 50, 60)
  }
  
  //Telas de derrota:
  
  //Tela de Game Over da fase 1 (Perdeu)
  if(tela == 2.4){
    createCanvas(600,600);
    image(img5,0,0);
    image(img7,0,130);
     textSize(40)
        
    textAlign(CENTER, TOP);
    text('Você foi derrotado!', 50, 60, width);
    
    textSize(35)
  
    textAlign(CENTER, CENTER);
    text('Não desista!!', 50, 150, width)
    
    textSize(25)
  
      textAlign(CENTER, BASELINE);
    text('Deseja tentar novamente?', 50, 220, width)
    
     textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
  
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect(xEscolha1_Tela_de_continue, yEscolha_Tela_de_continue,100,altura);
    fill(400);
    noStroke();
    text("Sim!", 250, 350);
    
    if(mouseIsPressed){
       if(mouseX > xEscolha1_Tela_de_continue && mouseX < xEscolha1_Tela_de_continue + largura2 && mouseY > yEscolha_Tela_de_continue && mouseY < yEscolha_Tela_de_continue + altura){
      song4.stop();
      song2.play();
      song5.loop();
      tela = 2.3;
       }
    }
    
    textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
  
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect(xEscolha2_Tela_de_continue, yEscolha_Tela_de_continue,100,altura);
    fill(400);
    noStroke();
    text("Não...",430, 350);
    if(mouseIsPressed){
      if(mouseX > xEscolha2_Tela_de_continue && mouseX < xEscolha2_Tela_de_continue + largura2 && mouseY > yEscolha_Tela_de_continue && mouseY < yEscolha_Tela_de_continue + altura){
        song2.play();
        song4.stop();
        tela = 1;
        song.loop(); 
        X_personagem = 30;
        Y_personagem = 255;
        contador = 0
        contador2 = 0
        contador3 = 0
        contador4 = 0
        contador5 = 0
        cont_objetivo = 0
      }
    }
  }
  
  //Tela de Game Over da fase 2 (Perdeu)
  if(tela == 2.41){
     createCanvas(600,600);
    image(img5,0,0);
    image(img7,0,130);
     textSize(40)
        
    textAlign(CENTER, TOP);
    text('Você foi derrotado!', 50, 60, width);
    
    textSize(35)
  
    textAlign(CENTER, CENTER);
    text('Não desista!!', 50, 150, width)
    
    textSize(25)
  
      textAlign(CENTER, BASELINE);
    text('Deseja tentar novamente?', 50, 220, width)
    
     textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
  
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect(xEscolha1_Tela_de_continue, yEscolha_Tela_de_continue,100,altura);
    fill(400);
    noStroke();
    text("Sim!", 250, 350);
    
    if(mouseIsPressed){
       if(mouseX > xEscolha1_Tela_de_continue && mouseX < xEscolha1_Tela_de_continue + largura2 && mouseY > yEscolha_Tela_de_continue && mouseY < yEscolha_Tela_de_continue + altura){
      song4.stop();
      song2.play();
      song5.loop();
      tela = 2.6;
       }
    }
    
    textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
  
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect(xEscolha2_Tela_de_continue, yEscolha_Tela_de_continue,100,altura);
    fill(400);
    noStroke();
    text("Não...",430, 350);
    if(mouseIsPressed){
      if(mouseX > xEscolha2_Tela_de_continue && mouseX < xEscolha2_Tela_de_continue + largura2 && mouseY > yEscolha_Tela_de_continue && mouseY < yEscolha_Tela_de_continue + altura){
        song2.play();
        song4.stop();
        tela = 1;
        song.loop(); 
        X_personagem = 30;
        Y_personagem = 255;
        contador = 0
        contador2 = 0
        contador3 = 0
        contador4 = 0
        contador5 = 0
        cont_objetivo2 = 0
      }
    }
  }
  
  //Tela de Game Over da fase 3 (Perdeu)
  if(tela == 2.42){
    createCanvas(600,600);
    image(img5,0,0);
    image(img7,0,130);
     textSize(40)
        
    textAlign(CENTER, TOP);
    text('Você foi derrotado!', 50, 60, width);
    
    textSize(35)
  
    textAlign(CENTER, CENTER);
    text('Não desista!!', 50, 150, width)
    
    textSize(25)
  
      textAlign(CENTER, BASELINE);
    text('Deseja tentar novamente?', 50, 220, width)
    
     textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
  
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect(xEscolha1_Tela_de_continue, yEscolha_Tela_de_continue,100,altura);
    fill(400);
    noStroke();
    text("Sim!", 250, 350);
    
    if(mouseIsPressed){
       if(mouseX > xEscolha1_Tela_de_continue && mouseX < xEscolha1_Tela_de_continue + largura2 && mouseY > yEscolha_Tela_de_continue && mouseY < yEscolha_Tela_de_continue + altura){
      song4.stop();
      song2.play();
      song5.loop();
      tela = 2.7;
       }
    }
    
    textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
  
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect(xEscolha2_Tela_de_continue, yEscolha_Tela_de_continue,100,altura);
    fill(400);
    noStroke();
    text("Não...",430, 350);
    if(mouseIsPressed){
      if(mouseX > xEscolha2_Tela_de_continue && mouseX < xEscolha2_Tela_de_continue + largura2 && mouseY > yEscolha_Tela_de_continue && mouseY < yEscolha_Tela_de_continue + altura){
        song2.play();
        song4.stop();
        tela = 1;
        song.play(); 
        X_personagem = 30;
        Y_personagem = 255;
        contador = 0
        contador2 = 0
        contador3 = 0
        contador4 = 0
        contador5 = 0
        cont_objetivo3 = 0
      }
    }
  }
  
    //Telas de vitória:
  
  //Tela de conclusão da fase 1, parte 1 (Ganhou)
  if(tela == 2.5){
    createCanvas(600,600);
    image(img5,0,0);
     textSize(40)
        
    textAlign(CENTER, TOP);
    text('Parabéns, você conseguiu!', 20, 60, width);
    
    textSize(30)
  
    textAlign(CENTER, CENTER);
    text('Você concluiu a fase em ' + seconds_cont + ' segundos!' , 20, 180, width)
    
    textSize(24)
  
      textAlign(CENTER, BASELINE);
    text('Agora, o grande Merlin te ensinará algo interessante!', 5, 260, width)
    
     textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
  
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect(105, 375, 400, altura);
    fill(400);
    noStroke();
    text("Seguir para a explicação", 300, 410);
    
    if(mouseIsPressed){
       if(mouseX > 105 && mouseX < 105 + 400 && mouseY > 375 && mouseY < 375 + altura){
      song2.play();
      song3.play();
      tela = 2.51;
       }
    }
  }
  
  //Tela de conclusão da fase 1, parte 2 (Ganhou)
  if(tela == 2.51){
    createCanvas(600,600);
    image(img5,0,0);
    image(img7,0,130);
      fill(400);
    rect(150, 70, 350, 180, 15)
  
    textSize(20)
    fill(30)
    text(texto4.substring(0,contador_texto4), 170, 90, 310, 320);
    if(tempo_texto4 > 3){
      contador_texto4++
      tempo_texto4 = 0
    }
    tempo_texto4++
    
     textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
  
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect(145, yEscolha_Tela_de_continue, 430, altura);
    fill(400);
    noStroke();
    text("Seguir para a próxima fase", 360, 350);
    
    if(mouseIsPressed){
       if(mouseX > 145 && mouseX < 145 + 430 && mouseY > yEscolha_Tela_de_continue && mouseY < yEscolha_Tela_de_continue + altura){
      song2.play();
      song5.loop();
      tela = 2.6;
       }
    }
  }
  
  //Tela de conclusão da fase 2, parte 1 (Ganhou)
  if(tela == 2.52){
    createCanvas(600,600);
    image(img5,0,0);
     textSize(40)
        
    textAlign(CENTER, TOP);
    text('Parabéns, você conseguiu!', 20, 60, width);
    
    textSize(26)
  
    textAlign(CENTER, CENTER);
    text('Você concluiu a segunda fase em ' + seconds_cont2 + ' segundos!' , 20, 180, width)
    
    textSize(22)
  
      textAlign(CENTER, BASELINE);
    text('O grande Merlin tem outra explicação preparada para você!', 5, 260, width)
    
     textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
  
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect(105, 375, 400, altura);
    fill(400);
    noStroke();
    text("Seguir para a explicação", 300, 410);
    
    if(mouseIsPressed){
       if(mouseX > 105 && mouseX < 105 + 400 && mouseY > 375 && mouseY < 375 + altura){
      song2.play();
      song3.play();
      tela = 2.53;
       }
    }
  }
  
  //Tela de conclusão da fase 2, parte 2 (Ganhou)
  if(tela == 2.53){
    createCanvas(600,600);
    image(img5,0,0);
    image(img7,0,130);
      fill(400);
    rect(150, 70, 400, 180, 15)
  
    textSize(20)
    fill(30)
    text(texto5.substring(0,contador_texto5), 170, 90, 360, 320);
    if(tempo_texto5 > 3){
      contador_texto5++
      tempo_texto5 = 0
    }
    tempo_texto5++
    
     textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
  
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect(145, yEscolha_Tela_de_continue, 430, altura);
    fill(400);
    noStroke();
    text("Seguir para a última fase!", 360, 350);
    
    if(mouseIsPressed){
       if(mouseX > 145 && mouseX < 145 + 430 && mouseY > yEscolha_Tela_de_continue && mouseY < yEscolha_Tela_de_continue + altura){
      song2.play();
      song5.loop();
      tela = 2.7;
       }
    }
  }
  
  //Tela de conclusão da fase 3, parte 1 (Ganhou)
  if(tela == 2.54){
    createCanvas(600,600);
    image(img5,0,0);
     textSize(40)
        
    textAlign(CENTER, TOP);
    text('Parabéns, você conseguiu!', 20, 60, width);
    
    textSize(26)
  
    textAlign(CENTER, CENTER);
    text('Você concluiu a última fase em ' + seconds_cont3 + ' segundos!' , 20, 180, width)
    
    textSize(22)
  
      textAlign(CENTER, BASELINE);
    text('O grande Merlin tem uma última mensagem para você!', 5, 260, width)
    
     textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
  
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect(105, 375, 400, altura);
    fill(400);
    noStroke();
    text("Seguir para a última lição", 300, 410);
    
    if(mouseIsPressed){
       if(mouseX > 105 && mouseX < 105 + 400 && mouseY > 375 && mouseY < 375 + altura){
      song2.play();
      song3.play();
      tela = 2.55;
       }
    }
  }
  
  //Tela de conclusão da fase 3, parte 2 (Ganhou)
  if(tela == 2.55){
      var minutes_fase3 = parseInt((seconds_cont + seconds_cont2 + seconds_cont3)/60)
      var restos_secs_fase3 = parseInt((seconds_cont+seconds_cont2+seconds_cont3)%60);
      var texto6 = 'Por fim, vamos treinar um pouco! Você concluiu as fases 1, 2 e 3 em ' + (seconds_cont + seconds_cont2+seconds_cont3) + ' segundos! Se nós dividirmos isso por 60, ficamos com ' + minutes_fase3 + " minuto(s) e " + restos_secs_fase3 + " segundos!"
    
    createCanvas(600,600);
    image(img5,0,0);
    image(img7,0,130);
      fill(400);
    rect(156, 70, 400, 180, 15)
  
    textSize(20)
    fill(30)
    text(texto6.substring(0,contador_texto6), 170, 90, 360, 320);
    if(tempo_texto6 > 3){
      contador_texto6++
      tempo_texto6 = 0
    }
    tempo_texto6++
    
     textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
  
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect(280, yEscolha_Tela_de_continue, 150, altura);
    fill(400);
    noStroke();
    text("Concluir", 360, 350);
    
    if(mouseIsPressed){
       if(mouseX > 145 && mouseX < 145 + 430 && mouseY > yEscolha_Tela_de_continue && mouseY < yEscolha_Tela_de_continue + altura){
      song2.play();
      tela = 2.8;
      song7.loop();
       }
    }
  }
  
  //Fase 2 (Gameplay)
  if(tela == 2.6){
    tempo++
    tempo2++
    tempo3++
    time_cont2++
    let d = dist(X_personagem+35,Y_personagem+35,X_fireball,Y_fireball);
    let d2 = dist(X_personagem+35,Y_personagem+35,X_orbe,280);
    let d3 = dist(X_personagem+35,Y_personagem+35,X_fireball_2,Y_fireball_2);
    //Cenário fase 2
    createCanvas(790,450);
    background('rgba(0,255,0, 0.25)');
    image(img8,0,0);
    image(img9,30,300);
    var xBloco_Stage2 = 155;
    for(let cont = 0;cont < 1;cont++){
        image(img10,xBloco_Stage2,300);
        xBloco_Stage2 = xBloco_Stage2 + 125;
      
    }
    image(img11,280,300);
    image(img12,230,0);
    image(img12,350,0);
    image(img13,230,60);
    image(img13,350,60);
    fill(255, 204, 0);
    stroke('red');
    strokeWeight(4);
    ellipse(X_fireball,Y_fireball,20,20);
    Y_fireball = Y_fireball + velocidadeY 
    Y_fireball_2 = Y_fireball_2 + velocidadeY_2
      if(Y_fireball >= 285){
      velocidadeY = -3.2
    }
    if(Y_fireball < 70){
      velocidadeY = 3.2
    }
    if(Y_fireball_2 >= 285){
      velocidadeY_2 = -3.2
    }
    if(Y_fireball_2 < 70){
      velocidadeY_2 = 3.2
    }
    fill(255, 204, 0);
    stroke('red');
    strokeWeight(4);
    ellipse(X_fireball_2,Y_fireball_2,20,20);
  
    image(img9,405,300);
    image(img15,530,300);
    image(img16,X_orbe-95,180,200,200);
    image(img17,230,200);
    image(img17,350,200);
    
    if(keyIsDown(RIGHT_ARROW)){
     myBoolean = false;
      image(img19[contador2%8],X_personagem,Y_personagem,Raio_personagem,Raio_personagem);
      contador2++
      X_personagem += 2.5;
    }else
      if(myBoolean == false){
    
          image(img18[contador%8],X_personagem,Y_personagem,Raio_personagem,Raio_personagem);
        if(tempo > 6){
          contador++
          tempo = 0
    }
      }
    if(keyIsDown(LEFT_ARROW)){
      myBoolean = true;
      if(myBoolean == true){
        image(img20[contador3%8],X_personagem,Y_personagem,Raio_personagem,Raio_personagem);
        contador3++
        X_personagem -= 2.5;
    }
  }
    if(myBoolean == true){
    image(img21[contador4%8],X_personagem,Y_personagem,Raio_personagem,Raio_personagem);
    if(tempo2 > 6){
       contador4++
       tempo2 = 0
    }
    }

    //Condição de queda
    if(X_personagem >= 630 || X_personagem <= -16){
      Y_personagem += 2
    }
    //Condição de colisão (Obstáculo)
    noStroke();
    fill(255); 
    ellipse(X_orbe,280,2,2);
    if(d <= 25 || d3 <= 25){
      image(img22[contador5%7],X_personagem,Y_personagem,Raio_personagem,Raio_personagem)
      contador5++
    }
        
     //Condição de colisão (Objetivo)
    var cont_objtv2 = 0
    if(d2 <= 15){
    for(cont_objtv2 = 0; cont_objtv2 < 10; cont_objtv2++){
        
      X_orbe = random(35,580)
  }      
     }
     if(cont_objtv2 > 9){
       cont_objetivo2++
       song6.play();
    }
    if(cont_objetivo2 == 10){
      tela = 2.52;
      song5.stop();
      cont_objetivo2 = 0;
      X_personagem = 10;
      Y_fireball = 70;
      Y_fireball_2 = 285;
    }
   
    //Condições de morte
      if(contador5 == 3){
        song5.stop()
        tela = 2.41;
        X_personagem = 30;
        Y_personagem = 255;
        contador = 0
        contador2 = 0
        contador3 = 0
        contador4 = 0
        contador5 = 0
        cont_objetivo2 = 0
        time_cont2 = 0
        seconds_cont2 = 0
    }
   if(Y_personagem > 270){
     song5.stop(); 
     tela = 2.41;
     X_personagem = 30;
     Y_personagem = 255;
      contador = 0
      contador2 = 0
      contador3 = 0
      contador4 = 0
      contador5 = 0
      cont_objetivo2 = 0
      time_cont2 = 0
      seconds_cont2 = 0
  
   }
    
    //Tempo
   textSize(50);
    fill(51);
    seconds_cont2 = parseInt(time_cont2/30);
    text(seconds_cont2, 50, 60);

  }
  
  //Fase 3 (Gameplay)
  if(tela == 2.7){
    tempo++
    tempo2++
    tempo3++
    time_cont3++
    let d = dist(X_personagem+35,Y_personagem+35,X_fireball,Y_fireball);
    let d2 = dist(X_personagem+35,Y_personagem+35,X_orbe,280);
    let d3 = dist(X_personagem+35,Y_personagem+35,X_fireball_2,Y_fireball_2);
    let d4 = dist(X_personagem+35,Y_personagem+35,X_fireball_3,Y_fireball);
    let d5 = dist(X_personagem+35,Y_personagem+35,X_fireball_4,Y_fireball_2);
    //Cenário fase 2
    createCanvas(790,450);
    background('rgba(0,255,0, 0.25)');
    image(img8,0,0);
    image(img9,30,300);
    var xBloco_Stage3 = 155;
    for(let cont = 0;cont < 1;cont++){
        image(img10,xBloco_Stage3,300);
        xBloco_Stage3 = xBloco_Stage3 + 125;
      
    }
    image(img11,280,300);
    image(img12,110,0);
    image(img12,230,0);
    image(img12,350,0);
    image(img12,470,0);
    image(img13,110,60);
    image(img13,230,60);
    image(img13,350,60);
    image(img13,470,60);
    fill(255, 204, 0);
    stroke('red');
    strokeWeight(4);
    ellipse(X_fireball,Y_fireball,20,20);
    Y_fireball = Y_fireball + velocidadeY 
    Y_fireball_2 = Y_fireball_2 + velocidadeY_2
      if(Y_fireball >= 285){
      velocidadeY = -3.5
    }
    if(Y_fireball < 70){
      velocidadeY = 3.5
    }
    if(Y_fireball_2 >= 285){
      velocidadeY_2 = -3.5
    }
    if(Y_fireball_2 < 70){
      velocidadeY_2 = 3.5
    }
    fill(255, 204, 0);
    stroke('red');
    strokeWeight(4);
    ellipse(X_fireball_2,Y_fireball_2,20,20);
    
    fill(255, 204, 0);
    stroke('red');
    strokeWeight(4);
    ellipse(X_fireball_3,Y_fireball,20,20);

    fill(255, 204, 0);
    stroke('red');
    strokeWeight(4);
    ellipse(X_fireball_4,Y_fireball_2,20,20);
  
    image(img9,405,300);
    image(img15,530,300);
    image(img16,X_orbe-95,180,200,200);
    image(img17,110,200);
    image(img17,230,200);
    image(img17,350,200);
    image(img17,470,200);
    
     if(keyIsDown(RIGHT_ARROW)){
     myBoolean = false;
      image(img19[contador2%8],X_personagem,Y_personagem,Raio_personagem,Raio_personagem);
      contador2++
      X_personagem += 2.5;
    }else
      if(myBoolean == false){
    
          image(img18[contador%8],X_personagem,Y_personagem,Raio_personagem,Raio_personagem);
        if(tempo > 6){
          contador++
          tempo = 0
    }
      }
    if(keyIsDown(LEFT_ARROW)){
      myBoolean = true;
      if(myBoolean == true){
        image(img20[contador3%8],X_personagem,Y_personagem,Raio_personagem,Raio_personagem);
        contador3++
        X_personagem -= 2.5;
    }
  }
    if(myBoolean == true){
    image(img21[contador4%8],X_personagem,Y_personagem,Raio_personagem,Raio_personagem);
    if(tempo2 > 6){
       contador4++
       tempo2 = 0
    }
    }
    

    //Condição de queda
    if(X_personagem >= 630 || X_personagem <= -16){
      Y_personagem += 2
    }
    //Condição de colisão (Obstáculo)
    noStroke();
    fill(255); 
    ellipse(X_orbe,280,2,2);
    if(d <= 25 || d3 <= 25 || d4 <= 25 || d5 <= 25){
      image(img22[contador5%7],X_personagem,Y_personagem,Raio_personagem,Raio_personagem)
      contador5++
    }
        
     //Condição de colisão (Objetivo)
    var cont_objtv3 = 0
    if(d2 <= 15){
    for(cont_objtv3 = 0; cont_objtv3 < 10; cont_objtv3++){
        
      X_orbe = random(35,580)
  }      
     }
     if(cont_objtv3 > 9){
       cont_objetivo3++
       song6.play();
    }
    if(cont_objetivo3 == 20){
      tela = 2.54;
      song5.stop();
      cont_objetivo3 = 0;
      Y_fireball = 70;
      Y_fireball_2 = 285;
    }
   
    //Condições de morte
      if(contador5 == 3){
        song5.stop()
        tela = 2.42;
        X_personagem = 30;
        Y_personagem = 255;
        contador = 0
        contador2 = 0
        contador3 = 0
        contador4 = 0
        contador5 = 0
        cont_objetivo3 = 0
        time_cont3 = 0
        seconds_cont3 = 0
    }
   if(Y_personagem > 270){
     song5.stop(); 
     tela = 2.42;
     X_personagem = 30;
     Y_personagem = 255;
      contador = 0
      contador2 = 0
      contador3 = 0
      contador4 = 0
      contador5 = 0
      cont_objetivo3 = 0
      time_cont3 = 0
      seconds_cont3 = 0
  
   }
    
    //Tempo
   textSize(50);
    fill(51);
    seconds_cont3 = parseInt(time_cont3/30);
    text(seconds_cont3, 50, 60);

  }
  
  //Tela de conclusão do jogo (Ganhou)
  if(tela == 2.8){
    createCanvas(600,600);
    image(img5,0,0);
    textSize(36);
    fill(400)
    text(texto7.substring(0,contador_texto7),20, 60, 570, 500);
    if(tempo_texto7 > 2.5){
      contador_texto7++
      tempo_texto7 = 0
    }
    tempo_texto7++
    if(contador_texto7 >= 81){
      textSize(40)
      fill(400)
      text(texto8.substring(0,contador_texto8),60, 260, 500, 500);
      if(tempo_texto8 > 2.5){
        contador_texto8++
        tempo_texto8 = 0
      }
    tempo_texto8++
    }
    if(contador_texto8 >= 19){
      textSize(36)
      fill(400)
      text(texto9.substring(0,contador_texto9), 40, 340, 550, 500);
      if(tempo_texto9 > 2.5){
        contador_texto9++
        tempo_texto9 = 0
    }
      tempo_texto9++
    }
    //Escolha: Sim
    if(contador_texto9 >= 23){
    textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
    
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect(100, 416,100,altura);
    fill(400);
    noStroke();
    text("Sim!", 150, 450);
    
    if(mouseIsPressed){
       if(mouseX > 100 && mouseX < 100 + largura2 && mouseY > 425 && mouseY < 425 + altura){
      //Determinar o som a parar
      song7.stop();
      song2.play();
      song5.loop();
      tela = 2.3;
       }
    }
    //Escolha: Não
    textAlign(CENTER);
    textSize(35);
    textStyle(NORMAL)
  
    noStroke();
    fill('rgba(0,255,0, 0.40)');
    rect( xEscolha2_Tela_de_continue, 416,100,altura);
    fill(400);
    noStroke();
    text("Não",430, 450);
    if(mouseIsPressed){
      if(mouseX > xEscolha2_Tela_de_continue && mouseX < xEscolha2_Tela_de_continue + largura2 && mouseY > 425 && mouseY < 425 + altura){
        song2.play();
        song7.stop();
        tela = 1;
        song.loop(); 
        X_personagem = 30;
        Y_personagem = 255;
        contador = 0
        contador2 = 0
        contador3 = 0
        contador4 = 0
        contador5 = 0
        cont_objetivo = 0
        cont_ojetivo2 = 0
        cont_objetivo3 = 0
      }
    }
    }
  }
  
  //Instruções (Menu)
  if(tela == 3){
    createCanvas(600,600);
    image(img5,0,0);
    image(img7,0,130);
    
    //Texto parte 1
    textSize(22)
        
    textAlign(CENTER, TOP);
    text('Público alvo:', 50, 60, width);
    
    textSize(20)
  
    textAlign(CENTER, CENTER);
    text('Crianças do 2° ano do ensino fundamental em diante.', 50, 120, width)
  
    textAlign(CENTER, BASELINE);
    text('Disciplina: Matemática', 50, 150, width)
    
    //Texto parte 2
    textSize(20)
        
    textAlign(CENTER);
    text('(EF02MA19) -- Qual o objetivo do jogo?', 335, 300);
  
    text('De acordo com o grande Feiticeiro Merlin, o objetivo do jogo é testar suas habilidades e medir a duração de um intervalo de tempo por meio de relógio digital, registrando o horário do início e do fim do intervalo!', 140, 330, 390, 400);
    
    //Opção "Voltar"
    noStroke();
    fill('rgba(0,255,0, 0.25)');
    rect(0, 0, 100, altura, 15)
    
    textAlign(CENTER);
    textSize(20);
    textStyle(NORMAL)
    fill(400);
    text("Voltar", 50, 30)  
    if(mouseX > 0 && mouseX < 0 + 100 && mouseY > 0 && mouseY < 0 + altura){
      stroke('rgb(0,255,0.2)');
      strokeWeight(4);    
      fill('rgba(0,255,0, 0.40)')
      rect(0, 0, 100, altura, 15);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
  }
    
     //Créditos (Menu)
  if(tela == 4){ 
    createCanvas(600,600);
    image(img5,0,0);
    image(img4,0,60)
    image(img6,20,305)
   
    //Desenvolvedor
   textSize(22)
    fill(400)
    
    textAlign(CENTER, TOP);
    text('Desenvolvedor:', 100, 80, width);
    
    textSize(18)
   
    textAlign(CENTER, CENTER);
    text('Maurício Matheus Araújo Silva Galvão', 100, 140, width)
  
    textAlign(CENTER, BASELINE);
    text('Graduando em Ciência e Tecnologia', 100, 180, width)
    
    //Orientador
    textSize(22)
        
    textAlign(CENTER, TOP);
    text('Orientador:', 100, 320, width);
    
    textSize(18)
   
    textAlign(CENTER, CENTER);
    text('Heverthon Salustino Dantas', 100, 380, width)
  
    textAlign(CENTER, BASELINE);
    text('Professor de Matemática', 100, 420, width)
   
    //Comando "Voltar"
    noStroke();
    fill('rgba(0,255,0, 0.25)');
    rect(0, 0, 100, altura, 15)
    
    textAlign(CENTER);
    textSize(20);
    textStyle(NORMAL)
    fill(400);
    text("Voltar", 50, 30)  
    if(mouseX > 0 && mouseX < 0 + 100 && mouseY > 0 && mouseY < 0 + altura){
      stroke('rgb(0,255,0)');
      strokeWeight(4);    
      fill('rgba(0,255,0, 0.40)')
      rect(0, 0, 100, altura, 15);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
  }
  }

//Função adicional para ajudar o código da tela 2.2
function mousePressed(){ if(tela == 2.2){
      if(mouseX > 300 && mouseX < 300 + 100 && mouseY > 300 && mouseY < 300 + altura){
        noStroke();   
        fill('rgba(0,255,0, 0.40)')
        rect(300, 300, 100, altura, 15);
        if(mouseIsPressed){
        song2.play();
        tela = 2.3
          song4.stop();
          song5.loop();
        }
      }
  }
}



