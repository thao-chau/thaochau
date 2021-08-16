function tiente() {
    let dauvao = document.getElementById('tienvao').value;
    let bang1 = document.getElementById('bang1').value;
    let bang2 = document.getElementById('bang2').value;
    if (bang1 == bang2) {
        document.getElementById('ketqua1').innerHTML = dauvao;
    }
    if (bang1 == '1' && bang2 == '2') {
        document.getElementById('ketqua1').innerHTML =dauvao/23000;
    }
    if (bang1 == '2' && bang2 == '1') {
        document.getElementById('ketqua1').innerHTML =dauvao*23000;
    }
   
}