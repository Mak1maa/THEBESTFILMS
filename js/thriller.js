document.getElementById('dark').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.add('black');
    document.getElementById('img').src = "svg/topb.svg";
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/blacklist.css");
});

document.getElementById('light').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.add('light');
    document.getElementById('img').src = "svg/topl.svg";
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/lightlist.css");
});

document.getElementById('special').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.add('special');
    document.getElementById('img').src = "svg/tops.svg";
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/speciallist.css");
});

document.getElementById('reset').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.remove('light');
    document.getElementById('img').src = "svg/topb.svg";
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/thriller.css");
});

document.getElementById('reset').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.remove('black');
    document.getElementById('img').src = "svg/topb.svg";
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/thriller.css");
});

document.getElementById('reset').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.remove('special');
    document.getElementById('img').src = "svg/topb.svg";
    function loadCss(href){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
    loadCss("css/thriller.css");
});