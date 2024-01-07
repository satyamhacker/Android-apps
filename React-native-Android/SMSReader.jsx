import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Platform,
  Button,
  PermissionsAndroid,
} from 'react-native';

import SmsAndroid from 'react-native-get-sms-android';

const SMSReader = () => {
  const [messages, setMessages] = useState([]);

  const requestSMSPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        {
          title: 'SMS Permission',
          message: 'This app needs access to your SMS messages.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('SMS permission granted');
        fetchSMSMessages();
      } else {
        console.log('SMS permission denied');
      }
    } catch (error) {
      console.error('Error requesting SMS permission:', error);
    }
  };

  useEffect(() => {
    requestSMSPermission();
  }, []);

  const fetchSMSMessages = async () => {
    try {
      const filter = {
        box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
        maxCount: 3, // limit the number of retrieved messages
      };

      SmsAndroid.list(
        JSON.stringify(filter),
        fail => console.error('Error fetching SMS messages:', fail),
        (count, smsList) => {
          const parsedData = JSON.parse(smsList);
          setMessages(parsedData);
        },
      );
    } catch (error) {
      console.error('Error fetching SMS messages:', error);
    }
  };

  return (
    <View>
      <Text>SMS Messages</Text>

      <FlatList
        data={messages}
        keyExtractor={item => item._id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SMSReader;
