/* exported p4_inspirations, p4_initialize, p4_render, p4_mutate */


function p4_inspirations() {
  return [{name: "unitinu", assetUrl: "https://i.redd.it/yd95llj6qq791.png"}];
}

function p4_initialize(inspiration) {
  
  return {color: [51, 51, 51]};
}

function p4_render(design, inspiration) {
  fill(design.color[0], design.color[1], design.color[2]);
  circle(width/2, height/2, 40);
  //design.it;
}

function p4_mutate(design, inspiration, rate) {}
