import {Meteor} from 'meteor/meteor';
var request = Npm.require('request');
Meteor.startup(() => {
    // code to run on server at startup
// or
//     request.post('http://uc.lecloud.com/login.do', {
//             'auth': {
//                 'user': 'linmukong@iCloud.com',
//                 'pass': 'rcL-LnK-4NQ-gpU',
//                 'sendImmediately': false
//             }
//         },
//         function (error, response, body) {
//             if (error) {
//                 return console.error('upload failed:', error);
//             }
//             console.log('Upload successful!  Server responded with:', body);
//         });
//
//
//     var username = 'linmukong@iCloud.com',
//         password = 'rcL-LnK-4NQ-gpU',
//         url = 'http://' + username + ':' + password + '@uc.lecloud.com/login.do';

    // request({url: url}, function (error, response, body) {
    //     // Do more stuff with 'body' here
    //     if (error) {
    //         return console.error('upload failed:', error);
    //     }
    //     console.log('Upload successful!  Server responded with:', body);
    // })
});
