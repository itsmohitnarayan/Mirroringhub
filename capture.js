const { exec } = require('child_process');

function captureAndroidScreen(ws) {
    exec('adb exec-out screencap -p', { encoding: 'binary' }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error capturing screen: ${stderr}`);
            return;
        }
        // Send the captured image to the WebSocket
        ws.send(stdout);
    });
}

module.exports = { captureAndroidScreen };
