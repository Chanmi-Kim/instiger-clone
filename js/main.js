const heart = document.querySelector('.heart_btn'); // 하트 요소 부분을 선택해서 가져옴
const header = document.querySelector('#header');
const sidebox = document.querySelector('.side_box');
// SelectorAll을 활용해 모든 요소를 가져옴
const variableWidth = document.querySelectorAll(".contents_box .contents");

heart.addEventListener('click', function(){
    console.log('hit');
    heart.classList.toggle('on'); // 하트를 클릭하면 .on 클래스를 추가
});

function resizeFunc(){
    if(pageYOffset >= 10){
        let calcWidth = (window.innerWidth *0.5) +167; // 웹 페이지 기반으로 위치 재조정
        sidebox.style.left = calcWidth + 'px';
    }

    if(matchMedia('screen and (max-width : 800px)').matches){
        // 여러개의 컨텐츠 박스가 있으므로 배열 활용
        for(let i=0; i<variableWidth.length; i++){
            variableWidth[i].style.width = window.innerWidth -20 +'px';
        }
    }else{
        for(let i=0; i<variableWidth.length; i++){
            variableWidth[i].removeAttribute('style');
        }
    }
}

function scrollFunc(){
    // console.log(pageYOffset);
    if(pageYOffset >= 10){ // 드래그할 경우
        header.classList.add('on');
        sidebox.classList.add('on');
        resizeFunc();
    }else{
        header.classList.remove('on');
        sidebox.classList.remove('on');
        sidebox.removeAttribute('style');
    }
}

window.addEventListener('resize', resizeFunc);
window.addEventListener('scroll', scrollFunc); // 스크롤 이벤트 발생 시 scrollFunc 실행