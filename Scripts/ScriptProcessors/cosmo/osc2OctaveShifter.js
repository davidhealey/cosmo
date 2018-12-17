//License: Public Domain

const var buttons = [];
buttons[0] = Content.addButton("btnDn", 0, 0);
buttons[1] = Content.addButton("btn0", 150, 0);
buttons[2] = Content.addButton("btnUp", 300, 0);
function onNoteOn()
{
    if (buttons[0].getValue())
    {
        Message.setTransposeAmount(-12);    
    }
    else if (buttons[2].getValue())
    {
        Message.setTransposeAmount(12);
    }	
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
