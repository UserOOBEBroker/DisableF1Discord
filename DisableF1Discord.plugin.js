/**
 * @name Disable F1 Discord Help
 * @description disables help in discord
 * @version 1.0.0
 * @author YourName
 * @source https://github.com/UserOOBEBroker/DisableF1Discord
 */

module.exports = class DisableF1Discord {
    start() { 
        window.addEventListener('keydown', this.handleKeydown);
    }

    stop() { 
        window.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown(event) {
        if (event.key === 'F1') {
            event.preventDefault(); 
            console.log("help in discord is disabled");
        }
    }
};
