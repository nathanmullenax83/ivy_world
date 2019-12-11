#include <iostream>
#include <string>
#include <cctype>

using std::string;
using std::cin;
using std::getline;
using std::cout;
using std::isdigit;

int main( int argc, char **argv ) {
    string buffer("");
    getline( cin, buffer);
    int n=0;
    for( char c: buffer ) {
        if( isdigit(c) ) 
            n += 9*n + (c-'0');
    }
    cout << n;
}