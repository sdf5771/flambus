import React, {RefObject} from 'react';
import WebView from "react-native-webview";

export interface Message {
    type: string;
    data: any;
  }
  
  export interface TsendMessageProps extends Message {
    webViewRef: RefObject<WebView<{}>>;
  }

function handleWebview(){
    const sendMessage = ({webViewRef, type, data}: TsendMessageProps) => {
        if (webViewRef.current) {
            webViewRef?.current?.postMessage(JSON.stringify({ type, data }));
        }
    }

    return {
        sendMessage
    }
}

export default handleWebview;