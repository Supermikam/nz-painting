/* global $ */

function load(){
    $.get('Json/popular.json',function(data, success){
        $.each(data, function(index,value){
            $.each(value, function(name,v){
                var img = $('<img />',{src: v.src}).appendTo($('#pop'));
            })
        })
    })
}

$(document).ready(load);
              
