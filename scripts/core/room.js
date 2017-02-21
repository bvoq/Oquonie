function Room(id)
{
  this.element = document.createElement("room");

  this.id = id;

  this.floors = [];
  this.walls = [];
  this.steps = [];
  this.audio = null;
  this.theme = null;
  this.events = [];

  this.add_event = function(event,is_mirrored = false)
  {
    if(is_mirrored == true){ event.mirror(); }
    event.location = this.id;
    
    this.events.push(event);
  }

  this.show = function()
  {
    // Floor
    for (var i = 0; i < this.floors.length; i++){
      var tile = new Floor(i,this.floors[i],"floor");
      this.element.appendChild(tile.element);
    }

    // Wall
    for (var i = 0; i < this.walls.length; i++){
      var tile = new Wall(i,this.walls[i],"wall");
      tile.element.setAttribute("id","wall_"+i);
      this.element.appendChild(tile.element);
    }

    // Steps
    for (var i = 0; i < this.steps.length; i++){
      var tile = new Step(i,this.steps[i],"step");
      this.element.appendChild(tile.element);
    }

    // Events
    for (var i = 0; i < this.events.length; i++){
      var event = this.events[i];
      event.animator.animate();
      this.element.appendChild(event.element);
    }

    this.element.appendChild(oquonie.player.element);
  }
}