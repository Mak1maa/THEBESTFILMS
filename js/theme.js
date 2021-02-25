document.getElementById('dark').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.add('black');
    document.getElementById('img').src = "svg/black.svg";
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/black.css");
});

document.getElementById('light').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.add('light');
    document.getElementById('img').src = "svg/light.svg";
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/light.css");
});

document.getElementById('special').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.add('special');
    document.getElementById('img').src = "svg/special.svg";
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/special.css");
});

document.getElementById('reset').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.remove('light');
    document.getElementById('img').src = "svg/logo.svg";
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/tbf.css");
});

document.getElementById('reset').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.remove('black');
    document.getElementById('img').src = "svg/logo.svg";
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/tbf.css");
});

document.getElementById('reset').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.remove('special');
    document.getElementById('img').src = "svg/logo.svg";
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/tbf.css");
});