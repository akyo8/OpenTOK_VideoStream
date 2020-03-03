// replace these values with those generated in your TokBox Account
var apiKey = "46527102";
var sessionId = "1_MX40NjUyNzEwMn5-MTU4MzI0NzU0Mzg3Nn42V0JPL0dvbVpsVGNvM3ZDY0svclZjaTd-fg";
var token = "T1==cGFydG5lcl9pZD00NjUyNzEwMiZzaWc9ZGNkMDdiNTE3NTJiZGYyMDMzN2JjMDQ5N2EwNWU4NzBmMTYwMzMwYjpzZXNzaW9uX2lkPTFfTVg0ME5qVXlOekV3TW41LU1UVTRNekkwTnpVME16ZzNObjQyVjBKUEwwZHZiVnBzVkdOdk0zWkRZMHN2Y2xaamFUZC1mZyZjcmVhdGVfdGltZT0xNTgzMjQ3NTc5Jm5vbmNlPTAuNDk2NTI4Nzg2ODEwOTI3MTYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU4MzI2OTE3OSZjb25uZWN0aW9uX2RhdGE9T3B0aW9uYWwlMjBEYXRhJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
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