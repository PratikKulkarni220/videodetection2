function preload(){
    vid = createVideo('video.mp4');
    vid.hide();
}

function draw(){
    image(vid , 0 , 0 , 400 , 450);
}

function setup(){
    canva = createCanvas(400 , 450);
    canva.position(650 , 300)
}

function start(){
    document.getElementById('status_btn').innerHTML = 'Status: Identifying Objects';
    coco = ml5.objectDetector('cocossd' , check);
}

function check(){
    console.log('loading_done');
    status = true;
    vid.loop();
    vid.speed(3);
    vid.volume(0.5);
}