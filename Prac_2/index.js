document.getElementsByTagName('h1')[0].innerText = 'External file loaded successfully';
console.log(document.getElementsByTagName('h1'));


const consoleMain = (e) => {
    console.log(e);
    console.log(this);
    console.log('main');
}

const consoleImg = (e) => {
    console.log('image');
}

const WholeDoc = document.documentElement;
console.log(WholeDoc);

const body = document.body;
console.log(body);

const nodeElh1 = document.getElementById('node').nodeName;
console.log(nodeElh1);

const nodeVal = document.getElementById('node').nodeValue;
console.log(nodeVal);


