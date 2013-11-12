
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
    baseSize = $(this).val() / 16;
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
    if ($('.font_scale').val() == 'aug_fourth_dim_fifth') {
      scaleRatio = 1.414;
      scaleCalc();
    };
    // if ($('.font_scale').val() == 'double_octave') {
    //   scaleRatio = 4;
    //   scaleCalc();
    // };
    if ($('.font_scale').val() == 'golden_section') {
      scaleRatio = 1.618;
      scaleCalc();
    };
    if ($('.font_scale').val() == 'major_second') {
      scaleRatio = 1.125;
      scaleCalc();
    };
    if ($('.font_scale').val() == 'major_third') {
      scaleRatio = 1.25;
      scaleCalc();
    };
    if ($('.font_scale').val() == 'major_sixth') {
      scaleRatio = 1.667;
      scaleCalc();
    };
    if ($('.font_scale').val() == 'major_seventh') {
      scaleRatio = 1.875;
      scaleCalc();
    };
    if ($('.font_scale').val() == 'major_tenth') {
      scaleRatio = 2.5;
      scaleCalc();
    };
    // if ($('.font_scale').val() == 'major_eleventh') {
    //   scaleRatio = 2.667;
    //   scaleCalc();
    // };
    // if ($('.font_scale').val() == 'major_twelfth') {
    //   scaleRatio = 3;
    //   scaleCalc();
    // };
    if ($('.font_scale').val() == 'minor_second') {
      scaleRatio = 1.067;
      scaleCalc();
    };
    if ($('.font_scale').val() == 'minor_third') {
      scaleRatio = 1.2;
      scaleCalc();
    };
    if ($('.font_scale').val() == 'minor_seventh') {
      scaleRatio = 1.778;
      scaleCalc();
    };
    if ($('.font_scale').val() == 'perfect_sixth') {
      scaleRatio = 1.6;
      scaleCalc();
    };
    if ($('.font_scale').val() == 'perfect_fourth') {
      scaleRatio = 1.333;
      scaleCalc();
    };
    if ($('.font_scale').val() == 'perfect_fifth') {
      scaleRatio = 1.5;
      scaleCalc();
    };
    if ($('.font_scale').val() == 'perfect_octave') {
      scaleRatio = 2;
      scaleCalc();
    };
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
      a = baseSize;
      b = scaleRatio;
      result = baseSize;

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
      a = baseSize;
      b = scaleRatio;
      result = baseSize;

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
