/* global $ top */

function initializePage(){
    loadPopular();
    loadOnSale();
    pictureInfo();
    
}

function loadImageForSection(name,v,section){
    var index= name+1;
    var targetId= '#'+section+index;
    
    var container = $(targetId);
    var img = $('<img />',{src: v.src, id: v.id}).appendTo(container);
    container.find('.name').text(v.name);
    container.find('.price').text(v.price);
}

function loadPopular(){
    $.get('Json/popular.json',function(data, success){
        $.each(data, function(index,value){
            $.each(value, function(name,v){
              loadImageForSection(name,v,'pop')  
            })
        })
    })
}

function loadOnSale(){
    $.get('Json/special.json',function(data, success){
        $.each(data, function(index,value){
            $.each(value, function(name,v){
              loadImageForSection(name,v,'onsale')  
            })
        })
    })
    
}

function pictureInfo(){
    
    $('.image-container').mouseenter(function(){
        var pHeight = $(this).height();
        
        var topPoint = (pHeight - 80).toString() + 'px';
        
        $(this).find('.flow-under').animate({top:topPoint}, 250);
    });
    
    $('.image-container').mouseleave(function(){
        $(this).find('.flow-under').animate({top: '100%'},250);
    });
    
}

$(document).ready(initializePage);
              
