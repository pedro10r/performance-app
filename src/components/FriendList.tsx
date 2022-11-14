import { useMemo } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Friend } from './Friend';

type Props = {
  data: {
    id: number;
    name: string;
    likes: number;
    online: string;
  }[];
  follow: () => void;
}

export function FriendList({ data, follow }: Props) {

  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes;
    }, 0);
  }, [data]);

  return (
    <View>

      <Text style={styles.likes}>
        Total de likes: {totalLikes}
      </Text>

      <FlatList 
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Friend
            data={item}
            follow={follow}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  likes: {
    color: 'blue',
    fontSize: 16,
    marginBottom: 10,
  }
});