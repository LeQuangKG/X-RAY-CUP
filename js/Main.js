/*
	Name : Cup Xray
	Create : Le Viet Quang (quang.le@ringierstudios.com)
	Date : 28 - 8 -2012
	Version : 1.0
	Project : FIFA Football App
*/

/*
    0 : Toronto
    1 : Oasinton
    2 : Mexico
    3 : HyLap
    4 : Map1
    5 : Map2
    6 : Map3
    7 : Map4
    8 : Map5
    8 : Asia Pacific 0
    9 : Oceania 0
*/
var rotate;
var pos = [57,57,57,45,45,45,45,45,45];
var img = [];
var popup = null;
var have = false;


function LoadImg(){
    for(i=0; i<9; i++){
        img[i] = new Image();
        img[i].src = 'img/box/Box'+(i+1)+'.png';
    }
}

function AddPopup(n){
    popup.src = img[n].src;
    popup.className = 'popup'+n;
    document.body.appendChild(popup);
    setTimeout(function(){
        popup.style.opacity = 1;
        
    },50);
    have = true;
}


function ClosePopup(){
    if(have==true){
        popup.style.opacity = 0;
        setTimeout(function(){
            document.body.removeChild(popup);
        },10);
        have = false;
    }
    
}