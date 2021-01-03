function setSeparatorColor() {
    a = document.querySelector('#contentAreaDiv');
    a.childNodes[1].style.borderBottomColor = "rgb(82 82 82)";
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hour = d.getHours(),
        minute = d.getMinutes();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    if (hour.length < 2)
        hour = '0' + hour;
    if (minute.length < 2)
        minute = '0' + minute;

    return [year, month, day, hour, minute].join('-');
}

function download() {
    var text = localStorage.getItem('state');
    var filename = 'onetab-' + formatDate(new Date) + '.json';
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}

function addDownloadButton() {
    var EKS = document.getElementById('settingsDiv');
    tmp = `<div><div id="downloadbnt" class="clickable" style="font-size: 12.25px;"><span style="vertical-align: middle;">Download as json</span></div></div>`;
    var tmp_vcard = htmlToElements(tmp)[0];
    tmp_vcard.onclick = download;
    EKS.appendChild(tmp_vcard);
}
window.onload = function() {
    setSeparatorColor();
    addDownloadButton();
}