const var octave = Content.addKnob("octave", 0, 0);
octave.setRange(-5, 5, 1);
octave.set("middlePosition", 0);function onNoteOn()
{
	Message.setTransposeAmount(12*octave.getValue());
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
