function my$(params) {
    return document.getElementById(params);
}

function addEvent(element, type, fn) {
    if (element.addEventListener) {
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, fn);
    } else {
        element['on' + type] = fn;
    }
}

function removeEvent(element, type, fn) {
    console.log('aa');

    if (element.removeEventListener) {
        element.removeEventListener(type, fn, false);
    } else if (element.detachEvent) {
        element.detachEvent('on' + type, fn);
    } else {
        element['on' + type] = null;
    }
};