
var maindiv = document.createElement("div");
maindiv.setAttribute("class", "boxcontain design center-content");
document.body.appendChild(maindiv);

var maindiv1 = document.createElement("div");
document.body.appendChild(maindiv1);

var imglist = ['imgs/lessons/20211124_201359.jpg',
'imgs/lessons/20211206_203550.jpg',
'imgs/lessons/20211212_124952.jpg',
'imgs/lessons/20211213_180051.jpg',
'imgs/lessons/davidmask.jpg',
'imgs/lessons/DSC02699.JPG',
'imgs/lessons/DSC02703.JPG',
'imgs/lessons/DSC02706.JPG',
'imgs/lessons/DSC02707.JPG',
'imgs/lessons/DSC02711.JPG',
'imgs/lessons/DSC02714.JPG',
'imgs/lessons/DSC02717.JPG',
'imgs/lessons/DSC02719.JPG',
'imgs/lessons/DSC02721.JPG',
'imgs/lessons/DSC02733.JPG',
'imgs/lessons/DSC02735.JPG',
'imgs/lessons/DSC02737.JPG',
'imgs/lessons/DSC02739.JPG',
'imgs/lessons/DSC02743.JPG',
'imgs/lessons/DSC02762.JPG',
'imgs/lessons/DSC02766.JPG',
'imgs/lessons/DSC02791.JPG',
'imgs/lessons/DSC02794.JPG',
'imgs/lessons/DSC02795.JPG',
'imgs/lessons/DSC02798.JPG',
'imgs/lessons/DSC02803.JPG',
'imgs/lessons/DSC02806.JPG',
'imgs/lessons/DSC02822.JPG',
'imgs/lessons/DSC02825.JPG',
'imgs/lessons/DSC02827.JPG',
'imgs/lessons/DSC02828.JPG',
'imgs/lessons/DSC02937.JPG',
'imgs/lessons/DSC04520.JPG',
'imgs/lessons/DSC04523.JPG',
'imgs/lessons/DSC04531.JPG',
'imgs/lessons/DSC04539.JPG',
'imgs/lessons/DSC04744.JPG',
'imgs/lessons/DSC04747.JPG',
'imgs/lessons/DSC04750.JPG',
'imgs/lessons/DSC04795.JPG',
'imgs/lessons/DSC04799.JPG',
'imgs/lessons/DSC04807.JPG',
'imgs/lessons/DSC04809.JPG',
'imgs/lessons/DSC04814.JPG',
'imgs/lessons/DSC04817.JPG',
'imgs/lessons/DSC04821.JPG',
'imgs/lessons/DSC04822.JPG',
'imgs/lessons/DSC04826.JPG',
'imgs/lessons/DSC04827.JPG',
'imgs/lessons/DSC04834.JPG',
'imgs/lessons/DSC05060.JPG',
'imgs/lessons/DSC06477.JPG',
'imgs/lessons/DSC06570.jpg',
'imgs/lessons/DSC06575.JPG',
'imgs/lessons/DSC06584.JPG',
'imgs/lessons/DSC06659.jpg',
'imgs/lessons/DSC06662.jpg',
'imgs/lessons/DSC06671.JPG',
'imgs/lessons/DSC06673.JPG',
'imgs/lessons/DSC06684.JPG',
'imgs/lessons/DSC06688.JPG',
'imgs/lessons/DSC06697.JPG',
'imgs/lessons/DSC06699.JPG',
'imgs/lessons/DSC06704.JPG',
'imgs/lessons/DSC06709.JPG',
'imgs/lessons/DSC06713.JPG',
'imgs/lessons/DSC06714.JPG',
'imgs/lessons/DSC06722.JPG',
'imgs/lessons/DSC06727.JPG',
'imgs/lessons/DSC06900.JPG',
'imgs/lessons/DSC07076.JPG',
'imgs/lessons/DSC07118.JPG',
'imgs/lessons/DSC07196.JPG',
'imgs/lessons/DSC07692small.jpg',
'imgs/lessons/DSC07693.JPG',
'imgs/lessons/DSC07698small.JPG',
'imgs/lessons/DSC0770small.JPG',
'imgs/lessons/DSC07718.JPG',
'imgs/lessons/DSC07722.JPG',
'imgs/lessons/DSC07766.JPG',
'imgs/lessons/DSC07798.JPG',
'imgs/lessons/DSC07801.JPG',
'imgs/lessons/DSC07806.JPG',
'imgs/lessons/DSCF7931_DxO.jpg',
'imgs/lessons/frogs1.jpg',
'imgs/lessons/frogs2.JPG',
'imgs/lessons/mmexport1612365838630.jpg',
'imgs/lessons/mmexport1612366131745.jpg',
'imgs/lessons/redfish.JPG',
'imgs/lessons/redpanda.JPG',
'imgs/lessons/scratchboard.jpg',
'imgs/lessons/Sophia.jpg',
'imgs/lessons/Sophia3.jpg',
'imgs/lessons/Sophia4.jpg',
'imgs/lessons/Sophia6.jpg',
'imgs/lessons/Sophia7.jpg',
'imgs/lessons/Teacher.jpg',
'imgs/lessons/toto.jpg',
'imgs/lessons/ukrainegirl.jpg',
'imgs/lessons/unnamed-1.jpg',
'imgs/lessons/WechatIMG355.jpeg',
'imgs/lessons/WechatIMG41.jpeg',
'imgs/lessons/YiGe Mei.JPG',
'imgs/lessons/Yige Mei_s painting.JPG',
'imgs/lessons/YiGe.Mei.jpg',
'imgs/lessons/DSC4412.JPG',
];

for (var i = 0; i < imglist.length; ++i) {

    this["thumbdiv" + i] = document.createElement("div");
    this["thumbdiv" + i].setAttribute("class", "imgbox");
    maindiv.appendChild(this["thumbdiv" + i]);

    this["thumbimg" + i] = document.createElement("img");
    this["thumbimg" + i].setAttribute("class", "modaltrigger")
    this["thumbimg" + i].setAttribute("src", imglist[i]);
    this["thumbdiv" + i].appendChild(this["thumbimg" + i]);

    this["modaldiv" + i] = document.createElement("div");
    this["modaldiv" + i].setAttribute("class", "modal");
    maindiv1.appendChild(this["modaldiv" + i]);

    this["modal2" + i] = document.createElement("div");
    this["modal2" + i].setAttribute("class", "modal-content");
    this["modaldiv" + i].appendChild(this["modal2" + i]);

    this["closebutton" + i] = document.createElement("span");
    this["closebutton" + i].setAttribute("class", "btn-close");
    this["closebutton" + i].innerHTML = "&times;";
    this["modal2" + i].appendChild(this["closebutton" + i]);

    this["modalimg" + i] = document.createElement("img");
    this["modalimg" + i].setAttribute("src", imglist[i]);
    this["modal2" + i].appendChild(this["modalimg" + i]);

}

const triggers = document.getElementsByClassName('modaltrigger');
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName('modal');
const closeButtons = document.getElementsByClassName('btn-close');

for (let [index, trigger] of triggerArray) {
  const toggleModal = () => {
    modals[index].classList.toggle('show-modal');
  }
  trigger.addEventListener("click", toggleModal);
  closeButtons[index].addEventListener("click", toggleModal);
}

