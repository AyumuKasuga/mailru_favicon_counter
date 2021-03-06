var global_settings = {
    onlynew: false
};

function set_badge(favicon, text){
    if(parseInt(text) > 0){
        favicon.badge(text);
    }
    else{
        favicon.badge('');
    }
}

function init(){
    var fav = document.querySelector("link[rel='shortcut icon']");
    fav.setAttribute('href', 'data:image/vnd.microsoft.icon;base64,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');
    favicon_settings = {
        animation : 'popFade',
    }

    if(global_settings.shape !== undefined){
        if(global_settings.shape == "circle"){
            favicon_settings.type = "circle";
        }
        else if(global_settings.shape == "rectangle"){
            favicon_settings.type = "rectangle";
        }
    }

    var favicon = new Favico(favicon_settings);

    var badge = document.querySelector('#g_mail_events');

    if(global_settings.onlynew){
        var new_value = '';
        var start_value = parseInt(badge.textContent);
    }else{
        var new_value = badge.textContent;
    }

    set_badge(favicon, new_value);

    badge.addEventListener('DOMCharacterDataModified', function(e){
        if(global_settings.onlynew){
            var new_value = parseInt(e.newValue - start_value)
            if(new_value < 0){
                start_value = parseInt(e.newValue);
                new_value = '';
            }
        }else{
            var new_value = e.newValue;
        }
        set_badge(favicon, new_value);
    }, false);
}

chrome.storage.sync.get(function(settings){
    if(settings.onlynew !== undefined){global_settings.onlynew = settings.onlynew;}
    if(settings.shape !== undefined){global_settings.shape = settings.shape;}
    init();
});