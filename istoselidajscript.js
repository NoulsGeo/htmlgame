

//global
//gravity
let alive=true;
var jump=false;//are we jumbing?
var minheight=570;
var maxheight=50;
var direction =0;//kateuthunsh fusikh
var velocity=0;//taxythta
var jumpspeed=16;//otan pathsv to w tha prepei na allazv to height me kapoia dunamh
var fallingspeed=8;//otan to afhsv tha prepei na gyrnaei san graviti epishs me kapoia dunamh
var jumpcontrol=0;
var falling=false;
var freeze=false;//auth h metablhth einai otan mpainv se tube h shmaia pou thelv na mhn kanei tipoita o paixrhs na mhn mporei dhladh
//game control
var stage=3//gia na dv poia func tha xrhsimopoihsv
var stage_before=0;//na jerv pou hmoun prin gia na v ti prepei na kanv
//player

let p1x=400; //p1 for player 1 pou jekinaei o paixths
let p1y=580;


var pWidth=50;
var pHeight=80;
//buttons
var buttonwidth=130;
var buttonheight=50;
//boxes(platforms)
//tubeshit
let p1xtube=400;//70;
let p1ytube=580;//30;
//boxe1(platforms)
let offset=0;
var b1x=700;//box1
var b1y=400;
var bWIdth=200;
var bHeight=40;
//ayth einai h metablhth gia na mhn pernav mesa  se toixos apo ta aristera h prvth timh kai apo ta dejia h allh
var hitwall=[false,false];
let direction_turtle=1;
let turtle_offset=0;
let turtle_y=590;
const turtle_width=125;
const turtle_heigth=80;

//flags and stairs
let flag_height=560;
let flag_width=280;
let flagsflag_width=400;
let flagsflag_height=300;
let flagsflagstartheightdraw=170;
let stairs_height=500;
let stairs_width=380;



//boxe2
let b2x=b1x+1000;
let b2y=b1y;
//boxe3
let b3x=b2x+400;
let b3y=b2y;
//boxe4
let b4x=b3x-200;
let b4y=b2y-200;

//tube
let tubeWidth=110;
let tubeheight=270;
let tubestartheight=484;
let bytube=300;
let pressed=false;//an pathsv koumpi 
let intube=false;//gia na dv pote tha afhsv to koumpi katv
//TUBE2
let tubeheight2=tubeheight+100;
let tubestartheight2=434;
var tubes=[{tubeheight:270,tubestartheight:484},{tubeheight:370,tubestartheight:434}];//edv bazv ola ta tubes gia eukoleia gia ta ifs meta sto an xtupav toixous h an eimai apo poanv klp
//multimidia
let frames=[];//gia na allazei eikones analoga tis kinhseis\
let side=0;//poia meria tha koitaei ota neinai akinhtos
let currentimage=0;//poia eikona tou mario tha deijei
let animationspeed=2;//kathe pote tha allazei h eikona
let akomatopatav=false;

//auta einai oi metablhtes tvn antikeimenvn pou ta exv kanei load sthn preload
var mario;
var platform;
var goldkoutaki;
var grass;
var landscape;
let jumpSound;
let musicgame;
let musictube;
let coinmusic;
let deadmario;
let musicpipe;
let mapclear;
let gameoverimg;//game over image
let buttonrestartnew;
let buttonrestart;//koumpi an pethaneis na jana paijeis to map
var tubebackround;
var tubekoumpiorthio;//koumpi orthio prin paththei dld
var tubekoumpikatvv;
let coin;
let turtle;
let gameoverlandscape;
let stickflag;
let flag;
let stairs;

//auta einai gia na akougontai oi hxoi kanonika an paizoun synexeia akougontai xalia logo ths draw pou ekteleitai sunexeia
let musicyesno=false;
let musicyesnotube=false;
let musicclear=false;
let musicpipenoyes=false;
let musicpipenoyestube=false;
//let buttonstart;//koumpi sthn arxikh selida gia na mpeis sto paixnidi
let mariotube;
let MarioFont;
let koutaki;
let brake1=[false,false,false,false,false];//gia thn prvth pentada apo koutia thelv mia boolena timh pou na mou leei pote na ta katastrefv aka pote na mhn ta zvgrafizv
let brake2=[false,false,false,false,false];
let brake3=[false,false,false,false,false];
let brake4=[false,false,false,false,false];
let brake5=[false,false,false,false,false];
let brake6=[false,false,false,false,false];
let coinbrake=[false,false,false];//pote na mhn zvgrafizv poia to coin otan to parv dhladh
let fallingCoin=[false,false,false];//pote peftei gia na jerv na kanv to animation

//COINS
let coinheight=68;
let coinwidth=80;
let coinSum=0;
let coins=[{x:b4x+2*(bWIdth/4-10),y:b4y-100},{x:630-2*(bWIdth/4-10),y:bytube-50},{x:0,y:b1y}];



 
function setup(){
    createCanvas(1000,700);
    rectMode(CENTER);//gia na mpei sto kentro to window 
    textAlign(CENTER);
    imageMode(CENTER);
    buttonrestart=createButton('RESTARTMAP');
    buttonrestart.size(buttonwidth,buttonheight);
    buttonrestart.position(width/2-60,height/2+150+buttonheight/2);
    buttonrestart.mousePressed(changestage);


    buttonrestartnew=createButton('NEwTRY');
    buttonrestartnew.size(buttonwidth,buttonheight);
    buttonrestartnew.position(width/2-60,height/2+150+buttonheight/2);
    buttonrestartnew.mousePressed(format);



}
function draw(){
   // console.log(stage);
    background(220);

    if(stage===0){//an eisai sto gamne 
        
        game();
        keyPressedGame();
        coinfall(0,offset);//auth h sn=unarthsh einai gia napeftei to coin me offset to offset tou map
        coinfall(2,0);
        buttonrestart.hide();//mhn deijeis to nutton
        buttonrestartnew.hide();
        

    }
    else if(stage===1){//an pethanes
        gameover();
        buttonrestart.show();//deije to butoon pou leei restart
        buttonrestartnew.hide();

    }
    else if(stage===4){
        tubemap();
        buttonrestart.hide();//mhn deijeis to nutton
        buttonrestartnew.hide();
        keytypedtube();
        coinfall(1,0);//edv to offset 0 afou den kounietai
    }
    else if(stage===3){//an eisai sthn arxikh othonh
        startscreen();
        buttonrestart.hide();
        buttonrestartnew.hide();
    }
    else{
        gamends();
        buttonrestartnew.show();//deije to butoon pou leei restart
        buttonrestart.hide();
    }
    
    gravity();
    keyTypedEverywhere();
    if(mouseIsPressed==true&&stage==3){
        stage=0;
    }


}
function turtle_change(turtle_width,boxes7){

    turtle_width+=direction_turtle*5;
    if(turtle_width>=boxes7[1].x){
        direction_turtle=-1;
    }
    else if(turtle_width<boxes7[0].x){
        direction_turtle=1;
    }
}



function tubemap(){
    if (!musicyesnotube) {
        musictube.loop(); // Ξεκινάει τη μουσική σε loop
        musicyesnotube = true;
      }
    image(tubebackround,width/2,height/2,width,height);
    minheight=538;
    maxheight=50;
    if(!intube)image(frames[currentimage],p1x,p1y,pWidth+200,pHeight+300); // Σχεδιάζει την εικόνα του Mario ta + 200,300 einai epeidh h eikona htan diaforetikhs analushs apo thn progoumenh
  
    if(stage_before==0)freeze=false;//kanv to freeze false gia na mporv na koumnhtgv alla epeidh otan janapmaneis sto tube to freeze prepei na einai true bazv kai auto to if na mhn mou to kanei sunexeia false giati eipame trexei sunexeia h draw
    
    //image(frames[currentimage],20+pWidth,30,pWidth+200,pHeight+300); // Σχεδιάζει την εικόνα του Mario ta + 200,300 einai epeidh h eikona htan diaforetikhs analushs apo thn progoumenh
    //auta ta duo if gia  na mhn mporei na perasei to window
    if(p1x<0){
        p1x=0;
    }
    if(p1x>870){
        p1x=870;
    }
    if(p1x>width-240&&p1y>580-pHeight-pHeight/2){//ayta edv lene na sumperiferetai san na exei ena tube mprosta tou pou exei sta dejia dhladh na mhn mporei na perasei apo mesa tou kai na mporei na phdhjei panv tou
        p1x=width-240
    }
    if(p1x>=width-240&&p1x<=width&&p1y+pHeight/2<580-pHeight/2-14){
        minheight=580-pHeight-pHeight/2-14;//auto einai to upsos tou tube epeidh den to zvgrafizv erxetai me to baground to upologizv edv an theleis mporoume na to sbhsoume apo to bagroud kai na to zvgrafisoume san jexvristo to idio einai 
        hitwall[0]=false;
    }
    else{
        hitwall[0]=false;
    }
    //console.log(p1x);
    //image(frames[currentimage],p1x,p1y,pWidth+200,pHeight+300); // Σχεδιάζει την εικόνα του Mario ta + 200,300 einai epeidh h eikona htan diaforetikhs analushs apo thn progoumenh
    fallingspeed=8;
    //minheight=570;
    //edv zvgrafizv ta koutia kai to koumpi
    let boxes5=[{x:630-4*(bWIdth/4-10),y:bytube},{x:630-3*(bWIdth/4-10),y:bytube},{x:630-2*(bWIdth/4-10),y:bytube},{x:630-(bWIdth/4-10),y:bytube},{x:630,y:bytube}];
    for(let box of boxes5){//gia kathe kouti 
        if(!brake5[boxes5.indexOf(box)])//an to break einai false dhladh den ekanes kinhsh na to spaseis des grammh 216 px 
            image(koutaki,box.x,box.y+15,bWIdth+100,bHeight+200);//dhmiourgato dipla apo to prohgoumeno
    }
    let boxes6=[{x:630,y:bytube-5*(bHeight)},{x:630,y:bytube-4*(bHeight)},{x:630,y:bytube-3*(bHeight)},{x:630,y:bytube-2*(bHeight)},{x:630,y:bytube-(bHeight)}];
    for(let box of boxes6){//gia kathe kouti 
        if(!brake6[boxes6.indexOf(box)])//an to break einai false dhladh den ekanes kinhsh na to spaseis des grammh 216 px 
            image(koutaki,box.x,box.y+15,bWIdth+100,bHeight+200);//dhmiourgato dipla apo to prohgoumeno
    }
    //koumpi
    if(!pressed){
        image(tubekoumpiorthio,850,580-pHeight-20,bWIdth,bHeight+100);
    }
    else{
        image(tubekoumpikatvv,850,580-pHeight-13,bWIdth,bHeight+100);
    }
    //Coin
    if(!coinbrake[1]){
        image(coin,coins[1].x,coins[1].y-10,coinwidth,coinheight);
    }


    //edv einai o kvdikas gia  minheight klp
    //let found = false; // Σημαία για να σταματάμε τις υπόλοιπες συνθήκες αν μία γίνει true
    let y=0;
    while (y<5) {
    if (boxes5[y].x - bWIdth / 8 <= p1x && boxes5[y].x + bWIdth / 8 >= p1x && p1y <= boxes5[y].y - bHeight / 2 && !brake5[y]) {
        minheight = boxes5[y].y - bHeight - pHeight / 6;
        //found = true; // Αν γίνει true, δεν εξετάζονται τα υπόλοιπα
    }
    
   
    y+=1;
    }
    //let foundmax = false; // Σημαία για να σταματάμε τις υπόλοιπες συνθήκες αν μία γίνει true
        let j=0;
        while (j<5) {//gia kathe koutaki tis pentadas 
        if (boxes5[j].x - bWIdth / 8 <= p1x && boxes5[j].x + bWIdth / 8 >= p1x && p1y>=boxes5[j].y+bHeight/2&&!brake5[j]) {//an pav apo katv kai phdhjv na mhn mporv na perasv to koutaki apo mesa alla na xtuphsv kai argotera tha to spasv
            maxheight=boxes5[j].y+bHeight/2+pHeight/2;//maxheight pare to koutaki apo katv gia na mhn mporv na to perasv
            //foundmax = true; // Αν γίνει true, δεν εξετάζονται τα υπόλοιπα
        }
        j+=1;
    }
//an xtuphseis ton plaino toixo apo to plai na mhn mporeis na peraseis apo mesa tou 
    if((p1x===(630+bWIdth/4-10)&&p1y<bytube+2*(bHeight))&&!pressed){
        hitwall[1]=true;//auto stamataei thn ikanothta na mporeis na pas dejia
    }
    else{
        hitwall[1]=false;
    }

    if((p1x===(630+bWIdth/4-10)-bWIdth/4&&p1y<bytube+2*(bHeight))&&!pressed){
        hitwall[0]=true;//auto stamataei thn ikanothta na mporeis na pas dejia
    }
    else{
        hitwall[0]=false;
    }


    //edv einai o kvdikas an pathseis to koumpi na sbhsei ton toixo pou se empodizei
    if(p1x>850-bWIdth/4&&p1x<850+bWIdth/4){
        pressed=true;
            brake6=[true,true,true,true,true];
        setTimeout(() => {//perimene 2 deutera na fanei to animation kai meta allaje ston katv kosmo
            if(!intube) pressed=false;//na jana ginetai kanoniko to koumpi an den mpaineis ston tube giati an mpeis thelv na katsei katv gia na paijei to animation
            brake6=[false,false,false,false,false];
          }, 1000);
          
       /* pressed=true;
        brake6=[true,true,true,true,true];*/
    }
    //console.log(offset);
    //edv tha balv an pathseis to koumpi kai pas sto tube na phganei panv
    if(pressed&&p1x>=760&&p1y==546&&keyIsDown(68)){
        offset=1760+360;//na paei sthn sintentagmenh tou tube
        freeze=true;
        intube=true;
        
        stage_before=4;
        for(let i=0;i<=100;i++){
            p1x+=5;
        }
        musictube.stop();
        musicyesno=false;
        setTimeout(() => {
            pressed=false;;//na mhn mporei na kanei tipota
            //intube=false;
            freeze=true;//na mhn mporei na kanei tipota
            p1x=400;
           
          }, 4000);
          stage=0;//phgaine sthn panv pista
    }
}
function startscreen(){
    //auta einai pou grafv sthn arxikh 
    image(landscape,width/2,height/2,width,height);
    textFont(MarioFont);
    textSize(50);
    text('MARIO',width/2,120);
    textSize(50);
    text('Click screen to play',width/2,180);
    textSize(40);
    text('ta koumpia einai w a d',width/2,400);
    textSize(25);
    text('By the famous Noulis and Katsaros ',width/2,height-30);


}
function gamends(){
    image(landscape,width/2,height/2,width,height);
    resetMatrix();  // Επαναφορά κλίμακας και μετασχηματισμών
    textSize(32);
    noStroke();
    fill(0);
    textFont(MarioFont);
    if(coinSum==3){
        textSize(50);
        text('CONGRATULATIONSS You Finished ',width/2,120);
        textSize(50);
        text('PERFECTLY',width/2,190);
    }
    else{
    textSize(50);
    text('You Finished',width/2,120);
    text('Good',width/2,190);
    }
    textSize(50);
    text('The Map',width/2,250);
    textSize(50);
    text('With '+coinSum+' Stars',width/2,320);

    

}
function game(){
    //background(60,80,140);
    //grass
   //hitwall[0]=false;
   //hitwall[1]=false;
   //console.log(offset);

    buttonrestart.hide();
    //window frame
    noFill();
    stroke(0);
    strokeWeight(15);
    rect(width/2,height/2,width,height);

    //soundgame
    if(!musicyesno){
    musicgame.loop();
    musicyesno=true;}
  
    image(landscape,width/2,height/2,width,height);
    //edv sxediazei thn eikona analoga me thn kinhsh toy
    image(frames[currentimage],p1x,p1y,pWidth+200,pHeight+300); // Σχεδιάζει την εικόνα του Mario ta + 200,300 einai epeidh h eikona htan diaforetikhs analushs apo thn progoumenh
    let i=0;
    //OI 5ADES KOUTIVN POU ZVGRAFIZV to offset einai otan patav na kounhtho aristera dejia thelv ta koutia kai ta pragmatana kouniountai oxi egv
    let boxes1=[{x:b1x-offset+0*(bWIdth/4-10),y:b1y},{x:b1x-offset+1*(bWIdth/4-10),y:b1y},{x:b1x-offset+2*(bWIdth/4-10),y:b1y},{x:b1x-offset+3*(bWIdth/4-10),y:b1y},{x:b1x-offset+4*(bWIdth/4-10),y:b1y}];
    //ebala thn prvth seira koutivn se mia lista apo ta antikeimena me x=wisth kai y =height tou kathe koutiou ennov thn arxikh kai metepeita thesh tous oxi to megethos tous
    for(let box of boxes1){//gia kathe kouti 
        if(!brake1[boxes1.indexOf(box)])//an to break einai false dhladh den ekanes kinhsh na to spaseis des grammh 216 px 
            image(koutaki,box.x,box.y+15,bWIdth+100,bHeight+200);//dhmiourgato dipla apo to prohgoumeno
    }


    let boxes2=[{x:b2x-offset+0*(bWIdth/4-10),y:b2y},{x:b2x-offset+1*(bWIdth/4-10),y:b2y},{x:b2x-offset+2*(bWIdth/4-10),y:b2y},{x:b2x-offset+3*(bWIdth/4-10),y:b2y},{x:b2x-offset+4*(bWIdth/4-10),y:b2y}];
    for(let box of boxes2){//gia kathe kouti 
        if(!brake2[boxes2.indexOf(box)])//an to break einai false dhladh den ekanes kinhsh na to spaseis des grammh 216 px 
            image(koutaki,box.x,box.y+15,bWIdth+100,bHeight+200);//dhmiourgato dipla apo to prohgoumeno
    }

    let boxes3=[{x:b3x-offset+0*(bWIdth/4-10),y:b3y},{x:b3x-offset+1*(bWIdth/4-10),y:b3y},{x:b3x-offset+2*(bWIdth/4-10),y:b3y},{x:b3x-offset+3*(bWIdth/4-10),y:b3y},{x:b3x-offset+4*(bWIdth/4-10),y:b3y}];
    for(let box of boxes3){//gia kathe kouti 
        if(!brake3[boxes3.indexOf(box)])//an to break einai false dhladh den ekanes kinhsh na to spaseis des grammh 216 px 
            image(koutaki,box.x,box.y+15,bWIdth+100,bHeight+200);//dhmiourgato dipla apo to prohgoumeno
    }
//aut oeiani to pio psilo
    let boxes4=[{x:b4x-offset+0*(bWIdth/4-10),y:b4y},{x:b4x-offset+1*(bWIdth/4-10),y:b4y},{x:b4x-offset+2*(bWIdth/4-10),y:b4y},{x:b4x-offset+3*(bWIdth/4-10),y:b4y},{x:b4x-offset+4*(bWIdth/4-10),y:b4y}];
    for(let box of boxes4){//gia kathe kouti 
        if(!brake4[boxes4.indexOf(box)])//an to break einai false dhladh den ekanes kinhsh na to spaseis des grammh 216 px 
            image(koutaki,box.x,box.y+15,bWIdth+100,bHeight+200);//dhmiourgato dipla apo to prohgoumeno 
    }
    //TUBES
    let startwidthtube=b3x-offset+3*(bWIdth/4-10)+300;//tou lev pou na jekinhsei na zvgrafizei
    tubes[0].startwidthtube=b3x-offset+3*(bWIdth/4-10)+300;//ayth h metablhth einai pou jekinav na zvgrafizv ston ajona x prosthetv thn m,etablhth sto antikeimeno
    image(mariotube,tubes[0].startwidthtube,tubes[0].tubestartheight,tubeWidth,tubes[0].tubeheight);//zvgrafizv ta tubes
    //TUBE2
    let startwidthtube2=startwidthtube+300;
    tubes[1].startwidthtube=b3x-offset+3*(bWIdth/4-10)+600;//apo poy jekinav na zvgrafizv ston ajona x
    image(mariotube,tubes[1].startwidthtube,tubes[1].tubestartheight,tubeWidth,tubes[1].tubeheight);//zvgrafizv to deutero tube pou exv svsei ston pinaka me ta tubes pio panv
    
    //boxturtle
    // Kouti to opoio einai meta ton deftero tube kai sto opoio tha xtypaei h xelona kai tha ksekinaei na epistrefei
    //gia na ginei h kinhsh ths xelonas arxika xreiazomai ta x tou tube2 kai to x tou neou koutiou pou tha ftiakso
    //afto to kouti den tha spaei kai tha einai sto edafos kai tha katheteai kai apo pano tou o Mario
    let boxes7=[{x:tubes[1].startwidthtube+600,y:570+bHeight/2+2},{x:tubes[1].startwidthtube+600+10*(bWIdth/4-10),y:570+bHeight/2+2}];
    for(let boxes of boxes7){
        image(koutaki,boxes.x,boxes.y,bWIdth+100,bHeight+200);
    }
    
    let turtle_x=boxes7[0].x+bWIdth/2+turtle_offset;
    
    image(turtle,turtle_x,turtle_y,turtle_width,turtle_heigth);//sxediazv to turtle
    if(alive){
    turtle_offset+=direction_turtle*5;//auto einai pou afairv apo to width tou turtle  gia na phgainei aristera dejia den allazv ollo to x tou alla thn metablhth pou fytepsa mesa
    if(turtle_x>=boxes7[1].x-bWIdth/4+6){//an xtuhsei to dejia klouti na allajei kateuthhnsh 
        direction_turtle=-1;
    }
    else if(turtle_x<=boxes7[0].x+bWIdth/4){//an apo ta aristera na allajei pali kateuthhnsh
        direction_turtle=1;
    }
    
}
//COINS DRAW
    if(!coinbrake[0]){
    image(coin,coins[0].x-offset,coins[0].y-10,coinwidth,coinheight);
    }
    coins[2].x=boxes7[1].x-(boxes7[1].x-boxes7[0].x)/2;
    if(!coinbrake[2]){
        image(coin,coins[2].x,coins[2].y-10,coinwidth,coinheight);
        }

//flag draw
let stairsstartwidth=boxes7[1].x+1200-480;
    image(stickflag,boxes7[1].x+1080,365,flag_width,flag_height);//zvgrafizv to stig tou flag
    image(flag,boxes7[1].x+1080+40,flagsflagstartheightdraw,flagsflag_width,flagsflag_height);//to shmaiaki
    image(stairs,stairsstartwidth,500,stairs_width,stairs_height);//tis skales
   // boxes7[1].x+1200

   
   



    //image(platform,b2x-offset,b2y+15,bWIdth+100,bHeight+200);
    //image(platform,b3x-offset,b3y+15,bWIdth+100,bHeight+200);
    //image(platform,b4x-offset,b4y+15,bWIdth+100,bHeight+200);
    //let boxbox=[boxes1,boxes2,boxes3,boxes4];
    //let boxbrake=[brake1,brake2,brake3,brake4];
        
    /*if(p1y==maxheight){
        stage=1;
    }*/
    //colision lwas
    /*let found=false;
    for(let boxei of boxbox){
        if( boxei[0].x-bWIdth/8<=p1x&& boxei[0].x+bWIdth/8>=p1x &&p1y<=boxei[0].y-bHeight/2&&!!boxbrake[boxbox.indexOf(boxei)] ){//an eisai panv apo ta koutia tote min height gine to kouti
            minheight=boxei[0].y-bHeight-pHeight/6;
            found=true;
        
        }
        else if( boxei[1].x-bWIdth/8<=p1x&& boxei[1].x+bWIdth/8>=p1x &&p1y<=boxei[1].y-bHeight/2&&!boxbrake[boxbox.indexOf(boxei)]){
            minheight=boxei[1].y-bHeight-pHeight/6;
            found=true;
        }
        else if( boxei[2].x-bWIdth/8<=p1x&& boxei[2].x+bWIdth/8>=p1x &&p1y<=boxei[2].y-bHeight/2&&!boxbrake[boxbox.indexOf(boxei)]){
            minheight=boxei[2].y-bHeight-pHeight/6;
            found=true;
        }
        else if( boxei[3].x-bWIdth/8<=p1x&& boxei[3].x+bWIdth/8>=p1x &&p1y<=boxei[3].y-bHeight/2&&!boxbrake[boxbox.indexOf(boxei)]){
            minheight=boxei[3].y-bHeight-pHeight/6;
            found=true;
        }
        else if( boxei[4].x-bWIdth/8<=p1x&& boxei[4].x+bWIdth/8>=p1x &&p1y<=boxei[4].y-bHeight/2&&!boxbrake[boxbox.indexOf(boxei)]){
            minheight=boxei[4].y-bHeight-pHeight/6;
            found=true;
        } 
        
        
    }
    if(!found) minheight=570;*/


    












    let found = false; // Σημαία για να σταματάμε τις υπόλοιπες συνθήκες αν μία γίνει true
    let y=0;
    while (y<5) {
    if (boxes1[y].x - bWIdth / 8 <= p1x && boxes1[y].x + (bWIdth / 8) >= p1x && p1y <= boxes1[y].y - bHeight / 2 && !brake1[y]) {
        minheight = boxes1[y].y - bHeight - pHeight / 6;
        found = true; // Αν γίνει true, δεν εξετάζονται τα υπόλοιπα
    } else if (boxes2[y].x - bWIdth / 8 <= p1x && boxes2[y].x + (bWIdth / 8) >= p1x && p1y <= boxes2[y].y - bHeight / 2 && !brake2[y]) {
        minheight = boxes2[y].y - bHeight - pHeight / 6;
        found = true;
    }
    else if (boxes3[y].x - bWIdth / 8 <= p1x && boxes3[y].x + bWIdth / 8 >= p1x && p1y <= boxes3[y].y - bHeight / 2 && !brake3[y]) {
        minheight = boxes3[y].y - bHeight - pHeight / 6;
        found = true;
    }
    else if (boxes4[y].x - bWIdth / 8 <= p1x && boxes4[y].x + bWIdth / 8 >= p1x && p1y <= boxes4[y].y - bHeight / 2 && !brake4[y]) {
        minheight = boxes4[y].y - bHeight - pHeight / 6;
        found = true;
    }
    //boxes7[0].x-bWidth/2 
    //boxes7[0].x+bWidth/2
    //boxes7[1].x-bWidth/2 
    //boxes7[1].x+bWidth/2
    
   
    y+=1;
    }
    let h=0;
    let lot=[false,false];
    let lotdejia=[false,false];
    while(h<2){
        if (boxes7[h].x - bWIdth / 8 <= p1x && boxes7[h].x + bWIdth / 8 +25>= p1x && p1y <= boxes7[h].y - bHeight / 2 ) {
            minheight = boxes7[h].y - bHeight - pHeight / 6-10;
            found = true;
        }
        if(p1x==boxes7[h].x-bWIdth/8&&p1y+pHeight/2>570-bHeight){
            //console.log('gamhsou');
            hitwall[0]=true;
            lot[h]=true;
        }
        else{
            lot[h]=false;
        }
        //colision
        if(p1x==boxes7[h].x+bWIdth/4&&p1y+pHeight/2>570-bHeight){
            hitwall[1]=true;
            lotdejia[h]=true;
        }
        else{
            lotdejia[h]=false;
        }
        
        h+=1;
    }
    
//EDV EXV TOUS KANONES GIA TOIXOYS OPVs PX STO TUBE NA MHN MPOREI NA PAEI APO MESA TOU
for(let tube of tubes){//gia kathe tube oi idoi kanones
    //an xtuphseis to tube apo aristera xtupas toixo
    if((p1x==tube.startwidthtube-tubeWidth/2)&&p1y-pHeight>tube.tubestartheight-tube.tubeheight/2-15){
        hitwall[0]=true;

    }
    if((p1x==tube.startwidthtube+tubeWidth/2)&&p1y-pHeight>tube.tubestartheight-tube.tubeheight/2-15){
        hitwall[1]=true;
    }
    
    if(p1x>=tube.startwidthtube-tubeWidth/2&&p1x<=tube.startwidthtube+tubeWidth/2&&p1y-pHeight/2<=tube.tubestartheight-tube.tubeheight/2+pHeight/2-4&&!freeze){
        minheight=tube.tubestartheight-tube.tubeheight/2+pHeight/2-8;
        if(tubes.indexOf(tube)==1){//to kanv gia ti kati periergo paizei me tis eikones kai env sto ena to xamhlo tube paei kala sto allo to psilo mou paei 10 ekatosta pio panv kai kati paizei me to pvs bazv tis eikonew opote greedy ta diorthono
            minheight+=28;
            
        }

        found=true;
    }
    //AUTO EDV TO IF EINAI OTAN THA ERTHEIS APO TON KATV KOSMO SE BAZV MESA STO TUBE KAI THELV SIGA SIGA NA ANEBAINEIS LES KAI BGAINEIS APO TO TUBE BAZV KAPOIA DEUTARA NA PERIMENEI PRIBN MEIVSEI GIA NA MHN EINAI GRHGORO KAI BAZV -9 DIOTI OSO ANEBAINV PEFTV TAUTOXRONA LOGO GRAVITY +8 ARA THA ANEBAINV -1 KATHE  FORA MEXRI NA FTASV TO TUBE MIN HEIGHT KAI NA MHNV EKEI
    //EPEIDH KANV FREEZE PRIN ANEBV PANV PISTA PREPEI NA BALV KATI TO OPOIO DENTHA EKTELEI AUTON TON KVDIKA SUNEXEIA ALLA MONO OTAN ANEBAINV APO TO TUBE MEXRI NA OAV AKRIBVS PANV TOU AUTOS EINAI O KVDIKAS POU LEEI OTI AN FTASEIS STO TUBE FREEZE==FALSE GIA NA MPOREI NA PAEI STO AKRIBVS APO PANV IF KAI NA GINEI MINHEGHT TO HEIGHT TOU TUBE
    if(p1x>=tube.startwidthtube-tubeWidth/2+10&&p1x<=tube.startwidthtube+tubeWidth/2-10&&p1y-pHeight/2>tube.tubestartheight-tube.tubeheight/2+pHeight/2&&stage_before==4&&!found){
                
            if(!musicpipenoyestube){
                musicpipe.play();
                musicpipenoyestube=true;
            }
            setTimeout(() => {//perimene 2 deutera na fanei to animation kai meta allaje ston katv kosmo
                
                p1y-=10;
                if(p1x>=tube.startwidthtube-tubeWidth/2&&p1x<=tube.startwidthtube+tubeWidth/2&&p1y-pHeight/2<=tube.tubestartheight-tube.tubeheight/2+pHeight/2) {
                    stage_before=0;//AUTO GIATI AN JANAMPV NA MHN MOU EKTELEI AUTON TON KVDIKA OU THA TON EKTELOUSE GIATI STAGE-BEFORE=4 ARA PREPEI NA TO KANV 0 GIA NA EIMAI KOMPLE 
                    freeze=false
                   
                };
                
              },230);
            
    }

    
    }
    
    if(!found) minheight=570;
    

    //gia kathe kouti jexvrista an den exei spasei na isxuei oti kathomai panv kai to xtupav apo katv
    /*if( boxes1[0].x-bWIdth/8<=p1x&& boxes1[0].x+bWIdth/8>=p1x &&p1y<=boxes1[0].y-bHeight/2&&!brake1[0] ){//an eisai panv apo ta koutia tote min height gine to kouti
        minheight=boxes1[0].y-bHeight-pHeight/6;
    
    }
    else if( boxes1[1].x-bWIdth/8<=p1x&& boxes1[1].x+bWIdth/8>=p1x &&p1y<=boxes1[1].y-bHeight/2&&!brake1[1]){
        minheight=boxes1[1].y-bHeight-pHeight/6;
    }
    else if( boxes1[2].x-bWIdth/8<=p1x&& boxes1[2].x+bWIdth/8>=p1x &&p1y<=boxes1[2].y-bHeight/2&&!brake1[2]){
        minheight=boxes1[2].y-bHeight-pHeight/6;
    }
    else if( boxes1[3].x-bWIdth/8<=p1x&& boxes1[3].x+bWIdth/8>=p1x &&p1y<=boxes1[3].y-bHeight/2&&!brake1[3]){
        minheight=boxes1[3].y-bHeight-pHeight/6;
    }
    else if( boxes1[4].x-bWIdth/8<=p1x&& boxes1[4].x+bWIdth/8>=p1x &&p1y<=boxes1[4].y-bHeight/2&&!brake1[4]){
        minheight=boxes1[4].y-bHeight-pHeight/6;
    }
    else if( boxes2[0].x-bWIdth/8<=p1x&& boxes2[0].x+bWIdth/8>=p1x &&p1y<=boxes2[0].y-bHeight/2&&!brake2[0] ){//an eisai panv apo ta koutia tote min height gine to kouti
        minheight=boxes1[0].y-bHeight-pHeight/6;
    
    }
    else if( boxes2[1].x-bWIdth/8<=p1x&& boxes2[1].x+bWIdth/8>=p1x &&p1y<=boxes2[1].y-bHeight/2&&!brake2[1]){
        minheight=boxes2[1].y-bHeight-pHeight/6;
    }
    else if( boxes2[2].x-bWIdth/8<=p1x&& boxes2[2].x+bWIdth/8>=p1x &&p1y<=boxes2[2].y-bHeight/2&&!brake2[2]){
        minheight=boxes2[2].y-bHeight-pHeight/6;
    }
    else if( boxes2[3].x-bWIdth/8<=p1x&& boxes2[3].x+bWIdth/8>=p1x &&p1y<=boxes2[3].y-bHeight/2&&!brake2[3]){
        minheight=boxes2[3].y-bHeight-pHeight/6;
    }
    else if( boxes2[4].x-bWIdth/8<=p1x&& boxes2[4].x+bWIdth/8>=p1x &&p1y<=boxes2[4].y-bHeight/2&&!brake2[4]){
        minheight=boxes2[4].y-bHeight-pHeight/6;
    }
    /*else if( b2x-offset-bWIdth/2<p1x+pWidth/2&& b2x-offset+bWIdth/2>p1x-pWidth/2  &&p1y<=b2y-bHeight/2 && p1y>b4y-bHeight/2){//an eisai panv apo to kouti tote min height gine to kouti
        minheight=b2y-bHeight/2-pHeight/2-5;
    
    }
    else if( b3x-offset-bWIdth/2<p1x+pWidth/2&& b3x-offset+bWIdth/2>p1x-pWidth/2  &&p1y<=b3y-bHeight/2 ){//an eisai panv apo to kouti tote min height gine to kouti
        minheight=b3y-bHeight/2-pHeight/2-5;
    
    }
    else if( b4x-offset-bWIdth/2<p1x+pWidth/2&& b4x-offset+bWIdth/2>p1x-pWidth/2  &&p1y<=b4y-bHeight/2 ){//an eisai panv apo to kouti tote min height gine to kouti
        minheight=b4y-bHeight/2-pHeight/2-5;
    
    }*//*
    else{
        minheight=570;
    }*/
        let foundmax = false; // Σημαία για να σταματάμε τις υπόλοιπες συνθήκες αν μία γίνει true
        let j=0;
        while (j<5) {//gia kathe koutaki tis pentadas 
        if (boxes1[j].x - bWIdth / 8 <= p1x && boxes1[j].x + bWIdth / 8 >= p1x && p1y>=boxes1[j].y+bHeight/2&&!brake1[j]) {//an pav apo katv kai phdhjv na mhn mporv na perasv to koutaki apo mesa alla na xtuphsv kai argotera tha to spasv
            maxheight=boxes1[j].y+bHeight/2+pHeight/2;//maxheight pare to koutaki apo katv gia na mhn mporv na to perasv
            foundmax = true; // Αν γίνει true, δεν εξετάζονται τα υπόλοιπα
        } else if (boxes2[j].x - bWIdth / 8 <= p1x && boxes2[j].x + bWIdth / 8 >= p1x && p1y>=boxes2[j].y+bHeight/2&&!brake2[j]) {
            maxheight=boxes2[j].y+bHeight/2+pHeight/2;
            foundmax = true;
        }
        else if (boxes3[j].x - bWIdth / 8 <= p1x && boxes3[j].x + bWIdth / 8 >= p1x && p1y>=boxes3[j].y+bHeight/2&&!brake3[j]) {
            maxheight=boxes3[j].y+bHeight/2+pHeight/2;
            foundmax = true;
        }
        else if (boxes4[j].x - bWIdth / 8 <= p1x && boxes4[j].x + bWIdth / 8 >= p1x && p1y>=boxes4[j].y+bHeight/2&&!brake4[j]) {
            maxheight=boxes4[j].y+bHeight/2+pHeight/2;
            foundmax = true;
        }
        
       
        j+=1;
    }
        
        //telos toixous
        if((p1x!=tubes[0].startwidthtube-tubeWidth/2&&(p1x!=tubes[1].startwidthtube-tubeWidth/2)&&p1x!=boxes7[0].x-bWIdth/2)||
            (p1y-pHeight<=tubes[0].tubestartheight-tubes[0].tubeheight/2+pHeight/2-45&&p1x<tubes[0].startwidthtube)||
                (p1y-pHeight<=tubes[1].tubestartheight-tubes[1].tubeheight/2+pHeight/2-45&&p1x>tubes[0].startwidthtube+tubeWidth/2)){
            if(!lot[0]&&!lot[1])hitwall[0]=false;
        }
        if((p1x!=tubes[0].startwidthtube+tubeWidth/2)&&(p1x!=tubes[1].startwidthtube+tubeWidth/2)||
            (p1y-pHeight<=tubes[0].tubestartheight-tubes[0].tubeheight/2+pHeight/2-45&&p1x<tubes[1].startwidthtube)||
                (p1y-pHeight<=tubes[1].tubestartheight-tubes[1].tubeheight/2+pHeight/2-45&&p1x>tubes[0].startwidthtube+tubeWidth/2)){
            if(!lotdejia[0]&&!lotdejia[1])hitwall[1]=false;
        }
        //gia na mpainei sto tube
        if(keyIsDown(83)&&minheight==tubes[0].tubestartheight-tubes[0].tubeheight/2+pHeight/2-8&&p1y===minheight+8){
            //getintube();
            if(!musicpipenoyes){
                musicpipe.play();
            }
            intube=false;
            currentimage=0;//ton akinhtopoiei optika
            p1x=tubes[0].startwidthtube;//ton phgainei sthn mesh
            fallingspeed=1;//peftei arga
            minheight=570;//esti ton kanv na mpinei kai kal sto tube apla ton kanv na peftei pio katv
            freeze=true;//na mhn mporei na kanei tipota
            musicgame.stop();
            setTimeout(() => {//perimene 2 deutera na fanei to animation kai meta allaje ston katv kosmo
                //console.log("Μετά από 2 δευτερόλεπτα!");
                stage=4;; // allazei thn pista
                p1x=70; //p1 for player 1 pou jekinaei o paixths
                p1y=30;
                freeze=true;//na mhn mporei na kanei tipota
              }, 2000);
            
            /*let y=0;
            while(y<10){
            p1y+=5;
            y+=1;
        }*/
       //THIMISOU PREPEI OTAN GURISEIS NA KANEIS TO FREEZE=FLSE KAI TO FALLING SPPED=8

        }


        


        if(!foundmax) maxheight=50;//an den eimai katv apo tipota tote o ouranos na ginei to maxheight gia na mporv na phdhjv
























    /*
    if( boxes1[0].x-bWIdth/8<=p1x&& boxes1[0].x+bWIdth/8>=p1x&& p1y>=boxes1[0].y+bHeight/2&&!brake1[0]){//an eisai apo katv tote max height gine to kouti
        maxheight=boxes1[0].y+bHeight/2+pHeight/2;
    
    }
    else if(boxes1[1].x-bWIdth/8<=p1x&& boxes1[1].x+bWIdth/8>=p1x&& p1y>=boxes1[1].y+bHeight/2&&!brake1[1]){
        maxheight=boxes1[1].y+bHeight/2+pHeight/2;
    }
    else if(boxes1[2].x-bWIdth/8<=p1x&& boxes1[2].x+bWIdth/8>=p1x&& p1y>=boxes1[2].y+bHeight/2&&!brake1[2]){
        maxheight=boxes1[2].y+bHeight/2+pHeight/2;
    }
    else if(boxes1[3].x-bWIdth/8<=p1x&& boxes1[3].x+bWIdth/8>=p1x&& p1y>=boxes1[3].y+bHeight/2&&!brake1[3]){
        maxheight=boxes1[3].y+bHeight/2+pHeight/2;
    }
    else if(boxes1[4].x-bWIdth/8<=p1x&& boxes1[4].x+bWIdth/8>=p1x&& p1y>=boxes1[4].y+bHeight/2&&!brake1[4]){
        maxheight=boxes1[4].y+bHeight/2+pHeight/2;
    }

    /*else if(b2x-offset-bWIdth/2<p1x+pWidth/2&& b2x-offset+bWIdth/2>p1x-pWidth/2&& p1y>=b2y+bHeight/2){//an eisai apo katv tote max height gine to kouti
        maxheight=b2y+bHeight/2+pHeight/2-10;
        console.log("koiti duo");
    }
    else if(b3x-offset-bWIdth/2<p1x+pWidth/2&& b3x-offset+bWIdth/2>p1x-pWidth/2&& p1y>=b3y+bHeight/2){//an eisai apo katv tote max height gine to kouti
        maxheight=b3y+bHeight/2+pHeight/2-10;
        console.log("koiti tria");
    }
    else if(b4x-offset-bWIdth/2<p1x+pWidth/2&& b4x-offset+bWIdth/2>p1x-pWidth/2 && p1y>=b4y+bHeight/2){
        maxheight=b4y+bHeight/2+pHeight/2-10;
        console.log("koiti tessera");
    }*//*
    else{
        maxheight=50;
    }*/










    
//brakes kai deaths se koutia kai antipalous
    for(let box of boxes1){//gia kathe kouti sthn prvth seira kotivn
    if( box.x-bWIdth/8<=p1x-pWidth/6&& box.x+bWIdth/8>=p1x+pWidth/6&&p1y<=boxes1[2].y+bHeight/2+pHeight/2&&maxheight==boxes1[2].y+bHeight/2+pHeight/2&&falling!=true){//an to xtuphseis apo katv
        brake1[boxes1.indexOf(box)]=true;//stamata na to zvgrafizeis
    }
    }
    for(let box of boxes2){//gia kathe kouti sthn prvth seira kotivn
    if( box.x-bWIdth/8<=p1x-pWidth/6&& box.x+bWIdth/8>=p1x+pWidth/6&&p1y<=boxes2[2].y+bHeight/2+pHeight/2&&maxheight==boxes2[2].y+bHeight/2+pHeight/2&&falling!=true){//an to xtuphseis apo katv
        brake2[boxes2.indexOf(box)]=true;//stamata na to zvgrafizeis
    }
    }
    for(let box of boxes3){//gia kathe kouti sthn prvth seira kotivn
        if( box.x-bWIdth/8<=p1x-pWidth/6&& box.x+bWIdth/8>=p1x+pWidth/6&&p1y<=boxes3[2].y+bHeight/2+pHeight/2&&maxheight==boxes3[2].y+bHeight/2+pHeight/2&&falling!=true){//an to xtuphseis apo katv
            brake3[boxes3.indexOf(box)]=true;//stamata na to zvgrafizeis
        }
        }
    for(let box of boxes4){//gia kathe kouti sthn prvth seira kotivn
    if( box.x-bWIdth/8<=p1x-pWidth/6&& box.x+bWIdth/8>=p1x+pWidth/6&&p1y<=boxes4[2].y+bHeight/2+pHeight/2&&maxheight==boxes4[2].y+bHeight/2+pHeight/2&&falling!=true){//an to xtuphseis apo katv
        brake4[boxes4.indexOf(box)]=true;//stamata na to zvgrafizeis
    }
    }


    //kanones an pethaneis apo turtle
    if(p1x>turtle_x-turtle_width/8&&p1x<turtle_x+turtle_width/8&&p1y+pHeight/2>=turtle_y-turtle_heigth/2){//an petuxeis thn xelvna
        musicgame.stop();
        if(alive) deadmario.play();
        alive=false;//psofa
        turtle_offset=0;//h xelvna menei akinhth
        freeze=true;//kai o paixths akimnhtosd
        setTimeout(() => {//perimene 2 deutera na fanei to animation kai meta allaje ston katv kosmo
            stage=1;
            
          }, 1000);//perimene 1 deutero kai allaje stage
    }
    
    //kanones gia  stairs
    for(let i=0;i<9;i++){//gia kathe skalopati
        if(p1x>=stairsstartwidth-stairs_width/2+i*31&&p1x<stairsstartwidth+stairs_width/2-45){//an einai mesa tou
           if( p1y>576-i*(30)+5&&i!=8){//an eisai apo katv tou na mhn mporeis na pas dejia dhladh na peraseis apo mesa tou apo to katv skalopati
                hitwall[0]=true;
                minheight=576-(i-1)*30+4-14//epishs to min height tha einai to prohgpoumeno skalopati tou
           }
            else{//allis an eisai apo panv tou
                
            minheight=576-i*30+4-14;//minheight pare auto to skalopati auto edv to kommati koddika ekteleitai mono sto tleeutaio all tespa
            }
            
        }
        /*if(p1x>=stairsstartwidth-stairs_width/2+i*31+12&&p1x<=stairsstartwidth+stairs_width/2&&p1y-pHeight/2<=570-i*(31+pHeight/4)){
            minheight=570-i*(31+pHeight/8);
        }*/
    }
    //auto edv ellei na mhn mporei na mpei mesa sta skalia apo ta aristera otan pefteis katv apo thn dejia pleura
    if(p1x==stairsstartwidth+stairs_width/2-40&&p1y>576-8*30+4-14){
        hitwall[1]=true;
    }
    //kanones gia  flag
   // console.log(boxes7[1].x+1080);

    if(p1x==boxes7[1].x+1080-10){
        freeze=true;
        flagsflagstartheightdraw=p1y;
        minheight=500;
        musicgame.stop();
        if(!musicclear){
        mapclear.play();
        musicclear=true;
        }
        setTimeout(() => {//perimene 2 deutera na fanei to animation kai meta allaje ston katv kosmo
        
            stage=2;
            
          }, 2000);//perimene 1 deutero kai allaje stage
    }
   




// 2.525 7.366



    /*
    if( b1x-offset-bWIdth/2<p1x+pWidth/2&& b1x-offset+bWIdth/2>p1x-pWidth/2  &&p1y<=b1y-bHeight/2 ){//an eisai panv apo to kouti tote min height gine to kouti
        minheight=b1y-pHeight;
    
    }
    else if(b1x-offset-bWIdth/2<p1x+pWidth/2&& b1x-offset+bWIdth/2>p1x-pWidth/2&& p1y>=b1y+bHeight/2){//an eisai apo katv tote max height gine to kouti
        maxheight=b1y+bHeight/2+pHeight/2-10;
    }
    //collision 2nds box
    else if( b2x-offset-bWIdth/2<p1x+pWidth/2&& b2x-offset+bWIdth/2>p1x-pWidth/2  &&p1y<=b2y-bHeight/2 ){//an eisai panv apo to kouti tote min height gine to kouti
        minheight=b2y-bHeight/2-pHeight/2-5;
    
    }
    else if(b2x-offset-bWIdth/2<p1x+pWidth/2&& b2x-offset+bWIdth/2>p1x-pWidth/2&& p1y>=b2y+bHeight/2){//an eisai apo katv tote max height gine to kouti
        maxheight=b2y+bHeight/2+pHeight/2-10;
    }
    //collision with box3
    else if( b3x-offset-bWIdth/2<p1x+pWidth/2&& b3x-offset+bWIdth/2>p1x-pWidth/2  &&p1y<=b3y-bHeight/2 ){//an eisai panv apo to kouti tote min height gine to kouti
        minheight=b3y-bHeight/2-pHeight/2-5;
    
    }
    else if(b3x-offset-bWIdth/2<p1x+pWidth/2&& b3x-offset+bWIdth/2>p1x-pWidth/2&& p1y>=b3y+bHeight/2){//an eisai apo katv tote max height gine to kouti
        maxheight=b3y+bHeight/2+pHeight/2-10;
    }
    //collision with box 4
    else if( b4x-offset-bWIdth/2<p1x+pWidth/2&& b4x-offset+bWIdth/2>p1x-pWidth/2  &&p1y<=b4y-bHeight/2 ){//an eisai panv apo to kouti tote min height gine to kouti
        minheight=b4y-bHeight/2-pHeight/2-5;
    
    }
    else if(b4x-offset-bWIdth/2<p1x+pWidth/2&& b4x-offset+bWIdth/2>p1x-pWidth/2&& p1y>=b4y+bHeight/2){
        maxheight=b4y+bHeight/2-pHeight/2-5;
    }
    else{//allivw klasika
        minheight=570;
        maxheight=50;
    }*/

    }
function coinfall(j,offsetpara){
    //an akoumphseis to coin
    if(!fallingCoin[j]&&p1x>=coins[j].x-offsetpara-coinwidth/2&&p1x<=coins[j].x-offsetpara+coinwidth/2&&p1y-pHeight/2<=coins[j].y+coinheight/2){
        //tote kane auth thn timh true
        
        //PROSOXH bazv authn thn tim true kai meta to rixnv epeidh trexei synexeia ara an ebaza ton kvdika ton apo katv edv tha epefte oso o mario htan sdthn idia thesh egv den to thelv etsi thelv an to akoumpohsei na pesei opou kai na paei meta
        let u=0;
        while(u<20){
        coins[j].y-=3;
        u++;
       
        }
        if(u=20)
        fallingCoin[j]=true;
        coinmusic.play();
    }
    console.log(fallingCoin[j]);
    //an auth h timh einai trua prepei na kane ito animation kai na parv to coin
    if(fallingCoin[j]){
        //to naimation einai aplo apla pefte siga siga
        coins[j].y+=7;
    }
    
    //an peseis toso katv pou den fainesai
    if(coins[j].y>580&&!coinbrake[j]){
        //phra allo ena coin
        coinSum+=1;
        //kane update thn timh html sto arxeio
        updateScore(coinSum);
        //stamata na to zvgrafizeis den exei nohma
        coinbrake[j]=true;
        
    }
}
//auth h sunarthsh ananevnei ta coins pou exv parei sto html eggrafo
function updateScore(score){
    //pairnv to stoixeio pou grafv ta coins pou einai ena span
    const scoreElement=document.getElementById('score');
    //an ola phgan kala
    if(scoreElement){
        //allaje thn timh se +1 coin sta 3
        scoreElement.textContent=score+'/3';
    }
}
function getintube(){
    p1x=tubes[0].startwidthtube;
    fallingspeed=1;
    minheight=570;
    found=true;
}
function gameover(){
    //an game over deije autes tis eikones
    image(landscape,width/2,height/2,width,height);
    image(gameoverimg,width/2,height/2-100,150,130);



}

function gravity(){
    //kanonas 1:an pas katv apo to edafos mhn pas
    if(p1y>minheight){ 
        p1y=minheight;
        //console.log("minheight");
        
        }
    if(p1y<=maxheight){
        falling=true;
        
    }
    
    
    //KANONAS 2:an eisai sthn grammh tou minheight gia ekeino to object kai den patas jump tote meine ekei pou eisai
    if(p1y>=minheight && jump==false){
         p1y=minheight;
         //console.log("minheight");
         jumpcontrol=0;//otan eisai sto edafos sou dinv pali thn dunatothta na phdhjeis
         falling=false;//den peftv ara mporv na kanv jump
         //direction=0;
         
        }
    //allivs allaje to height dou
    

    //console.log(falling);
    //KANONAS 3:an phdas kai den exeis ftasei sto orio tou canvas h sto orio ths energias tou paixth allaje to heigh pros ta panv
    if(jump==true && p1y>maxheight&&jumpcontrol<=jumpspeed&&falling==false ){
        
        if(jumpcontrol==0){
           jumpSound.play();
        }
        direction=-1;
        velocity=jumpspeed;
        jumpcontrol+=1;
    
        p1y+=(direction*velocity);
    }

    //an oxi pese 
    else{
        
        direction=1;
        velocity=fallingspeed;
        p1y+=(direction*velocity);
    }
    //KANONAS 4:an den phdas kai den eisai sto edafos tote den prepei na mporeis na janaphdhjeis
    if(jump==false&&p1y<minheight){
        falling=true;
    }
    if(p1y==maxheight||jumpcontrol>=jumpspeed){
        falling=true;
        //praktika exv to jumpcontrol gia na mporei na phdhjei mexrio ena shmeio kai na mhn petaei kai to falling gia na mhn mporei na phdhjei env einai ston aera
        //jumpcontrol=jumpspeed+1;
        //jumpcontrol=jumpspeed;
    }
    
        
    
    
}
function keytypedtube(){
    if(keyIsDown(65)&&!hitwall[1]&&!freeze&&!intube){//pav aristera
        
        //ana 10 na allazei podi alla na mhn brisketai ston aera
       if(animationspeed<=10 && falling!=true && jump!=true){
           currentimage=6;//h sugkekrimenh eikona
           animationspeed+=1;//prostheto etsi kapoia stigmh na allajei eikona
           }
       else if(animationspeed>10 && falling!=true && jump!=true){
           if(animationspeed==20) animationspeed=0;
           currentimage=5;
           animationspeed+=1;
               }
       p1x-=5; //p1x-=5;
       
       side=4;//an menei akinhtos alla teleutaia pathse to a na balei thn statherh eikona pou koitaei aristera
       }
       if(keyIsDown(68)&&!hitwall[0]&&!freeze&&!intube){//an pav dejia kai den exv toixo
        //ana 10 na allazei podi alla na mhn brisketai ston aera
        
        if(animationspeed<=10 && falling!=true && jump!=true){
            currentimage=1;
            animationspeed+=1;
        }
        else if(animationspeed>10 && falling!=true && jump!=true){
            if(animationspeed==20) animationspeed=0;
            currentimage=2;
            animationspeed+=1;
        }
        p1x+=5; //p1x+=5; edv kanv to oofset +5 giati to afairv sthn dhmiourgia tvn boxes
        
        side=0;//koita apo aristera se akinhsia
    }
    if(!keyIsDown(65) && !keyIsDown(68)&&!freeze){
        currentimage=side;
    }

}
function keyPressedGame(){
    
    if(keyIsDown(65)&&!hitwall[1]&&!freeze){//pav aristera
        
         //ana 10 na allazei podi alla na mhn brisketai ston aera
        if(animationspeed<=10 && falling!=true && jump!=true){
            currentimage=6;//h sugkekrimenh eikona
            animationspeed+=1;//prostheto etsi kapoia stigmh na allajei eikona
            }
        else if(animationspeed>10 && falling!=true && jump!=true){
            if(animationspeed==20) animationspeed=0;
            currentimage=5;
            animationspeed+=1;
                }
        offset-=5; //p1x-=5;
        side=4;//an menei akinhtos alla teleutaia pathse to a na balei thn statherh eikona pou koitaei aristera
        }
        
        
    if(keyIsDown(68)&&!hitwall[0]&&!freeze){//an pav dejia kai den exv toixo
        
        //ana 10 na allazei podi alla na mhn brisketai ston aera
        if(animationspeed<=10 && falling!=true && jump!=true&&!freeze){
            currentimage=1;
            animationspeed+=1;
        }
        else if(animationspeed>10 && falling!=true && jump!=true&&!freeze){
            if(animationspeed==20) animationspeed=0;
            currentimage=2;
            animationspeed+=1;
        }
        if(offset<4490)offset+=5; //p1x+=5; edv kanv to oofset +5 giati to afairv sthn dhmiourgia tvn boxes
        side=0;//koita apo aristera se akinhsia
    }
    if(!keyIsDown(65) && !keyIsDown(68)&&!freeze){
        currentimage=side;
    }
    
    
}

function keyTypedEverywhere(){

    if(keyIsDown(87) ){//phda an pathseis to w alla kai an den pefteis
        akomatopatav=true;
        if(falling==false&&jumpcontrol<jumpspeed){//to ebala mesa gia na mhn to pataws kai phdas synxeia
        jump=true ;
        if(side===0 ) currentimage=3;//bale to image tou mariou pou phda
        else if(side===4) currentimage=7;
        }
        else{
            currentimage=1;
        }
    }
    else{
       akomatopatav=false;
        jump=false;}
    //auta gia na mporei na allazei kai ston aera
        if(side===0&& falling&&!freeze) currentimage=3;//bale to image tou mariou pou phda
       else if(side===4&&falling&&!freeze) currentimage=7;//to freze to ebala gia na mporv na elenjv poia eikona tha deijv ota npx peftei sto tube h otan paei sthn shmaia
}
function preload(){
    //edv mesa kanv load ola ta antikeimena multimedea  eikones,hxo font klp
    console.log("Η preload ξεκίνησε");
    frames[0]=loadImage('normal.png');
    frames[1]=loadImage('leftfoot.png');
    frames[2]=loadImage('rightfoot.png');
    frames[3]=loadImage('jump.png');
    frames[4]=loadImage('normalinve.png');
    frames[5]=loadImage('marioleftfootinve.png');
    frames[6]=loadImage('mariorightfootinve.png');
    frames[7]=loadImage('jumpinve.png');
    platform=loadImage('platform1001.png');
    landscape=loadImage('backround-mario.png');
    jumpSound=loadSound('jumpsound.wav');
    gameoverimg=loadImage('gameover.png');
    MarioFont=loadFont('SuperMario256.ttf');
    koutaki=loadImage('koutakimono2.png');
    goldkoutaki=loadImage('goldkoutaki.png');
    mariotube=loadImage('tubenew.png');
    tubebackround=loadImage('underworldtube.png');
    tubekoumpiorthio=loadImage('koumpimario10000000.png');
    tubekoumpikatvv=loadImage('mariokoumpikatvv.png');
    coin=loadImage('coinmario3.png');
    turtle=loadImage('turtlemario.png');
    gameoverlandscape=loadImage('gameover2.jpg');
    stickflag=loadImage('flasgmario.png');
    flag=loadImage('flagsflagmario.png');
    stairs=loadImage('stairs.png');
    musicgame=loadSound('super-mario-bros-music.mp3');
    musictube=loadSound('mario-cave-music.mp3');
    coinmusic=loadSound('mario_coin_sound.mp3');
    deadmario=loadSound('super-mario-bros-ost-_-8-youre-dead.mp3');
    mapclear=loadSound('518305__mrthenoronha__stage-clear-8-bit.wav');
    musicpipe=loadSound('super-mario-bros.mp3');
    //truemario=mario.get(10,10,mario.width-20,mario.height-20);
}
function changestage(){
    //arxikopoiv kapoia pragmata 
    buttonrestart.hide();
    freeze=false;
    p1x=400;
    offset=0;
    stage=0;
    minheight=570;
    maxheight=50;
    hitwall=[false,false];
    brake1=[false,false,false,false,false];//gia thn prvth pentada apo koutia thelv mia boolena timh pou na mou leei pote na ta katastrefv aka pote na mhn ta zvgrafizv
    brake2=[false,false,false,false,false];
    brake3=[false,false,false,false,false];
    brake4=[false,false,false,false,false];
    brake5=[false,false,false,false,false];
    brake6=[false,false,false,false,false];
    alive=true;
    musicgame.play();
}
function format(){
    flagsflagstartheightdraw=170;
    coins=[{x:b4x+2*(bWIdth/4-10),y:b4y-100},{x:630-2*(bWIdth/4-10),y:bytube-50},{x:0,y:b1y}];
    coinbrake=[false,false,false];
    coinSum=0;
    fallingCoin=[false,false,false];
    updateScore(0);
    buttonrestartnew.hide();
    buttonrestart.hide();
    freeze=false;
    p1x=400;
    offset=0;
    stage=0;
    minheight=570;
    maxheight=50;
    hitwall=[false,false];
    brake1=[false,false,false,false,false];//gia thn prvth pentada apo koutia thelv mia boolena timh pou na mou leei pote na ta katastrefv aka pote na mhn ta zvgrafizv
    brake2=[false,false,false,false,false];
    brake3=[false,false,false,false,false];
    brake4=[false,false,false,false,false];
    brake5=[false,false,false,false,false];
    brake6=[false,false,false,false,false];
    alive=true;
    mapclear.stop();
    musicgame.play();
    musicclear=false;
}

