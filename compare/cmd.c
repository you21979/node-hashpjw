#include <stdio.h>
#include <stdlib.h>
unsigned int hashpjw(const void *key, unsigned int size) {
  const char *ptr = key;
  unsigned int val = 0;
  while (*ptr != '\0') {
    unsigned int tmp = 0;
    val = (val << 4) + (*ptr);
    tmp = (val & 0xf0000000);
    if (tmp) {
      val = val ^ (tmp >> 24);
      val = val ^ tmp;
    }
    ptr++;
  }
  return val % size;
}

int main( int argc, char *argv[] ) {
  if(argc != 3){
    return -1;
  }
  printf( "%d\n", hashpjw(argv[2], atoi(argv[1])) );
  return 0;
}

