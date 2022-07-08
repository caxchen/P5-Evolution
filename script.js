/* exported p4_inspirations, p4_initialize, p4_render, p4_mutate */

function p4_inspirations() {  //https://www.wsws.org/asset/a2f61108-bdc7-428c-be17-317676afe7f4?rendition=image1280
  //https://i.redd.it/yd95llj6qq791.png
  return [{name: "unitinu", assetUrl: "https://i.redd.it/g187u4m3bs661.jpg"}];
}

function p4_initialize(inspiration) {
  let color = [];
  let ellipseDim = [];
  let commonColors = [];
  return {color, ellipseDim, commonColors};
}

function p4_render(design, inspiration) {
  background(255);
  noStroke();
  for (let i=0; i<design.color.length; i++) {
    fill(design.color[i]);
    circle(design.ellipseDim[i][0], design.ellipseDim[i][1], 2);
  }
}

function p4_mutate(design, inspiration, rate) {

  let designCopy = design
  let gotRandom = Math.random();
  //console.log(designCopy.color.length);
  if (designCopy.color.length < 2000 && gotRandom > 0.5) { //add
    if (designCopy.color.length < 500) {
      designCopy.color.push(Math.random()*255);
      designCopy.ellipseDim.push([Math.random()*width, Math.random()*height, Math.random()*width, Math.random()*height]);
    }
  } else if (designCopy.color.length < 2000 || (gotRandom <= 0.5 && designCopy.color.length > 1)) { //delete
    designCopy.color.pop();
    designCopy.ellipseDim.pop();
  }

  return designCopy;
}


