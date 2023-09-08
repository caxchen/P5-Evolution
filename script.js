/* exported p4_inspirations, p4_initialize, p4_render, p4_mutate */

function p4_inspirations() {  
  return [
    {name: "Lake", assetUrl: "./lake.jpg"},
    {name: "Gazelle Herder", assetUrl: "./herder.jpg"},
    {name: "Lucille Ball as Charlie Chaplin", assetUrl: "./chaplin.jpg"}];
    //https://media.istockphoto.com/photos/black-and-white-photo-of-bowman-lake-picture-id155170343?k=20&m=155170343&s=612x612&w=0&h=oo-9hveuRqsURrD3nREONU3I4B1hFMvJ4nuZ3qauifE=
    //https://www.thisiscolossal.com/wp-content/uploads/2017/03/anim-2.jpg
    //https://i.redd.it/g187u4m3bs661.jpg
}

function p4_initialize(inspiration) {
  let color = [];
  let ellipseDim = [];
  let smallDotColors = [];
  let smallDotPos = [];
  return {color, ellipseDim, smallDotColors, smallDotPos};
}

function p4_render(design, inspiration) {
  background(0, 98, 255);
  noStroke();
  for (let i=0; i<design.color.length; i++) {
    fill(design.color[i]);
    circle(design.ellipseDim[i][0], design.ellipseDim[i][1], width/12);
  }
  /*for (let j=0; j<design.smallDotColors.length; j++) {
    fill(design.smallDotColors[j]);
    console.log(design.smallDotPos[j]);
    //circle(design.smallDotPos[j][0], design.smallDotPos[j][1], width/40);
  }*/
}


function p4_mutate(design, inspiration, rate) {
  let designCopy = design
  let gotRandom = Math.random();
  if (designCopy.color.length < 400 && gotRandom > 0.5) { //add
    designCopy.color.push(Math.random()*255);
    designCopy.ellipseDim.push([Math.random()*width, Math.random()*height, Math.random()*width, Math.random()*height]);
  } else if (designCopy.color.length >= 400 || gotRandom <= 0.5) { //edit existing dots
    let gotRandom2 = Math.random();
    designCopy.color[floor(gotRandom2*designCopy.color.length)] = Math.random()*255;
    designCopy.ellipseDim[floor(gotRandom2*designCopy.color.length)] = ([Math.random()*width, Math.random()*height]);
  }

  /*if (designCopy.color.length >= 100) {
    //console.log(designCopy.smallDotColors.length);
    let gotRandom3 = Math.random();
    if (designCopy.smallDotColors.length < 200  && gotRandom3 > 0.5) {
      designCopy.smallDotColors.push(Math.random()*255);
      designCopy.smallDotPos.push([Math.random()*width, Math.random*height]);
    } else if (designCopy.smallDotColors.length == 200 || gotRandom3 <= 0.5) {
      let gotRandom4 = Math.random();
      designCopy.smallDotColors[floor(gotRandom4*designCopy.smallDotColors.length)] = Math.random()*255;
      designCopy.smallDotPos[floor(gotRandom4*designCopy.smallDotColors.length)] = [Math.random()* width, Math.random()*height];\
    }
  }*/

  return designCopy;
}


