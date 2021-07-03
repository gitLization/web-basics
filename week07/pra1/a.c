#include "stdio.h"

void p(int x, int y) {
    x = x + 1;
    y = y + 1;
}

void main() {
    int k;
    k = 1;
    p(k,k);
    printf("%d", k);
}