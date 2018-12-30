$(document).ready(function () {
    //Track win and lose
    var win = 0;
    var lose = 0;
    //Target number to show as a string
    var targetNumber = '';
    //Target number to win
    var target = 0;
    //Sum of user guess
    var sum = 0;
    //Random variables to hold image number
    var random1;
    var random2;
    var random3;
    var random4;

    //Add Main image
    var mainimage = $("<img>");
    mainimage.addClass("thanosclass");
    mainimage.addClass("center-block");
    mainimage.attr("src", "assets/images/Thanos.jpg");
    $("#thanos").append(mainimage);

    function targetrandom() {
        //Random number to guess from 19-120
        targetmin = Math.ceil(19)
        targetmax = Math.floor(120)

        var random = Math.floor(Math.random() * (targetmax - targetmin)) + targetmin
        targetNumber = random;
        target = parseInt(targetNumber);
        $("#number-to-guess").text(target)
        // console.log(target)

        //Random number for images from 1-12
        imagemin = Math.ceil(1)
        imagemax = Math.floor(12)
        random1 = Math.floor(Math.random() * (imagemax - imagemin)) + imagemin
        random2 = Math.floor(Math.random() * (imagemax - imagemin)) + imagemin
        random3 = Math.floor(Math.random() * (imagemax - imagemin)) + imagemin
        random4 = Math.floor(Math.random() * (imagemax - imagemin)) + imagemin
    }
    //Play Function
    function play() {
        $("#sum-number").text(sum)
        if (sum === target) {
            win++;
            $("#winscore").text(win)
            sum = 0;
            $("#sum-number").text(sum);
            targetrandom();
        } else if (sum > target) {
            lose++;
            $("#losescore").text(lose)
            sum = 0;
            $("#sum-number").text(sum);
            targetrandom();
        }
    };

    //imageCrystal for each image
    var imageCrystal1 = $("<img>");
    var imageCrystal2 = $("<img>");
    var imageCrystal3 = $("<img>");
    var imageCrystal4 = $("<img>");

    //add class,image,value to imageCrystal1
    imageCrystal1.addClass("image1")
    imageCrystal1.attr("src", "assets/images/amber.jpg");
    $("#crystal1").append(imageCrystal1);
    //add random value to imageCrystal1	
    $(".image1").on("click", function () {
        image1value = parseInt(random1);
        imageCrystal1.attr("crystal1value", image1value);
        // console.log(image1value)
        sum = sum + image1value
        play();
    })

    //add class,image,value to imageCrystal2
    imageCrystal2.addClass("image2")
    imageCrystal2.attr("src", "assets/images/bluezircon.jpg");
    $("#crystal2").append(imageCrystal2);
    $(".image2").on("click", function () {
        image2value = parseInt(random2);
        imageCrystal2.attr("crystal2value", image2value);
        // console.log(image2value)
        sum = sum + image2value
        play();
    })

    //add class,image,value to imageCrystal3
    imageCrystal3.addClass("image3")
    imageCrystal3.attr("src", "assets/images/quartz.jpg");
    $("#crystal3").append(imageCrystal3);
    $(".image3").on("click", function () {
        image3value = parseInt(random3);
        imageCrystal3.attr("crystal3value", image3value);
        // console.log(image3value)
        sum = sum + image3value
        play();
    })

    //Random value imageCrystal4
    imageCrystal4.addClass("image4")
    imageCrystal4.attr("src", "assets/images/tanzanite.jpg");
    $("#crystal4").append(imageCrystal4);
    $(".image4").on("click", function () {
        image4value = parseInt(random4);
        imageCrystal4.attr("crystal4value", image4value);
        // console.log(image4value)
        sum = sum + image4value
        play();
    })

    targetrandom();

})