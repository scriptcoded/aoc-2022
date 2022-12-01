#! /bin/awk -f

# Instructions:
# awk -f main.awk input.txt

BEGIN {
  RS="\n\n"
  FS="\n"
  a=0
  b=0
  c=0
}

{
  calories=0
  for (i=1; i<=NF; i++) {
    calories+=$i;
  }
  if (calories > a) { c = b; b = a; a = calories } else
  if (calories > b) { c = b; b = calories } else
  if (calories > c) { c = calories }
}

END {
  print a + b + c
}
