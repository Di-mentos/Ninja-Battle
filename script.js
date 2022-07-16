var sasuke = {
	heroAbilities: ["chidoriNagashi", "chidoriRun", "fireball"],
	aCrop: document.getElementsByClassName("ability-crop")[0],
	aGallery: document.getElementsByClassName("ability-crop__gallery gallery")[0],

	hCrop: document.getElementsByClassName("Sasuke-crop")[0],
	hGallery: document.getElementsByClassName("Sasuke-crop__gallery gallery")[0],

	valuesStanceWidth: [24, 24, 24, 24, 24, 24],
	valuesStanceHeight: [44, 45, 45, 45, 44, 44],

	valuesRunWidth: [39, 32, 36, 38, 32, 37],
	valuesRunHeight: [29, 29, 29, 29, 29, 29],

	valuesJumpWidth: [27, 27, 30, 30, 23],
	valuesJumpHeight: [41, 40, 43, 43, 28],

	valuesTeleportWidth: [25, 24, 24, 24],
	valuesTeleportHeight: [39, 38, 40, 41],

	valuesDamagedWidth: [27, 30],
	valuesDamagedHeight: [37, 35],

	valuesKnockoutWidth: [30, 42, 42, 44],
	valuesKnockoutHeight: [31, 23, 24, 16],

	// ... - оператор расширения; здесь: все содержимое массива valuesKnockoutWidth добавляется в valuesKnockedDownWidth
	valuesKnockedDownWidth: [30, 42, 42, 44, 25],
	valuesKnockedDownHeight: [31, 23, 24, 16, 32],

	valuesAttack1Width: [25, 47],
	valuesAttack1Height: [43, 42],

	valuesAttack2Width: [20, 21, 34, 32, 55, 44],
	valuesAttack2Height: [43, 41, 40, 39, 41, 41],

	valuesAttack3Width: [27, 28, 34, 48, 62, 41, 32, 27],
	valuesAttack3Height: [38, 39, 43, 43, 40, 35, 40, 43],

	valuesAttackUpWidth: [26, 26, 32, 40, 58, 52],
	valuesAttackUpHeight: [43, 39, 28, 27, 48, 48],

	valuesAttackRunWidth: [32, 49, 71, 64, 34, 27],
	valuesAttackRunHeight: [29, 28, 27, 27, 40, 43],

	valuesAttackJumpWidth: [22, 22, 42, 30, 32],
	valuesAttackJumpHeight: [41, 42, 40, 33, 31],

	valuesWeaponThrowWidth: [28, 30, 28, 29],
	valuesWeaponThrowHeight: [41, 41, 43, 43],

	valuesWeaponThrowJumpWidth: [27, 30, 28, 29],
	valuesWeaponThrowJumpHeight: [42, 41, 44, 44],

	valuesWinWidth: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
	valuesWinHeight: [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44],

	valuesChidoriNagashiWidth: [27, 26, 26, 26, 26, 26, 26, 26, 26, 26, 36, 35, 35, 32, 28, 28],
	valuesChidoriNagashiHeight: [43, 40, 40, 40, 40, 40, 40, 40, 40, 36, 28, 29, 29, 25, 30, 40],

	sasukeStance: function(way){
		animateMovement(this.valuesStanceWidth, this.valuesStanceHeight, this, "Sasuke", "stance", way, 150);
	},

	sasukeRun: function(way){
		animateMovement(this.valuesRunWidth, this.valuesRunHeight, this, "Sasuke", "run", way, 150);
	},

	sasukeJump: function(way){
		animateMovement(this.valuesJumpWidth, this.valuesJumpHeight, this, "Sasuke", "jump", way, 300);
	},

	sasukeTeleport: function(way){
		animateMovement(this.valuesTeleportWidth, this.valuesTeleportHeight, this, "Sasuke", 
						"teleport", way, 200);
	},

	sasukeDamaged: function(way){
		animateMovement(this.valuesDamagedWidth, this.valuesDamagedHeight, this, "Sasuke", "damaged", way, 300);
	},

	//knockout - нокаут, поражение
	sasukeKnockout: function(way){
		animateMovement(this.valuesKnockoutWidth, this.valuesKnockoutHeight, this, "Sasuke", "knockout", 
						"right", 300);
	},

	// knocked down - оглушение от сильного удара
	sasukeKnockedDown: function(way){
		animateMovement(this.valuesKnockedDownWidth, this.valuesKnockedDownHeight, this, "Sasuke", "knockedDown", 
						way, 300);
	},

	sasukeAttack1: function(way){
		animateMovement(this.valuesAttack1Width, this.valuesAttack1Height, this, "Sasuke", "attack1", way, 300);
	},

	sasukeAttack2: function(way){
		animateMovement(this.valuesAttack2Width, this.valuesAttack2Height, this, "Sasuke", "attack2", way, 200);
	},

	sasukeAttack3: function(way){
		animateMovement(this.valuesAttack3Width, this.valuesAttack3Height, this, "Sasuke", "attack3", way, 300);
	},

	sasukeAttackUp: function(way){
		animateMovement(this.valuesAttackUpWidth, this.valuesAttackUpHeight, this, "Sasuke", "attackUp", 
						way, 200);
	},

	sasukeAttackRun: function(way){
		animateMovement(this.valuesAttackRunWidth, this.valuesAttackRunHeight, this, "Sasuke", "attackRun", 
						way, 300);
	},

	sasukeAttackJump: function(way){
		animateMovement(this.valuesAttackJumpWidth, this.valuesAttackJumpHeight, this, "Sasuke", "attackJump",
						way, 300);
	},

	sasukeWeaponThrow: function(way){
		animateMovement(this.valuesWeaponThrowWidth, this.valuesWeaponThrowHeight, this, "Sasuke", "weaponThrow",
						way, 200);
	},

	sasukeWeaponThrowJump: function(way){
		animateMovement(this.valuesWeaponThrowJumpWidth, this.valuesWeaponThrowJumpHeight, this, "Sasuke",
						"weaponThrowJump", way, 150);
	},

	sasukeWin: function(way){
		animateMovement(this.valuesWinWidth, this.valuesWinHeight, this, "Sasuke", "win", way, 200);
	},

	sasukeChidoriNagashi: function(way){
		animateMovement(this.valuesChidoriNagashiWidth, this.valuesChidoriNagashiHeight, this, "Sasuke", 
						"chidoriNagashi", way, 250);
	},

	chidoriNagashi: function(){
		console.log("chidoriNagashi is called!");
		//drawAbility();
	}
};

function drawAbility(crop, gallery, widthValues, heightValues, heroName, type, way, folder1, folder2){

}

function animateMovement(widthValues, heightValues, hero, heroName, type, way, milliseconds){
	//Обращение по ссылке к объекту, который вызвал метод
	var crop = hero.hCrop;
	var gallery = hero.hGallery;

	var imageCount = 0; //Индекс текущей картинки, которую нужно сместить; впоследствии получает расстояние смещения
	var imageMoving = 1; //Индекс следующей картинки, под которую нужно подстроить кроп
	var pixelIndex = 4;
	var moveGalleryX = 0;

	if(gallery.childElementCount != 0){
		while(gallery.childElementCount != 0){
			//console.log(gallery.children[0].alt + " removed");
			gallery.removeChild(gallery.children[0]);
		}
	}

/*	widthValues и gallery являются как бы "параллельными массивами", которые имеют одинаковую длину, и работая в цикле одним и тем же 
	элементом*/	
	for(var i=0; i<widthValues.length; i++){
		var image = new Image();
		if(way == "left"){
			image.src = "images/" + heroName + "/" + type + "/" + "left" + "/" + (i+1) + ".png";
		}
		else if(way == "right"){
			image.src = "images/" + heroName + "/" + type + "/" + "right" + "/" + (i+1) + ".png";
		}
		
		// widthValues приносит готовые значения ширины фреймов
		image.style.width = (widthValues[i] * pixelIndex) + "px";
		image.style.height = (heightValues[i] * pixelIndex) + "px";

		// Метод slice(start, end) отрезает часть строки с индекса start по end; здесь: убираем 1-й символ
		image.alt = type.charAt(0).toUpperCase() + type.slice(1) + (i+1);
		image.className = "character-Sasuke__" + type + " image";
		gallery.appendChild(image);
		// Св-ва naturalWidth и naturalHeight позволяют получить актуальную ширину и высоту изображения
	}

	crop.style.width = (widthValues[0] * pixelIndex) + "px";
	crop.style.height = (heightValues[0] * pixelIndex) + "px";
	
	for(var i=0; i<hero.heroAbilities.length; i++){
		if(hero.heroAbilities[i] === type){
			console.log("This is " + type + "!");
			hero[type]();
			//console.log(hero.heroAbilities);
		}
	}

	var interval = setInterval(function(){
		if(imageMoving == gallery.childElementCount){
			imageCount = 0;
			imageMoving = 0;
			moveGalleryX = -(parseInt(window.getComputedStyle(gallery.children[imageCount]).width)); //-(156px)
			//clearInterval(interval);
		}

		crop.style.width = window.getComputedStyle(gallery.children[imageMoving]).width;
		crop.style.height = window.getComputedStyle(gallery.children[imageMoving]).height;
		//-156+156 = 0, именно поэтому карусель и возвращается в начало
		moveGalleryX += parseInt(window.getComputedStyle(gallery.children[imageCount]).width); 
		gallery.style.transform = "translateX(-" + moveGalleryX + "px)";
		/*Если оба индекса равны 0, т.к. начинаем с 1-го эл-та, то увеличивается только индекс для следующей картинки, под которую 
		нужно подстроить кроп*/			
		if(imageCount == 0 && imageMoving == 0){
			imageMoving++;
		}
		else{
			imageCount++;
			imageMoving++;
		}
	}, milliseconds);
}

// sasuke.sasukeStance("left");
// sasuke.sasukeRun();
// sasuke.sasukeJump();
// sasuke.sasukeTeleport("left");
// sasuke.sasukeDamaged();
// sasuke.sasukeKnockout();
// sasuke.sasukeAttack1("right");
// sasuke.sasukeAttack2();
// sasuke.sasukeAttack3("right");
// sasuke.sasukeKnockedDown("left");
// sasuke.sasukeAttackUp();
// sasuke.sasukeAttackRun();
// sasuke.sasukeAttackJump();
// sasuke.sasukeWeaponThrow();
// sasuke.sasukeWeaponThrowJump();
// sasuke.sasukeWin();
sasuke.sasukeChidoriNagashi("left");