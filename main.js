let key=false;
function toggle() {
    key = !key;
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let header = document.getElementById('header');
    let about = document.getElementById('about');
    let article1 = document.getElementsByTagName('h2');
    
    
    if (key) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        p1.style.backgroundColor = 'black';
        p2.style.backgroundColor = 'black';
        p1.style.color = 'white';
        p2.style.color = 'white';
        
        about.style.backgroundColor = 'black';
        header.style.backgroundColor = 'white';
    //article1.style.color='white';
        for (let i = 0; i < article1.length; i++) {
            let article = article1[i];
            article.style.color = 'white'; 
        }
    
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        p1.style.backgroundColor = ''; 
        p2.style.backgroundColor = ''; 
        about.style.backgroundColor = ''; 
        header.style.backgroundColor = ''; 
        for (let i = 0; i < article1.length; i++) {
            let article = article1[i];
            article.style.color = ''; 
        }
        
    }
}
let tabs=document.getElementsByClassName("tabs");
for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
}

function checkTabs(tab) {

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    document.getElementById(tab).style.display = "block";
}
