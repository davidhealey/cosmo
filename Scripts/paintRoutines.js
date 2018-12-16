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

/** External Script File paintRoutines */
/** Author: David Healey **/

namespace paintRoutines 
{
    const var buttonMatrix = function(g)
    {
        var w = this.getWidth() / this.data.numColumns;
        var h = this.getHeight() / this.data.numRows;

        i = 1;

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
    };
}