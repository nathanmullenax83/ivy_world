#include "colors.inc"
#include "stones.inc"

light_source { <-50, 100, -100> color White}


camera {
    orthographic 
    location <30, 40, -50>
    look_at  <30, 5, 0>
}

//skybox
box {
    <-300,-300,-300>
    <300,300,300>
    texture {
        pigment { Blue }
    }
}

// grass 
box {
    <-300,-1,-300>
    <300,0,300>
    texture {
        pigment { Green }
    }
}

// font sidewalk
box {
    <28,0.01,-25>
    <32,0,0>
    texture {
        pigment { White }
    }
}

// left sidewalk
box {
    <-4,0.01,-25>
    <0,0,25>
    texture {
        pigment { White }
    }
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
        pigment { 
            White
        }     // Pre-defined from stones.inc
        scale 40       // Scale by the same amount in all
                        // directions
    }
}