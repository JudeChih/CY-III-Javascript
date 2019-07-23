function sayYaV5(welcome,...names){
    for(let name of names){
        document.write(`${welcome}! ${name} . <br>`);
    }
}

//判斷身分證字號是否正規
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

//判斷手機號碼是否正規
function checkPhoneNumber(number){
    let ret = false;
    let regex = /^09\d{2}-\d{6}$/;
    if(number.match(regex) != null){
        ret = true;
    }   
    return ret;
}