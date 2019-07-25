let dd = 4;
let answer = createAnswer(dd);
let logtext = '';
let count = 0;
//執行猜數字的遊戲
function doGuess(){
    let guess = document.getElementById('input').value;
    let check = checkNumber(guess);
    
    if(!check.result){
        alert(check.string);
    }else{
        if(count < 10){
            count++;
            let result = checkAB(answer,guess);
            document.getElementById('input').value = '';
            logtext += `第${count}次：${guess} => ${result} <br>`;
            if(result == `${dd}A0B`){
                logtext += '恭喜你猜對了<br>';
            }else if(count == 5){
                logtext += '你再不猜出來你要被罵了<br>';
            }else if(count == 10){
                logtext += '這樣不行你已經沒有機會了<br>';
                logtext += '答案是'+answer+'<br>';
            }
            document.getElementById('log').innerHTML = logtext;
            document.getElementById('input').focus();
        }
    }
    
}

//重置遊戲
function resetGame(){
    dd = document.getElementById('dd').value;
    answer = createAnswer(dd);
    logtext = ''
    document.getElementById('log').innerHTML = '';
    count = 0;
    document.getElementById('input').value = '';
    document.getElementById('input').focus();
}

//產生答案
function createAnswer(n = 3){
    let number = [];
    for(let i = 0 ; i < 10 ; i++) number[i] = i;
    for(let i = number.length-1;i>0;i--){
        let rand = parseInt(Math.random()*(i+1));
        [number[i],number[rand]] = [number[rand],number[i]];//這樣可以將這兩個值對調
    }
    if(n > 10){
        n = 3;
    }
    let ret = '';
    for(let i = 0 ; i < n ; i++){
        ret = ret + number[i];
    }
    return ret;
}

//檢查數字
function checkAB(ans,gus){
    let A = 0 , B = 0;
    for(let i = 0 ; i < gus.length ; i++){
        for(let j = 0 ; j < ans.length ; j++){
            if(i == j){
                if(gus.substr(i,1) == ans.substr(j,1)){
                    A++;
                    break;
                }
            }else{
                if(gus.substr(i,1) == ans.substr(j,1)){
                    B++;
                    break;
                }
            }
        }
    }
    return A + "A" + B + "B";
}

//檢查傳入值是否符合規格
function checkNumber(num){
    // 檢查是否重複

    // 檢查是否都是數字

    // 檢查字數

    //可以用正規表示法判斷
}