// задача 1

document.getElementById('task1').onclick = f1;

function f1() {
    var x = '';
    for (var i = 4; i <= 400; i++) {
        x = x + i + ";" + "<br>";
    }
    document.getElementById('des1').innerHTML = x;
}

document.getElementById('task1_1').onclick = function() {

    document.getElementById('des1').innerHTML = '';
}

// задача 2

document.getElementById('task2').onclick = f2;

function f2() {
    var x = '';
    var y = 4;
    for (var i = 0; i < 4; i++) {

        x = x + y + ";" + "<br>";
        y = y + 3
    }
    document.getElementById('des2').innerHTML = x;
}

document.getElementById('task2_1').onclick = function() {

    document.getElementById('des2').innerHTML = '';
}

// задача 3

document.getElementById('task3').onclick = f3;

function f3() {
    var x = '';
    var y = 654;
    for (var i = 0; i < 655; i++) {

        x = x + y + ";" + "<br>";
        y = y - 1;
    }
    document.getElementById('des3').innerHTML = x;
}

document.getElementById('task3_1').onclick = function() {

    document.getElementById('des3').innerHTML = '';
}

// задача 4

document.getElementById('task4').onclick = f4;

function f4() {
    var x = '';
    var y = 1983;
    for (var i = 0; i < 35; i++) {

        x = x + y + ";" + "<br>";
        y = y + 1;
    }
    document.getElementById('des4').innerHTML = x;
}

document.getElementById('task4_1').onclick = function() {

    document.getElementById('des4').innerHTML = '';
}

// задача 5

document.getElementById('task5').onclick = f5;

function f5() {
    var x = '';
    var y = -4;
    for (var i = 0; i < 53; i++) {

        x = x + y + ";" + "<br>";
        y = y + 2;
    }
    document.getElementById('des5').innerHTML = x;
}

document.getElementById('task5_1').onclick = function() {

    document.getElementById('des5').innerHTML = '';
}

// массивы 1

document.getElementById('m1').onclick = function() {
    var a = [3, 6, 1, 13, 88, 43];
    console.log(a[0], a[3]);

}

// массивы 2

document.getElementById('m2').onclick = function() {
    var a = ['Hi', "hello", 34, "prima"];
    console.log(a[0], a[a.length - 1]);

}

// массивы 3

document.getElementById('m3').onclick = function() {
    var a = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
    console.log(a.length);

}

// массивы 4

document.getElementById('m4').onclick = function() {
    var a = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
    a[3] = 'new element';
    console.log(a);

}

// массивы 5

document.getElementById('m5').onclick = function() {
    var a = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
    a[2] = 22;
    a[4] = 44;
    console.log(a);

}

// массивы 6

document.getElementById('m6').onclick = function() {
    var a = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
    a[10] = 100;
    console.log(a);

}

// массивы 7

document.getElementById('m7').onclick = function() {
    var a = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
    a[12] = 200;

    console.log(a[11]);
    console.log(a);

}

// массивы 8

document.getElementById('m8').onclick = function() {
    var arr = [31, 24, 35, 47, 12]

    console.log(arr[3]);
    console.log(arr[60]);

}
// массивы 9

document.getElementById('m9').onclick = function() {
    var arr = [31, 24, 35, 47, 12]
    var f = 1
    for (var i = 0; i < 3; i++) {
        console.log(arr[f]);
        f = f + 3
    }



}

// массивы 10

document.getElementById('m10').onclick = function() {
    var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]
    for (var i = 1; i < 6; i++) {
        console.log(arr[i]);

    }
}

// массивы 11

document.getElementById('m11').onclick = function() {
    var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]
    var i = document.getElementById('inp11').value;
    console.log(arr[i]);

}

// массивы 12

document.getElementById('m12').onclick = function() {
    var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]
    var b = '';
    for (var i = 0; i < arr.length; i++) {
        b = b + arr[i] + ' ';
    }
    document.getElementById('desm12').innerHTML = b;

}

// массивы 13

document.getElementById('m13').onclick = function() {
    var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]
    var b = '';
    for (var i = arr.length - 1; i > 0; i--) {
        b = b + arr[i] + ' ';
    }
    document.getElementById('desm13').innerHTML = b;

}

// массивы 14

document.getElementById('m14').onclick = function() {
    var arr = [2, 3, [4, 5]]

    console.log(arr);
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);

}

// массивы 15

document.getElementById('m15').onclick = function() {
    var arr = [2, 3, [4, 5]]

    console.log(arr[2][0]);
    console.log(arr[2][1]);


}

// массивы 16

document.getElementById('m16').onclick = function() {
    var arr = [2, 3, [4, 5]]

    console.log(arr[2]);
    console.log(arr[2].length);
}

// массивы 17

document.getElementById('m17').onclick = function() {
    var arr = [2, [3, 4, 5],
        [6, 7, 8]
    ];

    console.log(arr[1][1]);
    console.log(arr[2][2]);
}

// массивы 18

document.getElementById('m18').onclick = function() {
    var arr = [2, [3, 4, 5],
        [6, 7, 8]
    ];

    console.log(arr[2]);
    console.log(arr[2][0]);
}

// массивы 19

document.getElementById('m19').onclick = function() {
    var arr = [2, [3, 4, 5],
        [6, 7, 8, 9, 11, 12, 13, 14]
    ];
    var inner = arr[2];

    for (var i = 0; i < inner.length; i++) {
        console.log(inner[i]);
    }

}

// массивы 20

document.getElementById('m20').onclick = function() {
    var arr = [
        ['hi', 3, 'beta'],
        ['foo', 'jam', 'tritto']
    ];

    console.log(arr[1][0]);
    console.log(arr[0][2]);
}