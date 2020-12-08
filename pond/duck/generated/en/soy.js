// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.Duck.soy.
 */

goog.provide('Pond.Duck.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');
goog.require('Pond.soy');


Pond.Duck.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_rabbitName">Rabbit</span><span id="Pond_counterName">Counter</span><span id="Pond_rookName">Rook</span><span id="Pond_sniperName">Sniper</span><span id="Pond_myName">Player</span></div>';
};
if (goog.DEBUG) {
  Pond.Duck.soy.messages.soyTemplateName = 'Pond.Duck.soy.messages';
}


Pond.Duck.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.Duck.soy.messages(null, null, opt_ijData) + '<h1>' + BlocklyGames.soy.titleSpan({appName: 'Pond'}, null, opt_ijData) + '</h1>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="tabarea"><div id="editorBar" class="tab-bar"><div class="tab tab-selected">Blocks</div><div class="tab">JavaScript</div></div><div class="tab-bar-clear"></div><div id="blockly"></div><div id="editor"></div></div>' + Pond.Duck.soy.toolbox(null, null, opt_ijData) + Pond.Duck.soy.playerRabbit(null, null, opt_ijData) + Pond.Duck.soy.playerCounter(null, null, opt_ijData) + Pond.Duck.soy.playerRook(null, null, opt_ijData) + Pond.Duck.soy.playerSniper(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData);
};
if (goog.DEBUG) {
  Pond.Duck.soy.start.soyTemplateName = 'Pond.Duck.soy.start';
}


Pond.Duck.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Pond"><block type="pond_cannon"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><mutation angle_field="false"></mutation><field name="NUM">70</field></shadow></value></block><block type="pond_scan"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block><block type="pond_swim"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block><block type="pond_stop"></block><block type="pond_getX"></block><block type="pond_getY"></block><block type="pond_speed"></block><block type="pond_health"></block></category><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_boolean"></block></category><category name="Loops"><block type="controls_whileUntil"></block></category><category name="Math"><block type="pond_math_number"><mutation angle_field="false"></mutation></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="pond_math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_random_float"></block></category><sep></sep><category name="Variables" custom="VARIABLE"></category><category name="Functions" custom="PROCEDURE"></category></xml>';
};
if (goog.DEBUG) {
  Pond.Duck.soy.toolbox.soyTemplateName = 'Pond.Duck.soy.toolbox';
}


Pond.Duck.soy.playerRabbit = function(opt_data, opt_ignored, opt_ijData) {
  return '\r\n<div id="playerRabbit" style="display: none">\r\n/* rabbit */\r\n// rabbit runs around the field, randomly and never fires; use as a target.\r\n\r\n/* go - go to the point specified */\r\nfunction go (dest_x, dest_y) {\r\n  var course = plot_course(dest_x, dest_y);\r\n  while (distance(getX(), getY(), dest_x, dest_y) > 5) {\r\n    drive(course, 25);\r\n  }\r\n  while (speed() > 0) {\r\n    drive(course, 0);\r\n  }\r\n}\r\n\r\n/* distance forumula. */\r\nfunction distance(x1, y1, x2, y2) {\r\n  var x = x1 - x2;\r\n  var y = y1 - y2;\r\n  return Math.sqrt((x * x) + (y * y));\r\n}\r\n\r\n/* plot_course - figure out which heading to go. */\r\nfunction plot_course(xx, yy) {\r\n  var d;\r\n  var curx = getX();\r\n  var cury = getY();\r\n  var x = curx - xx;\r\n  var y = cury - yy;\r\n\r\n  if (x == 0) {\r\n    if (yy > cury) {\r\n      d = 90;\r\n    } else {\r\n      d = 270;\r\n    }\r\n  } else {\r\n    if (yy < cury) {\r\n      if (xx > curx) {\r\n        d = 360 + Math.atan_deg(y / x);\r\n      } else {\r\n        d = 180 + Math.atan_deg(y / x);\r\n      }\r\n    } else {\r\n      if (xx > curx) {\r\n        d = Math.atan_deg(y / x);\r\n      } else {\r\n        d = 180 + Math.atan_deg(y / x);\r\n      }\r\n    }\r\n  }\r\n  return d;\r\n}\r\n\r\nwhile (true) {\r\n  // Go somewhere in the field.\r\n  var x = Math.random() * 100;\r\n  var y = Math.random() * 100;\r\n  go(x, y);\r\n}\r\n</div>\r\n';
};
if (goog.DEBUG) {
  Pond.Duck.soy.playerRabbit.soyTemplateName = 'Pond.Duck.soy.playerRabbit';
}


Pond.Duck.soy.playerCounter = function(opt_data, opt_ignored, opt_ijData) {
  return '\r\n<div id="playerCounter" style="display: none">\r\n/* counter */\r\n/* scan in a counter-clockwise direction (increasing degrees) */\r\n/* moves when hit */\r\n\r\nvar range;\r\nvar last_dir = 0;\r\n\r\nvar res = 2;\r\nvar d = damage();\r\nvar angle = Math.random() * 360;\r\nwhile (true) {\r\n  while ((range = scan(angle, res)) != Infinity) {\r\n    if (range > 70) { /* out of range, head toward it */\r\n      drive(angle, 50);\r\n      var i = 1;\r\n      while (i++ < 50) /* use a counter to limit move time */\r\n        ;\r\n      drive (angle, 0);\r\n      if (d != damage()) {\r\n        d = damage();\r\n        run();\r\n      }\r\n      angle -= 3;\r\n    } else {\r\n      while (!cannon(angle, range))\r\n        ;\r\n      if (d != damage()) {\r\n        d = damage();\r\n        run();\r\n      }\r\n      angle -= 15;\r\n    }\r\n  }\r\n  if (d != damage()) {\r\n    d = damage();\r\n    run();\r\n  }\r\n  angle += res;\r\n  angle %= 360;\r\n}\r\n\r\n/* run moves around the center of the field */\r\nfunction run() {\r\n  var i = 0;\r\n  var x = getX();\r\n  var y = getY();\r\n\r\n  if (last_dir == 0) {\r\n    last_dir = 1;\r\n    if (y > 51) {\r\n      drive(270, 100);\r\n      while (y - 10 < getY() && i++ < 50)\r\n        ;\r\n      drive(270, 0);\r\n    } else {\r\n      drive(90, 100);\r\n      while (y + 10 > getY() && i++ < 50)\r\n        ;\r\n      drive(90, 0);\r\n    }\r\n  } else {\r\n    last_dir = 0;\r\n    if (x > 51) {\r\n      drive(180, 100);\r\n      while (x - 10 < getX() && i++ < 50)\r\n        ;\r\n      drive(180, 0);\r\n    } else {\r\n      drive(0, 100);\r\n      while (x + 10 > getX() && i++ < 50)\r\n        ;\r\n      drive(0, 0);\r\n    }\r\n  }\r\n}\r\n</div>\r\n';
};
if (goog.DEBUG) {
  Pond.Duck.soy.playerCounter.soyTemplateName = 'Pond.Duck.soy.playerCounter';
}


Pond.Duck.soy.playerRook = function(opt_data, opt_ignored, opt_ijData) {
  return '\r\n<div id="playerRook" style="display: none">\r\n/* rook.r  -  scans the battlefield like a rook, i.e., only 0,90,180,270 */\r\n/* move horizontally only, but looks horz and vertically */\r\n\r\n/* move to center of board */\r\nif (getY() < 50) {\r\n  while (getY() < 40)        /* stop near center */\r\n    drive(90, 100);           /* start moving */\r\n} else {\r\n  while (getY() > 60)        /* stop near center */\r\n    drive(270, 100);          /* start moving */\r\n}\r\ndrive(0, 0);\r\nwhile (speed() > 0)\r\n  ;\r\n\r\n/* initialize starting parameters */\r\nvar d = damage();\r\nvar course = 0;\r\nvar boundary = 99;\r\ndrive(course, 30);\r\n\r\n/* main loop */\r\nwhile(true) {\r\n  /* look all directions */\r\n  look(0);\r\n  look(90);\r\n  look(180);\r\n  look(270);\r\n\r\n  /* if near end of battlefield, change directions */\r\n  if (course == 0) {\r\n    if (getX() > boundary || speed() == 0)\r\n      change();\r\n  }\r\n  else {\r\n    if (getX() < boundary || speed() == 0)\r\n      change();\r\n  }\r\n}\r\n\r\n/* look somewhere, and fire cannon repeatedly at in-range target */\r\nfunction look(deg) {\r\n  var range;\r\n  while ((range = scan(deg, 4)) <= 70)  {\r\n    drive(course, 0);\r\n    cannon(deg, range);\r\n    if (d + 20 != damage()) {\r\n      d = damage();\r\n      change();\r\n    }\r\n  }\r\n}\r\n\r\nfunction change() {\r\n  if (course == 0) {\r\n    boundary = 1;\r\n    course = 180;\r\n  } else {\r\n    boundary = 99;\r\n    course = 0;\r\n  }\r\n  drive(course, 30);\r\n}\r\n</div>\r\n';
};
if (goog.DEBUG) {
  Pond.Duck.soy.playerRook.soyTemplateName = 'Pond.Duck.soy.playerRook';
}


Pond.Duck.soy.playerSniper = function(opt_data, opt_ignored, opt_ijData) {
  return '\r\n<div id="playerSniper" style="display: none">\r\n/* sniper */\r\n/* strategy: since a scan of the entire battlefield can be done in 90 */\r\n/* degrees from a corner, sniper can scan the field quickly. */\r\n\r\n/* external variables, that can be used by any function */\r\nvar corner = 0;           /* current corner 0, 1, 2, or 2 */\r\nvar sc = 0;               /* current scan start */\r\n\r\nvar range;          /* range to target */\r\n\r\n/* initialize the corner info */\r\n/* x and y location of a corner, and starting scan degree */\r\nvar c1x = 2,  c1y = 2,  s1 = 0;\r\nvar c2x = 2,  c2y = 98, s2 = 270;\r\nvar c3x = 98, c3y = 98, s3 = 180;\r\nvar c4x = 98, c4y = 2,  s4 = 90;\r\nvar closest = Infinity;\r\nnew_corner();       /* start at a random corner */\r\nvar d = damage();       /* get current damage */\r\nvar dir = sc;           /* starting scan direction */\r\n\r\nwhile (true) {         /* loop is executed forever */\r\n  while (dir < sc + 90) {  /* scan through 90 degree range */\r\n    range = scan(dir, 2);   /* look at a direction */\r\n    if (range <= 70) {\r\n      while (range > 0) {    /* keep firing while in range */\r\n        closest = range;     /* set closest flag */\r\n        cannon(dir, range);   /* fire! */\r\n        range = scan(dir, 1); /* check target again */\r\n        if (d + 15 > damage())  /* sustained several hits, */\r\n          range = 0;            /* goto new corner */\r\n      }\r\n      dir -= 10;             /* back up scan, in case */\r\n    }\r\n\r\n    dir += 2;                /* increment scan */\r\n    if (d != damage()) {     /* check for damage incurred */\r\n      new_corner();          /* we\'re hit, move now */\r\n      d = damage();\r\n      dir = sc;\r\n    }\r\n  }\r\n\r\n  if (closest == Infinity) {       /* check for any targets in range */\r\n    new_corner();             /* nothing, move to new corner */\r\n    d = damage();\r\n    dir = sc;\r\n  } else {                     /* targets in range, resume */\r\n    dir = sc;\r\n  }\r\n  closest = Infinity;\r\n}\r\n\r\n/* new corner function to move to a different corner */\r\nfunction new_corner() {\r\n  var x, y;\r\n\r\n  var rand = Math.floor(Math.random() * 4);           /* pick a random corner */\r\n  if (rand == corner)       /* but make it different than the */\r\n    corner = (rand + 1) % 4;/* current corner */\r\n  else\r\n    corner = rand;\r\n  if (corner == 0) {       /* set new x,y and scan start */\r\n    x = c1x;\r\n    y = c1y;\r\n    sc = s1;\r\n  }\r\n  if (corner == 1) {\r\n    x = c2x;\r\n    y = c2y;\r\n    sc = s2;\r\n  }\r\n  if (corner == 2) {\r\n    x = c3x;\r\n    y = c3y;\r\n    sc = s3;\r\n  }\r\n  if (corner == 3) {\r\n    x = c4x;\r\n    y = c4y;\r\n    sc = s4;\r\n  }\r\n\r\n  /* find the heading we need to get to the desired corner */\r\n  var angle = plot_course(x,y);\r\n\r\n  /* start drive train, full speed */\r\n\r\n  /* keep traveling until we are within 15 meters */\r\n  /* speed is checked in case we run into wall, other robot */\r\n  /* not terribly great, since were are doing nothing while moving */\r\n\r\n  while (distance(getX(), getY(), x, y) > 15)\r\n    drive(angle, 100);\r\n\r\n  /* cut speed, and creep the rest of the way */\r\n\r\n  while (distance(getX(), getY(), x, y) > 1)\r\n    drive(angle, 20);\r\n\r\n  /* stop drive, should coast in the rest of the way */\r\n  drive(angle, 0);\r\n}  /* end of new_corner */\r\n\r\n/* classical pythagorean distance formula */\r\nfunction distance(x1, y1, x2, y2) {\r\n  var x = x1 - x2;\r\n  var y = y1 - y2;\r\n  return Math.sqrt((x * x) + (y * y));\r\n}\r\n\r\n/* plot course function, return degree heading to */\r\n/* reach destination x, y; uses atan() trig function */\r\nfunction plot_course(xx, yy) {\r\n  var d;\r\n  var x,y;\r\n  var curx, cury;\r\n\r\n  curx = getX();  /* get current location */\r\n  cury = getY();\r\n  x = curx - xx;\r\n  y = cury - yy;\r\n\r\n  /* atan only returns -90 to +90, so figure out how to use */\r\n  /* the atan() value */\r\n\r\n  if (x == 0) {      /* x is zero, we either move due north or south */\r\n    if (yy > cury)\r\n      d = 90;        /* north */\r\n    else\r\n      d = 270;       /* south */\r\n  } else {\r\n    if (yy < cury) {\r\n      if (xx > curx)\r\n        d = 360 + Math.atan_deg(y / x);  /* south-east, quadrant 4 */\r\n      else\r\n        d = 180 + Math.atan_deg(y / x);  /* south-west, quadrant 3 */\r\n    } else {\r\n      if (xx > curx)\r\n        d = Math.atan_deg(y / x);        /* north-east, quadrant 1 */\r\n      else\r\n        d = 180 + Math.atan_deg(y / x);  /* north-west, quadrant 2 */\r\n    }\r\n  }\r\n  return d;\r\n}\r\n</div>\r\n';
};
if (goog.DEBUG) {
  Pond.Duck.soy.playerSniper.soyTemplateName = 'Pond.Duck.soy.playerSniper';
}
