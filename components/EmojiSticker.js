import { View, Image } from 'react-native';

export default function EmojiSticker({ imageSize, stickerSource }){

    const posTop = -(440 / 2) - (imageSize / 2);
    const postLeft = (320 / 2) - (imageSize / 2);
  return (
    <View style={[{top: posTop, left: postLeft}]}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}