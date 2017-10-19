/*
* @Author: dulovely
* @Date:   2017-10-19 17:33:14
* @Last Modified by:   dulovely
* @Last Modified time: 2017-10-19 19:20:05
*/

$(function(){


	let imgs=$('.imgBox>li');
	let imgW=imgs.width();
    let now=next=0;
    let btnL=$('.dowebok>.btnL');
    let btnR=$('.dowebok>.btnR');
    let t= setInterval(move,1500);
    let dowebok=$('.dowebok');
    let btn=$('.dowebok>[class*=btn]');

    dowebok.on('mouseenter',function(){
        btn.css('display','block');
        clearInterval(t);
    })
    dowebok.on('mouseleave',function(){
        t= setInterval(move,1500);
        btn.css('display','none');
    })
    function move(){
		btnR.triggerHandler('click');
	}


	btnR.on('click',function(){				
        next++;
		if(next==imgs.length){
			next=0;
		}
		imgs.eq(next).css('left',imgW);				
		imgs.eq(next).animate({left:0});
		imgs.eq(now).animate({left:-imgW});
		now=next;
	});

	btnL.on('click',function(){
        next--;
		if(next<0){
			next=imgs.length-1;
		}
		imgs.eq(next).css('left',-imgW);				
		imgs.eq(next).animate({left:0});
		imgs.eq(now).animate({left:imgW});
		now=next;

	})

})