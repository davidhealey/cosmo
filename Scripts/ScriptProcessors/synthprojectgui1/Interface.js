Content.makeFrontInterface(768, 1024);


const var Panel1 = Content.getComponent("ScriptPanel1");

Panel1.data.numRows = 4;
Panel1.data.numColumns = 5;

Panel1.setPaintRoutine(function(g)
{
    var w = this.getWidth() / this.data.numColumns;
    var h = this.getHeight() / this.data.numRows;
    
    var i = 1;
    
	for(y = 0; y < this.data.numRows; y++)
    {
        for(x = 0; x < this.data.numColumns; x++)
        {
            var r = [x * w, y * h, w, h];
            
            if(i == this.getValue()+1)
            {
                g.setColour(0x22FFFFFF);
                g.fillRect(r);
            }
            
            g.setColour(Colours.white);
            g.drawText(i, r);
            
            i++;
        }
    }
});

Panel1.setMouseCallback(function(event)
{
    if(event.clicked)
    {
        var columnId = parseInt(event.x / this.getWidth() * this.data.numColumns);
        var rowId = parseInt(event.y / this.getHeight() * this.data.numRows);
        var value = 1 + rowId * this.data.numColumns + columnId;
	
        this.setValue(value-1);
        this.changed();
    }
	
});function onNoteOn()
{
	
}
function onNoteOff()
{
	
}
function onController()
{
	
}
function onTimer()
{
	
}
function onControl(number, value)
{
	
}
