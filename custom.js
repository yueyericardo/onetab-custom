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

function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
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

function addDownloadButton() {
    var EKS = document.getElementById('settingsDiv');
    tmp = `<div><div id="downloadbnt" class="clickable" style="font-size: 12.25px; color: #ff4242"><span style="vertical-align: middle;">Download as json</span></div></div>`;
    var tmp_vcard = htmlToElements(tmp)[0];
    tmp_vcard.onclick = download;
    EKS.appendChild(tmp_vcard);
}

function clickFileInput(){
    document.querySelector('#choose-file').onchange = onFileSelected;
    document.querySelector('#choose-file').click();
}

function addImportButton() {
    var EKS = document.getElementById('settingsDiv');
    tmp = `<div><div id="importbnt" class="clickable" style="font-size: 12.25px;"><input id="choose-file" type="file" style="display: none;"><span style="vertical-align: middle;">Import as json</span></div></div>`;
    var tmp_vcard = htmlToElements(tmp)[0];
    tmp_vcard.onclick = clickFileInput;
    EKS.appendChild(tmp_vcard);
}

function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(event) {
    localStorage.setItem('state', event.target.result);
    location.reload();
  };

  reader.readAsText(selectedFile);
}

window.onload = function() {
    setSeparatorColor();
    addImportButton();
    addDownloadButton();
}