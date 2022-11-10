function openInNewTab(url) {


  win = window.open();
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';

  /*
  var icon = win.document.createElement('link')
  icon.rel = "shortcut icon"
  icon.href = ""
  icon.type = "image/png"
  win.document.head.appendChild(icon)


  var arc = win.document.createElement('script')
  arc.async = true
  arc.src = "https://arc.io/widget.min.js#arcidhereithink"
  win.document.head.appendChild(arc)

  var title = win.document.createElement('title')
  title.innerText = "Calculator"
  win.document.head.appendChild(title)
  
  var home = win.document.createElement('a')
  home.style.display = "block"
  home.style.position = "absolute"
  home.style.fontFamily = "'Courier New', Courier, monospace";
  home.style.color = "rgb(76, 160, 55)"
  home.href="#"
  home.onclick = 'return console.log("hi") && false'
  home.innerText = "home"
  win.document.body.appendChild(home);
  */

  var iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.id = 'content';
  iframe.src = "https://edu.thegreatestgiant.repl.co/";
  win.document.body.appendChild(iframe);

}
