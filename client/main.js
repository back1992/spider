import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import './main.html';
Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});
Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});
Template.hello.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
        if (Meteor.isCordova) {
            var getLocalPath = function (localPath) {
                return cordova.file.applicationDirectory.replace('file://', '') + 'www/application/' + localPath.substr(1);
            };
// in your app the path is public/assets/audio/theme.mp3
            var src = getLocalPath('/sound.mp3');
            console.log(src);
            var media = new Media(src, function () {
            });
// iOS will keep playing even when the screen is locked by default
            media.play({playAudioWhenScreenIsLocked: false});
        }
        // new Audio('https://s3.cn-north-1.amazonaws.com.cn/tup-docker/mp3/audio-file-AAVRM-1491220600.mp3').play()
        // if (Meteor.isCordova) {
        //     var player = new window.Audio();
        //     var xhr = new XMLHttpRequest();
        //     xhr.onreadystatechange = function () {
        //         if (this.readyState == 4 && this.status == 200) {
        //             player.src = window.URL.createObjectURL(this.response);
        //             player.play();
        //         }
        //     };
        //     xhr.open('GET', "/sound.mp3");
        //     xhr.responseType = 'blob';
        //     xhr.send();
        // }
        // if (Meteor.isCordova) {
        //     var my_media = new Media('/sound.mp3',
        //         // success callback
        //         function () {
        //             console.log("playAudio():Audio Success");
        //         },
        //         // error callback
        //         function (err) {
        //             console.log("playAudio():Audio Error: " + err);
        //         }
        //     );
        //     // Play audio
        //     my_media.play();
        //     // function getMediaUrl(sound) {
        //     //     var filePath = cordova.file.applicationDirectory.replace('file://', '') + 'www/application/' + sound.substr(1);
        //     //     console.log(filePath);
        //     //     return filePath;
        //     // }
        //     //
        //     // function playSound(sound) {
        //     //     return new Media(
        //     //         getMediaUrl(sound),
        //     //         function (success) {
        //     //             console.log('hahaha')
        //     //             // success
        //     //         },
        //     //         function (err) {
        //     //             console.log('oookkkk')
        //     //             // error
        //     //         }
        //     //     );
        //     // }
        //     //
        //     // var test = playSound('/sound.mp3');
        //     // test.play();
        // }
    },
});
