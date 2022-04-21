import { View, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import PostContainer from './src/components/PostContainer';
import Footer from "./src/components/Footer"
export default function App() {
  return (
    <NavigationContainer>
        <Header />
        <ScrollView>
          <PostContainer />
        </ScrollView>
        <Footer /> 
    </NavigationContainer>
  );
}

