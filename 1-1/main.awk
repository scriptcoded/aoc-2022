#! /bin/awk -f

# Instructions:
# awk -f main.awk input.txt

BEGIN {
  RS="\n\n"
  FS="\n"
  max=0
}

{
  calories=0
  for (i=1; i<=NF; i++) {
    calories+=$i;
  }
  if (calories > max) {
    max = calories
  }
}

END {
  print max
}
