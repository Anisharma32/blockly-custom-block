Blockly.Blocks['blockly_trial'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Draw Rectangle");
      this.appendValueInput("Perimeter")
          .setCheck("Number")
          .appendField("Perimeter");
      this.appendValueInput("length")
          .setCheck("Number")
          .appendField("Length");
      this.appendValueInput("breadth")
          .setCheck("Number")
          .appendField("Breadth");
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['blockly_trial'] = function(block) {
    var value_perimeter = Blockly.JavaScript.valueToCode(block, 'Perimeter', Blockly.JavaScript.ORDER_ATOMIC);
    var value_length = Blockly.JavaScript.valueToCode(block, 'length', Blockly.JavaScript.ORDER_ATOMIC);
    var value_breadth = Blockly.JavaScript.valueToCode(block, 'breadth', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  
// TODO: Assemble JavaScript into code variable.
var code = ‘draw_Rectangle(‘+value_perimeter+’,’+value_l+’,’+value_b+’);\n’;
return code;
};

function draw_Rectangle(p, l , b){
var c = document.getElementById(“canvaspad”);
var ctx = c.getContext(“2d”);
ctx.beginPath();
ctx.arc(l, b, p, 0, 2*l*b);
ctx.stroke();
}