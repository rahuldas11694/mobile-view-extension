document.addEventListener('DOMContentLoaded', function() {
    var one = document.getElementById('bw-320to480');
    // onClick's logic below:
    one.addEventListener('click', function() {
        change1();
    });

});

document.addEventListener('DOMContentLoaded', function() {
    var two = document.getElementById('bw-375to667');
    // onClick's logic below:

    two.addEventListener('click', function() {
        change2();
    })
});

document.addEventListener('DOMContentLoaded', function() {
    var three = document.getElementById('bw-414to736');
    // onClick's logic below:

    three.addEventListener('click', function() {
        change3();
    })
});

document.addEventListener('DOMContentLoaded', function() {
    var four = document.getElementById('bw-360to640');
    // onClick's logic below:

    four.addEventListener('click', function() {
        change4();
    })
});

document.addEventListener('DOMContentLoaded', function() {
    var five = document.getElementById('bw-414to736');
    // onClick's logic below:

    five.addEventListener('click', function() {
        change5();
    })
});

document.addEventListener('DOMContentLoaded', function() {
    var six = document.getElementById('bw-480to800');
    // onClick's logic below:

    six.addEventListener('click', function() {
        change6();
    })
});

function change1() {

    chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function(tabs) {


        var url = tabs[0].url;

        window.open(url, "smallwindowi4", "location=1,toolbar=1,menubar=1,resizable=no,width=320,height=480,scrollbars=1,left=350,top=200");
        return false;
    });
}


function change2() {

    chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function(tabs) {

        var url = tabs[0].url;

        window.open(url, "smallwindowi5", "location=1,toolbar=1,menubar=1,resizable=1,width=320,height=568,scrollbars=1");

        return false;

    });
}


function change3() {

    chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function(tabs) {

        var url = tabs[0].url;

        window.open(url, "smallwindowi6", "location=1,toolbar=1,menubar=1,resizable=1,width=375,height=667,scrollbars=1");

        return false;

    });
}

function change4() {

    chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function(tabs) {

		var url = tabs[0].url;

		window.open(url, "smallwindowi6", "location=1,toolbar=1,menubar=1,resizable=1,width=360,height=640,scrollbars=1");

        return false;

    });
}

function change5() {

    chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function(tabs) {

		var url = tabs[0].url;

		window.open(url, "smallwindowi6", "location=1,toolbar=1,menubar=1,resizable=1,width=414,height=736,scrollbars=1");

        return false;

    });
}

function change6() {

    chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function(tabs) {

        var url = tabs[0].url;

        window.open(url, "smallwindowi6", "location=1,toolbar=1,menubar=1,resizable=1,width=480,height=800,scrollbars=1");

        return false;

    });
}
