/*
    Copyright 2018 Caspar Bock

    This file is part of Cosmo.

    Cosmo is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Cosmo is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Cosmo. If not, see <http://www.gnu.org/licenses/>.
*/

/** Author: David Healey **/

Content.makeFrontInterface(768, 1024);

include("paintRoutines.js");
include("filterHandler.js");
include("envelopeHandler.js");

reg i;

envelopeHandler.init();
filterHandler.init();


const var osc1 = {};
const var osc2 = {};
osc1.buttonMatrix = Content.getComponent("pnlOsc1Matrix");

osc1.buttonMatrix.data.numRows = 4;
osc1.buttonMatrix.data.numColumns = 5;
osc1.buttonMatrix.setPaintRoutine(paintRoutines.buttonMatrix);
osc1.buttonMatrix.setMouseCallback(function(event)
{
    if(event.clicked)
    {
        var columnId = parseInt(event.x / this.getWidth() * this.data.numColumns);
        var rowId = parseInt(event.y / this.getHeight() * this.data.numRows);
        var value = 1 + rowId * this.data.numColumns + columnId;

        this.setValue(value-1);
        this.changed();
    }
});

//Keyboard octave shift buttons
const var fltKeyboard = Content.getComponent("fltKeyboard");

const var octButton = [];
octButton[0] = Content.getComponent("btnOctUp");
octButton[1] = Content.getComponent("btnOctDn");

octButton[0].setControlCallback(changeOctave);
octButton[1].setControlCallback(changeOctave);

inline function changeOctave(control, value)
{
    local idx = octButton.indexOf(control); //0 = up, 1 = down   
    Engine.setLowestKeyToDisplay(64);
}function onNoteOn()
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
