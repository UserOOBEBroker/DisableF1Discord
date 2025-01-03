/**
 * @name Disable F1 Discord Help
 * @description disables help in discord
 * @version 1.0.0
 * @author Your Name
 */

module.exports = class DisableF1Discord {
    start() {
        window.addEventListener('keydown', function(event) {
            if (event.key === 'F1') {
                event.preventDefault();  
                console.log("help f1 for discord off); 
            }
        });
    }

    stop() {
        window.removeEventListener('keydown', this.keyListener);
    }
};
