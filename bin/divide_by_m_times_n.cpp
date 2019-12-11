#include <iostream>
#include "include/ivyvine.h"

using std::cin, std::cout, std::endl;

int main(int argc, char **argv) {
    int m(1),n(1), X(0);
    cin >> m >> n >> X;
    cout << (X/(m*n)) << endl;
}