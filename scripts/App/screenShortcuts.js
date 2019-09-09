//Right, next
shortcut.add("Right", function () {
    app.setUserAnswer(true);
});
//skip
shortcut.add("Down", function () {
    app.setUserAnswer(false);
});
//start/pause/restart
shortcut.add("Space", function () {
    if (app.currentMatch.state == 'off' || app.currentMatch.state == 'ended') {
        app.startMatch();
    }
    else if (app.currentMatch.state == 'on' && app.chrono.state == 'on') {
        app.chronoPause();
    }
    else if (app.currentMatch.state == 'on' && app.chrono.state == 'paused') {
        app.chronoResume();
    }
});
//restart
shortcut.add("ctrl+x", function () {
    app.resetMatch();
});