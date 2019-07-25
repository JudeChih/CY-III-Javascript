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