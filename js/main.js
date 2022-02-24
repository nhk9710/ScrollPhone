$(function(){
    $('#fullpage').fullpage({
        fingersonly: false,
        scrollingSpeed: 900,
        anchors:['firstPage','secondPage','thirdPage','fourthPage', 'fifthPage', 'lastPage'],
        navigation: true,
        navigationTooltips: ['S22+', '나이토그래피', '단독컬러', 'S22 ULTRA', 'INFINITY-O', 'VIVID'],
        navigationPosition: 'right',
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        keyboardScrolling: true,
        animateAnchor: true,
        controllArrows: true,
        menu:'.myNav',
        sectionsColor : ['skyblue', 'pink', 'white', '#F4F4F4', 'black', 'silver'],
        fixedElements: 'footer',
        fadingEffect: true,
    });

    const text = document.querySelector('.sec5-t1');
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

    document.querySelectorAll(".sec5-t1 span").forEach((letter) => {
        letter.addEventListener("mouseover", () => {
            letter.classList.add("active");
        });
    });
});