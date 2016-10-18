/* global $ */
    var session = sessionStorage;
function initializeCart(){

    
    var cartList = session.getItem('paintingList');
    
    if (!cartList){
        var list =[];
        var jsonList = JSON.stringify(list);
        session.setItem('paintingList', jsonList);
    }

}

function addItemToCart(itemId){
    var cartList = session.getItem('paintingList');
    
    
        var listArray = JSON.parse(cartList);
        
        listArray.push(itemId);
        
        var jsonList = JSON.stringify(listArray);
        
        session.setItem('paintingList', jsonList);
    
}

function removeItemFromCart(itemIndexInArray){
    
    var cartList = session.getItem('paintingList');
    
    var listArray = JSON.parse(cartList);
        
    delete listArray[itemIndexInArray];
        
    var jsonList = JSON.stringify(listArray);
        
    session.setItem('paintingList', jsonList);
    
}


function getCartItemTotal(){
    var cartList = session.getItem('paintingList');
    
    var listArray = JSON.parse(cartList);
    
    var total = listArray.length;
    
    return total;
}




$(document).ready(initializeCart);