const functions = require('firebase-functions');
const admin = require("firebase-admin")
var serviceAccount = require("./key.json");
var cors = require('cors');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pwa-profile.firebaseio.com"
});
exports.skills = functions.https.onRequest((request, response) => {
    cors(request, response, () => {});
    admin.database().ref("/skills").once("value")
    .then((snapshot) => {
        var skillList = []
        snapshot.forEach(skills => {
            skillList.push({
                name:skills.val()
            })
        })
        response.send(skillList);
    })
});