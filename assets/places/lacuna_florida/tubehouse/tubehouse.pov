#include "colors.inc"
#include "stones.inc"

light_source { <-50, 100, -100> color White}

camera {
    orthographic
    location <10,65,-60>
    look_at <10,5,0>
}

box {
    <-14.142,-15,-15>
    <15,15,40>
    texture {
        pigment { White }
    }
}

cylinder {
    <0,0,-15>
    <0,0,40>
    20
    open
    texture {
        pigment { White transmit 0.8 }
    }
}