/**********************************
HEADING
***********************************/

if (page == 'index' || page == 'blog') {
	var header = document.querySelector('body header');
}

	else if (page == 'resume') {
		var header = document.querySelector('body header');
	}

// recreated <div class="header-cont">
var headerCont = document.createElement('header-cont');
body.appendChild(headerCont);

// recreated <header class="nav"> 
var headerClass = document.createElement('nav');
headerCont.appendChild(headerClass);

// recreated <div class="logo">
var headerLink = document.createElement('a');
headerLink.setAttribute('class', 'logo');
headerLink.setAttribute('href', 'index.html');
headerLink.setAttribute('src', 'img/kd_logo.png');
headerLink.setAttribute('alt', 'Kitsudar Design logo');
headerClass.appendChild(headerLink);

// recreated <div class="myname">
var myName = document.createElement('p');
p.textContent = "kitsudar";
p.textContent = "somchana";
p.textContent = "design";
headerClass.appendChild(p);

// recreated <ul class="nav">
var ulClass = document.createElement('nav');
ulClass.appendChild(ulClass);

// recreated <ul>
var ul = document.createElement('ul');
nav.appendChild(ul);

// recreated <li>
var li1 = document.createElement('li');
ul.appendChild(li);
var liLink = document.createElement('a');
liLink.setAttribute('href', 'about.html');
if (page == 'about') {
	liLink.add('selected');
}

liLink.textContent = "about me";
li1.appendChild(liLink);


var li2 = document.createElement('li');
ul.appendChild(li2);
var li2Link = document.createElement('a');
li2Link.setAttribute('href', 'portfolio.html');
if (page == 'portfolio') {
	li2Link.add('selected');
}

li2Link.textContent = "my work";
li2.appendChild(li2Link);

var li3 = document.createElement('li');
ul.appendChild(li3);
var li3Link = document.createElement('a');
li3Link.setAttribute('href', 'resume.html');
if (page == 'resume') {
	li3Link.add('selected');
}

li3Link.textContent = "resume";
li3.appendChild(li3Link);

var li4 = document.createElement('li');
ul.appendChild(li4);
var li4Link = document.createElement('a');
li4Link.setAttribute('href', 'contact.html');
if (page == 'contact') {
	li4Link.add('selected');
}

li4Link.textContent = "contact me";
li4.appendChild(li4Link);

var li5 = document.createElement('li');
ul.appendChild(li5);
var li5Link = document.createElement('a');
li5Link.setAttribute('href', 'blog.html');
if (page == 'blog') {
	li5Link.add('selected');
}

li5Link.textContent = "blog";
li5.appendChild(li5Link);


/**********************************
FOOTER
***********************************/

var footerClass = document.querySelector('body.site-footer');

// recreate <a>
var linkedIn = document.createElement('a');
linkedIn.setAttribute('href', 'https://www.linkedin.com/in/kitsudar');
footer.appendChild(linkedIn);

var linkedInImg = document.createElement('img');
linkedInImg.setAttribute('src', './img/linkedin.png');
linkedInImg.setAttribute('alt', 'LinkedIn Logo');
linkedInImg.classList.add('social-icon');
LinkedIn.appendChild(linkedInImg);

var faceBook = document.createElement('a');
faceBook.setAttribute('href', 'http://facebook.com/kitsudar');
footer.appendChild(faceBook);

var faceBookImg = document.createElement('img');
faceBookImg.setAttribute('src', './img/facebook.png');
faceBookImg.setAttribute('alt', 'Facebook Logo');
faceBookImg.classList.add('social-icon');
faceBook.appendChild(faceBookImg);

var instagram = document.createElement('a');
instagram.setAttribute('href', 'http://instagram.com/kitsudar');
footer.appendChild(instagram);

var instagramImg = document.createElement('img');
instagramImg.setAttribute('src', './img/linkedin.png');
instagramImg.setAttribute('alt', 'LinkedIn Logo');
instagramImg.classList.add('social-icon');
LinkedIn.appendChild(instagramImg);

var p = document.createElement('p');
p.textContent = '© 2015 Kitsudar Somchana Design. All rights reserved.';
footer.appendChild(p);







