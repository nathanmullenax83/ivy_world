#include <iostream>
#include <cctype>
#include "include/ivyvine.h"

using std::getline, std::string, std::cout, std::cin, std::endl, std::isspace;

int main(int argc, char **argv) {
    string fn;
    char start;
    char end;
    bool started(false); 
    while( isspace(cin.peek()) ) { cin.get(); }
    start = cin.get();
    while( isspace(cin.peek()) ) { cin.get(); }
    end = cin.get();
    cin >> fn;
    for(int i=0; i<fn.length(); ++i) {
        started = started xor (fn[i]==end);
        if( started ) cout << fn[i];
        started = started xor (fn[i]==start) ;
    }
    cout << endl;
}