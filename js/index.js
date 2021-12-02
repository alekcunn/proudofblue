/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
// document.addEventListener('deviceready', onDeviceReady, false);



if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  


// function onDeviceReady() {
//     // Cordova is now initialized. Have fun!

//     console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
//     document.getElementById('deviceready').classList.add('ready');
//     buttLol();

// }

let rsns = [
    "Both: Because you are pup",
    "Hooman: You're caring, even though you've been hurt",
    "Hooman: You're the best pup ever",
    "Hooman: You eyes tell me the truth, even if you don't",
    "Hooman: You make me feel special, and make sure i'm taken care of.",
    "Hooman: You take time out of your day to check on us",
    "Both: You're real with us, and we love taking care of you.",
    "Cat: I'm proud of all you've acomplished, more than I have and maybe ever will",
    "Cat: I'm proud of you for owning who you are. You never deny anything about yourself.",
    "Cat: You are easy to get along with 😄",
    "Cat: Best fur brother ever",
    "you clicked too many times, nothing to see here"
    



]
// $(#btn).click(function (){
//     change();
// })
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function change() {
    let rand = Math.floor(Math.random() * rsns.length);
    let rsn = rsns[rand]
    if (rand = 12) {
        delay(3).then(() =>
            document.getElementById("rsn").animate([
                { opacity: 1.0 },
                { opacity: 0.4 },
                { opacity: 1.0 }
            ])
        );
    }
    document.getElementById("rsn").innerHTML = rsn

}


let deferredPrompt;
let addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';
    
    addBtn.addEventListener('click', (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
            } else {
            console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
    });

