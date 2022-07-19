var sasuke = {
	heroAbilities: ["chidoriNagashi", "chidoriRun"],
	aCrop: document.getElementsByClassName("character-Sasuke__ability-crop ability-crop")[0],
	aGallery: document.getElementsByClassName("ability-crop__gallery gallery")[0],

	hCrop: document.getElementsByClassName("character-Sasuke__Sasuke-crop Sasuke-crop")[0],
	hGallery: document.getElementsByClassName("Sasuke-crop__gallery gallery")[0],

	moveAGallery: 0,
	moveHGallery: 0,

	imageAbilityPrev: 0,
	imageAbilityNext: 1,

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

	valuesChidoriNagashiWidth: [27, 26, 26, 26, 26, 26, 26, 26, 26, 26, 36, 35, 35, 35, 32, 28, 28],
	valuesChidoriNagashiHeight: [43, 40, 40, 40, 40, 40, 40, 40, 40, 36, 28, 29, 29, 29, 25, 30, 40],

	abilityChidoriNagashiWidth: [65, 65, 95, 95, 91, 97, 97, 95, 253, 274, 252, 245, 253, 274, 252, 245],
	abilityChidoriNagashiHeight: [6, 6, 8, 8, 17, 24, 23, 24, 188, 152, 164, 152, 188, 152, 164, 152],

	valuesChidoriRunWidth: [26, 27, 28, 29, 28, 28, 28, 32, 38, 38, 44, 44, 44, 44, 23],
	valuesChidoriRunHeight: [43, 43, 40, 35, 35, 35, 35, 28, 26, 26, 27, 26, 26, 26, 34],

	abilityChidoriRunWidth: [21, 21, 34, 40, 40, 38, 38, 40, 86, 80, 75, 75, 91, 89, 86, 80, 75, 75, 91, 89],
	abilityChidoriRunHeight: [15, 15, 23, 24, 27, 31, 28, 27, 41, 51, 47, 47, 48, 39, 41, 51, 47, 47, 48, 39],

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
		animateMovement(this.valuesAttack3Width, this.valuesAttack3Height, this, "Sasuke", "attack3", way, 500);
	},

	sasukeAttackUp: function(way){
		animateMovement(this.valuesAttackUpWidth, this.valuesAttackUpHeight, this, "Sasuke", "attackUp", way, 500);
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
		animateMovement(this.valuesChidoriNagashiWidth, this.valuesChidoriNagashiHeight, this, "Sasuke", "chidoriNagashi", way, 350);
	},
	chidoriNagashi: function(way){
		//console.log("chidoriNagashi is called!");
		drawAbility(this.abilityChidoriNagashiWidth, this.abilityChidoriNagashiHeight, this, "Sasuke", "chidoriNagashi", "", 
					"lightning/", "");
	},

	sasukeChidoriRun: function(way){
		animateMovement(this.valuesChidoriRunWidth, this.valuesChidoriRunHeight, this, "Sasuke", "chidoriRun", way, 350);
	},

	chidoriRun: function(way){
		if(way === "right"){
			drawAbility(this.abilityChidoriRunWidth, this.abilityChidoriRunHeight, this, "Sasuke", "chidoriRun", "chidoriRight/", 
						"", "");
		}
		else if(way == "left"){
			drawAbility(this.abilityChidoriRunWidth, this.abilityChidoriRunHeight, this, "Sasuke", "chidoriRun", "chidoriLeft/", 
						"", "");
		}
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
	//console.log("chidoriValues: " + widthValues);

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
	crop.className = "character-Sasuke__ability-crop character-Sasuke__ability-crop--" + type + " ability-crop";

	if(type === "chidoriNagashi"){
		//console.log("Up!");
		crop.style.marginTop = "-" + ((parseInt(window.getComputedStyle(crop).height)) -2) + "px";
		crop.style.opacity = "0";
	}
	else if(type == "chidoriRun"){
		crop.style.opacity = "0";
		crop.style.margin = "0 auto";
		crop.style.marginTop = "-" + parseInt(window.getComputedStyle(crop).height) + "px";
	}
}

function chooseAbility(hero, type, milliseconds, imageCount, imageMoving, way){
	if(type === "chidoriNagashi"){
		//console.log("Holly molly! This is " + type + "!");
		showChidoriNagashi(hero, milliseconds, imageCount, imageMoving);
	}
	else if(type == "chidoriRun"){
		showChidoriRun(hero, milliseconds, imageCount, imageMoving, way);
		//console.log("This is chidori!");
	}
}

// Функция выбирает одну из координат left в зависимости от переданного way
function chidoriLeftCoord(hero, way, coordRight, coordLeft){
	if(way == "right"){
		hero.aCrop.style.left = coordRight;
	}
	else if(way == "left"){
		hero.aCrop.style.left = coordLeft;
	}
}

function showChidoriRun(hero, milliseconds, imageCount, imageMoving, way){
	if(imageCount == 0 && imageMoving == 0){
		//console.log("Both are 0!");
		hero.imageAbilityPrev = 0;
		hero.imageAbilityNext = 0;
		hero.aCrop.style.width = window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).width;
		hero.aCrop.style.height = window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).height;

		hero.moveAGallery = 0;
		hero.aGallery.style.transform = "translateX(-" + hero.moveAGallery + "px)";
		hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";
		hero.aCrop.style.left = "0px";
		hero.aCrop.style.top = "0px";

		//console.log("imageMoving: " + hero.imageAbilityNext + "\nimageCount: " + hero.imageAbilityPrev);
		hero.imageAbilityNext = 1;
	}

	if(imageCount >= 2 && imageCount <= 12){
		hero.aCrop.style.opacity = "1";

		if(imageCount >= 2 && imageCount <= 5){
			drawAbilityFrame(hero);
			hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";

			hero.aCrop.style.top = "10px";
			chidoriLeftCoord(hero, way, "20px", "-20px"); //Для way == right, и way == left
			/*if(way == "right"){
				hero.aCrop.style.left = "20px";
			}
			else if(way == "left"){
				hero.aCrop.style.left = "-20px";
			}*/

			if(imageCount <= 4){
				setTimeout(function(){
					drawAbilityFrame(hero);
					hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";
				}, milliseconds/2);
			}

			if(imageCount == 3 || imageCount == 4 || imageCount == 5){
				chidoriLeftCoord(hero, way, "10px", "-10px");
			}
		}
		else if(imageCount == 6){
			chidoriLeftCoord(hero, way, "-30px", "30px");
		}
		else if(imageCount >= 7 && imageCount <= 12){
			drawAbilityFrame(hero);		
			hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";
			// Для молнии сбоку от героя
			if(imageCount == 7 || imageCount == 8){
				hero.aCrop.style.top = "20px";
				chidoriLeftCoord(hero, way, "-74px", "74px");
			}
			else if(imageCount == 10 || imageCount == 11){
				hero.aCrop.style.top = "4px";
				chidoriLeftCoord(hero, way, "-14px", "14px");
			}
			else{
				hero.aCrop.style.top = "-8px";
				chidoriLeftCoord(hero, way, "-30px", "30px");
			}
			
			setTimeout(function(){
				drawAbilityFrame(hero);
				hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";
				if(imageCount == 9 || imageCount == 12){
					hero.aCrop.style.top = "-30px";
					chidoriLeftCoord(hero, way, "-15px", "15px");
				}
				
			}, milliseconds/2);
		}
	}
	else{
		hero.aCrop.style.opacity = "0";
	}
	console.log(imageCount);
}

function showChidoriNagashi(hero, milliseconds, imageCount, imageMoving){
	var e = 1;
	// console.log(imageCount);
	if(imageCount == 0){
		hero.aCrop.style.opacity = "1";
		if(imageCount == 0 && imageMoving == 0){
			hero.aCrop.style.opacity = "0";
			hero.imageAbilityPrev = 0;
			hero.imageAbilityNext = 1;
			hero.aCrop.style.width = window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).width;
			hero.aCrop.style.height = window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).height;
			hero.moveAGallery = 0;
			hero.aGallery.style.transform = "translateX(-" + hero.moveAGallery + "px)";
			hero.aCrop.style.marginTop = "-" + ((parseInt(window.getComputedStyle(hero.aCrop).height)) -2) + "px";

			//console.log("imageMoving: " + hero.imageAbilityNext + "\nimageCount: " + hero.imageAbilityPrev);
		}
	}
	if(imageCount >= 1 && imageCount <= 14){
		if(imageCount >= 9 && imageCount <= 12){
			hero.aCrop.style.opacity = "1";
			console.log("imageMoving: " + hero.imageAbilityNext + "\nimageCount: " + hero.imageAbilityPrev);
			drawAbilityFrame(hero);
			hero.aCrop.style.marginTop = "-" + ((parseInt(window.getComputedStyle(hero.aCrop).height)) -2) + "px";
			console.log("e = " + e);

			setTimeout(function(){
				e++;
				console.log("e = " + e);
				drawAbilityFrame(hero);
				hero.aCrop.style.marginTop = "-" + ((parseInt(window.getComputedStyle(hero.aCrop).height)) -2) + "px";

				e = 1;
			}, milliseconds/2);
		}
		else if(imageCount >=1 && imageCount <=7){
			drawAbilityFrame(hero);
			// Смещение кропа вверх на значение его высоты, которое постоянно меняется
			hero.aCrop.style.marginTop = "-" + ((parseInt(window.getComputedStyle(hero.aCrop).height)) -2) + "px";
		}
		else{
			hero.aCrop.style.opacity = "0";
		}
	}
}

function drawAbilityFrame(hero){
	hero.aCrop.style.width = window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).width;
	hero.aCrop.style.height = window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).height;
	// console.log("previousImageWidth: " + window.getComputedStyle(hero.aGallery.children[hero.imageAbilityPrev]).width);
	// console.log("nextImageWidth: " + window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).width);

	hero.moveAGallery += parseInt(window.getComputedStyle(hero.aGallery.children[hero.imageAbilityPrev]).width); 
	hero.aGallery.style.transform = "translateX(-" + hero.moveAGallery + "px)";
	
	hero.imageAbilityNext++;
	hero.imageAbilityPrev++;

	// console.log("imageMoving: " + hero.imageAbilityNext + "\nimageCount: " + hero.imageAbilityPrev);
}

function animateMovement(widthValues, heightValues, hero, heroName, type, way, milliseconds){
	//Обращение по ссылке к объекту, который вызвал метод
	var crop = hero.hCrop;
	var gallery = hero.hGallery;

	var isAbility = false;
	var imageMoving = 1; //Индекс следующей картинки, под которую нужно подстроить кроп
	var imageCount = 0; //Индекс текущей картинки, которую нужно сместить; впоследствии получает расстояние смещения
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
			hero[type](way);
		}
	}	
	//console.log("First frame draw!");

	var interval = setInterval(function(){
		if(imageMoving == gallery.childElementCount){
			imageCount = 0;
			imageMoving = 0;
			hero.moveHGallery = -(parseInt(window.getComputedStyle(gallery.children[imageCount]).width)); //-(156px)
			// Если это не анимация состояния покоя или бега, то она завершается
			if(type != "stance" && type != "run"){
				/*Сброс всех значений, галерея смещается в начальное положение, imageСount теперь -1, т.к. если будет равен 0 вместе с 
				imageMoving, то и отобразится, и сместится 1-е изображение; а так никакого смещения галлереи не будет*/
				imageCount = -1;
				imageMoving = 0;
				hero.moveHGallery = 0;
				gallery.style.transform = "translateX(-" + hero.moveHGallery + "px)";
				clearInterval(interval);
				newAnimation(hero);
			}
		}

		if(imageCount != -1){
			crop.style.width = window.getComputedStyle(gallery.children[imageMoving]).width;
			crop.style.height = window.getComputedStyle(gallery.children[imageMoving]).height;
			//-156+156 = 0, именно поэтому карусель и возвращается в начало
			hero.moveHGallery += parseInt(window.getComputedStyle(gallery.children[imageCount]).width); 
			gallery.style.transform = "translateX(-" + hero.moveHGallery + "px)";
		}

		if(isAbility){
			chooseAbility(hero, type, milliseconds, imageCount, imageMoving, way);
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
		//console.log("moveGallery: " + hero.moveHGallery);
	}, milliseconds);
}

function newAnimation(hero, type){		
	//console.log("Beginning of attack-3!");
	sasuke.sasukeAttack2("right");
}

// sasuke.sasukeStance("right");
// sasuke.sasukeRun("right");
// sasuke.sasukeJump("right");
// sasuke.sasukeTeleport("left");
// sasuke.sasukeDamaged();
// sasuke.sasukeKnockout("right");
// sasuke.sasukeKnockedDown("left");
// sasuke.sasukeAttack1("right");
// sasuke.sasukeAttack2();
// sasuke.sasukeAttack3("right");
// sasuke.sasukeKnockedDown("left");
// sasuke.sasukeAttackUp("right");
sasuke.sasukeAttackRun("right");
// sasuke.sasukeAttackJump();
// sasuke.sasukeWeaponThrow();
// sasuke.sasukeWeaponThrowJump("left");
// sasuke.sasukeWin("right");
// sasuke.sasukeChidoriNagashi("right");
// sasuke.sasukeChidoriRun("left");