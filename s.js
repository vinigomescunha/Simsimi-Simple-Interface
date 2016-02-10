text = "";
url = "request.php?text=";
insertchat = function(c, m) {
    sc = document.getElementById("simsimi-chat");
    br = document.createElement("div");
    br.className = c;
    br.innerHTML = emoticom(m);
    sc.appendChild(br);
    sc.insertBefore(br, sc.firstChild);
}

insert = function () {
    insertchat("chat-right box", text);
    send();
}

createXHR = function (method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

send = function () {
    var xhr = createXHR('GET', url + text);
    xhr.onload = function() {
        var text = JSON.parse(xhr.responseText);
        if (typeof text.response !== 'undefined') insertchat("box chat-left", text.response);
    };
    xhr.send();
}

var emotic = {
    ':)': '<img class="emotional" src="svg/:).svg" border="0" alt="" />',
    ':-)': '<img class="emotional" src="svg/:).svg" border="0" alt="" />',
    ':D': '<img class="emotional" src="svg/:D.svg" border="0" alt="" />',
    ':-D': '<img class="emotional" src="svg/:D.svg" border="0" alt="" />',
    ':-(': '<img class="emotional" src="svg/:(.svg" border="0" alt="" />',
    ':(': '<img class="emotional" src="svg/:(.svg" border="0" alt="" />',
    ':-|': '<img class="emotional" src="svg/:_.svg" border="0" alt="" />',
    ':|': '<img class="emotional" src="svg/:_.svg" border="0" alt="" />',
    ':-/': '<img class="emotional" src="svg/:_.svg" border="0" alt="" />',
    ':/': '<img class="emotional" src="svg/:_.svg" border="0" alt="" />',
    ';-)': '<img class="emotional" src="svg/;).svg" border="0" alt="" />',
    ';)': '<img class="emotional" src="svg/;).svg" border="0" alt="" />',
    'S2': '<img class="emotional" src="svg/<3.svg" border="0" alt="" />'
};

addslashRegExp = function(m) {
    return m.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

replaceRegExp = function(m, find, replace) {
    return m.replace(new RegExp(find, 'g'), replace);
}

emoticom = function(m) {
    for (var x in emotic)
        m = replaceRegExp(m, addslashRegExp(x), emotic[x]);
    return m;
}

document.getElementById("chat-input").addEventListener('keydown', function(e) {
    var char = e.keyCode || e.which;
    if (char == 13) {
        text = this.value;
        this.value = "";
        insert();
        document.getElementById("chat-input").focus();
    }
});
