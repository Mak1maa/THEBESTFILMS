document.getElementById('dark').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.add('black');
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
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/support.css");
});

document.getElementById('reset').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.remove('black');
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/support.css");
});

document.getElementById('reset').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.remove('special');
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/support.css");
});