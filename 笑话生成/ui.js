document.getElementById('cn').onclick = () => {
    document.title = '笑话生成器';
    document.getElementById('lbl-customname').textContent = '请输入自定义的名字：';
    document.getElementById('lbl-cn').textContent = '中国';
    document.getElementById('lbl-us').textContent = '美国';
    document.getElementById('lbl-uk').textContent = '英国';
    document.getElementById('customname').placeholder = '李雷';
    document.querySelector('.randomize').textContent = '随机生成笑话';
  };
  
  document.getElementById('us').onclick =
  document.getElementById('uk').onclick = () => {
    document.title = 'Silly story generator';
    document.getElementById('lbl-customname').textContent = 'Enter custom name:';
    document.getElementById('lbl-cn').textContent = 'CN';
    document.getElementById('lbl-us').textContent = 'US';
    document.getElementById('lbl-uk').textContent = 'UK';
    document.getElementById('customname').placeholder = 'Bob';
    document.querySelector('.randomize').textContent = 'Generate random story';
  };

let customname = document.getElementById('customname');
let story = document.querySelector('.story');
let storyText = ['外边有34度，','出去遛弯。当走到','时小伙伴们都惊呆了，他','。','全程目睹但他并没有慌，因为','是一个270斤的胖子，天气又辣么热.']
let insertX = ['圣诞老人','大老爹','怪兽威利'];
let insertY = ['在人行道化成了一坨泥','自燃了','变成一条鼻涕虫爬走了'];
let insertZ = ['救助站','白宫','迪士尼'];
let customnameValue = customname.value;


let randomize = document.getElementsByClassName('randomize');

function insert() {
    let randomX = Math.floor(Math.random()*3);
    let randomY = Math.floor(Math.random()*3);
    let randomZ = Math.floor(Math.random()*3);
    let result = storyText.slice(0);
    console.log(result);
    let aa = result.splice(1,0,insertX[randomX]);
    console.log(result.splice(1,0,insertX[randomX]));
    aa = aa.splice(3,0,insertZ[randomZ]);
    aa = aa.splice(4,0,insertY[randomY]);
    aa = aa.splice(8,0,customnameValue);
    aa = aa.splice(9,0,insertX[randomX]);

    
    console.log(randomX);
    console.log(insertX[randomX]);
    story.innerHTML=aa.toString();
}
randomize[0].addEventListener('click',insert);
