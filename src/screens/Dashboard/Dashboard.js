import React from 'react';
import { ScrollView, Text } from 'react-native';

const Dashboard = () => {
  return (
    <ScrollView>
      <Text>Dashboard</Text>
    </ScrollView>
  );
};
Dashboard.navigationOptions = {
  title: 'Dashboard'
};

export default Dashboard;
