function rebuildPage(event, itemData, scripts, rebuildStyles) {
    if (event && typeof event.preventDefault === "function") {
        event.preventDefault();
    }
    
    if (itemData.type === "rebuild") {
        document.body.innerHTML = "";
        applyStyles(document.body, rebuildStyles || window.defaultStyles.churchForm.bodyStyleScroll);
    }
    if (Array.isArray(scripts) && scripts.length > 0) {
        try {
            for (var scriptId of scripts) {
                var scriptFn = belhardSiteData.scriptsConfig[scriptId];
                if (typeof scriptFn === 'function') {
                    scriptFn(itemData);
                } else {
                    console.warn(`Script ${scriptId} is not a function`);
                }
            }
        } catch (e) {
            console.error('Error executing scripts:', e);
        }
    }
}

function attachRebuildListener(element, itemData, li) {
    element.addEventListener('click', function (event) {
        if (document.documentElement.clientWidth <= belhardSiteData.mobileSizes.navBar &&
            li && li.classList.contains('has-children')) {
            event.preventDefault();
            const isOpen = li.classList.contains('open');
            closeAllChildren(li);
            li.classList.toggle('open', !isOpen);
        } else {
            // console.log(itemData.source)
            if(itemData.type == "rebuild"){
                if(itemData.id){
                    addElementInStack(itemData.source, itemData.id);
                } else{
                    addElementInStack(itemData.source, itemData.formId);
                }
            }
            rebuildPage(event, itemData, itemData.scripts || []);
        }
    });
}