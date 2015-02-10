/*jslint browser: true, devel: true, indent: 2, maxlen: 82 */
// When jQuery (or some other libraries) is being used
/*global FileReader */

// Start things off when the DOM is ready
window.onload = function () {
  'use strict';
  var redrawMeme, input1, input2;

  function textChangeListener(evt) {
    var id, text;
    id = evt.target.id;
    text = evt.target.value;

    if (id === "topLineText") {
      window.topLineText = text;
    } else {
      window.bottomLineText = text;
    }

    redrawMeme(window.imageSrc, window.topLineText, window.bottomLineText);
  }

  redrawMeme = function (image, topLine, bottomLine) {
    var canvas, ctx;
    // Get Canvas2DContext
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext("2d");

    // Your code here
    function fitImage(img) {
      var imageAspect, canvasAspect, clipWidth, clipHeight;
      this.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (!img) {
        return;
      }
      imageAspect = image.width / image.height;
      canvasAspect = this.canvas.width / this.canvas.height;
      if (imageAspect > canvasAspect) {
        // Scale the image to fit the canvas width, truncate the image height
        clipHeight = img.height;
        // Maintain image aspect ratio and clip to fit canvas
        clipWidth = img.width * (img.height / this.canvas.height);
      } else {
        // Scale the image to fit the canvas height, truncate the image width
        clipWidth = img.width;
        // Maintain image aspect ratio and clip to fit canvas
        clipHeight = img.height * (img.width / this.canvas.width);
      }

      this.drawImage(img, 0, 0, clipWidth, clipHeight,
        0, 0, this.canvas.width, this.canvas.height
        );
    }// ./function fitImage(img)

    function memeText(topText, bottomText, msgFont) {
      var textCenter, textBaseline;
      this.save();
      if (msgFont) {
        this.font = msgFont;
      }
      this.textAlign = 'center';
      this.fillStyle = 'white';
      this.strokeStype = 'black';
      this.lineWidth = 3.0;
      textCenter = this.canvas.width / 2;

      if (topText) {
        this.textBaseline = 'top';//top|hanging
        textBaseline = 0;
        this.fillText(topText, textCenter, textBaseline);
        this.strokeText(topText, textCenter, textBaseline);
      }

      if (bottomText) {
        this.textBaseline = 'bottom';//top|hanging
        textBaseline = this.canvas.height;
        this.fillText(bottomText, textCenter, textBaseline);
        this.strokeText(bottomText, textCenter, textBaseline);
      }

      this.restore();
    }// ./function memeText(topText, bottomText, msgFont)

    fitImage.call(ctx, image);
    memeText.call(ctx, topLine, bottomLine, '36pt Impact');
  };// ./function redrawMeme(image, topLine, bottomLine)

  function saveFile() {
    window.open(document.querySelector('canvas').toDataURL());
  }


  function handleFileSelect(evt) {
    var file, reader;//canvasWidth, canvasHeight,
    //canvasWidth = 500;
    //canvasHeight = 500;
    file = evt.target.files[0];



    reader = new FileReader();
    reader.onload = function (fileObject) {
      var data, image;
      data = fileObject.target.result;

      // Create an image object
      image = new Image();
      image.onload = function () {

        window.imageSrc = this;
        //redrawMeme(window.imageSrc, null, null);
        redrawMeme(window.imageSrc, window.topLineText, window.bottomLineText);
      };

      // Set image data to background image.
      image.src = data;
      console.log(fileObject.target.result);
    };
    reader.readAsDataURL(file);
  }

  window.topLineText = "";
  window.bottomLineText = "";
  input1 = document.getElementById('topLineText');
  input2 = document.getElementById('bottomLineText');
  input1.oninput = textChangeListener;
  input2.oninput = textChangeListener;
  document.getElementById('file').
    addEventListener('change', handleFileSelect, false);
  document.querySelector('button').
    addEventListener('click', saveFile, false);
};// ./function ()

/*
<script>
  function textChangeListener (evt) {
    var id = evt.target.id;
    var text = evt.target.value;

    if (id == "topLineText") {
      window.topLineText = text;
    } else {
      window.bottomLineText = text;
    }

    redrawMeme(window.imageSrc, window.topLineText, window.bottomLineText);
  }

  function redrawMeme(image, topLine, bottomLine) {
    // Get Canvas2DContext
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext("2d");
    // Your code here
  }

  function saveFile() {
    window.open(document.querySelector('canvas').toDataURL());
  }


  function handleFileSelect(evt) {
    var canvasWidth = 500;
    var canvasHeight = 500;
    var file = evt.target.files[0];



    var reader = new FileReader();
    reader.onload = function(fileObject) {
      var data = fileObject.target.result;

      // Create an image object
      var image = new Image();
      image.onload = function() {

        window.imageSrc = this;
        redrawMeme(window.imageSrc, null, null);
      }

      // Set image data to background image.
      image.src = data;
      console.log(fileObject.target.result);
    };
    reader.readAsDataURL(file)
  }

  window.topLineText = "";
  window.bottomLineText = "";
  var input1 = document.getElementById('topLineText');
  var input2 = document.getElementById('bottomLineText');
  input1.oninput = textChangeListener;
  input2.oninput = textChangeListener;
  document.getElementById('file').
    addEventListener('change', handleFileSelect, false);
  document.querySelector('button').addEventListener('click', saveFile, false);
</script>
*/
