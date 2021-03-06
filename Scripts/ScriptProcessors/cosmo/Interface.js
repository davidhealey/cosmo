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

include("bankMatrix.js");
include("filterHandler.js");
include("envelopeHandler.js");

reg i;

bankMatrix.init();
envelopeHandler.init();
filterHandler.init();

//Delay
const var Delay1 = Synth.getEffect("Delay1");
const var knbDelayTm = Content.getComponent("knbDelayTm");
knbDelayTm.setControlCallback(delayTimeCB);

inline function delayTimeCB(control, value)
{
    Delay1.setAttribute(Delay1.DelayTimeLeft, value);
    Delay1.setAttribute(Delay1.DelayTimeRight, value);
}

//EQ Tilt
const var ParametriqEQ1 = Synth.getEffect("Parametriq EQ1");
const var sliEQTilt = Content.getComponent("sliEQTilt");

sliEQTilt.setControlCallback(sliEQTiltCB);

inline function sliEQTiltCB(control, value)
{
    ParametriqEQ1.setAttribute(0*ParametriqEQ1.BandOffset+ParametriqEQ1.Gain, control.get("max")-value);
    ParametriqEQ1.setAttribute(1*ParametriqEQ1.BandOffset+ParametriqEQ1.Gain, value);
}

//Keyboard octave shift buttons
const var fltKeyboard = Content.getComponent("fltKeyboard");
const var keyboardData = {
  "Type": "Keyboard",
  "LowKey": 48,
  "KeyWidth": 30,
  "DisplayOctaveNumber": true,
  "DefaultAppearance": false,
  "UseVectorGraphics": true,
}

const var octButton = [];
octButton[0] = Content.getComponent("btnOctUp");
octButton[1] = Content.getComponent("btnOctDn");

octButton[0].setControlCallback(changeOctave);
octButton[1].setControlCallback(changeOctave);

inline function changeOctave(control, value)
{
    local idx = octButton.indexOf(control); //0 = up, 1 = down   

    if (idx == 0 && keyboardData.LowKey < 72)
    {
        keyboardData.LowKey = keyboardData.LowKey + 12;
    }
    else if (keyboardData.LowKey > 11)
    {
        keyboardData.LowKey = keyboardData.LowKey - 12;
    }
    
    fltKeyboard.setContentData(keyboardData);
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
