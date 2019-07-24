function showPrime(){
    for(let i = 1; i <= 100; i++){
        var boolean = true;
        for(let j = 1; j <= i; j++){
            if(i % j == 0 && (j != 1 && i != j )){
                boolean = false;
            }else if(i == 1){
                boolean = false;
            }
        }
        if(boolean){
            let item = document.getElementsByClassName('answer_item')[i-1];
            item.classList.add('selected');
        }
    }
}

function getTWID(){
    //性別亂數
    let g_rand = getRandomGender();
    //區域亂數
    let a_rand = getRandomArea();
    //回吐身分證字號
    document.getElementById('id_wrap1').innerHTML = createTWID(a_rand,g_rand);
}

function getTWIDByArea(){
    //區域取值
    let area_v = document.getElementById('a2_area').value;
    //性別亂數
    let g_rand = getRandomGender();
    //回吐身分證字號
    document.getElementById('id_wrap2').innerHTML = createTWID(area_v,g_rand);
}

function getTWIDByGender(){
    //性別取值
    let gender_v = document.getElementById('a3_gender').value;
    //區域亂數
    let a_rand = getRandomArea();
    //回吐身分證字號
    document.getElementById('id_wrap3').innerHTML = createTWID(a_rand,gender_v);
}

function getTWIDByAll(){
    //區域取值
    let area_v = document.getElementById('a4_area').value;
    //性別取值
    let gender_v = document.getElementById('a4_gender').value;
    document.getElementById('id_wrap4').innerHTML = createTWID(area_v,gender_v);

}

/**
 * 生產身分證字號
 * @param  string area   [區域代號]
 * @param  string gender [性別代號]
 * @return string        [身分證字號]
 */
function createTWID(area,gender){
    let id = area + gender + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10);
    //將身分證加上最後一碼驗證碼並進行判斷真偽
    for(let i = 0 ; i < 10 ; i++){
        if(checkTWID(id + i)){
            //回傳真值
            return id + i;
        }
    }
}

/**
 * 取得亂數區域
 * @return string [區域代號]
 */
function getRandomArea(){
    let a_array = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    let a_rand = parseInt(Math.random()*26);
    return a_array.substr(a_rand,1);
}

/**
 * 取得亂數性別
 * @return string [性別代號]
 */
function getRandomGender(){
    return parseInt(Math.random()*2 + 1);
}

/**
 * 檢查身分證字號真偽
 * @param  string  id [身分證字號]
 * @return boolean    [真偽]
 */
function checkTWID(id){
    let ret = false;
    let regex = /^[A-Z][12]\d{8}$/;  //<=這就是正規表示法的預設
    let letters = 'ABCDEFGHJKLMNPQRTUVXYWZIO';
    if(id.match(regex) != null){
        let c1 = id.charAt(0);
        let n12 = letters.indexOf(c1) + 10;
        let n1 = parseInt( n12 / 10 );
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1,1));
        let n4 = parseInt(id.substr(2,1));
        let n5 = parseInt(id.substr(3,1));
        let n6 = parseInt(id.substr(4,1));
        let n7 = parseInt(id.substr(5,1));
        let n8 = parseInt(id.substr(6,1));
        let n9 = parseInt(id.substr(7,1));
        let n10 = parseInt(id.substr(8,1));
        let n11 = parseInt(id.substr(9,1));
        let sum = n1*1 + n2*9 + n3*8 + n4*7 + n5*6 + n6*5 + n7*4 + n8*3 + n9*2 + n10*1 + n11*1;
        ret = sum % 10 == 0;
    }
    return ret;
}