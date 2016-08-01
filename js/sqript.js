var arrNames = [];
var userName = '';
var flag = -1;

for (var i = 0; i < 5; i++) {
  arrNames[i] = prompt('Enter name: ', '');
}

do {
  userName = prompt('Enter your name: ', '');
}
while (userName === '' || userName === null);

for (i = 0; i < arrNames.length; i++) {
  if (userName === arrNames[i]) {
    flag = i;
  }
};

if (flag === -1) {
  alert ('Error! Username noexist!');
}
else {
  alert (arrNames[flag] + ', you enter succesfully');
};

  

