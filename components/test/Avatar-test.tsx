import { Text, View } from 'react-native';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/nativewindui/Avatar';

const TWITTER_AVATAR_URI =
'https://pbs.twimg.com/profile_images/1782428433898708992/1voyv4_A_400x400.jpg';

function AvatarExample() {
  return (
    <View className="items-center">
      <Avatar alt="NativeWindUI Avatar">
      <AvatarImage source={{ uri: TWITTER_AVATAR_URI }} />
      <AvatarFallback>
        <Text className="text-foreground">NUI</Text>
      </AvatarFallback>
      </Avatar>
    </View>
  );
}

export default AvatarExample;