#include "colors.inc"
#include "stones.inc"

light_source { <-50, 100, -100> color White}
light_source { <-50, 50, 200> color White}

camera {
    location <0, 5.5, -50>
    look_at  <30, 15, 0>
}
union {
    box {
        <0,0,0 >
        <60,36,20>
    }

    // first floor, porch
    difference {
        box {
            <20,0,-8>
            <40,12,0>
        }
        box {
            <22,2,-9>
            <38,11,0>
        }
    }

    // second floor, bay window
    
    difference {
        box {
            <20,12,-4>
            <40,24,0>
        } 
        union {
            box {
                <0,0,0>
                <6,13,6>
                translate <-3,0,-3>
                rotate y*45
                translate <20,12,-4>
            }

            box {
                <0,0,0>
                <6,13,6>
                translate <-3,0,-3>
                rotate y*45
                translate <40,12,-4>
            }
        }
    }

    texture {
        T_Stone25     // Pre-defined from stones.inc
        scale 4       // Scale by the same amount in all
                        // directions
    }
}