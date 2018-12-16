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

/** External Script File filterHandler */
/** Author: David Healey **/

namespace filterHandler 
{
    const var hpf = []
    const var lpf = []
    const var lpEnv = [];
    const var sliFilter = []; //0 = hp, 1 = lp, 2 = lp q, 3 = attack, 4 = sustain
    const var btnFilter = [];

    inline function init()
    {
        for (i = 0; i < 5; i++)
        {
            //Filters and filer envelopes
            if (i < 3)
            {
                lpEnv[i] = Synth.getModulator("lp"+i+"AHDSR"); //Envelope
                hpf[i] = Synth.getEffect("hpf"+i); //HP Filter
                lpf[i] = Synth.getEffect("lpf"+i); //LP Filter
            }
    
            //Osc selection buttons
            if (i < 4)
            {
                btnFilter[i] = Content.getComponent("btnFilter"+i);
                btnFilter[i].setControlCallback(filterHandler.btnFilterCB);   
            }
    
            //Filter control sliders
            sliFilter[i] = Content.getComponent("sliFilter"+i);
            sliFilter[i].setControlCallback(filterHandler.sliFilterCB);
        }
    }

    inline function btnFilterCB(control, value)
    {
        local idx = btnFilter.indexOf(control);

        if (idx != 0 && value == 1) //Ignore 'all' button
        {
            sliFilter[0].setValue(hpf[idx-1].getAttribute(hpf[idx-1].Frequency));
            sliFilter[1].setValue(lpf[idx-1].getAttribute(lpf[idx-1].Frequency));
            sliFilter[2].setValue(lpf[idx-1].getAttribute(lpf[idx-1].Q));
            sliFilter[3].setValue(lpEnv[idx-1].getAttribute(lpEnv[idx-1].Attack));
            sliFilter[4].setValue(lpEnv[idx-1].getAttribute(lpEnv[idx-1].Sustain));  
        }
    }

    inline function sliFilterCB(control, value)
    {
        local idx = sliFilter.indexOf(control); //0 = hp, 1 = lp, 2 = lp q, 3 = attack, 4 = sustain
    
        for (i = 0; i < 3; i++)
        {
            if (btnFilter[i+1].getValue() == 1 || btnFilter[0].getValue())
            {
                switch(idx)
                {
                    case 0: //HP
                        hpf[i].setAttribute(hpf[i].Frequency, value);
                    break;
                
                    case 1: //LP
                        lpf[i].setAttribute(lpf[i].Frequency, value);
                    break;
                
                    case 2: //LP Q
                        lpf[i].setAttribute(lpf[i].Q, value);
                    break;
                
                    case 3: //LP Env Attack
                        lpEnv[i].setAttribute(lpEnv[i].Attack, value);
                    break;
                
                    case 4: //LP Env Sustain
                        lpEnv[i].setAttribute(lpEnv[i].Sustain, value);
                    break;
                }    
            }
        }
    }
}