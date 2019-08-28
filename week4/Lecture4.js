let str, st, numberArray, ss, pal, ch, ch1, result, i, vcount, acount, scount, dcount, n, x;

// HW: print the total count of the alphabetic letters of ss
ss = "2 stringifies!!";

n = ss.length;
acount = 0, dcount = 0, scount = 0, vcount = 0;
for (i = 0; i <= n - 1; i++) {
  ch = ss[i];
  if (ch >= "A" && ch <= "Z") {
    acount++;
    if ((ch == "A") || (ch == "E") || (ch == "I") || (ch == "O") || (ch == "U")) {
      vcount++;
    }

  } else if (ch >= "a" && ch <= "z") {
    acount++;
    if ((ch == "a") || (ch == "e") || (ch == "i") || (ch == "o") || (ch == "u")) {
      vcount++;
    }

  } else if (ch >= "0" && ch <= "9") {
    dcount++; // do nothing
  } else {
    scount++;
  }

}
console.log(acount + " alpha letters, " + vcount + " vowels, " + dcount + " digits and " + scount + "special characters");

// HW: print the total count of the nonalphabetic & nondigit letters of ss
n = ss.length;
count = 0;
for (i = 0; i <= n - 1; i++) {
  ch = ss[i];
  if (ch >= "A" && ch <= "Z") {
    x = 0; // do nothing
  } else if (ch >= "a" && ch <= "z") {
    x = 0; // do nothing
  } else if (ch >= "0" && ch <= "9") {
    x = 0; // do nothing
  } else {
    count++;
  }
  // if (!((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z") ||(ch >= "0" && ch <= "9")))
  //    count++;

}
console.log(count);

ch1 = prompt("Enter a character");
st = prompt("Enter a string");
n = st.length;
count = 0;
for (i = 0; i <= n - 1; i++) {
  ch = st[i];
  if (ch == ch1)
    count++;

}
console.log(count);


st = prompt("Enter a string");
n = st.length;
count = 0;
for (i = 0; i <= n - 1; i++) {
  ch = st[i];
  ch = ch.toUpperCase();
  if ((ch == "A") || (ch == "E") || (ch == "I") || (ch == "O") || (ch == "U"))
    count++;
}
console.log(count);


st = prompt("Enter a string");
n = st.length;
count = 0;
for (i = 0; i <= n - 1; i++) {
  ch = st[i];
  if (ch >= "0" && ch <= "9")
    count++;
}
console.log(count);
