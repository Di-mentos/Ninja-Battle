var sasuke = {
	crop: document.getElementsByClassName("character-Sasuke")[0],
	gallery: document.getElementsByClassName("character-Sasuke__gallery-run gallery")[0],
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

	valuesAttack1Width: [25, 47],
	valuesAttack1Height: [43, 42],

	valuesAttack2Width: [20, 21, 34, 32, 55, 44],
	valuesAttack2Height: [43, 41, 40, 39, 41, 41],

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
						"teleport", "right", 150);
	},

	sasukeTeleportLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesTeleportWidth, this.valuesTeleportHeight, "Sasuke", 
						"teleport", "left", 150);
	},

	sasukeDamagedRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesDamagedWidth, this.valuesDamagedHeight, "Sasuke", "damaged", "right", 100);
	},

	sasukeDamagedLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesDamagedWidth, this.valuesDamagedHeight, "Sasuke", "damaged", "left", 100);
	},

	sasukeKnockoutRight: function(){
		animateMovement(this.crop, this.gallery, this.valuesKnockoutWidth, this.valuesKnockoutHeight, "Sasuke", "knockout", 
						"right", 300);
	},

	sasukeKnockoutLeft: function(){
		animateMovement(this.crop, this.gallery, this.valuesKnockoutWidth, this.valuesKnockoutHeight, "Sasuke", "knockout", 
						"left", 300);
	},

	sasukeAttack1Right: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttack1Width, this.valuesAttack1Height, "Sasuke", "attack1", "right", 300);
	},

	sasukeAttack1Left: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttack1Width, this.valuesAttack1Height, "Sasuke", "attack1", "left", 300);
	},

	sasukeAttack2Right: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttack2Width, this.valuesAttack2Height, "Sasuke", "attack2", "right", 500);
	},

	sasukeAttack2Left: function(){
		animateMovement(this.crop, this.gallery, this.valuesAttack2Width, this.valuesAttack2Height, "Sasuke", "attack2", "left", 200);
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
		image.src = "images/" + hero + "/" + type + "_pieces/" + way + "/" + (i+1) + ".png";
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
sasuke.sasukeAttack2Right();
// sasuke.sasukeAttack2Left();