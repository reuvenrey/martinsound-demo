const header = document.getElementById('header');
const footer = document.getElementById('footer');
const webURL = "";

header.innerHTML = '<div id="headerBar">\
    <div id="headerContents">\
    <img id="headerLogo" src="https://martinsound.a2hosted.com/wp-content/uploads/2020/03/b_msd06.png" onclick="window.open(\'index.html\',\'_self\')">\
    <div id="headerLinks"></div>\
    </div>\
    </div>\
    <div class="headerBorder" style="background: var(--accent1);"></div>\
    <div class="headerBorder" style="background: var(--accent2);"></div>';

for(i=0; i<headerContents.length;i++){
    let headerLink = document.getElementById('headerLinks');
    let thisItem = headerContents[i];
    let thisUrl = webURL + thisItem.link;
    headerLink.innerHTML += "<a href='"+thisUrl+"'>"+thisItem.display+"</a>";
}

footer.innerHTML = '<div class="headerBorder" style="background: var(--accent1);"></div><div class="headerBorder" style="background: var(--accent2);"></div>\
    <div id="footerContent">\
    <div class="container"><div class="halfDiv bordered">\
    <div class="halfDiv">\
    <div><b>1151 W. Valley Blvd.</b><br>Alhambra, CA 91803</div>\
    <div><b>(626) 407-4473</b><br><a href="mailto:inbox@martinsound.com">inbox@martinsound.com</div>\
    </div><div class="headerLinks" style="justify-content:flex-end;"><a href="contact.html">Contact Us</a> <a href="faq">Information & FAQ</a></div>\
    </div></div><p style="text-align:center">(C) 2026 Martinsound Inc. | <em>Concept site designed by Reuven Reyman</em></p></div>';

// Set page top border to height of the header
let headerHeight = document.getElementById('header').offsetHeight;
document.body.style.marginTop = `${headerHeight}px`;
