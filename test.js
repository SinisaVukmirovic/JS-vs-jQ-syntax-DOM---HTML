// JS vs jQuery syntax

//JS syntax
// var add = document.querySelector('.add');
// var addStart = document.querySelector('.add-start');
// var list = document.querySelector('.list');
// var addStart = document.querySelector('.add-start');
// var prime = document.querySelector('.prime');
// var before = document.querySelector('.before');
// var after = document.querySelector('.after');
// var remove = document.querySelector('.remove');
// var replace = document.querySelector('.replace');

// add.onclick = function() {
// 	var li = document.createElement('li');
// 	var listText = document.createTextNode('New list item');
// 	li.appendChild(listText);

// 	list.appendChild(li);
// };

// addStart.onclick = function() {
// 	var li = document.createElement('li');
// 	var listText = document.createTextNode('New list item');
// 	li.appendChild(listText);

// 	list.insertBefore(li, list.childNodes[0]);
// };

// before.onclick = function() {
// 	var li = document.createElement('li');
// 	var listText = document.createTextNode('New item before PRIME');
// 	li.appendChild(listText);

// 	list.insertBefore(li, list.querySelector('.prime'));
// };

// after.onclick = function() {
// 	var li = document.createElement('li');
// 	var listText = document.createTextNode('New item After PRIME');
// 	li.appendChild(listText);

// 	list.insertBefore(li, list.querySelector('.prime').nextSibling);
// };

// remove.onclick = function() {
// 	prime.remove();
// };
// //za razliku od jQUerija ovo kvari before i after ako se radi sa JSom

// //da li moze bolje ???
// replace.onclick = function() {
// 	var del = list.querySelector('li');
// 	var li = document.createElement('li');
// 	var listText = document.createTextNode('New Replacing item');
// 	li.appendChild(listText);

// 	list.removeChild(del);
// 	list.appendChild(li);
// };




//jQuery syntax
var $add = $('.add');
var $list = $('.list');
var $addStart = $('.add-start');
var $after = $('.after');
var $before = $('.before');
var $prime = $('.prime');
var $remove = $('.remove');
var $replace = $('.replace');

$add.on('click', function() {
	$list.append('<li>Appeneded Item List</li>');
});

$addStart.on('click', function() {
	$list.prepend('<li>Added from the start</li>');
});

$before.on('click', function() {
	$prime.before('<li>Added before PRIME item');
});

$after.on('click', function() {
	$prime.after('<li>Added after PRIME item');
});

$remove.on('click', function() {
	$prime.remove();
});

$replace.on('click', function() {
	$list.html('<li>New list item</li><li>Another New Item</li>');
});

//////////////////////////////////////////////////////////////
