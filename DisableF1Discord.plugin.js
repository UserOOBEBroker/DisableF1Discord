// ==UserScript==
// @name         Disable F1 Discord Help
// @description  disables help in discord
// @version      1.0.0
// @author       komaru.vshoke
// @license      MIT
// @updateURL    https://raw.githubusercontent.com/UserOOBEBroker/DisableF1Discord/main/DisableF1Discord.plugin.js
// @downloadURL  https://raw.githubusercontent.com/UserOOBEBroker/DisableF1Discord/main/DisableF1Discord.plugin.js
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('keydown', function(event) {
        if (event.key === 'F1') {
            event.preventDefault();  // Предотвращаем стандартное действие для F1
            console.log("Справка Discord (F1) отключена"); // Для отладки
        }
    });
})();
