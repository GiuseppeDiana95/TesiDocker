import {Strophe as Strophe2} from './strophe.muc.js';

var connection = new Strophe.Connection('http://localhost:5280/http-bind/');
window.addEventListener('load', waitForElement, 'test');



function waitForElement()
{
    bot_connect();
}
function bot_connect() 
{
    connection.connect('rasabot@localhost','rasabot', onConnect);
    connection.muc.init(connection);
    connection.muc.join("chat@localhost",  "rasabot");
}

function onConnect(status)
{

    if (status == Strophe.Status.CONNECTING) 
    {
        console.log('Strophe is connecting.');
    }else if (status == Strophe.Status.CONNFAIL) 
    {
        console.log('Strophe failed to connect.');
    }else if (status == Strophe.Status.DISCONNECTING) 
    {
        console.log('Strophe is disconnecting.');
    }else if (status == Strophe.Status.DISCONNECTED) 
    {
        console.log('Strophe is disconnected.');
    }else if (status == Strophe.Status.CONNECTED) 
    {
        connection.muc.init(connection);
        connection.muc.join("chat@localhost","rasabot");
        console.log('Strophe is connected.');
        console.log('BotID',connection.jid);
        connection.send($pres());
        connection.addHandler(onMessage, null, 'message', null, null, null);
       
        // Invia un messaggio di chat al momento della connessione
        var message = $msg({ to: 'chat@localhost', type: 'groupchat' }).c('body').t('Ciao! Sono il bot Rasabot. Sono appena entrato nella chat.');
        connection.send(message);
        
    }
}
    

function onMessage(msg) 
{
    //console.log('Listener attivo')
    var to = msg.getAttribute('to');
    var from = msg.getAttribute('from');
    var type = msg.getAttribute('type');
    var elems = msg.getElementsByTagName('body');
  
    if (type == "groupchat" && elems.length > 0) 
    {
        var body = elems[0];
        console.log('CHAT: I got a message from ' + from + ': ' + Strophe.getText(body));
    }
    // we must return true to keep the handler alive.  
    // returning false would remove it after it finishes.
    return true;
  }

function room_msg_handler(a, b, c) 
{
    console.log('MUC: room_msg_handler');
    return true;
}

function room_pres_handler(a, b, c) 
{
    console.log('MUC: room_pres_handler');
    return true;
}

