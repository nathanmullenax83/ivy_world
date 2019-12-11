#!/bin/bash
echo "ROOT=`pwd`" > ./.env
cd bin && make 
# Find screen dots per inch
SCALE=4
echo DPI=`xrdb -query | grep dpi | ./integer_extract` > ../.env



# Factor by which size of an object should be reduced (8 means 1/8th actual)
echo "SCALE=$SCALE" >> ../.env
cd ../gfx
touch ./sentinal.png
rm ./*.png
echo "[" > ./icons.json
for f in res/*.svg; do
    WIDTH=`inkscape --query-width $f | ../bin/floor`
    HEIGHT=`inkscape --query-height $f | ../bin/floor`
    SCALED_WIDTH=`echo 1 $SCALE $WIDTH | ../bin/divide_by_m_times_n`
    SCALED_HEIGHT=`echo 1 $SCALE $HEIGHT | ../bin/divide_by_m_times_n`
    OUT_FILE_NAME=`echo / . $f | ../bin/clean_svg_filename`
    echo "    {" >> ./icons.json
    echo "          \"width\":\"$WIDTH\"," >> ./icons.json
    echo "          \"height\": \"$HEIGHT\"," >> ./icons.json
    echo "          \"scaledWidth\": \"$SCALED_WIDTH\"," >> ./icons.json
    echo "          \"scaledHeight\": \"$SCALED_HEIGHT\"," >> ./icons.json
    echo "          \"pixel\": \"$OUT_FILE_NAME\"," >> ./icons.json
    echo "          \"svg\": \"$f\"" >> ./icons.json
    echo "    }," >> ./icons.json
    inkscape -z -e $OUT_FILE_NAME.png -w $SCALED_WIDTH -h $SCALED_HEIGHT $f >> /dev/null
done
echo "    {}" >> ./icons.json
echo "]" >> ./icons.json
