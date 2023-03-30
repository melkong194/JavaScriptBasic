console.log("\t ")
console.log("1  ********************************************************************");
console.log("***********************************************************************");
console.log("------------ JQUERY  ------------\n");
/*
    JQUERY
    var x = $('div');
    var x = $('.class');
    var x = $('#id');
    x always is array. 
*/
(function ($, global) {
//    console.log(q,"\n",global)
    var forms = $('form');

    //add class
    forms.addClass('form-class');

    //add element
    var newDiv =$('<div>');

    //set attribute, set text
    newDiv.attr('class','test-add-class');
    newDiv.text("ABC");

    //Get attribute
    console.log(newDiv.attr('class'));
    newDiv.text("ABC");

    //console.log(newDiv[0]);
    // console.log(newDiv.get(0));
    newDiv.text();
}
)($, this);

console.log("\t ")
console.log("1  ********************************************************************");
console.log("***********************************************************************");
console.log("------------ CUSTOM SELECT  ------------\n");

var list_select = $('.custom-select');
list_select.each(function(idx, select){
    // console.log(params); //(...params)

    var options = $(select).find('option');
    var div_wrapper =$("<div>", {class: 'wrapper-select'});
    var div_selected =$("<div>", {class: 'selected'});
    var ul =$("<ul>", {class: 'list-option'});

    div_selected.click(function(){
        $('.wrapper-select .list-option').each(function(_idx, _ul){
            if(_ul !== ul.get(0)){
                $(_ul).slideUp(200);
            }
        })
        ul.slideToggle(200);
    })

    if(options.length > 0){
        div_selected.attr('value', options[0].value).text(options[0].innerText);
    }

    options.each(function(idx, option){
        var text = $(option).text(),value = $(option).val();

        if($(option).attr('selected')){
            div_selected.attr('value', option.value).text(option.innerText);
        }

        //update li & div_selected
        var li =$("<li>", { text, value,
        click: function(e){
            var value = $(this).attr('value');
            options.removeAttr('selected');// remove all selected
            $(select).find(`option[value="${value}"]`).attr('selected',true);
            
            //update div_selected
            div_selected.attr('value', value).text(text);
            ul.slideUp(200);

        }
    })

        // li.click(function(e){ })
        ul.append(li);

        li
    })

    div_wrapper.append(div_selected).append(ul).insertAfter(select);
    //$(elem).css('display','none');

})

//esc & enter to close select
document.addEventListener('keyup',function(e){
    // console.log(e)
    if(e.keyCode === 27 || e.keyCode === 13){  
        $('.wrapper-select .list-option').slideUp(200);
    }
})

//click outside to close select
document.addEventListener('click',function(e){
    // console.log(e.target);
    if($(e.target).parents('.wrapper-select').length===0){  
        $('.wrapper-select .list-option').slideUp(200);
    }
})
