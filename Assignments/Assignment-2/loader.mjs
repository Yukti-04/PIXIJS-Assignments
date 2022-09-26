const game = new PIXI.Application({
  width: 1900,
  height: 1000,
  // backgroundColor: 0x4D9111,
  transparent: true,

});
document.getElementById("game").append(game.view);
loadAssets([
  { name: "back", url: "./Assets/coffeeback.jpeg" },
  { name: "front", url: "./Assets/coffee.png" },
], start);
//------------------------------
const pBar = document.getElementById("bar");
const pText = document.getElementById("progress");

function preload(e) {
  pBar.style.width = e.progress+ "%";
  pText.innerText = e.progress + "%";
  // pText.style.textAlign = "center";
  if (e.progress === 100) {
    console.log("hide loader");
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 2000);
  }
  console.log(e.progress);
}

function loadAssets(list, onLoadComplete) {
  game.loader.onProgress.add(preload);
  game.loader.add(list).load(onLoadComplete);
}
//----------------------------------
function start(loader, resources) {
    console.log('params ', arguments);
    const back = PIXI.Sprite.from(resources['back'].texture);
    back.scale.set(0.5);
    back.position.x=500;
    game.stage.addChild(back);
    const smily = new PIXI.Texture(resources['front'].texture,
    new PIXI.Rectangle(0,0,298,300));
    const front = PIXI.Sprite.from(smily);
    // front.scale.set(0.2);
    game.stage.addChild(front);
}