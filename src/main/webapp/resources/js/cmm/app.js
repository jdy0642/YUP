"use strict"; 
var app = app || {}; 
app = (()=>{
	let _,js
	let run =x=> 
			$.getScript(x+'/resources/js/cmm/router.js',()=>{
				$.extend(new Session(x))
				init()
				onCreate()
		})
	let init =()=>{
		_ = $.ctx();
		js = $.js();
	}
	let onCreate =() =>{
		setContentView()
	}
	let setContentView=()=>{
		
	$('<table id="tab"><tr></tr></table>')
	.css({
		width:'80%',
		height:'800px',
		border:'1px solid black',
		margin:'0 auto'
	})
	.appendTo('body')
	$('<td/>', {id:'left'})
	.css({
		width:'30%',
		height:'100%',
		border:'1px solid black',
	    'vertical-align':'top'
	})
	.appendTo('tr')
	$('<td/>', {id:'right'})
	.css({
		width:'70%',
		height:'100%',
		border:'1px solid black'
	})
	.appendTo('tr')
	$.each(['NAVER','CGV','BUGS'],(i,j)=>{
		$('<div/>')
		.text(j)
		.css({
			width:'100%',
			height:'50px',
			border:'1px solid black',
			'text-align': 'center'})
			.appendTo('#left')
			.click(function(){
				alert($(this).text())
				switch($(this).text()){
				case 'NAVER':
					$.getJSON(_+'/crawl/naver',d=>{
						alert(d.list)
					})
					break;
					
				case 'CGV':
					$.getJSON(_+'/crawl/cgv',d=>{
						alert(d.list)
					})
					break;
					
				case 'BUGS':
					$.getJSON(_+'/crawl/bugs',d=>{
						alert(d.list)
					})
					break;
				}
			})
	})
	}
	return {run}
})();