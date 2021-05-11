var ports = [] ;
var websocket;
onconnect = function(event) {
    var port = event.ports[0];
    ports.push(port);
    port.start();
    port.addEventListener("message",
    function(event) { listenForMessage(event, port); } );
    initWebSocket();
}


listenForMessage = function (event, port) {
    for(i = 0; i < ports.length; i++) {
        ports[i].postMessage(event.data);
    }
    websocket.sendMessage(event.data);   
}   

function initWebSocket() {
        try {
            if (typeof MozWebSocket == 'function')
                WebSocket = MozWebSocket;
            if ( websocket && websocket.readyState == 1 )
                websocket.close();
            websocket = new WebSocket( wsUri );
//            websocket.onopen = function(evt) {
//                debug("CONNECTED");
//            };
//            websocket.onclose = function(evt) {
//                debug("DISCONNECTED");
//            };
            websocket.onmessage = function(evt) {
            	if (Notification.permission !== "granted")
            	    Notification.requestPermission();
            	  else {
            		    for(i = 0; i < ports.length; i++) {
            		        ports[i].postMessage("received");
            		    }
            	    var notification = new Notification(evt.data, {
            	      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
            	      body: evt.data,
            	    });

            	    notification.onclick = function () {
            	      window.open("http://stackoverflow.com/a/13328397/1269037");
            	      notification.close();
            	    };
            	    
            	    setTimeout(function() { notification.close() }, 2000);

            	  }
            };
//            websocket.onerror = function(evt) {
//                debug('ERROR: ' + evt.data);
//            };
        }
        catch (exception) {
//            debug('ERROR: ' + exception);
        }
        for(i = 0; i < ports.length; i++) {
            ports[i].postMessage("init socket");
        }
    }

//    function stopWebSocket() {
//        if (websocket) {
//            websocket.close();
//        }
//    }

//    function checkSocket() {
//        if (websocket != null) {
//            var stateStr;
//            switch (websocket.readyState) {
//                case 0: {
//                    stateStr = "CONNECTING";
//                    break;
//                }
//                case 1: {
//                    stateStr = "OPEN";
//                break;
//            }
//            case 2: {
//                stateStr = "CLOSING";
//                break;
//            }
//            case 3: {
//                stateStr = "CLOSED";
//                break;
//            }
//            default: {
//                stateStr = "UNKNOW";
//                break;
//            }
//        }
//        debug("WebSocket state = " + websocket.readyState + " ( " + stateStr + " )");
//        } else {
//            debug("WebSocket is null");
//        }
//    }