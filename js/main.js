const heart = document.querySelector('.heart_btn'); // 하트 요소 부분을 선택해서 가져옴
const header = document.querySelector('#header');
const sidebox = document.querySelector('.side_box');
// SelectorAll을 활용해 모든 요소를 가져옴
const variableWidth = document.querySelectorAll(".contents_box .contents");

// heart.addEventListener('click', function(){
//     console.log('hit');
//     heart.classList.toggle('on'); // 하트를 클릭하면 .on 클래스를 추가
// });

function deligationFunc(e){
    let elem = e.target; // 클릭한 요소 가져오기

    // 잘못 클릭한 경우
    while(!elem.getAttribute('data-name')){
        // elem의 부모를 찾음
        elem = elem.parentNode;
        if(elem.nodeName === 'BODY'){ // body까지 이벤트가 없는 경우
            elem = null;
            return;
        } // data-name을 가진 속성을 찾을 때까지 부모에게 접근을 반복
    }

    if(elem.matches('[data-name="heartbeat')){
        console.log("하트!");
    }else if(elem.matches('[data-name="bookmark"')){
        console.log("북마크!")''
    }else if(elem.matches('[data-name="share"')){
        console.log("공유!");
    }if(elem.matches('[data-name="more"')){
        console.log("더보기!");
    }

    elem.classList.toggle('on'); // on 클래스 추가
}

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

deligationFunc.addEventListener('click', deligationFunc);
window.addEventListener('resize', resizeFunc);
window.addEventListener('scroll', scrollFunc); // 스크롤 이벤트 발생 시 scrollFunc 실행