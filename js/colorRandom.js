//随机产生一个十六进制的颜色值       
function colorRandom() {
    this.getColor = function () {
        let str = '#';
        let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
        for (let i = 0; i < 6; i++) {
            let num = parseInt(Math.random() * 15);
            str += arr[num];
        }
        return str;
    }
}




