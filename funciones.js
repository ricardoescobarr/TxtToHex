function txt_a_hex(srt) {
    var result = '';
    for (var i = 0, l = srt.length; i < l; i ++) {
      var hex = Number(srt.charCodeAt(i)).toString(16);
      result = result + ' ' + hex;
    }
    document.getElementById('result').value = (result);
}