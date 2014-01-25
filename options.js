function load_settings(){
    chrome.storage.sync.get(function(settings){
        for(var key in settings){
            var value = settings[key];
            if(key == 'onlynew'){
                document.querySelector('[name="onlynew"]').checked = settings.onlynew;
            }
        }
    });
}

function save_settings(){
    var settings = {};
    settings.onlynew = document.querySelector('[name="onlynew"]').checked;
    chrome.storage.sync.set(settings);
}

window.onload = function(){
    load_settings();
    var save_button = document.querySelector('#save');
    save_button.onclick = function(){
        save_settings();
    };
}