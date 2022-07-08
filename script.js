/* exported p4_inspirations, p4_initialize, p4_render, p4_mutate */

function p4_inspirations() {  
  return [
    {name: "Lake", assetUrl: "https://media.istockphoto.com/photos/black-and-white-photo-of-bowman-lake-picture-id155170343?k=20&m=155170343&s=612x612&w=0&h=oo-9hveuRqsURrD3nREONU3I4B1hFMvJ4nuZ3qauifE="},
    {name: "Gazelle Herder", assetUrl: "https://www.thisiscolossal.com/wp-content/uploads/2017/03/anim-2.jpg"},
    {name: "Lucille Ball as Charlie Chaplin", assetUrl: "https://i.redd.it/g187u4m3bs661.jpg"}];
}

function p4_initialize(inspiration) {
  let color = [];
  let ellipseDim = [];
  let commonColors = [];
  return {color, ellipseDim, commonColors};
}

function p4_render(design, inspiration) {
  background(0, 98, 255);
  noStroke();
  for (let i=0; i<design.color.length; i++) {
    fill(design.color[i]);
    circle(design.ellipseDim[i][0], design.ellipseDim[i][1], width/12);
  }
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

  return designCopy;
}


