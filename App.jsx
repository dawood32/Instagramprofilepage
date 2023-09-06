import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  FlatList,
} from 'react-native';
import React from 'react';

const App = () => {
  const data = [
    {
      image: require('./assets/instagram.png'),
    },
    {
      image: require('./assets/instagram.png'),
    },
    {
      image: require('./assets/instagram.png'),
    },
    {
      image: require('./assets/instagram.png'),
    },
    {
      image: require('./assets/instagram.png'),
    },
    {
      image: require('./assets/instagram.png'),
    },
    {
      image: require('./assets/instagram.png'),
    },
    {
      image: require('./assets/instagram.png'),
    },
    {
      image: require('./assets/instagram.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerview}>
          <Image
            source={require('./assets/back.png')}
            style={styles.headerIcon1}
          />
          <Text style={styles.username}>Dawood Zia</Text>
          <Image
            source={require('./assets/more.png')}
            style={styles.headerIcon2}
          />
        </View>
        <View style={styles.profileview}>
          <View style={styles.imgcircle}>
            <Image
              borderRadius={100}
              source={require('./assets/profile.png')}
              style={styles.profileimg}
            />
          </View>
          <View style={styles.status}>
            <Text style={styles.count}>125</Text>
            <Text style={styles.count}>Post</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.count}>12</Text>
            <Text style={styles.count}>Followers</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.count}>25</Text>
            <Text style={styles.count}>Following</Text>
          </View>
        </View>
        <View>
          <Text style={styles.userinfo}>Dawood zia</Text>
          <Text style={styles.userinfo}>Business Location</Text>

          <Text style={styles.userinfo}>www.business.com</Text>
        </View>
        <View style={styles.buttonview}>
          <View style={styles.btn}>
            <Text style={styles.userinfo}>Following</Text>
          </View>
          <View style={styles.btn}>
            <Text style={styles.userinfo}>Message</Text>
          </View>
          <View style={styles.btn}>
            <Text style={styles.userinfo}>Contact</Text>
          </View>
          <View style={styles.btnimg}>
            <Image
              source={require('./assets/back.png')}
              style={styles.arrowback}
            />
          </View>
        </View>
        <View style={styles.circleview}>
          <View style={styles.circletab} />
          <View style={styles.circletab} />
          <View style={styles.circletab} />
          <View style={styles.circletab} />
          <View style={styles.circletab} />
        </View>
      </View>
      <View style={styles.middle}>
        <View style={styles.mediaicon}>
          <Image source={require('./assets/home.png')} style={styles.tabIcon} />
          <Image source={require('./assets/home.png')} style={styles.tabIcon} />
        </View>

        <FlatList
          data={data}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <View style={styles.media}>
                <Image source={item.image} style={styles.mediaimg} />
              </View>
            );
          }}
        />
      </View>
      <View style={styles.bottomTab}>
        <Image source={require('./assets/search.png')} style={styles.tabIcon} />
        <Image source={require('./assets/search.png')} style={styles.tabIcon} />

        <Image source={require('./assets/search.png')} style={styles.tabIcon} />

        <Image source={require('./assets/search.png')} style={styles.tabIcon} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerContainer: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? 30 : 0,
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    borderColor: 'gray',
  },
  headerview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIcon1: {
    tintColor: '#FFF',
    width: 17,
    height: 17,
  },
  headerIcon2: {
    tintColor: '#FFF',
    width: 30,
    height: 30,
  },
  username: {
    color: '#FFF',
    fontWeight: '600',
  },
  profileview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgcircle: {
    width: 105,
    height: 105,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {alignSelf: 'center'},
  count: {
    alignSelf: 'center',
    color: '#FFF',
  },
  userinfo: {
    color: '#FFF',
  },
  buttonview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: 'gray',
    width: '27%',
    borderWidth: 0.3,
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: 'center',
  },
  btnimg: {
    backgroundColor: 'gray',
    width: '12%',
    borderWidth: 0.3,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circletab: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: 'lightblue',
  },
  middle: {
    flex: 1,
  },
  media: {
    width: '33.399%',
    borderWidth: 1,
    height: 150,
  },
  mediaicon: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  bottomTab: {
    flex: 0.15,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 15,
  },
  tabIcon: {
    tintColor: '#FFF',
    width: 20,
    height: 20,
  },
  circleview: {flexDirection: 'row', justifyContent: 'space-between'},
  mediaimg: {height: '100%', width: '100%'},
  profileimg: {width: 100, height: 100, alignSelf: 'center'},
  arrowback: {
    width: 14,
    height: 14,
    tintColor: '#FFF',
    //
  },
});
export default App;
