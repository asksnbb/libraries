$(function() {

  var siteSticky = function() {
    $(".js-sticky-header").sticky({topSpacing:0});
  };
  siteSticky(); 

  var siteMenuClone = function() {

    $('.js-clone-nav').each(function() {
      var $this = $(this);
      $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
    });


    setTimeout(function() {
      
      var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

    $('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

    $(window).resize(function() {
      var $this = $(this),
        w = $this.width();

      if ( w > 768 ) {
        if ( $('body').hasClass('offcanvas-menu') ) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    })

    $('body').on('click', '.js-menu-toggle', function(e) {
      var $this = $(this);
      e.preventDefault();

      if ( $('body').hasClass('offcanvas-menu') ) {
        $('body').removeClass('offcanvas-menu');
        $this.removeClass('active');
      } else {
        $('body').addClass('offcanvas-menu');
        $this.addClass('active');
      }
    }) 

    // click outisde offcanvas
    $(document).mouseup(function(e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ( $('body').hasClass('offcanvas-menu') ) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    });
  }; 
  siteMenuClone();

});

                    
                    $(".validate_schema").click(function() {

                      if ($('.google-div').hasClass('d-none')) {
                        $('.google-div').removeClass('d-none');
                        $('.validate_schema').empty();
                        $('.validate_schema').html("<i class='bx bx-x'></i>");
                        $('.validate_schema').css('background-color','#000');

                      }else{

                        $('.google-div').addClass('d-none');
                        $('.validate_schema').empty();
                        $('.validate_schema').html("<i class='bx bxl-google'></i>");
                        $('.validate_schema').css('background-color','green');
                      }
                      


                    });

// $('#empty_fields').click(function(){
//    $('input[type="text"]').val('');
//    $('input[type="url"]').val('');
//    $('input[type="tel"]').val('');
//    $('input[type="email"]').val('');
//    $('.rd span').empty('');
//    $("input[name='code_snippet']").val('');
//    $('#validate_schema').css('opacity',0);
// });


                    $("button[name=empty_fields]").click(function() {
                        var id = $(this).attr('id');
                       
                         $('.'+id+' input[type="text"]').val('');
                         $('.'+id+' input[type="url"]').val('');
                         $('.'+id+' input[type="tel"]').val('');
                         $('.'+id+' input[type="email"]').val('');
                         $('.'+id+' input[type="number"]').val('');
                         $('.'+id+' textarea').val('');
                         $('.'+id+' .rd span').empty('');
                         $('.'+id+' input[name="code_snippet"]').val('');
                         $('.'+id+' #validate_schema').css('opacity',0);
                         $('.'+id+' .invalid-span').remove();
                         $('.'+id+' input').removeClass('invalid-class');
                         


                    });


               function schema_google(form_name){
                    
                 
                    if($('#'+form_name+'_code_snippet').val()){
                      
                       $('.'+form_name+' #validate_schema').css('opacity',1);
                      }

                     var html = $('#'+form_name+"_copy code").html();
             
                     var converted_text = $(html).text();
                     $('#'+form_name+"_code_snippet").val(converted_text);
                     $('#'+form_name+"_code_snippet_2").val(converted_text);
                    
                }

                function isUrlValid(url) {
                    return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
                }

                function date_picker(picker_id,dropper_id){
                      

                      $('#'+picker_id).datepicker();
                }

                 function deletesupplydiv(id){
                    $("#supply_div_"+id).remove();
                    $("#main_supply_div_"+id).remove();
                  }

                  function supplyfunction(value,id){
                    
                    $("#"+id+"_result").html(value);
                  }

                  function deletetooldiv(id){
                    $("#tool_div_"+id).remove();
                    $("#main_tool_div_"+id).remove();
                  }

                  function toolfunction(value,id){
                    $("#"+id+"_result").html(value);
                  }


                  function deletediv(id){
                 
                    $("#steps_main_div_"+id).remove();
                    $("#main_step_div_"+id).remove();
                    

                   // $("#"+left_div+id).remove();
                    // $("#"+right_div+id).remove();
                  }


                  function stepfunction(value,id){
                   
                    $("#"+id+"_result").html(value);
                    schema_google('form18');
                    // if (value.length > 2) {
                    //   check_valid__url(value,id);
                    // }
                    
                    // check_valid_input("step_text_"+id,"step_text_"+id);

                  }


                  //Breadcrumb 


                  function removebreadcrumb(id){
                    $("#breadcrumb_list_"+id).remove();
                    $("#breadcrumb_json_list_"+id).remove();
                    $('#breadcrumb_rdfa_list_'+id).remove();
                  }

                  function breadcrumbfunction(id,value){
              
                    $("#"+id+"_result").html(value);
                    $("#"+id+"_rdfa_result").html(value);
                    schema_google('form8');

                  }


                  // FAQ's

                  function removefaq(id){
                    $("#faq_list_"+id).remove();
                    $("#faq_json_list_"+id).remove();
                    $('#faq_rdfa_list_'+id).remove();
                  }

                  function faqfunction(id,value){
              
                    $("#"+id+"_result").html(value);
                    $("#"+id+"_rdfa_result").html(value);
                    schema_google('form7');

                  }


                  //Check valid URL

                  function check_valid__url(url,id){

                    if(!isUrlValid(url)){

                      $('#'+id).addClass('invalid-class');
                      if(!$('#'+id).next().hasClass("invalid-span")){
                        $('#'+id).after("<span class='invalid-span d-flex ms-1 text-danger'><small>Invalid url</small></span>");
                      }
                      
                    }else{
                      
                      $('#'+id).removeClass('invalid-class');
                      $('#'+id).next().remove('.invalid-span');
                    }
                   }

                   function check_valid_input(field,id){
                    if(field.length < 1 ){
                      $('#'+id).addClass('invalid-class');
                      if(!$('#'+id).next().hasClass("invalid-span")){
                        $('#'+id).after("<span class='invalid-span d-flex ms-1 text-danger'><small>This field is must</small></span>");
                      }
                      
                    }else{

                      $('#'+id).removeClass('invalid-class');
                      $('#'+id).next().remove('.invalid-span');
                    }
                   }

                // $( function() {
                //   $( "#video_upload" ).datepicker();
                // } );

$(document).ready(function(){
                  $(function () {

                    $('.box').hide();
                          $('.custom-options span').click(function(){
                              $("#my-schema").removeClass('d-none'); 
                              var id = $(this).attr('id');
                              
                              $('.box').hide();
                       $('.card h4').css('display','none');       
                       $('.main-header').css('background-image','linear-gradient(to right top,#E4E1E1,#EEEEEE)');


                       $('.card').css('background-color','transparent');
                       $('.header-content .heading').css('display','none');
                       $('.header-content .about').css('display','none');
                        // $('.schema-card').css('padding','20px 20px');
                        // $('.schema-card').css('padding','20px 20px');
                        $(".schema-card").css({"padding": "5px 20px", "margin-top": "0px","box-shadow":"none"});
                       // $('.card h4').css('display','none');
                       $('.custom-select-wrapper').css('margin-top','-35px');


                       $('.form'+$(this).attr('id')).show();
                          })
                       // $('#select').on("change",function () {
                       // $('.box').hide();
                       // $('.main-header').css('background-color','#eee');
                       // $('.card').css('background-color','#eee');
                       // $('.header-content .heading').css('display','none');
                       // $('.header-content .about').css('display','none');
                       // $('.card').css('background-color','#eee');
                       // $('.card h4').css('display','none');
                       // $('.form'+$(this).val()).show();
                       // }).val("-1");
                   });
                  $("a[name=copy_pre]").click(function() {
                        var id = $(this).attr('id');
                        var el = document.getElementById(id);
                        var range = document.createRange();
                        range.selectNodeContents(el);
                        var sel = window.getSelection();
                        sel.removeAllRanges();
                        sel.addRange(range);

                        document.execCommand('copy');
                        return false;
                    });


                 // var id = 2;
                  $('#how_to_supply_btn').on('click',function(){
                        var id=1;
                        $(".form18 input[name=supply_name]").each((i, e) => {
                           var value1 = e.value;
                           id += Number(value1);
                        });
                        $('.sply').removeClass('d-none');
                       $(".sply").append('<br><span id="main_supply_div_'+id+'">,{ <br><span class="rd">"@type"</span>: <span class="rd">"HowToSupply"</span>,<br>"name": <span class="rd">"<span id="supply_input_'+id+'_result"></span>"</span><br>}</span>'); 
                       $("#add_supply_div").append('<div id="supply_div_'+id+'" class="row g-1 mb-1"><div class="col-md-10"><input type="text" value="" onkeyup="supplyfunction(this.value,this.id)" id="supply_input_'+id+'" placeholder="Supply '+id+'" class="form-control" style="height:30px;"></div><div class="col-md-2"><button id="'+id+'" onclick="deletesupplydiv(this.id)" class="btn btn-sm btn-danger">X</button><input type="hidden" name="supply_name" value="1"> </div></div>');
                        id++;
                    });

                 // var md = 2;
                  $('#how_to_tool_btn').on('click',function(){
                    var md = 1;
                    $(".form18 input[name=tool_name]").each((i, e) => {
                           var value1 = e.value;
                           md += Number(value1);
                        });
                        $('.tools').removeClass('d-none');
                       $(".tools").append('<br><span id="main_tool_div_'+md+'">,{ <br><span class="rd">"@type"</span>: <span class="rd">"HowToTool"</span>,<br>"name": <span class="rd">"<span id="tool_input_'+md+'_result"></span>"</span><br>}</span>'); 
                       $("#add_tool_div").append('<div id="tool_div_'+md+'" class="row g-1 mb-1"><div class="col-md-10"><input type="text" value="" onkeyup="toolfunction(this.value,this.id)" id="tool_input_'+md+'" placeholder="Tool '+md+'" class="form-control" style="height:30px;"></div><div class="col-md-2"><button id="'+md+'" onclick="deletetooldiv(this.id)" class="btn btn-sm btn-danger">X</button></div></div>');
                        id++;
                    });

                  
                  $('#add_steps_button').on('click',function(){
                    var jd = 1;
                    $(".form18 input[name=how_to_step_name]").each((i, e) => {
                           var value1 = e.value;
                           jd += Number(value1);
                        });
                    $('.step').removeClass('d-none');
                    $(".step").append('<div id="main_step_div_'+jd+'"><br>,{<br><span class="gry">"@type"</span>: <span class="rd">"HowToStep"</span>,<br> "text": <span class="rd">"<span id="steps_text_'+jd+'_result"></span>"</span>,<br> "name": <span class="rd">"<span id="steps_image_'+jd+'_result"></span>"</span>,<br> "name": <span class="rd">"<span id="steps_name_'+jd+'_result"></span>"</span>,<br> "url": <span class="rd">"<span id="steps_url_'+jd+'_result"></span>"</span><br>}</div>');
                    //$(".step")append('"step": [{<span class="gry">"@type"</span>: <span class="rd">"HowToStep"</span>, "text": <span class="rd">"<span id="step_text_1_result"></span>"</span>, "name": <span class="rd">"<span id="step_image_1_result"></span>"</span>, "name": <span class="rd">"<span id="step_name_1_result"></span>"</span>, "url": <span class="rd">"<span id="step_url_1_result"></span>"</span>,');
                    //$(".step").append('<br><span id="main_step_div_'+jd+'"><span>,{<span class="gry">"@type"</span>: <span class="rd">"HowToStep"</span>,<br>"text": <span class="rd">"<span id="steps_text_'+jd+'_result"></span>"</span></span>,<br>"image": <span class="rd">"<span id="steps_image_'+jd+'_result"></span>"</span></span>,<br>"name": <span class="rd">"<span id="steps_name_'+jd+'_result"></span>"</span></span>,<br>"url": <span class="rd">"<span id="steps_url_'+jd+'_result"></span>"</span></span></span>,<br>}</span>');
                    $("#add_steps").append('<div id="steps_main_div_'+jd+'" class="row g-2 mt-4"><div class="col-md-12"><div class="row"><div class="col-md-10"><textarea class="form-control" id="steps_text_'+jd+'" onkeyup="stepfunction(this.value,this.id)" placeholder="Step Instruction '+jd+'"></textarea></div><div class="col-md-2"><button id="'+jd+'" class="btn btn-danger" onclick="deletediv(this.id)" >X</button></div></div></div><div class="col-md-12"><div class="row g-2"><div class="col-md-4"><input onkeyup="stepfunction(this.value,this.id)" type="url" id="steps_image_'+jd+'" class="form-control"/></div><input type="hidden" name="how_to_step_name" value="1"> <div class="col-md-4"><input onkeyup="stepfunction(this.value,this.id)" type="text" id="steps_name_'+jd+'" class="form-control"/></div><div class="col-md-4"><input onkeyup="stepfunction(this.value,this.id)" type="text" id="steps_url_'+jd+'" class="form-control"/></div></div></div></div>');
                    jd++;
                  });

                  //var bc = 3;
                  $('#add_breadcrumb_button').on('click',function(){
                     var bc=1;
                     $(".form8 input[name=breadcrumb_name]").each((i, e) => {
                           var value1 = e.value;
                           bc += Number(value1);
                     });
                    $('.breadcrumb_div').removeClass('d-none');
                    $('.breadcrumb_rdfa').removeClass('d-none');
                    $(".breadcrumb_div").append('<div id="breadcrumb_list_'+bc+'" class="row g-2 mt-2 mb-2"><div class="col-md-12"><label class="d-flex justify-content-between align-items-center px-1"><span>Page Level '+bc+'</span><input type="hidden" name="breadcrumb_name" value="1"><span class="text-danger cursor-pointer" id="'+bc+'" onclick="removebreadcrumb(this.id)">remove</span> </label></div><div class="col-md-12"><input class="form-control" type="text" value="" onkeyup="breadcrumbfunction(this.id,this.value)" id="bc-page'+bc+'" placeholder="Website Name Level '+bc+'"></div><div class="col-md-12"><input class="form-control" type="url"  id="bc-url'+bc+'" value="" onkeyup="breadcrumbfunction(this.id,this.value)" placeholder="URL Level '+bc+'"></div></div>');
                    $("#breabcrumb_json").append('<div id="breadcrumb_json_list_'+bc+'"><span class="level-3">,{<br><span class="gry">"@type"</span>: "ListItem",<br> "position": '+bc+', <br>"name": <span class="rd">"<span id="bc-page'+bc+'_result"></span>"</span>,<br>"item": <span class="rd">"<span id="bc-url'+bc+'_result"></span>" </span><br> }</span></div>');
                    $(".breadcrumb_rdfa").append('<div id="breadcrumb_rdfa_list_'+bc+'"><span class="gr">,<br></span><<span class="gr">li</span> <span class="bl">property</span>=<span class="rd">"itemListElement"</span> <span class="bl">typeof</span>=<span class="rd">"ListItem"</span><span class="gr"></span>><br><span class="gr"></span><<span class="gr">a</span> <span class="bl">property</span>=<span class="rd">"item"</span> <span class="bl">typeof</span>=<span class="rd">"Webpage"</span> <span class="bl">href</span>=<span class="rd">"<span id="bc-url'+bc+'_rdfa_result"></span>"</span><span class="gr"></span>><br><span class="gr"></span><<span class="gr">span</span> <span class="bl">property</span>=<span class="rd">"name"</span></span>><span class="rd"><span id="bc-page'+bc+'_rdfa_result"></span></span><<span class="gr"></span><span class="gr">/</span><span class="gr">span</span><span class="gr"></span>><<span class="gr"></span><span class="gr">/</span><span class="gr">a</span><span class="gr"></span>><span class="gr"></span><br><<span class="gr">meta</span> <span class="bl">property</span>=<span class="rd">"position"</span> <span class="bl">content</span>=<span class="rd">"'+bc+'"</span></span>><<span class="gr"></span><span class="gr">/</span><span class="gr">li</span><span class="gr"></span>></div>');
                    bc++;
                  });



                  /*FAQ*/

                  //var fa = 3;
                  $('#add_faq_button').on('click',function(){
                     var fa=1;
                     $(".form7 input[name=faq_name]").each((i, e) => {
                           var value1 = e.value;
                           fa += Number(value1);
                     }); 
                    $('.faq_div').removeClass('d-none');
                    $('.faq_rdfa').removeClass('d-none');
                    $(".faq_div").append('<div id="faq_list_'+fa+'" class="row g-2 mt-2 mb-2"><div class="col-md-12"><label class="d-flex justify-content-between align-items-center px-1"><span>Question '+fa+'</span><input type="hidden" name="faq_name" value="1"><span class="text-danger cursor-pointer" id="'+fa+'" onclick="removefaq(this.id)">remove</span> </label></div><div class="col-md-12"><input class="form-control" type="text" value="" onkeyup="faqfunction(this.id,this.value)" id="fa-page'+fa+'" placeholder="Question '+fa+'"></div><div class="col-md-12"><input class="form-control" type="url"  id="fa-url'+fa+'" value="" onkeyup="faqfunction(this.id,this.value)" placeholder="Answer '+fa+'"></div></div>');
                    $("#faq_json").append('<div id="faq_json_list_'+fa+'"><span class="question2">},{<br><span class="gry">"@type"</span>: <span class="rd">"Question"</span>,<br>"name": <span class="rd">"<span id="fa-page'+fa+'_result"></span>"</span>,<br>"acceptedAnswer": {<br>"@type": "Answer",<br>"text": <span class="rd">"<span id="fa-url'+fa+'_result"></span>"</span><br>}<br></span><br></div>');
                    //$("#faq_json").append('<div id="faq_json_list_'+fa+'"><span class="level-3">,{<br><span class="gry">"@type"</span>: "ListItem",<br> "position": '+fa+', <br>"name": <span class="rd">"<span id="fa-page'+fa+'_result"></span>"</span>,<br>"item": <span class="rd">"<span id="fa-url'+fa+'_result"></span>" </span><br> }</span></div>');
                    //$(".faq_rdfa").append('<div id="faq_rdfa_list_'+fa+'"><span class="gr">,<br></span><<span class="gr">li</span> <span class="bl">property</span>=<span class="rd">"itemListElement"</span> <span class="bl">typeof</span>=<span class="rd">"ListItem"</span><span class="gr"></span>><br><span class="gr"></span><<span class="gr">a</span> <span class="bl">property</span>=<span class="rd">"item"</span> <span class="bl">typeof</span>=<span class="rd">"Webpage"</span> <span class="bl">href</span>=<span class="rd">"<span id="fa-url'+fa+'_rdfa_result"></span>"</span><span class="gr"></span>><br><span class="gr"></span><<span class="gr">span</span> <span class="bl">property</span>=<span class="rd">"name"</span></span>><span class="rd"><span id="fa-page'+fa+'_rdfa_result"></span></span><<span class="gr"></span><span class="gr">/</span><span class="gr">span</span><span class="gr"></span>><<span class="gr"></span><span class="gr">/</span><span class="gr">a</span><span class="gr"></span>><span class="gr"></span><br><<span class="gr">meta</span> <span class="bl">property</span>=<span class="rd">"position"</span></span>><<span class="gr"></span><span class="gr">/</span><span class="gr">li</span><span class="gr"></span>></div>');
                     $(".faq_rdfa").append('<div id="faq_rdfa_list_'+fa+'"><span class="gr"></span><<span class="gr">li</span> <span class="bl">property</span>=<span class="rd">"itemListElement"</span> <span class="bl">typeof</span>=<span class="rd">"ListItem"</span><span class="gr"></span>><span class="gr"></span><<span class="gr">a</span> <span class="bl">property</span>=<span class="rd">"item"</span> <span class="bl">typeof</span>=<span class="rd">"Webpage"</span> <span class="bl">href</span>=<span class="rd">"<span id="fa-url'+fa+'_rdfa_result"></span>"</span><span class="gr"></span>><span class="gr"></span><<span class="gr">span</span> <span class="bl">property</span>=<span class="rd">"name"</span></span>><span class="rd"><span id="fa-page'+fa+'_rdfa_result"></span></span><<span class="gr"></span><span class="gr">/</span><span class="gr">span</span><span class="gr"></span>><<span class="gr"></span><span class="gr">/</span><span class="gr">a</span><span class="gr"></span>><span class="gr"></span><<span class="gr">meta</span> <span class="bl">property</span>=<span class="rd">"position"</span></span>><<span class="gr"></span><span class="gr">/</span><span class="gr">li</span><span class="gr"></span>></div>');
                    // fa++;
                  });




                   

                   //Howto Step form18
                 $("#how_to_name,#how_to_description,#how_to_time,#how_to_estimated_cost,#how_to_currency").keyup(function () {
                    var how_to_name = $('#how_to_name').val();
                    var how_to_description = $('#how_to_description').val();
                    var how_to_time = $('#how_to_time').val();
                    var how_to_estimated_cost = $('#how_to_estimated_cost').val();
                    var how_to_currency = $('#how_to_currency').val();
      
                    $('span#how_to_name_result').html(how_to_name);
                    $('span#how_to_description_result').html(how_to_description);
                    $('span#how_to_time_result').html(how_to_time);
                    $('span#how_to_estimated_cost_result').html(how_to_estimated_cost);
                    $('span#how_to_currency_result').html(how_to_currency);
                   
                    schema_google('form18');
                    check_valid_input(how_to_name,'how_to_name');

                     });


                 //Corporation
                 $("#corp-websiteurl,#corp-corporationname,#corp-legalname,#corp-description,#corp-imageurl,#corp-logourl,#corp-telephone,#corp-fax,#corp-email").keyup(function () {
                    var url = $('#corp-websiteurl').val();
                    var name = $('#corp-corporationname').val();
                    var legal = $('#corp-legalname').val();
                    var des = $('#corp-description').val();
                    var img = $('#corp-imageurl').val();
                    var logo = $('#corp-logourl').val();
                    var tel = $('#corp-telephone').val();
                    var fax = $('#corp-fax').val();
                    var mail = $('#corp-email').val();
                    $('span#corp-websiteurl').html(url);
                    $('span#corp-corporationname').html(name);
                    $('span#corp-logourl').html(logo);
                    
                    
                    if (url.length > 2) {
                      check_valid__url(url,'corp-websiteurl');
                    }
                    
                    check_valid_input(name,'corp-corporationname');

                    check_valid_input(des,'corp-description');
                    

                    



                    if(legal != null){
                         $(".corp-leg").css("display","inline");
                         $('span#corp-legalname').html(legal);
                        if(legal == ""){
                         $(".corp-leg").css("display","none");
                        } 
                    } 
                    if(des != null){
                         $(".corp-des").css("display","inline");
                         $('span#corp-description').html(des);
                        if(des == ""){
                         $(".corp-des").css("display","none");
                        } 
                    } 
                    if(img != null){
                         $(".corp-img").css("display","inline");
                         $('span#corp-imageurl').html(img);
                        if(img == ""){
                         $(".corp-img").css("display","none");
                        } 
                    } 
                    if(tel != null){
                         $(".corp-tel").css("display","inline");
                         $('span#corp-telephone').html(tel);
                        if(tel == ""){
                         $(".corp-tel").css("display","none");
                        } 
                    } 
                    if(tel != null){
                         $(".corp-tel").css("display","inline");
                         $('span#corp-telephone').html(tel);
                        if(tel == ""){
                         $(".corp-tel").css("display","none");
                        } 
                    } 
                    if(fax != null){
                         $(".corp-fx").css("display","inline");
                         $('span#corp-fax').html(fax);
                        if(fax == ""){
                         $(".corp-fx").css("display","none");
                        } 
                    } 
                    if(mail != null){
                         $(".corp-mail").css("display","inline");
                         $('span#corp-email').html(mail);
                        if(mail == ""){
                         $(".corp-mail").css("display","none");
                        } 
                    }

                    schema_google('form1');
                    // var html = $("#div_1 code").html();
                    // var converted_text = $(html).text();
                 
                    // $("input[name='code_snippet']").val(converted_text);

                  });

                 //Corp Address
                 $("#corp-street,#corp-locality,#corp-region,#corp-country,#corp-postalcode").keyup(function () {


                    var street = $('#corp-street').val();
                    var local = $('#corp-locality').val();
                    var region = $('#corp-region').val();
                    var country = $('#corp-country').val();
                    var postalcode = $('#corp-postalcode').val();
                    if((street != "") && (local != "") && (region != "") && (country != "") && (postalcode != "")){
                        $(".corp-add").css("display","inline");
                        $('span#corp-street').html(street);
                        $('span#corp-locality').html(local);
                        $('span#corp-region').html(region);
                        $('span#corp-country').html(country);
                        $('span#corp-postalcode').html(postalcode);
                    }
                    if((street == "") || (local == "") || (region == "") || (country == "") || (postalcode == "")){
                        $(".corp-add").css("display","none");
                    }

                    schema_google('form1');
                  });
                  //social
                  $("#corp-facebook,#corp-youtube,#corp-instagram,#corp-linkedin,#corp-pinterest").keyup(function () {
                    var fb = $('#corp-facebook').val();
                    var yt = $('#corp-youtube').val();
                    var ig = $('#corp-instagram').val();
                    var lk = $('#corp-linkedin').val();
                    var ptr = $('#corp-pinterest').val();
                    if((fb != "") || (yt != "") || (ig != "") || (lk != "") || (ptr != "")){
                        $(".corp-social").css("display","inline");
                    }
                    if((fb == "") && (yt == "") && (ig == "") && (lk == "") && (ptr == "")){
                        $('.corp-social').css('display','none');
                    } 
                        if(fb != null){
                            $(".corp-fb").css("display","inline");
                            $('span#corp-facebook').html(fb);
                            if(fb == ""){
                             $(".corp-fb").css("display","none");
                            } 
                        }
                        if(yt != null){
                            $(".corp-yt").css("display","inline");
                            $('span#corp-youtube').html(yt);
                            if(yt == ""){
                             $(".corp-yt").css("display","none");
                            } 
                        }
                        if(ig != null){
                            $(".corp-ig").css("display","inline");
                            $('span#corp-instagram').html(ig);
                            if(ig == ""){
                             $(".corp-ig").css("display","none");
                            } 
                        }
                        if(lk != null){
                            $(".corp-lk").css("display","inline");
                            $('span#corp-linkedin').html(lk);
                            if(lk == ""){
                             $(".corp-lk").css("display","none");
                            }
                        }
                        if(ptr != null){
                            $(".corp-ptr").css("display","inline");
                            $('span#corp-pinterest').html(ptr);
                            if(ptr == ""){
                             $(".corp-ptr").css("display","none");
                            }
                        }
                    var socialVisibleArray = $('.corp-social > span:visible');
                    var socialVisibleLength = socialVisibleArray.length;
                    var socialVisibleClassName;
                    if ( socialVisibleLength > 0 ) {
                       socialVisibleArray.each( function( key, value ) {
                         if (key != socialVisibleLength-1) { 
                           $('.'+value.className ).find('.comma').css('display','inline');
                         } else {
                           $('.'+value.className ).find('.comma').css('display','none');
                         }
                       });
                    } 
                    // var html = $("#div_1 code").html();
                    // var converted_text = $(html).text();
                 
                    // $("input[name='code_snippet']").val(converted_text);
                    
                    schema_google('form1');
                  });
                //Organization
                 $("#org-websiteurl,#org-organizationname,#org-legalname,#org-description,#org-imageurl,#org-logourl,#org-telephone,#org-fax,#org-email").keyup(function () {
                    var url = $('#org-websiteurl').val();
                    var name = $('#org-organizationname').val();
                    var legal = $('#org-legalname').val();
                    var des = $('#org-description').val();
                    var img = $('#org-imageurl').val();
                    var logo = $('#org-logourl').val();
                    var tel = $('#org-telephone').val();
                    var fax = $('#org-fax').val();
                    var mail = $('#org-email').val();

                    /*RDFA */
                    $('span#org-legalname_rdfa_result').html(legal);
                    $('span#org-name_rdfa_result').html(name);
                    $('span#org-websiteurl_result_rdfa').html(url);
                    $('span#org-description_result_rdfa').html(des);
                    $('span#org-imageurl_result_rdfa').html(img);
                    $('span#org-logourl_result_rdfa').html(logo);
                    $('span#org-telephone_result_rdfa').html(tel);
                    $('span#org-fax_result_rdfa').html(fax);
                    $('span#org-email_result_rdfa').html(mail);

                    


                    $('span#org-websiteurl').html(url);
                    $('span#org-organizationname').html(name);
                    $('span#org-logourl').html(logo);

                    if (url.length > 2) {
                      check_valid__url(url,'org-websiteurl');
                    }

                    if (img.length > 2) {
                      check_valid__url(img,'org-imageurl');
                    }

                    if (logo.length > 2) {
                      check_valid__url(logo,'org-logourl');
                    }
                    
                    check_valid_input(name,'org-organizationname');

                    check_valid_input(des,'org-description');
                    


                    if(legal != null){
                         $(".org-leg").css("display","inline");
                         $('span#org-legalname').html(legal);
                        if(legal == ""){
                         $(".org-leg").css("display","none");
                        } 
                    } 
                    if(des != null){
                         $(".org-des").css("display","inline");
                         $('span#org-description').html(des);
                        if(des == ""){
                         $(".org-des").css("display","none");
                        } 
                    } 
                    if(img != null){
                         $(".org-img").css("display","inline");
                         $('span#org-imageurl').html(img);
                        if(img == ""){
                         $(".org-img").css("display","none");
                        } 
                    } 
                    if(tel != null){
                         $(".org-tel").css("display","inline");
                         $('span#org-telephone').html(tel);
                        if(tel == ""){
                         $(".org-tel").css("display","none");
                        } 
                    } 
                    if(tel != null){
                         $(".org-tel").css("display","inline");
                         $('span#org-telephone').html(tel);
                        if(tel == ""){
                         $(".org-tel").css("display","none");
                        } 
                    } 
                    if(fax != null){
                         $(".org-fx").css("display","inline");
                         $('span#org-fax').html(fax);
                        if(fax == ""){
                         $(".org-fx").css("display","none");
                        } 
                    } 
                    if(mail != null){
                         $(".org-mail").css("display","inline");
                         $('span#org-email').html(mail);
                        if(mail == ""){
                         $(".org-mail").css("display","none");
                        } 
                    } 

                    schema_google('form2');
                  });
                 //Org Address
                 $("#org-street,#org-locality,#org-region,#org-country,#org-postalcode").keyup(function () {
                    var street = $('#org-street').val();
                    var local = $('#org-locality').val();
                    var region = $('#org-region').val();
                    var country = $('#org-country').val();
                    var postalcode = $('#org-postalcode').val();
                    if((street != "") && (local != "") && (region != "") && (country != "") && (postalcode != "")){
                        $(".org-add").css("display","inline");
                        $('span#org-street').html(street);
                        $('span#org-locality').html(local);
                        $('span#org-region').html(region);
                        $('span#org-country').html(country);
                        $('span#org-postalcode').html(postalcode);

                        $('span#org-street_result_rdfa').html(street);
                        $('span#org-locality_result_rdfa').html(local);
                        $('span#org-region_result_rdfa').html(region);
                        $('span#org-country_result_rdfa').html(country);
                        $('span#org-postalcode_result_rdfa').html(postalcode);
                    }    
                    if((street == "") || (local == "") || (region == "") || (country == "") || (postalcode == "")){
                        $(".org-add").css("display","none");
                    }      
                  });
                  //social
                  $("#org-facebook,#org-youtube,#org-instagram,#org-linkedin,#org-pinterest").keyup(function () {
                    var fb = $('#org-facebook').val();
                    var yt = $('#org-youtube').val();
                    var ig = $('#org-instagram').val();
                    var lk = $('#org-linkedin').val();
                    var ptr = $('#org-pinterest').val();

                    $('span#org-facebook_result_rdfa').html(fb);
                    $('span#org-youtube_result_rdfa').html(yt);
                    $('span#org-instagram_result_rdfa').html(ig);
                    $('span#org-linkedin_result_rdfa').html(lk);
                    $('span#org-pinterest_result_rdfa').html(ptr);

                    if (fb.length > 2) {
                      check_valid__url(fb,'org-facebook');
                    }

                    if (yt.length > 2) {
                      check_valid__url(yt,'org-youtube');
                    }

                    if (ig.length > 2) {
                      check_valid__url(ig,'org-instagram');
                    }

                    if (lk.length > 2) {
                      check_valid__url(lk,'org-linkedin');
                    }

                    if (ptr.length > 2) {
                      check_valid__url(ptr,'org-pinterest');
                    }

                    if((fb != "") || (yt != "") || (ig != "") || (lk != "") || (ptr != "")){
                        $(".org-social").css("display","inline");
                    }
                    if((fb == "") && (yt == "") && (ig == "") && (lk == "") && (ptr == "")){
                        $('.org-social').css('display','none');
                    } 
                        if(fb != null){
                            $(".org-fb").css("display","inline");
                            $('span#org-facebook').html(fb);
                            if(fb == ""){
                             $(".org-fb").css("display","none");
                            } 
                        }
                        if(yt != null){
                            $(".org-yt").css("display","inline");
                            $('span#org-youtube').html(yt);
                            if(yt == ""){
                             $(".org-yt").css("display","none");
                            } 
                        }
                        if(ig != null){
                            $(".org-ig").css("display","inline");
                            $('span#org-instagram').html(ig);
                            if(ig == ""){
                             $(".org-ig").css("display","none");
                            } 
                        }
                        if(lk != null){
                            $(".org-lk").css("display","inline");
                            $('span#org-linkedin').html(lk);
                            if(lk == ""){
                             $(".org-lk").css("display","none");
                            }
                        }
                        if(ptr != null){
                            $(".org-ptr").css("display","inline");
                            $('span#org-pinterest').html(ptr);
                            if(ptr == ""){
                             $(".org-ptr").css("display","none");
                            }
                        }
                    var socialVisibleArray = $('.org-social > span:visible');
                    var socialVisibleLength = socialVisibleArray.length;
                    var socialVisibleClassName;
                    if ( socialVisibleLength > 0 ) {
                       socialVisibleArray.each( function( key, value ) {
                         if (key != socialVisibleLength-1) { 
                           $('.'+value.className ).find('.comma').css('display','inline');
                         } else {
                           $('.'+value.className ).find('.comma').css('display','none');
                         }
                       });
                    } 

                    schema_google('form2');             
                  });

                 //Lacal Business
                 $("#bu-websiteurl,#bu-businessname,#bu-legalname,#bu-description,#bu-imageurl,#bu-logourl,#bu-telephone,#bu-fax,#bu-email").keyup(function () {
                    var url = $('#bu-websiteurl').val();
                    var name = $('#bu-businessname').val();
                    var legal = $('#bu-legalname').val();
                    var des = $('#bu-description').val();
                    var img = $('#bu-imageurl').val();
                    var logo = $('#bu-logourl').val();
                    var tel = $('#bu-telephone').val();
                    var fax = $('#bu-fax').val();
                    var mail = $('#bu-email').val();
                    $('span#bu-imageurl').html(img);
                    $('span#bu-businessname').html(name);
                    $('span#bu-telephone').html(tel);

                    $('span#bu-imageurl_rdfa').html(img);
                    $('span#bu-businessname_rdfa').html(name);
                    $('span#bu-telephone_rdfa').html(tel);

                    if (url.length > 2) {
                      check_valid__url(url,'bu-websiteurl');
                    }

                     if (img.length > 2) {
                      check_valid__url(img,'bu-imageurl');
                    }

                     if (logo.length > 2) {
                      check_valid__url(logo,'bu-logourl');
                    }
                    
                    check_valid_input(name,'bu-businessname');

                    check_valid_input(des,'bu-description');
                    


                    if(url != null){
                         $(".bu-url").css("display","inline");
                         $('span#bu-websiteurl').html(url);
                         $('span#bu-websiteurl_rdfa').html(url);
                        if(url == ""){
                         $(".bu-url").css("display","none");
                        } 
                    } 
                    if(legal != null){
                         $(".bu-leg").css("display","inline");
                         $('span#bu-legalname').html(legal);
                         $('span#bu-legalname_rdfa').html(legal);
                        if(legal == ""){
                         $(".bu-leg").css("display","none");
                        } 
                    } 
                    if(des != null){
                         $(".bu-des").css("display","inline");
                         $('span#bu-description').html(des);
                         $('span#bu-description_rdfa').html(des);
                        if(des == ""){
                         $(".bu-des").css("display","none");
                        } 
                    } 
                    if(logo != null){
                         $(".bu-logo").css("display","inline");
                         $('span#bu-logourl').html(logo);
                         $('span#bu-logourl_rdfa').html(logo);
                        if(logo == ""){
                         $(".bu-logo").css("display","none");
                        } 
                    }
                    if(fax != null){
                         $(".bu-fx").css("display","inline");
                         $('span#bu-fax').html(fax);
                         $('span#bu-fax_rdfa').html(fax);
                        if(fax == ""){
                         $(".bu-fx").css("display","none");
                        } 
                    } 
                    if(mail != null){
                         $(".bu-mail").css("display","inline");
                         $('span#bu-email').html(mail);
                         $('span#bu-email_rdfa').html(mail);
                        if(mail == ""){
                         $(".bu-mail").css("display","none");
                        } 
                    }
                    schema_google('form3');  
                 
                  });
                 //Business Address
                 $("#bu-street,#bu-locality,#bu-region,#bu-country,#bu-postalcode").keyup(function () {
                    var street = $('#bu-street').val();
                    var local = $('#bu-locality').val();
                    var region = $('#bu-region').val();
                    var country = $('#bu-country').val();
                    var postalcode = $('#bu-postalcode').val();
                    if((street != "") && (local != "") && (region != "") && (country != "") && (postalcode != "")){
                        $(".bu-add").css("display","inline");
                        $('span#bu-street').html(street);
                        $('span#bu-locality').html(local);
                        $('span#bu-region').html(region);
                        $('span#bu-country').html(country);
                        $('span#bu-postalcode').html(postalcode);

                        $('span#bu-street_rdfa').html(street);
                        $('span#bu-locality_rdfa').html(local);
                        $('span#bu-region_rdfa').html(region);
                        $('span#bu-country_rdfa').html(country);
                        $('span#bu-postalcode_rdfa').html(postalcode);
                    }    
                    if((street == "") || (local == "") || (region == "") || (country == "") || (postalcode == "")){
                        $(".bu-add").css("display","none");
                    }

                    schema_google('form3');  

                  });

                 //logo

                 $("#logo-website-url,#logo-logo-url").keyup(function () {
                    var websiteurl = $('#logo-website-url').val();
                    var url = $('#logo-logo-url').val();
                   
                    $('span#logo-website-url-result').html(websiteurl);
                    $('span#logo-logo-url-result').html(url);

                    $('span#logo-website-url-result_rdfa').html(websiteurl);
                    $('span#logo-logo-url-result_rdfa').html(url);
                    

                    if (websiteurl.length > 2) {
                      check_valid__url(websiteurl,'logo-website-url');
                    }

                    if (url.length > 2) {
                      check_valid__url(url,'logo-logo-url');
                    }
                    
                    schema_google('form12'); 
                    

                  });

                 //Video Schema

                 $("#video_name,#video_description,#video_upload_date,#video_thumbnail_url1,#video_url,#video_duration_minutes,#video_duration_seconds,#video_embed_url").keyup(function () {
                    var video_name = $('#video_name').val();
                    var video_description = $('textarea#video_description').val();
                    var video_thumbnail_url1 = $('#video_thumbnail_url1').val();
                    var video_upload_date = $('#video_upload_date').val();
                    var video_url = $('#video_url').val();
                    var video_embed_url = $('#video_embed_url').val();
                    var video_duration_minutes = $('#video_duration_minutes').val();
                    var video_duration_seconds = $('#video_duration_seconds').val();

                    $('span#video_name_result').html(video_name);
                    $('span#video_description_result').html(video_description);
                    $('span#video_thumbnail_url1_result').html(video_thumbnail_url1);
                    $('span#video_upload_result').html(video_url);
                    $('span#video_upload_date_result').html(video_upload_date);
                    $('span#video_embed_result').html(video_embed_url);
                    $('span#video_duration_minutes_result').html(video_duration_minutes);
                    $('span#video_duration_seconds_result').html(video_duration_seconds);
                   
                    check_valid_input(video_name,'video_name');

                    if (video_thumbnail_url1.length > 2) {
                      check_valid__url(video_thumbnail_url1,'video_thumbnail_url1');
                    }

                    if (video_url.length > 2) {
                      check_valid__url(video_url,'video_url');
                    }

                    if (video_embed_url.length > 2) {
                      check_valid__url(video_embed_url,'video_embed_url');
                    }
                    
                    schema_google('form13'); 
                    

                  });

                 //sitelink search

                 $("#sitelink_name,#sitelink_url,#sitelink_search_url,#sitelink_string").keyup(function () {
                    var sitelink_name = $('#sitelink_name').val();
                    var sitelink_url = $('#sitelink_url').val();
                    var sitelink_search_url = $('#sitelink_search_url').val();
                   // var sitelink_string = $('#sitelink_string').val();
                   
                    $('span#sitelink_name_result').html(sitelink_name);
                    $('span#sitelink_url_result').html(sitelink_url);
                    $('span#sitelink_search_url_result').html(sitelink_search_url);
                   // $('span#sitelink_string_result').html(sitelink_string);
                  
                    check_valid_input(sitelink_name,'sitelink_name');

                    if (sitelink_url.length > 2) {
                      check_valid__url(sitelink_url,'sitelink_url');
                    }
                    
                    schema_google('form14'); 
                    

                  });

                 //Recipe

                 $("#recipe_instruction,#recipe_author_name,#recipe_description,#recipe_image_url,#recipe_name,#recipe_publish_date,#recipe_cooktime_minutes,#recipe_cooltime_seconds,#recipe_servings,#recipe_preperation_minutes,#recipe_preperation_seconds,#recipe_nutrition_serving_size,#recipe_nutrition_calories,#recipe_nutrition_fat").keyup(function () {
                    
                    var recipe_author_name = $("#recipe_author_name").val();
                    var recipe_description = $("#recipe_description").val();
                    var recipe_image_url = $("#recipe_image_url").val();
                    var recipe_name = $("#recipe_name").val();
                    var recipe_publish_date = $("#recipe_publish_date").val();
                    var recipe_cooktime_minutes = $("#recipe_cooktime_minutes").val();
                    var recipe_cooltime_seconds = $("#recipe_cooltime_seconds").val();
                    var recipe_servings = $("#recipe_servings").val();
                    var recipe_preperation_minutes = $("#recipe_preperation_minutes").val();
                    var recipe_preperation_seconds = $("#recipe_preperation_seconds").val();
                    var recipe_nutrition_serving_size = $("#recipe_nutrition_serving_size").val();
                    var recipe_nutrition_calories = $("#recipe_nutrition_calories").val();
                    var recipe_nutrition_fat = $("#recipe_nutrition_fat").val();
                    var recipe_instruction = $("textarea#recipe_instruction").val();

                    
                   
                    $('span#recipe_author_name_result').html(recipe_author_name);
                    $('span#recipe_description_result').html(recipe_description);
                    $('span#recipe_image_url_result').html(recipe_image_url);
                    $('span#recipe_name_result').html(recipe_name);
                    $('span#recipe_publish_date_result').html(recipe_publish_date);
                    $('span#recipe_cooktime_minutes_result').html(recipe_cooktime_minutes);
                    $('span#recipe_cooltime_seconds_result').html(recipe_cooltime_seconds);
                    $('span#recipe_servings_result').html(recipe_servings);
                    $('span#recipe_preperation_minutes_result').html(recipe_preperation_minutes);
                    $('span#recipe_preperation_seconds_result').html(recipe_preperation_seconds);
                    $('span#recipe_nutrition_serving_size_result').html(recipe_nutrition_serving_size);
                    $('span#recipe_nutrition_calories_result').html(recipe_nutrition_calories);
                    $('span#recipe_nutrition_fat_result').html(recipe_nutrition_fat);
                    $('span#recipe_instruction_result').html(recipe_instruction);

                    $('span#recipe_author_name_result_rdfa').html(recipe_author_name);
                    $('span#recipe_description_result_rdfa').html(recipe_description);
                    $('span#recipe_image_url_result_rdfa').html(recipe_image_url);
                    $('span#recipe_name_result_rdfa').html(recipe_name);
                    $('span#recipe_publish_date_result_rdfa').html(recipe_publish_date);
                    $('span#recipe_cooktime_minutes_result_rdfa').html(recipe_cooktime_minutes);
                    $('span#recipe_cooltime_seconds_result_rdfa').html(recipe_cooltime_seconds);
                    $('span#recipe_servings_result_rdfa').html(recipe_servings);
                    $('span#recipe_preperation_minutes_result_rdfa').html(recipe_preperation_minutes);
                    $('span#recipe_preperation_seconds_result_rdfa').html(recipe_preperation_seconds);
                    $('span#recipe_nutrition_serving_size_result_rdfa').html(recipe_nutrition_serving_size);
                    $('span#recipe_nutrition_calories_result_rdfa').html(recipe_nutrition_calories);
                    $('span#recipe_nutrition_fat_result_rdfa').html(recipe_nutrition_fat);
                    $('span#recipe_instruction_result_rdfa').html(recipe_instruction);

                   
                    check_valid_input(recipe_name,'recipe_name');
                    check_valid_input(recipe_author_name,'recipe_author_name');
                    check_valid_input(recipe_description_result,'recipe_description_result');

                    if (recipe_image_url.length > 2) {
                      check_valid__url(recipe_image_url,'recipe_image_url');
                    }
                    
                    schema_google('form15'); 
                    

                  });


                 //products

                 $("#product_name,#product_description,#product_image_url_1,#product_image_url_2,#product_image_url_3,#product_sku,#product_author_name,#product_brand,#product_rating_value,#product_max_rating,#product_offer_url,#product_price_currency,#product_offer_price,#product_offer_price_valid_until").keyup(function () {
                    
                    var product_name = $("#product_name").val();

                    var product_description = $("#product_description").val();
                    var product_image_url_1 = $("#product_image_url_1").val();
                    var product_image_url_2 = $("#product_image_url_2").val();
                    var product_image_url_3 = $("#product_image_url_3").val();
                    var product_sku = $("#product_sku").val();
                    var product_author_name = $("#product_author_name").val();
                    var product_brand = $("#product_brand").val();
                    var product_rating_value = $("#product_rating_value").val();
                    var product_max_rating = $("#product_max_rating").val();
                    var product_offer_url = $("#product_offer_url").val();
                    var product_price_currency = $("#product_price_currency").val();
                    var product_offer_price = $("#product_offer_price").val();
                    var product_offer_price_valid_until = $("#product_offer_price_valid_until").val();


                    
                   
                    $('span#product_name_result').html(product_name);
                    $('span#product_description_result').html(product_description);
                    $('span#product_image_url_1_result').html(product_image_url_1);
                    $('span#product_image_url_2_result').html(product_image_url_2);
                    $('span#product_image_url_3_result').html(product_image_url_3);
                    $('span#product_sku_result').html(product_sku);
                    $('span#product_author_name_result').html(product_author_name);
                    $('span#product_brand_result').html(product_brand);
                    $('span#product_rating_value_result').html(product_rating_value);
                    $('span#product_max_rating_result').html(product_max_rating);
                    $('span#product_offer_url_result').html(product_offer_url);
                    $('span#product_price_currency_result').html(product_price_currency);
                    $('span#product_offer_price_result').html(product_offer_price);
                    $('span#product_offer_price_valid_until_result').html(product_offer_price_valid_until);


                    $('span#product_name_result_rdfa').html(product_name);
                    $('span#product_description_result_rdfa').html(product_description);
                    $('span#product_image_url_1_result_rdfa').html(product_image_url_1);
                    $('span#product_image_url_2_result_rdfa').html(product_image_url_2);
                    $('span#product_image_url_3_result_rdfa').html(product_image_url_3);
                    $('span#product_sku_result_rdfa').html(product_sku);
                    $('span#product_author_name_result_rdfa').html(product_author_name);
                    $('span#product_brand_result_rdfa').html(product_brand);
                    $('span#product_rating_value_result_rdfa').html(product_rating_value);
                    $('span#product_max_rating_result_rdfa').html(product_max_rating);
                    $('span#product_offer_url_result_rdfa').html(product_offer_url);
                    $('span#product_price_currency_result_rdfa').html(product_price_currency);
                    $('span#product_offer_price_result_rdfa').html(product_offer_price);
                    $('span#product_offer_price_valid_until_result_rdfa').html(product_offer_price_valid_until);



                   
                    check_valid_input(product_name,'product_name');
                    check_valid_input(product_description,'product_description');
                    check_valid_input(product_sku,'product_sku');

                    if(product_image_url_1.length > 2) {
                      check_valid__url(product_image_url_1,'product_image_url_1');
                    }

                    if(product_offer_url_result.length > 2) {
                      check_valid__url(product_offer_url_result,'product_offer_url_result');
                    }

                    if(product_image_url_2.length > 2) {
                      check_valid__url(product_image_url_2,'product_image_url_2');
                    }

                    if(product_image_url_3.length > 2) {
                      check_valid__url(product_image_url_3,'product_image_url_3');
                    }
                    
                    schema_google('form16'); 
                    

                  });

                 //Reviews form17
                 $("#review_item_name,#review_item_image_url,#review_item_price,#review_item_type,#review_item_phone,#review_item_address,#review_item_address_locality,#review_item_address_locality,#review_item_postal_code,#review_rating_value,#review_rating_author").keyup(function () {
                    

                  var review_item_name =   $("#review_item_name").val();
                  var review_item_image_url =  $("#review_item_image_url").val();
                  var review_item_price  = $("#review_item_price").val();
                  var review_item_type  = $("#review_item_type").val();
                  var review_item_phone  = $("#review_item_phone").val();
                  var review_item_address  = $("#review_item_address").val();
                  var review_item_country  = $("#review_item_country").val();
                  var review_item_address_locality  = $("#review_item_address_locality").val();
                  var review_item_address_state  = $("#review_item_address_state").val();
                  var review_item_postal_code  = $("#review_item_postal_code").val();
                  var review_rating_value  = $("#review_rating_value").val();
                  var review_rating_author  = $("#review_rating_author").val();
                  var review_item_type = $("#review_item_type").val();
                 
                   
                    $('span#review_item_name_result').html(review_item_name);
                    $('span#review_item_image_url_result').html(review_item_image_url);
                    $('span#review_item_price_result').html(review_item_price);
                    $('span#review_item_type_result').html(review_item_type);
                    $('span#review_item_phone_result').html(review_item_phone);
                    $('span#review_item_address_result').html(review_item_address);
                    $('span#review_item_country_result').html(review_item_country);
                    $('span#review_item_address_locality_result').html(review_item_address_locality);
                    $('span#review_item_address_state_result').html(review_item_address_state);
                    $('span#review_item_postal_code_result').html(review_item_postal_code);
                    $('span#product_max_rating_result_result').html(product_max_rating);
                    $('span#review_rating_value_result').html(review_rating_value);
                    $('span#review_author_result').html(review_rating_author);
                    $('span#review_item_type_result').html(review_item_type);

                    $('span#review_item_name_result_rdfa').html(review_item_name);
                    $('span#review_item_image_url_result_rdfa').html(review_item_image_url);
                    $('span#review_item_price_result_rdfa').html(review_item_price);
                    $('span#review_item_type_result_rdfa').html(review_item_type);
                    $('span#review_item_phone_result_rdfa').html(review_item_phone);
                    $('span#review_item_address_result_rdfa').html(review_item_address);
                    $('span#review_item_country_result_rdfa').html(review_item_country);
                    $('span#review_item_address_locality_result_rdfa').html(review_item_address_locality);
                    $('span#review_item_address_state_result_rdfa').html(review_item_address_state);
                    $('span#review_item_postal_code_result_rdfa').html(review_item_postal_code);
                    $('span#product_max_rating_result_result_rdfa').html(product_max_rating);
                    $('span#review_rating_value_result_rdfa').html(review_rating_value);
                    $('span#review_author_result_rdfa').html(review_rating_author);
                    $('span#review_item_type_result_rdfa').html(review_item_type);

                    
                  
                   
                    check_valid_input(review_item_name,'review_item_name');
                    // check_valid_input(product_description,'product_description');
                    // check_valid_input(product_sku,'product_sku');

                    if(review_item_image_url.length > 2) {
                      check_valid__url(review_item_image_url,'review_item_image_url');
                    }

                    // if(product_offer_url_result.length > 2) {
                    //   check_valid__url(product_offer_url_result,'product_offer_url_result');
                    // }

                    // if(product_image_url_2.length > 2) {
                    //   check_valid__url(product_image_url_2,'product_image_url_2');
                    // }

                    // if(product_image_url_3.length > 2) {
                    //   check_valid__url(product_image_url_3,'product_image_url_3');
                    // }
                    
                     schema_google('form17'); 
                    

                  });



                 //Person 
                 $("#per-websiteurl,#per-personname,#per-imageurl,#per-telephone,#per-email,#per-facebook,#per-description,#per-youtube,#per-instagram,#per-linkedin,#per-twitter").keyup(function () {
                    var url = $('#per-websiteurl').val();
                    var name = $('#per-personname').val();
                    var img = $('#per-imageurl').val();
                    var description = $('#per-description').val();
                    var tel = $('#per-telephone').val();
                    var mail = $('#per-email').val();
                    $('span#per-imageurl').html(img);
                    $('span#per-personname').html(name);
                    $('span#per-websiteurl').html(url);
                    $('span#per-description_json').html(description);

                    $('span#per-imageurl_rdfa').html(img);
                    $('span#per-personname_rdfa').html(name);
                    $('span#per-websiteurl_rdfa').html(url);

                    var facebook = $('#per-facebook').val();
                    var youtube = $('#per-youtube').val();
                    var instagram =$('#per-instagram').val();
                    var linkedin =$('#per-linkedin').val();
                    var twitter =$('#per-twitter').val();


                    $('span#per-facebook_json').html(facebook);
                    $('span#per-youtube_json').html(youtube);
                    $('span#per-instagram_json').html(instagram);
                    $('span#per-linkedin_json').html(linkedin);
                    $('span#per-twitter_json').html(twitter);

                    if (facebook.length > 2) {
                      check_valid__url(url,'per-facebook');
                    }

                    if (youtube.length > 2) {
                      check_valid__url(url,'per-youtube');
                    }

                    if (instagram.length > 2) {
                      check_valid__url(url,'per-instagram');
                    }

                    if (linkedin.length > 2) {
                      check_valid__url(url,'per-linkedin');
                    }

                     if (twitter.length > 2) {
                      check_valid__url(url,'per-twitter');
                    }

                    if (url.length > 2) {
                      check_valid__url(url,'per-websiteurl');
                    }

                    if (img.length > 2) {
                      check_valid__url(img,'per-imageurl');
                    }
                    
                    check_valid_input(name,'per-personname');

                   
                    


                    if(tel != null){
                         $(".per-tel").css("display","inline");
                         $('span#per-telephone').html(tel);
                         $('span#per-telephone_rdfa').html(tel);
                        if(tel == ""){
                         $(".per-tel").css("display","none");
                        } 
                    } 
                    if(mail != null){
                         $(".per-mail").css("display","inline");
                         $('span#per-email').html(mail);
                         $('span#per-email_rdfa').html(tel);
                        if(mail == ""){
                         $(".per-mail").css("display","none");
                        } 
                    }
                    schema_google('form4');  
                  });
                 //Website 
                 $('#web-websiteurl').keyup(function () {
                    var val = $(this).val();
                    $('span#web-websiteurl').html(val);

                    if (val.length > 2) {
                      check_valid__url(val,'web-websiteurl');
                    }
                    
                    
                   

                    schema_google('form5');
                 });
                 $('#web-name').keyup(function () {
                    var val = $(this).val();
                    $('span#web-name').html(val);
                    check_valid_input(val,'web-name');

                    schema_google('form5');
                 });
                 //WebPage 
                 $('#wp-websiteurl').keyup(function () {
                    var val = $(this).val();
                    $('span#wp-websiteurl').html(val);
                    if (val.length > 2) {
                      check_valid__url(val,'wp-websiteurl');
                    }
                   
                    schema_google('form6');
                 });
                 $('#wp-name').keyup(function () {
                    var val = $(this).val();
                    $('span#wp-name').html(val);
                    check_valid_input(val,'wp-name');

                    schema_google('form6');
                 });
                 //FAQ 
                 $('#faq-page1').keyup(function () {
                    var val = $(this).val();

                    $('span#faq_page1_result').html(val);
                    schema_google('form7');
                 });
                 $('#faq-url1').keyup(function () {
                    var val = $(this).val();
                    $('span#faq_url1_result').html(val);
                    schema_google('form7');
                 });
                 //q-2
                 $("#faq-page2,#faq-url2").keyup(function () {
                    var faq = $('#faq-page2').val();
                    var ans = $('#faq-url2').val();
                    $('span#faq_page2_result').html(faq);
                    $('span#faq_url2_result').html(ans);
                    // if((!faq) && (!ans)){
                    //     $(".question2").css("display","none");
                    // }
                    // if((faq !== "") || (ans !== "")){
                    //     $(".question2").css("display","inline");
                    //     $('span#q2').html(faq);
                    //     $('span#ans2').html(ans);
                    // }
                    schema_google('form7');  
                  });
                 //q-3
                 $("#q3,#ans3").keyup(function () {
                    var faq = $('#q3').val();
                    var ans = $('#ans3').val();
                    if((!faq) && (!ans)){
                        $(".question3").css("display","none");
                    }
                    if((faq !== "") || (ans !== "")){
                        $(".question3").css("display","inline");
                        $('span#q3').html(faq);
                        $('span#ans3').html(ans);
                    }

                    schema_google('form7');  
                  });
                 //q-4
                 $("#q4,#ans4").keyup(function () {
                    var faq = $('#q4').val();
                    var ans = $('#ans4').val();
                    if((!faq) && (!ans)){
                        $(".question4").css("display","none");
                    }
                    if((faq !== "") || (ans !== "")){
                        $(".question4").css("display","inline");
                        $('span#q4').html(faq);
                        $('span#ans4').html(ans);
                    }
                    schema_google('form7');  
                  });
                 //q-5
                 $("#q5,#ans5").keyup(function () {
                    var faq = $('#q5').val();
                    var ans = $('#ans5').val();
                    if((!faq) && (!ans)){
                        $(".question5").css("display","none");
                    }
                    if((faq !== "") || (ans !== "")){
                        $(".question5").css("display","inline");
                        $('span#q5').html(faq);
                        $('span#ans5').html(ans);
                    }

                    schema_google('form7');  
                  });


                 //BreadcrumbList 
                 $('#bc-page1').keyup(function () {
                    var val = $(this).val();
                    $('span#bc-page1').html(val);
                    $('span#bc-page1_rdfa').html(val);

                                        
                    check_valid_input(val,'bc-page1');

                   

                    schema_google('form8');
                 });
                 $('#bc-url1').keyup(function () {
                    var val = $(this).val();
                    $('span#bc-url1').html(val);
                    $('span#bc-url1_rdfa').html(val);

                    if (val.length > 2) {
                      check_valid__url(val,'bc-url1');
                    }

                    schema_google('form8');
                 });
                 //level-2
                 $("#bc-page2,#bc-url2").keyup(function () {
                    var val1 = $('#bc-page2').val();
                    var val2 = $('#bc-url2').val();
                    $('span#bc-page2_rdfa').html(val1);
                    $('span#bc-url2_rdfa').html(val2);
                    if (val2.length > 2) {
                      check_valid__url(val2,'bc-url2');
                    }
                    if((val1 != null) || (val2 != null)){
                        $(".level-2").css("display","inline");
                        $("span#bc-page2").html(val1);
                        $("span#bc-url2").html(val2);
                    }
                    if((val1 == "") && (val2 == "")){
                        $(".level-2").css("display","none");
                    }
                    schema_google('form8');
                 });
                 //level-3
                 $("#bc-page3,#bc-url3").keyup(function () {
                    var val1 = $('#bc-page3').val();
                    var val2 = $('#bc-url3').val();
                     $('span#bc-page3_rdfa').html(val1);
                    $('span#bc-url3_rdfa').html(val2);
                    if (val2.length > 2) {
                      check_valid__url(val2,'bc-url3');
                    }
                    if((val1 != null) || (val2 != null)){
                        $(".level-3").css("display","inline");
                        $("span#bc-page3").html(val1);
                        $("span#bc-url3").html(val2);
                    }
                    if((val1 == "") && (val2 == "")){
                        $(".level-3").css("display","none");
                    }
                    schema_google('form8');
                 });
                 //level-4
                 $("#bc-page4,#bc-url4").keyup(function () {
                    var val1 = $('#bc-page4').val();
                    var val2 = $('#bc-url4').val();
                     $('span#bc-page4_rdfa').html(val1);
                    $('span#bc-url4_rdfa').html(val2);
                    if (val2.length > 2) {
                      check_valid__url(val2,'bc-url4');
                    }
                    if((val1 != null) || (val2 != null)){
                        $(".level-4").css("display","inline");
                        $("span#bc-page4").html(val1);
                        $("span#bc-url4").html(val2);
                    }
                    if((val1 == "") && (val2 == "")){
                        $(".level-4").css("display","none");
                    }

                    schema_google('form8');
                 });
                 //Article 
                 $('#art-name').keyup(function () {
                    var val = $(this).val();
                    $('span#art-name').html(val);
                    schema_google('form9');
                 });
                 $('#art-headline').keyup(function () {
                    var val = $(this).val();
                    $('span#art-headline').html(val);
                    schema_google('form9');
                 });
                 $('#art-description').keyup(function () {
                    var val = $(this).val();
                    $('span#art-description').html(val);
                    schema_google('form9');
                 });

                 $('#art-url').keyup(function () {
                    var val = $(this).val();
                    $('span#art-url_json').html(val);
                    schema_google('form9');
                 });


                 $('#art-image').keyup(function () {
                    var val = $(this).val();
                    if (val.length > 2) {
                      check_valid__url(val,'art-image');

                    }
                    $('span#art-image').html(val);
                    schema_google('form9');
                 });
                 $('#art-published-date').keyup(function () {
                    var val = $(this).val();
                    $('span#art-published-date').html(val);
                    schema_google('form9');
                 });

                 $('#art-modified-date').keyup(function () {
                    var val = $(this).val();
                    $('span#art-modified-date').html(val);
                    schema_google('form9');
                 });

                 $('#art-author').keyup(function () {
                    var val = $(this).val();
                    $('span#art-author').html(val);
                    schema_google('form9');
                 });
                 $('#art-publisher').keyup(function () {
                    var val = $(this).val();
                    $('span#art-publisher').html(val);
                    schema_google('form9');
                 });
                 $('#art-logopublisher').keyup(function () {
                    var val = $(this).val();
                    if (val.length > 2) {
                      check_valid__url(val,'art-logopublisher');
                    }
                    $('span#art-logopublisher').html(val);
                    schema_google('form9');
                 });
                 //News Article 
                 $('#news-name').keyup(function () {
                    var val = $(this).val();

                    $('span#news-name').html(val);
                 });
                 $('#news-headline').keyup(function () {
                    var val = $(this).val();
                    $('span#news-headline').html(val);
                 });
                 $('#news-description').keyup(function () {
                    var val = $(this).val();
                    $('span#news-description').html(val);
                 });
                 $('#news-image').keyup(function () {
                    var val = $(this).val();
                    if (val.length > 2) {
                      check_valid__url(val,'news-image');
                    }
                    $('span#news-image').html(val);
                 });
                 $('#news-published-date').keyup(function () {
                    var val = $(this).val();
                    $('span#news-published-date').html(val);
                 });
                 $('#news-author').keyup(function () {
                    var val = $(this).val();
                    $('span#news-author').html(val);
                 });
                 $('#news-publisher').keyup(function () {
                    var val = $(this).val();
                    $('span#news-publisher').html(val);
                 });
                 $('#news-logopublisher').keyup(function () {
                    var val = $(this).val();
                    $('span#news-logopublisher').html(val);
                 });
                 //Event
                 //Organization
                 $("#ev-name,#ev-description,#org-description,#ev-start-date,#ev-address-name").keyup(function () {
                    var name = $('#ev-name').val();
                    var des = $('#ev-description').val();
                    var strdate = $('#ev-start-date').val();
                    var add = $('#ev-address-name').val();
                    $('span#ev-name').html(name);
                    $('span#ev-start-date').html(strdate);

                    $('span#ev-name_rdfa').html(name);
                    $('span#ev-start-date_rdfa').html(strdate);

                    check_valid_input(name,'ev-name');
                    check_valid_input(des,'ev-description');


                    if(des != null){
                         $(".ev-des").css("display","inline");
                         $('span#ev-description').html(des);
                         $('span#ev-description_rdfa').html(des);
                        if(des == ""){
                         $(".oev-des").css("display","none");
                        } 
                    }  
                    if(add != null){
                         $(".ev-addname").css("display","inline");
                         $('span#ev-address-name').html(add);
                        if(add == ""){
                         $(".oev-addname").css("display","none");
                        } 
                    }

                    schema_google('form11');  
                  });
                 //Org Address
                 $("#ev-street,#ev-locality,#ev-region,#ev-country,#ev-postalcode").keyup(function () {
                    var street = $('#ev-street').val();
                    var local = $('#ev-locality').val();
                    var region = $('#ev-region').val();
                    var country = $('#ev-country').val();
                    var postalcode = $('#ev-postalcode').val();
                    $('span#ev-street').html(street);
                    $('span#ev-locality').html(local);
                    $('span#ev-region').html(region);
                    $('span#ev-country').html(country);
                    $('span#ev-postalcode').html(postalcode);

                     $('span#ev-street_rdfa').html(street);
                    $('span#ev-locality_rdfa').html(local);
                    $('span#ev-region_rdfa').html(region);
                    $('span#ev-country_rdfa').html(country);
                    $('span#ev-postalcode_rdfa').html(postalcode);
                    schema_google('form11'); 
                  });
            });
