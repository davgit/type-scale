
$(document).ready(function() {

  viewportHeight = $(window).innerHeight();
  $('.stage').css('min-height', viewportHeight);

  // Set initial values
  //$('.base_size').val(16).select();
  $('.base_size').val(16);
  baseSize = 1;
  scaleRatio = 1.5;
  scaleCalc();

  $('.input_select_all').click(function () {
    $(this).select();
  });

  $('.base_size').bind("change paste keyup", function() {
    if($.isNumeric($(this).val())){
      baseSize = $(this).val() / 16;
    }
    else {
      baseSize = 0;
    };
    $('.base_em').text(Math.round(baseSize*1000)/1000);
    scaleSelect();
  });

  $('.preview_text').bind("change paste keyup", function() {
    previewText = $(this).val();
    $('.scale_preview_text').text(previewText);
  });

  $('.web_font').bind("change paste keyup", function() {
    webFont = $(this).val();
    $('head').append(webFont);
  });

  $('.web_font_name').bind("change paste keyup", function() {
    webFontName = $(this).val();
    $('.scale_webfont').attr('style', webFontName);
  });

  $('.font_scale').bind("change paste keyup", function() {
    scaleSelect();
  });

  function scaleSelect() {
    scaleRatio = $('.font_scale').val();
    scaleCalc();
  };

  function scaleCalc() {

    function scaleHigh() {
      a = baseSize;
      b = scaleRatio;
      result = baseSize;

      $($('.scale_high').get().reverse()).each(function(index) {
        $(this).css('font-size', Math.round(result*1000)/1000 + 'em');
        result = a*b;
        a = result;
      });
    };

    function scaleHighLabel() {
      a = 1;
      b = scaleRatio;
      result = 1;

      $($('.scale_high_label').get().reverse()).each(function(index) {
        $(this).text(Math.round(result*1000)/1000 + 'em');
        result = a*b;
        a = result;
      });
    };

    function scaleLow() {
      a = baseSize;
      b = scaleRatio;
      result = baseSize;

      $('.scale_low').each(function(index) {
        result = a/b;
        a = result;
        $(this).css('font-size', Math.round(result*1000)/1000 + 'em');
      });
    };

    function scaleLowLabel() {
      a = 1;
      b = scaleRatio;
      result = 1;

      $('.scale_low_label').each(function(index) {
        result = a/b;
        a = result;
        $(this).text(Math.round(result*1000)/1000 + 'em');
      });
    };

    scaleHigh();
    scaleHighLabel();
    scaleLow();
    scaleLowLabel();
  };

});
