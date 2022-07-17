var sasuke = {
	heroAbilities: ["chidoriNagashi", "chidoriRun", "fireball"],
	aCrop: document.getElementsByClassName("character-Sasuke__ability-crop ability-crop")[0],
	aGallery: document.getElementsByClassName("ability-crop__gallery gallery")[0],
	moveAGallery: 0,
	moveHGallery: 0,

	hCrop: document.getElementsByClassName("character-Sasuke__Sasuke-crop Sasuke-crop")[0],
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

	abilityChidoriNagashiWidth: [65, 65, 95, 95, 91, 97, 97, 95],
	abilityChidoriNagashiHeight: [6, 6, 8, 8, 17, 24, 23, 24],

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
		animateMovement(this.valuesTeleportWidth, this.valuesTeleportHeight, this, "Sasuke", "teleport", way, 200);
	},

	sasukeDamaged: function(way){
		animateMovement(this.valuesDamagedWidth, this.valuesDamagedHeight, this, "Sasuke", "damaged", way, 300);
	},

	//knockout - нокаут, поражение
	sasukeKnockout: function(way){
		animateMovement(this.valuesKnockoutWidth, this.valuesKnockoutHeight, this, "Sasuke", "knockout", "right", 300);
	},

	// knocked down - оглушение от сильного удара
	sasukeKnockedDown: function(way){
		animateMovement(this.valuesKnockedDownWidth, this.valuesKnockedDownHeight, this, "Sasuke", "knockedDown", way, 300);
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
		animateMovement(this.valuesAttackUpWidth, this.valuesAttackUpHeight, this, "Sasuke", "attackUp", way, 200);
	},

	sasukeAttackRun: function(way){
		animateMovement(this.valuesAttackRunWidth, this.valuesAttackRunHeight, this, "Sasuke", "attackRun", way, 300);
	},

	sasukeAttackJump: function(way){
		animateMovement(this.valuesAttackJumpWidth, this.valuesAttackJumpHeight, this, "Sasuke", "attackJump", way, 300);
	},

	sasukeWeaponThrow: function(way){
		animateMovement(this.valuesWeaponThrowWidth, this.valuesWeaponThrowHeight, this, "Sasuke", "weaponThrow", way, 200);
	},

	sasukeWeaponThrowJump: function(way){
		animateMovement(this.valuesWeaponThrowJumpWidth, this.valuesWeaponThrowJumpHeight, this, "Sasuke", "weaponThrowJump", way, 150);
	},

	sasukeWin: function(way){
		animateMovement(this.valuesWinWidth, this.valuesWinHeight, this, "Sasuke", "win", way, 200);
	},

	sasukeChidoriNagashi: function(way){
		animateMovement(this.valuesChidoriNagashiWidth, this.valuesChidoriNagashiHeight, this, "Sasuke", "chidoriNagashi", way, 200);
	},

	chidoriNagashi: function(){
		//console.log("chidoriNagashi is called!");
		drawAbility(this.abilityChidoriNagashiWidth, this.abilityChidoriNagashiHeight, this, "Sasuke", "chidoriNagashi", "", 
					"lightning/", "");
	}
};

// Функция прорисовки умения
function drawAbility(widthValues, heightValues, hero, heroName, type, way, folder1, folder2){
	var crop = hero.aCrop;
	var gallery = hero.aGallery;
	var pixelIndex = 3;

	if(gallery.childElementCount != 0){
		while(gallery.childElementCount != 0){
			gallery.removeChild(gallery.children[0]);
		}
	}
	console.log("chidoriValues: " + widthValues);

	for(var i=0; i<widthValues.length; i++){
		var image = new Image();	
		image.src = "images/" + heroName + "/" + type + "/" + way + folder1 + folder2 + (i+1) + ".png";
		// widthValues приносит готовые значения ширины фреймов
		image.style.width = (widthValues[i] * pixelIndex) + "px";
		image.style.height = (heightValues[i] * pixelIndex) + "px";

		image.alt = type.charAt(0).toUpperCase() + type.slice(1) + (i+1);
		image.className = "character-Sasuke__" + type + " image";
		gallery.appendChild(image);
	}
	crop.style.width = (widthValues[0] * pixelIndex) + "px";
	crop.style.height = (heightValues[0] * pixelIndex) + "px";

	if(type === "chidoriNagashi"){
		crop.style.marginTop = "-16px";
		crop.style.opacity = "0";
	}
}

function chooseAbility(hero, type, milliseconds, imageCount, imageMoving, nextImage){
	if(type === "chidoriNagashi"){
		//console.log("Holly molly! This is " + type + "!");
		showChidoriNagashi(hero, milliseconds, imageCount, imageMoving, nextImage);
	}
}

function showChidoriNagashi(hero, milliseconds, imageCount, imageMoving, nextImage){
	if(nextImage == 2){
		hero.aCrop.style.opacity = "1";
	}
	if(nextImage >= 3 && nextImage <= 9){
		console.log("Catched!");
		imageMoving = imageMoving - 2;
		imageCount = imageCount - 2;
		
		
		hero.aCrop.style.width = window.getComputedStyle(hero.aGallery.children[imageMoving]).width;
		hero.aCrop.style.height = window.getComputedStyle(hero.aGallery.children[imageMoving]).height;

		hero.moveAGallery += parseInt(window.getComputedStyle(hero.aGallery.children[imageCount]).width); 
		hero.aGallery.style.transform = "translateX(-" + hero.moveAGallery + "px)";

		imageCount++;
		imageMoving++;
	}
}

function animateMovement(widthValues, heightValues, hero, heroName, type, way, milliseconds){
	//Обращение по ссылке к объекту, который вызвал метод
	var crop = hero.hCrop;
	var gallery = hero.hGallery;

	var isAbility = false;
	var imageCount = 0; //Индекс текущей картинки, которую нужно сместить; впоследствии получает расстояние смещения
	var imageMoving = 1; //Индекс следующей картинки, под которую нужно подстроить кроп
	var pixelIndex = 4;

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
		image.src = "images/" + heroName + "/" + type + "/" + way + "/" + (i+1) + ".png";
		// widthValues приносит готовые значения ширины фреймов
		image.style.width = (widthValues[i] * pixelIndex) + "px";
		image.style.height = (heightValues[i] * pixelIndex) + "px";

		// Метод slice(start, end) отрезает часть строки с индекса start по end; здесь: убираем 1-й символ
		image.alt = type.charAt(0).toUpperCase() + type.slice(1) + (i+1);
		image.className = "Sasuke-crop__" + type + " image";
		gallery.appendChild(image);
		// Св-ва naturalWidth и naturalHeight позволяют получить актуальную ширину и высоту изображения
	}
	crop.style.width = (widthValues[0] * pixelIndex) + "px";
	crop.style.height = (heightValues[0] * pixelIndex) + "px";
	
	for(var i=0; i<hero.heroAbilities.length; i++){
		if(hero.heroAbilities[i] === type){
			//console.log("This is " + type + "!");
			isAbility = true;
			hero[type]();
		}
	}

	var interval = setInterval(function(){
		if(imageMoving == gallery.childElementCount){
			imageCount = 0;
			// Если это не анимация состояния покоя или бега, то она завершается
			if(type != "stance" && type != "run"){
				console.log(type);
				imageMoving = 1;
				hero.moveHGallery = 0;
				gallery.style.transform = "translateX(-" + hero.moveHGallery + "px)";
				clearInterval(interval);
			}
			imageMoving = 0;
			hero.moveHGallery = -(parseInt(window.getComputedStyle(gallery.children[imageCount]).width)); //-(156px)
		}

		crop.style.width = window.getComputedStyle(gallery.children[imageMoving]).width;
		crop.style.height = window.getComputedStyle(gallery.children[imageMoving]).height;
		//-156+156 = 0, именно поэтому карусель и возвращается в начало
		hero.moveHGallery += parseInt(window.getComputedStyle(gallery.children[imageCount]).width); 
		gallery.style.transform = "translateX(-" + hero.moveHGallery + "px)";

		if(isAbility){
			chooseAbility(hero, type, milliseconds, imageCount, imageMoving, imageMoving);
			//console.log(isAbility);
		}

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

// sasuke.sasukeStance("right");
// sasuke.sasukeRun("left");
// sasuke.sasukeJump("right");
// sasuke.sasukeTeleport("left");
// sasuke.sasukeDamaged();
// sasuke.sasukeKnockout("right");
// sasuke.sasukeAttack1("right");
// sasuke.sasukeAttack2();
// sasuke.sasukeAttack3("right");
// sasuke.sasukeKnockedDown("left");
// sasuke.sasukeAttackUp();
// sasuke.sasukeAttackRun();
// sasuke.sasukeAttackJump();
// sasuke.sasukeWeaponThrow();
// sasuke.sasukeWeaponThrowJump("left");
// sasuke.sasukeWin();
sasuke.sasukeChidoriNagashi("right");