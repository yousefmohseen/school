/*show & hid navbar*/
function navbar(){
	const bar=document.getElementById("bar");
	const navs=document.getElementById("navs");
	bar.classList.toggle("bars-tog");
	navs.classList.toggle("d-no");
	navs.classList.toggle("show-nav");	
}

/*show & hid navbar*/
function drop(val){
	const ang1=document.getElementById("ang1");
	const drop1=document.getElementById("drop1");
	const ang2=document.getElementById("ang2");
	const drop2=document.getElementById("drop2");
	if(val==1){
		ang1.classList.toggle("angs");
		drop1.classList.toggle("drops");	
	}
	if(val==2){
		ang2.classList.toggle("angs");
		drop2.style.position="relative";	
		drop2.classList.toggle("drops");	
	}
}

/*gird & list cards*/
function viewCard(val){
	const grid=document.getElementById("grid");
	const list=document.getElementById("list");
	const cont = document.getElementById("cards").querySelectorAll('.cont');
	const lc = document.getElementById("cards").querySelectorAll('.list-card');
	if(val=='grid'){
		if(grid.classList.contains("active-thr")==false){
			list.classList.remove("active-thr");
			grid.classList.add("active-thr");
			for(let i=0;i<lc.length;i++){
				lc[i].classList.add("cont","d-gr");
				lc[i].classList.remove("list-card");
			}
		}
	}
	if(val=='list'){
		if(list.classList.contains("active-thr")==false){
			grid.classList.remove("active-thr");
			list.classList.add("active-thr");
			for(let j=0;j<cont.length;j++){
				cont[j].classList.remove("cont","d-gr");
				cont[j].classList.add("list-card");
			}
		}
	}
}
	
/*slide page*/
function slide(){
	const cont = document.getElementById("cards").querySelectorAll('.cont');
	const lc = document.getElementById("cards").querySelectorAll('.list-card');
	const s = document.getElementById("s").querySelectorAll('span');
	const prev= document.getElementById("prev");
	const next= document.getElementById("next");
	var num=0,trans=num*100;
	prev.style.opacity="0.2";
	prev.style.cursor="not-allowed";
	next.style.cursor="pointer";

	prev.addEventListener("click",()=>{
		if(num>0){
			prev.style.opacity="1";
			next.style.opacity="1";
			prev.style.cursor="pointer";
			next.style.cursor="pointer";
			num--;
			for(let i=0;i<cont.length;i++){
				cont[i].style.transform="translateX(-"+num*100+"%)";
			}
			for(let j=0;j<lc.length;j++){
				lc[j].style.transform="translateX(-"+num*100+"%)";
			}
			for(let k=1;k<s.length-1;k++){
				if(k==num+1){
					s[k].classList.add("active-sec");
				}
				else{
					s[k].classList.remove("active-sec");
				}
			}
		}
		if(num==0){
			prev.style.opacity="0.2";
			prev.style.cursor="not-allowed";
			next.style.cursor="pointer";		
		}
	})
	
	next.addEventListener("click",()=>{
		if(num>=0 && num<cont.length-1){
			prev.style.opacity="1";
			next.style.opacity="1";
			prev.style.cursor="pointer";
			next.style.cursor="pointer";
			num++;
			for(let i=0;i<cont.length;i++){
				cont[i].style.transform="translateX(-"+num*100+"%)";
			}
			for(let j=0;j<lc.length;j++){
				lc[j].style.transform="translateX(-"+num*100+"%)";
			}
			for(let k=1;k<s.length-1;k++){
				if(k==num+1){
					s[k].classList.add("active-sec");
				}
				else{
					s[k].classList.remove("active-sec");
				}
			}
		}
		if(num==cont.length-1){
			next.style.opacity="0.2";
			next.style.cursor="not-allowed";
			prev.style.cursor="pointer";		
		}
	})

	for(let i=1;i<s.length-1;i++){
		s[i].addEventListener("click",()=>{
			num=i-1;
			prev.style.opacity="1";
			next.style.opacity="1";
			prev.style.cursor="pointer";
			next.style.cursor="pointer";
			for(let j=0;j<cont.length;j++){
				cont[j].style.transform="translateX(-"+num*100+"%)";
			}
			for(let k=0;k<lc.length;k++){
				lc[k].style.transform="translateX(-"+num*100+"%)";
			}
			for(let l=1;l<s.length-1;l++){
				if(l==i){
					s[l].classList.add("active-sec");
				}
				else{
					s[l].classList.remove("active-sec");
				}
			}
			if(num==cont.length-1){
				next.style.opacity="0.2";
				next.style.cursor="not-allowed";
				prev.style.cursor="pointer";		
			}
			if(num==0){
				prev.style.opacity="0.2";
				prev.style.cursor="not-allowed";
				next.style.cursor="pointer";		
			}
		})
	}
}

/*hid & show faqs*/
function show(val){
	const hid = document.getElementById("faqs").querySelectorAll('.hid');
	hid[val-1].children[0].classList.toggle("active-thr");
	hid[val-1].classList.toggle("show");
}

/*hid & show password*/
function showPass(val){
	document.getElementById(val).type="text";
	document.getElementById("eye"+val).classList.add("eye-slash");
}
function hidPass(val){
	document.getElementById(val).type="password";
	document.getElementById("eye"+val).classList.remove("eye-slash");
}