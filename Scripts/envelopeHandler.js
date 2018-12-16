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

/** External Script File envelopeHandler */
/** Author: David Healey **/

namespace envelopeHandler
{
    //ADSR
    const var env = []; //ADSR Envelopes
    const var btnADSR = []; //Buttons to select OSC
    const var sliADSR = []; //Envelope controls
    
    inline function init() 
    {
        for (i = 0; i < 4; i++)
        {
            //1 Envelope for each of the three OSCs
            if (i < 3) env[i] = Synth.getModulator("AHDSR Envelope"+i);
    
            //ADSR buttons
            btnADSR[i] = Content.getComponent("btnADSR"+i);
            btnADSR[i].setControlCallback(envelopeHandler.btnADSRCB);
    
            //ADSR sliders
            sliADSR[i] = Content.getComponent("sliADSR"+i); //0=A, 1=D, 2=S, 3=R
            sliADSR[i].setControlCallback(envelopeHandler.sliADSRCB);
        }

        //Envelope parameter enums
        const var adsrParams = [env[0].Attack, env[0].Decay, env[0].Sustain, env[0].Release];
    }
    
    //Envelope selection button callback
    inline function btnADSRCB(control, value)
    {
        local idx = btnADSR.indexOf(control);
    
        for (i = 0; i < 4; i++)
        {
            if (idx != 0 && value == 1) sliADSR[i].setValue(env[idx-1].getAttribute(adsrParams[i]));
        }
    }

    //Envelope slider callback
    inline function sliADSRCB(control, value)
    {
        local idx = sliADSR.indexOf(control);
    
        for (i = 0; i < 3; i++)
        {
            if (btnADSR[i+1].getValue() == 1 || btnADSR[0].getValue())
            {
                env[i].setAttribute(adsrParams[idx], value);    
            }
        }
    }
}