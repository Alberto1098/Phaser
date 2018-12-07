 var game = new Phaser.Game(564 , 700, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });
 
 var tilesprite;
 var cursors;
 var world;
 var player;
 var jumpButton;  
 var platforms;
 var ledge;
 var hitPlatforms;
 var left;
 var right;
 var facing;
 var stars;
 var score = 0;
 var scoreText;
 var ground;
 var bomb;
 var music;
 var water;
 var text;
 var y;
 var BG;	
 var group;
 var locs = [];
 
 function main() {}
 
function preload() {
	 
	game.load.image('BG', 'assets/cave.jpg');
	game.load.spritesheet('player', 'assets/llama2.png', 43.5, 40);
	game.load.image('platform', 'assets/platformG.png');
	game.load.image('ground', 'assets/platform1.png');
	game.load.image('star', 'assets/star.png');
	game.load.image('bomb', 'assets/Turtleblock1.png');
	game.load.audio('Cowboy Bebop', ['assets/Audio/what planet is this.mp3']);
	game.load.spritesheet('waters', 'assets/waters.png', 32, 400, 32);
	
	}

	

	
function create() {

game.physics.startSystem(Phaser.Physics.ARCADE);

	 BG = game.add.tileSprite(0, 0, 564, 1692, 'BG');
	
	game.world.setBounds(0, 0, 564, 1692);
	
	player = game.add.sprite(0, 1600, 'player', 1);
	player.smoothed = false;
	
	//game.physics.arcade.gravity.y = -300;
	game.physics.enable(player);
	
	player.body.collideWorldBounds = true;
    player.body.gravity.y = 120;
    player.body.maxVelocity.y = 5000;
    
	game.camera.follow(player);
	
	cursors = game.input.keyboard.createCursorKeys();
	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR); 
	
	createPlatforms();
	
	//ground = platforms.create(-10, game.world.height - 20, 'ground');
	//ground.scale.setTo(1, 1); 
	//ground.body.immovable = true;
	//ground.body.gravity.y = -50;
	
	player.animations.add('left',[0,1,2,3,4,5], 10, true);
	player.animations.add('right',[7,8,9,10,11,12], 10, true);
	
	stars = game.add.group();
    stars.enableBody = true;
	createStars();
 
	/* for (var i = 0; i < 12; i++)
    {
       
     bomb = stars.create(i * 50, 0, 'bomb');


        bomb.body.gravity.y = 600;

       
        bomb.body.bounce.y = 0.2 + Math.random() * 0.2;
	
    }*/
	
	  //music = game.sound.play('Cowboy Bebop'); 
	  
	 water = game.add.tileSprite(0, 24 * 69, 128 * 16, 24 * 16, 'waters');
	  
    //water.animations.add('waves0', [0, 1, 2, 3, 2, 1]);
    //water.animations.add('waves1', [4, 5, 6, 7, 6, 5]);
    //water.animations.add('waves2', [8, 9, 10, 11, 10, 9]);
    //water.animations.add('waves3', [12, 13, 14, 15, 14, 13]);
    water.animations.add('waves4', [16, 17, 18, 19, 18, 17]);
    //water.animations.add('waves5', [20, 21, 22, 23, 22, 21]);
    //water.animations.add('waves6', [24, 25, 26, 27, 26, 25]);
    //water.animations.add('waves7', [28, 29, 30, 31, 30, 29]);
	  
	
	var n = 4;
    water.animations.play('waves' + n, 8, true);
	water.body.gravity.y = -100;
	
	text = game.add.text(game.world.centerX= 300, game.world.centerY= 1400, "", {
        font: "65px Arial",
        fill: "#ff0044",
        align: "center"
    });

    text.anchor.setTo(0.5, 0.5);
	
	
	 group = game.add.group();

    //  Create some trees, each in a unique location
    for (var i = 0; i < 200; i++)
    {
        createUniqueLocation();
    }
	
}


function createBombs(player, bomb) {
	
		this.player.kill();

}

function createStars() {

	star = stars.create(180, 1535, 'star');
	star.body.immovable = true;
	
	star = stars.create(340, 1510, 'star');
	star.body.immovable = true;
	
	star = stars.create(240, 1425, 'star');
	star.body.immovable = true;
	 
	star = stars.create(440, 1355, 'star');
	star.body.immovable = true;
	
	star = stars.create(240, 1275, 'star');
	star.body.immovable = true;
	
	star = stars.create(500, 1225, 'star');
	star.body.immovable = true;
	
	star = stars.create(90, 1175, 'star');
	star.body.immovable = true;
	
	star = stars.create(337, 1125, 'star');
	star.body.immovable = true;
	
	star = stars.create(137, 1026, 'star');
	star.body.immovable = true;
	
	star = stars.create(505, 855, 'star');
	star.body.immovable = true;


}
function createUniqueLocation(){
	
	do {
        var x = game.math.snapTo(game.world.randomX, 32) / 32;
        var y = game.math.snapTo(game.world.randomY, 32) / 32;

        if (y > 17)
        {
            y = 17;
        }

        var idx = (y * 17) + x;
    }
    while (locs.indexOf(idx) !== -1)

    locs.push(idx);

    group.create(x * 32, y * 32, 'platform', game.rnd.integerInRange(0, 7));
}
	
	
 
function createPlatforms(){
	
	  platforms = game.add.group();
	  platforms.enableBody = true;
	     
	
	
	    var ledge = platforms.create(0, 1650, 'platform');
	   
			ledge.body.immovable = true; 
		
		var ledge = platforms.create(250, 1565, 'platform');
	   
			ledge.body.immovable = true;
			
		var ledge = platforms.create(150, 1470, 'platform');
	   
			ledge.body.immovable = true;
			
		var ledge = platforms.create(400, 1379, 'platform');
	   
			ledge.body.immovable = true;
		/*		
		var ledge = platforms.create(200, 1300, 'platform');
	   
			ledge.body.immovable = true;
			
		var ledge = platforms.create(480, 1250, 'platform');
	   
			ledge.body.immovable = true;	
			
		var ledge = platforms.create(50, 1200, 'platform');
	   
			ledge.body.immovable = true;
			
		var ledge = platforms.create(300, 1150, 'platform');
	   
			ledge.body.immovable = true;
		
		var ledge = platforms.create(100, 1050, 'platform');
	   
			ledge.body.immovable = true;
			
		var ledge = platforms.create(350, 980, 'platform');
	   
			ledge.body.immovable = true;	
		
		var ledge = platforms.create(480, 880, 'platform');
	   
			ledge.body.immovable = false;
			
		var ledge = platforms.create(200, 880, 'platform');
	   
			ledge.body.immovable = true;	
*/
			}

		
			
function update() {

    //BG.tilePosition.y += 2;

	
	player.body.velocity.x = 0;
	
    if (cursors.left.isDown)
    {
        player.body.velocity.x = -270; 
		player.animations.play('left');
    }
	
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 270;
		player.animations.play('right');	 
    }
	else
    {
        player.animations.stop();
        player.frame = 6;
    }
    
	hitPlatforms = game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(stars, platforms);
	game.physics.arcade.overlap(ground, stars, killStar, null, this);
    game.physics.arcade.overlap(player, stars, collectStar, null, this);
	

	if (jumpButton.isDown && player.body.touching.down) {
		console.log("JUMP");
		player.body.velocity.y = -500;
	}
	

}


function killPlayer(player, ground){
	this.player.body = null;
	this.player.kill();
}


function killStar (ground, star){
	star.kill();
}

function collectStar (player, star) {
    star.kill();
	score += 10;
}
 
function render() {

//game.debug.text("Player on floor:" + player.body.touching.down, 32, 32);
//game.debug.text("Jump button is down:" + jumpButton.isDown, 32, 50);
game.debug.text("Game Time:" + game.time.totalElapsedSeconds(), 400, 32);
//game.debug.text("Platform hit:" + hitPlatforms, 350, 50);
//game debug.text(player.frame, 32, 32);
game.debug.text("Score:"+ score, 32, 32);
}

