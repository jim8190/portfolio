$(function(){
//fullpage 
    let documentWidth  = $(window).width();
    //모바일을 제외한 기기에서는 fullpage 적용
    if (documentWidth >= 481){
        let page = $(".wrap").fullpage({
            //풀페이지 옆 
            navigation:true,
            fixedElements:'#top',
            menu:'nav',
            //메뉴때문에 원래는 왔다갔다 부드럽게 안됬는데 이게 있으면 왔다갔다 부드러워짐
            anchors:['home','profile', 'portfolio', 'portfolio2', 'email']
        });
        //모바일에서는 메뉴를 터치하면 그 해당 section으로 이동
    }else {
        $("nav ul li a").click(function(){
            //클릭한 a태그의 href속성값을 읽어서 $el변수에 저장
            let $el = $(this).attr("href");
            //hreg속성값에 "mo-"문자열을 붙인 다음
            let menuStr = "#mo-"+ $el.substr(1);
            $("html, body").animate ({     
                //그메뉴에 해당하는 section으로 이동 
                scrollTop:$(menuStr).offset().top
            });
        });
    }

    var swiper2 = new Swiper(".portSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        }
      });



    
    


        var words = document.getElementsByClassName('word');
            var wordArray = [];
            var currentWord = 0;

            if (words.length > 0) {
                words[currentWord].style.opacity = 1;
                for (var i = 0; i < words.length; i++) {
                  splitLetters(words[i]);
                }
                changeWord();
                setInterval(changeWord, 3500);
            }

            function changeWord() {
              var cw = wordArray[currentWord];
              var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
              for (var i = 0; i < cw.length; i++) {
                animateLetterOut(cw, i);
              }

          for (var i = 0; i < nw.length; i++) {
            nw[i].className = 'letter behind';
            nw[0].parentElement.style.opacity = 1;
            animateLetterIn(nw, i);
          }

          currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
        }

        function animateLetterOut(cw, i) {
          setTimeout(function() {
                cw[i].className = 'letter out';
          }, i*45);
        }

        function animateLetterIn(nw, i) {
          setTimeout(function() {
                nw[i].className = 'letter in';
          }, 340+(i*45));
        }

        function splitLetters(word) {
            if (!word) return; // word가 undefined인 경우 처리
        
            var content = word.innerHTML;
            word.innerHTML = '';
            var letters = [];
            for (var i = 0; i < content.length; i++) {
                var letter = document.createElement('span');
                letter.className = 'letter';
                letter.innerHTML = content.charAt(i);
                word.appendChild(letter);
                letters.push(letter);
            }
        
            wordArray.push(letters);
        }
        

        changeWord();
        setInterval(changeWord, 3500);


            function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function changeColor() {
            document.getElementById('.letter .in').style.color = getRandomColor();
        }

});