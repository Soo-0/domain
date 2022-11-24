// var wrap;
// var x = 0, y = 0;
// var mx = 0, my = 0;

window.onload = () => {
    headWhite();
    datepicker.init();
    
}


let headWhite = () => {
    let $wrap = document.getElementById("wrap");
    let $header = document.getElementById("header");
    let $workSection = document.querySelector("section.work");

    console.log($workSection.scrollHeight)
    // const topSection = document.querySelector('.top');
    // const btmSection = document.querySelector('.bottom');
    // if(window.scrollY < (topSection.offsetHeight - btmSection.offsetHeight ) - 500){
    //     setTimeout(() => {
    //         document.querySelector('.bottom').scrollIntoView({ behavior: 'smooth' });
    //     }, 2000);
    // }

    window.addEventListener("scroll", evt => {
        const $scrollY = this.scrollY;

        console.log($scrollY)
        if(window.scrollY > 765){
            $wrap.classList.add('white')
        }else{
            $wrap.classList.remove('white')
        }
        // title.style.transform = "translateY("+ $scrollY/1.8+"px)";
        
        // //(스크롤을 맨 밑으로 내렸을 때의 스크롤 길이 값)  == (문서의 길이) - (창의 길이) : 맨 하단일때
        // if(window.scrollY >= (document.documentElement.scrollHeight - window.innerHeight) - btmSection.offsetHeight){
        //     btmSection.style.transform = "scale(1)";
        // }
    });
    console.log($workSection)
}

let datepicker = {
    init : function(){
        console.log('testsetset')
    }
}

let datepicker2 = () =>{
    function date(){
        console.log('test')
    }
}