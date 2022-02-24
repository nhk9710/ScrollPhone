$(function(){
    $('#fullpage').fullpage({
        fingersonly: false,
        scrollingSpeed: 1000,
        anchors:['firstPage','secondPage','thirdPage','fourthPage', 'fifthPage', 'lastPage'],
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        keyboardScrolling: true,
        animateAnchor: true,
        controllArrows: true,
        menu:'#myNav',
        sectionsColor : ['skyblue', 'pink', 'white', '#F4F4F4', 'black', 'silver'],
        fixedElements: 'footer',
        fadingEffect: true,

    });
});