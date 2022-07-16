var sasuke = {
	crop: document.getElementsByClassName("character-Sasuke")[0],
	gallery: document.getElementsByClassName("character-Sasuke__gallery gallery")[0],
	valuesRunWidth: [39, 32, 36, 38, 32, 37],
	valuesRunHeight: [29, 29, 29, 29, 29, 29],

	valuesStanceWidth: [24, 24, 24, 24, 24, 24],
	valuesStanceHeight: [44, 45, 45, 45, 44, 44],

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

	sasukeRunRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesRunWidth, this.valuesRunHeight, "Sasuke", "run", "right", 150);
	},
	sasukeRunLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesRunWidth, this.valuesRunHeight, "Sasuke", "run", "left", 150);
	},

	sasukeStanceRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesStanceWidth, this.valuesStanceHeight, "Sasuke", "stance", "right", 150);
	},
	sasukeStanceLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesStanceWidth, this.valuesStanceHeight, "Sasuke", "stance", "left", 150);
	},

	sasukeJumpRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesJumpWidth, this.valuesJumpHeight, "Sasuke", "jump", "right", 300);
	},
	sasukeJumpLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesJumpWidth, this.valuesJumpHeight, "Sasuke", "jump", "left", 300);
	},

	sasukeTeleportRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesTeleportWidth, this.valuesTeleportHeight, "Sasuke", 
						"teleport", "right", 200);
	},
	sasukeTeleportLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesTeleportWidth, this.valuesTeleportHeight, "Sasuke", 
						"teleport", "left", 200);
	},

	sasukeDamagedRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesDamagedWidth, this.valuesDamagedHeight, "Sasuke", "damaged", "right", 300);
	},
	sasukeDamagedLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesDamagedWidth, this.valuesDamagedHeight, "Sasuke", "damaged", "left", 300);
	},

	//knockout - нокаут, поражение
	sasukeKnockoutRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesKnockoutWidth, this.valuesKnockoutHeight, "Sasuke", "knockout", 
						"right", 300);
	},
	sasukeKnockoutLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesKnockoutWidth, this.valuesKnockoutHeight, "Sasuke", "knockout", 
						"left", 300);
	},

	// knocked down - оглушение от сильного удара
	sasukeKnockedDownRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesKnockedDownWidth, this.valuesKnockedDownHeight, "Sasuke", "knockedDown", 
						"right", 300);
	},
	sasukeKnockedDownLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesKnockedDownWidth, this.valuesKnockedDownHeight, "Sasuke", "knockedDown", 
						"left", 300);
	},

	sasukeAttack1Right: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttack1Width, this.valuesAttack1Height, "Sasuke", "attack1", "right", 300);
	},
	sasukeAttack1Left: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttack1Width, this.valuesAttack1Height, "Sasuke", "attack1", "left", 300);
	},

	sasukeAttack2Right: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttack2Width, this.valuesAttack2Height, "Sasuke", "attack2", "right", 200);
	},
	sasukeAttack2Left: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttack2Width, this.valuesAttack2Height, "Sasuke", "attack2", "left", 200);
	},

	sasukeAttack3Right: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttack3Width, this.valuesAttack3Height, "Sasuke", "attack3", "right", 300);
	},
	sasukeAttack3Left: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttack3Width, this.valuesAttack3Height, "Sasuke", "attack3", "left", 300);
	},

	sasukeAttackUpRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttackUpWidth, this.valuesAttackUpHeight, "Sasuke", "attackUp", 
						"right", 200);
	},
	sasukeAttackUpLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttackUpWidth, this.valuesAttackUpHeight, "Sasuke", "attackUp", 
						"left", 200);
	},

	sasukeAttackRunRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttackRunWidth, this.valuesAttackRunHeight, "Sasuke", "attackRun", 
						"right", 300);
	},
	sasukeAttackRunLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttackRunWidth, this.valuesAttackRunHeight, "Sasuke", "attackRun", 
						"left", 300);
	},

	sasukeAttackJumpRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttackJumpWidth, this.valuesAttackJumpHeight, "Sasuke", "attackJump",
						"right", 300);
	},
	sasukeAttackJumpLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttackJumpWidth, this.valuesAttackJumpHeight, "Sasuke", "attackJump",
						"left", 300);
	},

	sasukeWeaponThrowRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesWeaponThrowWidth, this.valuesWeaponThrowHeight, "Sasuke", "weaponThrow",
						"right", 200);
	},
	sasukeWeaponThrowLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesWeaponThrowWidth, this.valuesWeaponThrowHeight, "Sasuke", "weaponThrow",
						"left", 200);
	},

	sasukeWeaponThrowJumpRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesWeaponThrowJumpWidth, this.valuesWeaponThrowJumpHeight, "Sasuke",
						"weaponThrowJump", "right", 150);
	},
	sasukeWeaponThrowJumpLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesWeaponThrowJumpWidth, this.valuesWeaponThrowJumpHeight, "Sasuke",
						"weaponThrowJump", "left", 150);
	},

	sasukeWinRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesWinWidth, this.valuesWinHeight, "Sasuke", "win", "right", 200);
	},
	sasukeWinLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesWinWidth, this.valuesWinHeight, "Sasuke", "win", "left", 200);
	},

	sasukeChidoriNagashiRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesChidoriNagashiWidth, this.valuesChidoriNagashiHeight, "Sasuke", 
						"chidoriNagashi", "right", 250);
	},
	sasukeChidoriNagashiLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesChidoriNagashiWidth, this.valuesChidoriNagashiHeight, "Sasuke",
						"chidoriNagashi", "left", 250);
	}
};

function animateMovement(crop, gallery, widthValues, heightValues, hero, type, way, milliseconds){
	var imageCount = 0; //Индекс текущей картинки, которую нужно сместить; впоследствии получает расстояние смещения
	var imageMoving = 1; //Индекс следующей картинки, под которую нужно подстроить кроп
	var pixelIndex = 4;
	var moveGalleryX = 0;

	while(gallery.childElementCount != 0){
		//console.log(gallery.children[0].alt + " removed");
		gallery.removeChild(gallery.children[0]);
	}

/*	widthValues и gallery являются как бы "параллельными массивами", которые имеют одинаковую длину, и работая в цикле одним и тем же 
	элементом*/	
	for(var i=0; i<widthValues.length; i++){
		var image = new Image();
		image.src = "images/" + hero + "/" + type + "/" + way + "/" + (i+1) + ".png";
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
	//gallery.style.height = (maxValueHeight * pixelIndex) + "px";
	//console.log("cropWidth: " + crop.style.width);

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

// sasuke.sasukeRunLeft();
// sasuke.sasukeRunRight();
// sasuke.sasukeStanceRight();
// sasuke.sasukeStanceLeft();
// sasuke.sasukeJumpRight();
// sasuke.sasukeJumpLeft();
// sasuke.sasukeTeleportRight();
// sasuke.sasukeTeleportLeft();
// sasuke.sasukeDamagedRight();
// sasuke.sasukeDamagedLeft();
// sasuke.sasukeKnockoutRight();
// sasuke.sasukeKnockoutLeft();
// sasuke.sasukeAttack1Right();
// sasuke.sasukeAttack1Left();
// sasuke.sasukeAttack2Right();
// sasuke.sasukeAttack2Left();
// sasuke.sasukeAttack3Right();
// sasuke.sasukeAttack3Left();
// sasuke.sasukeKnockedDownRight();
// sasuke.sasukeKnockedDownLeft();
// sasuke.sasukeAttackUpRight();
// sasuke.sasukeAttackUpLeft();
// sasuke.sasukeAttackRunRight();
// sasuke.sasukeAttackRunLeft();
// sasuke.sasukeAttackJumpRight();
// sasuke.sasukeAttackJumpLeft();
// sasuke.sasukeWeaponThrowRight();
// sasuke.sasukeWeaponThrowLeft();
// sasuke.sasukeWeaponThrowJumpRight();
// sasuke.sasukeWeaponThrowJumpLeft();
// sasuke.sasukeWinRight();
// sasuke.sasukeWinLeft();
// sasuke.sasukeChidoriNagashiRight();
// sasuke.sasukeChidoriNagashiLeft();