import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {WebView} from "react-native-webview";

const WeebView = ({ navigation, route }) => {
  return (
    <WebView source={{uri:route.params.url}} style={{marginTop:30}} />
  )
}

const styles = StyleSheet.create({})
export default WeebView;
