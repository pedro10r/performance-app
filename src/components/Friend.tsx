import { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type Props = {
  data: {
    id: number;
    name: string;
    likes: number;
    online: string;
  },
  follow: () => void;
}

function FriendComponent({ data, follow }: Props) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text>
        {data.name} - Likes: {data.likes}
      </Text>

      <TouchableOpacity
        onPress={follow}
        style={{
          borderWidth: 0.5,
          borderColor: 'red',
          width: 120,
          alignItems: 'center',
          borderRadius: 20,
          marginTop: 5
        }}
      >
        <Text style={{ color: 'red' }}>Deixar de seguir</Text>
      </TouchableOpacity>

      <Text>
        Online em {data.online}
      </Text>
    </View>
  );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});
