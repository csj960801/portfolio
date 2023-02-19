// js, html이 로드되는 시점에서 동작하는 코드
window.addEventListener("DOMContentLoaded", () => {
	// 페이지 로딩이 되면 스크롤 값 적용시키도록
	var loading_scroll_value = window.scrollY;
	header_effect(loading_scroll_value);

	//alert(screen.width + " " + screen.height);
	
	// 포트폴리오 종류 안내
	portfolio_kind();

});

// 스크롤시 적용되는 효과
window.addEventListener("scroll", () => {

	// console.log(window.scrollY); // => 페이지를 위에서 얼마나 스크롤했는지 px단위로 출력.
	// console.log(window.scrollX); => 페이지를 가로로 얼마나 스크롤했는지 px단위로 출력.
	if(window.scrollY > 0){
		document.querySelector(".header_wrapper").setAttribute("style","top:0;");	
		document.querySelector(".footer").setAttribute("style","animation:fade_in 3s; opacity:1;");	
	}else{
		document.querySelector(".header_wrapper").setAttribute("style","bottom:0;");	
		document.querySelector(".footer").setAttribute("style","animation:fade_out 1s;");  
	}
	
	header_effect(window.scrollY);	

});  

/*
* 헤더에 써있는 텍스트들을 강조시켜주는 함수.
*
*/
function header_effect(px){
	var a_tag = document.getElementsByTagName("a");	
	var device_width = screen.width; // 기기의 화면 가로길이
	var device_height = screen.height; // 기기의 화면 세로길이
	
	// desktop(데스크탑)
	if(device_width >= 1024 && device_height >= 1080){
		// home 텍스트 강조
		if(650 > px){
		   a_tag[0].setAttribute("style","color:rgb(35 161 161);");
		   a_tag[1].setAttribute("style","color:#333;");
		   a_tag[2].setAttribute("style","color:#333;");
		   a_tag[3].setAttribute("style","color:#333;");
		   a_tag[4].setAttribute("style","color:#333;");
		}
		// about me 텍스트 강조
		else if(651 <= px && 1200 >= px){
		   a_tag[1].setAttribute("style","color:rgb(35 161 161);");
		   a_tag[0].setAttribute("style","color:#333;");
		   a_tag[2].setAttribute("style","color:#333;");
		   a_tag[3].setAttribute("style","color:#333;");
		   a_tag[4].setAttribute("style","color:#333;");
		   document.querySelector(".about").setAttribute("style","animation:fade_in 3s; opacity:1;");
		}
		// skills 텍스트 강조
		else if(1201 <= px && 2440 >= px){
		   a_tag[2].setAttribute("style","color:rgb(35 161 161);");
		   a_tag[3].setAttribute("style","color:#333;");
		   a_tag[1].setAttribute("style","color:#333;");
		   a_tag[0].setAttribute("style","color:#333;");
		   a_tag[4].setAttribute("style","color:#333;");
		   document.querySelector(".skills").setAttribute("style","animation:fade_in 3s; opacity:1;");
		}
		// portfolio 텍스트 강조
		else if(2441 <= px && 3415 >= px){
		   a_tag[3].setAttribute("style","color:rgb(35 161 161);");
		   a_tag[2].setAttribute("style","color:#333;");
		   a_tag[1].setAttribute("style","color:#333;");
		   a_tag[0].setAttribute("style","color:#333;");
		   a_tag[4].setAttribute("style","color:#333;");	
		   document.querySelector(".portfolio").setAttribute("style","animation:fade_in 3s; opacity:1;");
		}
		// Contact 텍스트 강조
		else if(3416 <= px && 4000 >= px){
		   a_tag[4].setAttribute("style","color:rgb(35 161 161);");
		   a_tag[2].setAttribute("style","color:#333;");
		   a_tag[1].setAttribute("style","color:#333;");
		   a_tag[0].setAttribute("style","color:#333;");
		   a_tag[3].setAttribute("style","color:#333;");	
		   document.querySelector(".contact").setAttribute("style","animation:fade_in 3s; opacity:1;");
		   document.querySelector(".contact_header").setAttribute("style","animation:fade_in 3s; opacity:1;");
		}		
  }

  // 노트북
  else if(device_width >= 1024 && device_height <= 768){
		// home 텍스트 강조
		if(650 > px){
		   a_tag[0].setAttribute("style","color:rgb(35 161 161);");
		   a_tag[1].setAttribute("style","color:#333;");
		   a_tag[2].setAttribute("style","color:#333;");
		   a_tag[3].setAttribute("style","color:#333;");
		   a_tag[4].setAttribute("style","color:#333;");
		}
		// about me 텍스트 강조
		else if(651 <= px && 1200 >= px){
		   a_tag[1].setAttribute("style","color:rgb(35 161 161);");
		   a_tag[0].setAttribute("style","color:#333;");
		   a_tag[2].setAttribute("style","color:#333;");
		   a_tag[3].setAttribute("style","color:#333;");
		   a_tag[4].setAttribute("style","color:#333;");
		   document.querySelector(".about").setAttribute("style","animation:fade_in 3s; opacity:1;");
		}
		// skills 텍스트 강조
		else if(1201 <= px && 1799 >= px){
		   a_tag[2].setAttribute("style","color:rgb(35 161 161);");
		   a_tag[3].setAttribute("style","color:#333;");
		   a_tag[1].setAttribute("style","color:#333;");
		   a_tag[0].setAttribute("style","color:#333;");
		   a_tag[4].setAttribute("style","color:#333;");
		   document.querySelector(".skills").setAttribute("style","animation:fade_in 3s; opacity:1;");
		}
		// portfolio 텍스트 강조
		else if(1800 <= px && 2529 >= px){
		   a_tag[3].setAttribute("style","color:rgb(35 161 161);");
		   a_tag[2].setAttribute("style","color:#333;");
		   a_tag[1].setAttribute("style","color:#333;");
		   a_tag[0].setAttribute("style","color:#333;");
		   a_tag[4].setAttribute("style","color:#333;");
		   document.querySelector(".portfolio").setAttribute("style","animation:fade_in 3s; opacity:1;");
		}  
		
		// portfolio 텍스트 강조
		else if(2530 <= px && 3000 >= px){
		   a_tag[4].setAttribute("style","color:rgb(35 161 161);");
		   a_tag[2].setAttribute("style","color:#333;");
		   a_tag[1].setAttribute("style","color:#333;");
		   a_tag[0].setAttribute("style","color:#333;");
		   a_tag[3].setAttribute("style","color:#333;");
		   document.querySelector(".contact").setAttribute("style","animation:fade_in 3s; opacity:1;");
		   document.querySelector(".contact_header").setAttribute("style","animation:fade_in 3s; opacity:1;");
		}
  }
  
  // mobile
  else{
     // home 텍스트 강조
    if(650 > px){
       a_tag[0].setAttribute("style","color:rgb(35 161 161);");
       a_tag[1].setAttribute("style","color:#333;");
       a_tag[2].setAttribute("style","color:#333;");
       a_tag[3].setAttribute("style","color:#333;");
       a_tag[4].setAttribute("style","color:#333;");
    }
    // about me 텍스트 강조
    else if(651 <= px && 1200 >= px){
       a_tag[1].setAttribute("style","color:rgb(35 161 161);");
       a_tag[0].setAttribute("style","color:#333;");
       a_tag[2].setAttribute("style","color:#333;");
       a_tag[3].setAttribute("style","color:#333;");
       a_tag[4].setAttribute("style","color:#333;");
	   document.querySelector(".about").setAttribute("style","animation:fade_in 3s; opacity:1;");
   }
    // skills 텍스트 강조
    else if(1201 <= px && 1800 >= px){
       a_tag[2].setAttribute("style","color:rgb(35 161 161);");
       a_tag[3].setAttribute("style","color:#333;");
       a_tag[1].setAttribute("style","color:#333;");
       a_tag[0].setAttribute("style","color:#333;");
       a_tag[4].setAttribute("style","color:#333;");
	   document.querySelector(".skills").setAttribute("style","animation:fade_in 3s; opacity:1;");
    }
    // portfolio 텍스트 강조
    else if(1801 <= px && 2430 >= px){
       a_tag[3].setAttribute("style","color:rgb(35 161 161);");
       a_tag[2].setAttribute("style","color:#333;");
       a_tag[1].setAttribute("style","color:#333;");
       a_tag[0].setAttribute("style","color:#333;");
       a_tag[4].setAttribute("style","color:#333;");
	     document.querySelector(".portfolio").setAttribute("style","animation:fade_in 3s; opacity:1;");
   }
   // contact 텍스트 강조
   else if(2431 <= px){
       a_tag[4].setAttribute("style","color:rgb(35 161 161);");
       a_tag[2].setAttribute("style","color:#333;");
       a_tag[1].setAttribute("style","color:#333;");
       a_tag[0].setAttribute("style","color:#333;");
       a_tag[3].setAttribute("style","color:#333;");
	     document.querySelector(".contact_header").setAttribute("style","animation:fade_in 3s; opacity:1;");
	     document.querySelector(".contact").setAttribute("style","animation:fade_in 3s; opacity:1;");
   }
  } 
};

/*
*
* 포트폴리오 버튼 클릭시 그에 해당하는 설명과 이미지 출력
*
*/
function portfolio_kind(){
   var portfolio_btn_ul = document.querySelector(".portfolio_list");// 포트폴리오 섹션 부모 ul태그 지정
   var portfolio_btn_ul_child = portfolio_btn_ul.children; // 자식요소 목록
   
   let portfolio_title = document.querySelector(".portfolio_title"); // 포트폴리오 제목
   let portfolio_p = document.querySelector(".portfolio_p"); // 포트폴리오 설명
   let portfolio_work = document.querySelector(".portfolio_work"); // 포트폴리오 작업관련 언급
   let portfolio_btn = document.querySelector(".portfolio_btn"); // 포트폴리오 이동 버튼
   let portfolio_img = document.querySelector(".img"); // 포트폴리오 이미지               
          
   for(var i=0; i < portfolio_btn_ul_child.length; i++){
        portfolio_btn_ul_child[i].addEventListener("click", () => {
            document.querySelector(".portfolio_show_wrap").removeAttribute("style");
            setTimeout( () => {
                document.querySelector(".portfolio_show_wrap").setAttribute("style","animation:fade_in 3s; opacity:1;");                         
            },1);
        
            // console.log(this.document.activeElement.className);             
            var portfolio_type = this.document.activeElement.className;
            // intgram 
            if(portfolio_type == "intgram"){
                portfolio_title.innerHTML = "INTGRAM(개인용)";
                portfolio_p.innerHTML = "인스타그램을 벤치마킹하여 생각했었던 아이디어를 구현해보았습니다.<br>모바일 환경에서만 접근이 가능합니다.";
                portfolio_work.innerHTML = "사용 툴: Editplus3, Eclipse<br>참여도 : 100%<br>작업물 타입 : 웹 퍼블리싱";
                portfolio_img.src="./src/img/intgram.png";
                portfolio_btn.setAttribute("onclick","javascript:location.href='https://csj-intgram.netlify.app/';");
            }
            // kiosk
            else if(portfolio_type == "kiosk"){
                portfolio_title.innerHTML = "KIOSK(고객요청)";
                portfolio_p.innerHTML = "아이폰12 크기와 데스크탑 크기의 반응형 웹 페이지 제작을 요청하셨던 고객의 요구사항을 반영하여 구현해보았습니다.<br>시안과 이미지는 고객께서 제공해주셨습니다.";
                portfolio_work.innerHTML = "사용 툴: Editplus3, Eclipse<br>참여도 : 100%<br>작업물 타입 : 웹 퍼블리싱";
                portfolio_img.src="./src/img/kiosk.png";
                portfolio_btn.setAttribute("onclick","javascript:location.href='https://csj-kioskscreen.netlify.app';");
            }
            
            // kream
            else if(portfolio_type == "kream"){
                portfolio_title.innerHTML = "KREAM(고객요청)";
                portfolio_p.innerHTML = "고객의 요청사항을 반영하여 구현해보았습니다.<br>시안과 이미지는 고객께서 제공해주셨습니다.";
                portfolio_work.innerHTML = "사용 툴: Editplus3, Eclipse<br>참여도 : 100%<br>작업물 타입 : 웹 퍼블리싱";
                portfolio_img.src="./src/img/kream.jpg";
                portfolio_btn.setAttribute("onclick","javascript:location.href='https://csj-kream.netlify.app/';");
            }

        });  
   }//end of for
};

/* 
*
* 탑 메뉴 버튼 클릭시 해당 레이아웃으로 animation 슬라이딩(보류)
*
*/
function menu_follow(scroll){
	var menu_children = document.querySelector(".header").children;
    // console.log(menu_children[0].innerText);
	
	for(var i=0; i < menu_children.length; i++){

	   // console.log(menu_children[i].innerText);
	   menu_children[i].addEventListener("click", () => {
	      
		   // console.log(this.location.href);
		
		   var url_split = String(this.location.href).split("#");
		   if(url_split[1] == "home"){
		      window.scrollY = scroll;
		   }
		   if(url_split[1] == "about"){
		      window.scrollY = scroll;
		   }
		   if(url_split[1] == "skills"){
		      window.scrollY = scroll;
		   }
		   if(url_split[1] == "portfolio"){
		      window.scrollY = scroll;
		   }
		   if(url_split[1] == "contact"){
		      window.scrollY = scroll;
		   }
	   });

	} // end of for()
};