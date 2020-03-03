// replace these values with those generated in your TokBox Account
var apiKey = "46527272";
var sessionId = "1_MX40NjUyNzI3Mn5-MTU4MzI1NTk2MDc0Nn5Wd0svMVFuVFdRZ2dML09nRkhnQnZ5QmN-fg";
var token = "T1==cGFydG5lcl9pZD00NjUyNzI3MiZzaWc9NGM5OTU3YjI2MzJmZTFhZDk3M2RmNzZkMDU5MmE0M2ZhZThjNTgwNzpzZXNzaW9uX2lkPTFfTVg0ME5qVXlOekkzTW41LU1UVTRNekkxTlRrMk1EYzBObjVXZDBzdk1WRnVWRmRSWjJkTUwwOW5Sa2huUW5aNVFtTi1mZyZjcmVhdGVfdGltZT0xNTgzMjU2MDM1Jm5vbmNlPTAuMjUyODYyMTc0NDIyOTUyNDUmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU4MzI1OTYzNCZjb25uZWN0aW9uX2RhdGE9YWFhJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
//secret key: cfe8a6e4a8e31c231a25d6ac167b0dbc5d465f1b
// (optional) add server code here

initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
        alert(error.message);
    }
}
  
function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);

    // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
            insertMode: 'append',
            width: '100%',
            height: '100%'
        }, handleError);
    });

    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
    }, handleError);

    // Connect to the session
    session.connect(token, function(error) {
        // If the connection is successful, publish to the session
        if (error) {
        handleError(error);
        } else {
        session.publish(publisher, handleError);
        }
    });
}

