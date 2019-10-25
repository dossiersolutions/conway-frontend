import {Client, Message} from '@stomp/stompjs';
import {useEffect, useState} from "react";

export function useWebSocket(destination) {

  const [client, setClient] = useState(null);
  const [data, setData] = useState(null);

  function subscribeCallback(message) {
    setData(message.body);
  }

  useEffect(() => {
    if (!client) {
      const client = new Client();
      client.brokerURL = "ws://localhost:8080/websocket";

      client.onConnect = function (frame) {
        // Do something, all subscribes must be done is this callback
        // This is needed because this will be executed after a (re)connect

        client.subscribe(destination, subscribeCallback);
      };

      client.onStompError = function (frame) {
        // Will be invoked in case of error encountered at Broker
        // Bad login/passcode typically will cause an error
        // Complaint brokers will set `message` header with a brief message. Body may contain details.
        // Compliant brokers will terminate the connection after any error
        console.log('Broker reported error: ' + frame.headers['message']);
        console.log('Additional details: ' + frame.body);
      };

      client.activate();

      setClient(client)
    }
  }, []);

  return data;
}