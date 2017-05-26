
  $(".dragable").draggable({
      appendTo: "body",
      cursor: "move",
      helper: 'clone',
      revert: "invalid"
  });

  $("#dragable").droppable({
      tolerance: "intersect",
      accept: ".card",
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      drop: function(event, ui) {
          $("#launchPad").append($(ui.draggable));
      }
  });

  $(".stackDrop1").droppable({
      tolerance: "intersect",
      accept: ".card",
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      drop: function(event, ui) {
          $(this).append($(ui.draggable));
      }
  });

  $(".stackDrop2").droppable({
      tolerance: "intersect",
      accept: ".card",
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      drop: function(event, ui) {
          $(this).append($(ui.draggable));
      }
  });
