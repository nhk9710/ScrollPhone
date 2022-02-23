$(function(){
    $('#fullpage').fullpage({
        fingersonly: false,
        scrollingSpeed: 1000,
        anchors:['firstPage','secondPage','thirdPage','fourthPage', 'fifth', 'sixth'],
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        keyboardScrolling: true,
        animateAnchor: true,
        controllArrows: true,
        menu:'#myNav',
        sectionsColor : ['skyblue', 'pink', 'lightgreen', 'orange', 'gold', 'silver'],
        fixedElements: 'footer',

    });
});